/* Merci à Mike Bostock pour son algorithmme Radial Force : 
    https://bl.ocks.org/mbostock/cd98bf52e9067e26945edd95e8cf6ef9

    Merci @karamel pour son cercle_audio:
    https://codes-sources.commentcamarche.net/source/101676-lecteur-audio-circulaire-;

    Données JSON Deleuze
    http://www.http://jardindesconnaissances.univ-paris8.fr/public/deleuze/cherche?";

    // Merci à Samszo et Amri et pour leurs conseils !
*/
var tag, dataDeleuze, cercleAudio, dataFrag;

    function clear(){
        d3.selectAll('g').remove();
    };


   $.get('scripts/tag.php', function (data){   
    tag = JSON.parse(data);
    $('input[type=list]').w2field('list', 
        { items: tag })
        });
    function getSelect(){
        clear();
        var select = $('input[type=list]').w2field().get().text;

        var urlDeleuze = 'http://jardindesconnaissances.univ-paris8.fr/public/deleuze/cherche?term=' + select;
        d3.json(urlDeleuze)
        .then(function(data){
            dataDeleuze = data;
        
            dataDeleuze.forEach(function(d){
                    if(d.score > 0.3)
                        { 
                            d.rg= 100;
                        } 
                        else if(d.score > 0.2)
                        {
                            d.rg= 200;
                        }
                        else
                        {
                            d.rg=300;
                            }
                    })

            var node = d3.select("svg")
            .append("g")
            .selectAll("circle")
            .data(dataDeleuze)
            .enter().append("circle")
                .attr("r", 10)
                .attr("fill", "#04f5b5")
            .on("click", function(d){
                clear();
                var code = "<p>" + d.rubTitre +"</p>";
                d3.select('#titreArchive').html(code);
                d3.select('#audio_conteneur2').html("");
                dataFrag = d.phrases.slice();
                //console.log(dataFrag);
                dataFrag.forEach(function(e){
                    if(e.pHTML > 30000)
                        { 
                            e.rg= 100;
                        } 
                    else if(e.pHTML >= 20000)
                        {
                            e.rg= 200;
                        }
                    else
                        {
                            e.rg=300;
                        }
                    })
                var frag = d3.select("svg")
                    .append("g")
                    .selectAll("circle")
                    .data(dataFrag)
                    .enter().append("circle")
                        .attr('r', 8)
                        .attr("fill", "#FF7F50")
                        .attr("draggable", true)
                    .on("dragstart", function(e){
                        e.dataTransfer.setData('text/plain', "Ce texte sera transmis à l'élément HTML de réception");
                    })
                    

                var simulationFrag = d3.forceSimulation(dataFrag)
                    .force("charge", d3.forceCollide().radius(5))
                    .force("r", d3.forceRadial(function(e) { 
                        return e.rg;
                    }))
                    .on("tick", ticked);
        
                function ticked() {
                    frag
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });
                    }
                

                
                var config={
                    conteneur:'audio_conteneur2',
                    couleur_centre:"rgb(0, 0, 0, 0.1)",
                    couleur_progres:"rgb(0, 247, 161, 0.1)",
                    couleur_fond:"rgb(255, 255, 255, 0.1)",
                    couleur_ombre:"black",
                    diametre_lecteur:300,
                    diametre_detect:105,
                    epaisseur_barre:0,
                    ressources:"scripts/res/",
                    class_suplementaire:false,
                    fichier: d.fichier,						
                }
                cercleAudio = new cercle_audio(config);
            
            });

            var simulationData = d3.forceSimulation(dataDeleuze)
                .force("charge", d3.forceCollide().radius(5))
                .force("r", d3.forceRadial(function(d) { 
                        return d.rg;
                }))
                .on("tick", ticked);
            
            var simulationFrag = d3.forceSimulation(dataFrag)
                .force("charge", d3.forceCollide().radius(5))
                .force("r", d3.forceRadial(function(e) { 
                    return e.rg;
                }))
                .on("tick", ticked);

            function ticked() {
                node
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
            }

    });
};
    