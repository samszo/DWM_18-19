<script>

var result = sauveForm(jsonData, arrQR, arrReponses, pb);

function sauveForm(form, questions, reponses, pb){

//compte les liens
//on ajoute les liens
var nbLiens = 0;
questions.forEach(function(q){
    nbLiens += q.liens.length;
});
var pcProgress = 100/(questions.length+reponses.length+nbLiens), i = 1;
$.post("../ice/sauveform", form,
    function(data){
        if(data.erreur){
            w2alert(data.erreur);
        }else{
            //enregistre les questions
            questions.forEach(function(q){
                q.idBase = form.idBase;
                q.idForm = data.rs.doc_id;
                q.query = 'question'; 
                var liens = q.liens;
                //pour gérer le problème de l'enregistrement complet du formulaire
                delete q.liens;
                $.ajax({
                    type: 'POST',
                    url: "../ice/sauveform",
                    data: q,
                    success: function(d){
                        if(d){
                            //enregistre les liens
                            liens.forEach(function(l){
                                l.idBase = form.idBase;
                                l.idQuest = d.rs.doc_id;
                                l.query = 'lien'; 
                                sauveFormValue(l,false);
                                i++;
                                pb.style('width', pcProgress*i + '%');                
                            })
                            //met à jour les réponse avec l'identifiant de la question
                            reponses.forEach(function(r){
                                r.idForm = data.rs.doc_id;
                                r.r.forEach(function(v){
                                    if(v['recidQuest']==v['recid'])v['idDocParent']=d.rs.doc_id;
                                })
                            });            
                        }
                    },
                    dataType: "json",
                    async:false,
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(thrownError);
                    }
                  });
                q.liens = liens;
                i++;
                pb.style('width', pcProgress*i + '%');
            });
            //enregistre les réponses
            reponses.forEach(function(r){
                r.idBase = form.idBase;
                r.idForm = data.rs.doc_id;
                r.query = 'reponse'; 
                sauveFormValue(r,false);
                i++;
                pb.style('width', pcProgress*i + '%');
            });
    
            w2alert('Le formulaire est enregistré.')
            return data;
        }					 		
    }, "json")
.fail(function(e) {
    w2alert( "erreur" );
})
.always(function() {
    d3.select('#pbPatienter').remove();
    patienter('',true);    
});
}

function sauveFormValue(q, sync){

$.ajax({
    type: 'POST',
    url: "../ice/sauveform",
    data: q,
    success: function(result){
        return result;
    },
    dataType: "json",
    async:sync,
    error: function (xhr, ajaxOptions, thrownError) {
        console.log(thrownError);
    }
  });

}

$('#btnExport').click(function () {

if(verifForm()){
    var params = getParamsForm();
    var jsonData = {
        "questions": arrQR,
        "params": params,
        "reponses": arrReponses
    };
    exportJson(JSON.stringify(jsonData), 'formulaireSemantique.json', 'text/plain');    
}

})

function verifForm(){
let rep = true;
if (w2ui.gQuestions.getChanges().length > 0) {
    w2alert('Veuillez enregistrer les questions.');
    rep = false;
}
if (w2ui.gReponse.getChanges().length > 0) {
    w2alert('Veuillez enregistrer les réponses.');
    rep = false;
}

return rep;

}

return params;

}

function exportJson(content, fileName, contentType) {
var a = document.createElement("a");
var file = new Blob([content], {
    type: contentType
});
a.href = URL.createObjectURL(file);
a.download = fileName;
a.click();
}


</script>