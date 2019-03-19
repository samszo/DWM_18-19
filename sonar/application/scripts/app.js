/* Merci à Mike Bostock pour son algorithmme Radial Force : 
    https://bl.ocks.org/mbostock/cd98bf52e9067e26945edd95e8cf6ef9

    Merci @karamel pour son cercle_audio:
    https://codes-sources.commentcamarche.net/source/101676-lecteur-audio-circulaire-;

    Données JSON Deleuze
    http://www.http://jardindesconnaissances.univ-paris8.fr/public/deleuze/cherche?";

    // Merci à Samszo et Amri et pour leurs conseils !
*/
// Création des orbites dans #orbit
var domOrbit = document.getElementById('orbit'); //Récupération de l'id #orbit avec js
var tag, dataDeleuze, cercleAudio, dataFrag, nbRayons = 4, // création de variables globales
    margin = {top: 20, right: 20, bottom: 30, left: 50},  //paramètres nbRayons
    width = domOrbit.clientWidth,                           
    height = domOrbit.clientHeight,                         
    widthDomain = domOrbit.clientWidth-margin.right-margin.left,    
    heightDomain = domOrbit.clientHeight-margin.top-margin.bottom,  
    gGlobal = d3.select('#orbit').append("svg")                 // Création d'un "G" global (voir svg)
        .attr('width',width+'px')
        .attr('height',height+'px')
        .append("g")
        .attr("transform", "translate(" + margin.top + "," + margin.left + ")");
    
    //création des cercles
    var arrRayons = d3.range(nbRayons);             // Création d'un tableau pour les rayons des cercles
    var scCircle = d3.scaleBand()
        .domain(arrRayons)
        .range([0, widthDomain<heightDomain ? widthDomain/2 : heightDomain/2])
        .padding(0.1);

    gGlobal.selectAll('.cFond').data(arrRayons).enter().append('circle') // Création des cercles + attributs
        .attr('class','cFond')
        .attr('id',function(d,i){
            return 'orbit'+i;
        })
        .attr('r',function(d){
            let r = d==0 ? 0 : scCircle(d);
            return r;
        })
        .attr('cx',widthDomain/2)
        .attr('cy',heightDomain/2)
        .attr('stroke',"#00F7A1")
        .attr('stroke-width',"5")
        .attr('stroke-opacity',"0.5")
        .attr('fill',"none");

// Fonction pour l'event "drag" d3js
function dragstarted(d) {
    d3.select(this).raise().classed("active", true);
    quatreAxes();
}

function dragged(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended(d) {
    d3.select(this).classed("active", false);
    clearQuatreAxes();
}
    
// Fonction pour effacer les fichiers audio
function clear() {
    d3.selectAll('.gFiles').remove();
};
// Fonction pour effacer les fragments de fichier
function clearQuatreAxes() {
    d3.select('#scatter').selectAll('g').remove();
};

// Fonction pour créer les axes pertinence / clartés
function quatreAxes() {

    var svg = d3.select("#scatter")
        .attr('width',widthDomain+'px')
        .attr('height',heightDomain+'px')
        domainwidth = (widthDomain/2),
        domainheight = (heightDomain/2);

    var x = d3.scaleLinear()
        .domain(padExtent([-100, 100]))
        .range(padExtent([0, domainwidth]));
    var y = d3.scaleLinear()
        .domain(padExtent([-100, 100]))
        .range(padExtent([domainheight, 0]));

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.top + "," + margin.left + ")");

    g.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "none")
        .on('mousemove', function () {          // Récupération des coordonnées de la souris
            console.log(y.invert(d3.mouse(this)[1]));
            console.log(x.invert(d3.mouse(this)[0]));
        });

    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + y.range()[0] / 2 + ")")
        .call(d3.axisBottom(x).ticks(10));

    g.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + x.range()[1] / 2 + ", 0)")
        .call(d3.axisLeft(y).ticks(10));

    g.append("text")
        .attr("x", 450)
        .attr("y", 240)
        .style("text-anchor", "middle")
        .text("Clarté");

    g.append("text")
        .attr("x", 270)
        .attr("y", 15)
        .style("text-anchor", "middle")
        .text("Pertinence");


    function padExtent(e, p) {
        if (p === undefined) p = 1;
        return ([e[0] - p, e[1] + p]);
    }
};

// Récupération des données de la base de données depuis le script tag.php (liste)
$.get('scripts/tag.php', function (data) {
    tag = JSON.parse(data);
    $('input[type=list]').w2field('list', {
        items: tag
    })
});

// Récupération de l'item selectionné dans la liste pour push dans l'url
function getSelect() {
    clear();
    var select = $('input[type=list]').w2field().get().text;

    var urlDeleuze = 'http://jardindesconnaissances.univ-paris8.fr/public/deleuze/cherche?term=' + select;
    d3.json(urlDeleuze)
        .then(function (data) {
            dataDeleuze = data;
            // Boucle forEach qui permet de boucler sur une propriété du tableau
            dataDeleuze.forEach(function (d) {
                if (d.score > 0.3) {
                    d.rg = scCircle(1);
                } else if (d.score > 0.2) {
                    d.rg = scCircle(2);
                } else {
                    d.rg = scCircle(3);
                }
            })

            var gFiles = gGlobal.append('g').attr('class','gFiles')
                .attr("transform", "translate(" + widthDomain/2 + "," + heightDomain/2 + ")");

            // Création des nodes (fichiers)
            var node = gFiles
                .selectAll("circle")
                .data(dataDeleuze)
                .enter().append("circle")
                .attr("r", 10)
                .attr("fill", "#04f5b5")
                .on("click", function (d) {
                    clear();
                    var code = "<p>" + d.rubTitre + "</p>";
                    d3.select('#titreArchive').html(code);
                    d3.select('#audio_conteneur2').html("");

                    // Récupération des fragments dans le tableau [phrases]
                    dataFrag = d.phrases.slice();
                    //console.log(dataFrag);
                    dataFrag.forEach(function (e) {
                        if (e.pHTML > 30000) {
                            e.rg = scCircle(1);
                        } else if (e.pHTML >= 20000) {
                            e.rg = scCircle(2);
                        } else {
                            e.rg = scCircle(3);
                        }
                    })
                    
                    var gFrag = gGlobal.append('g').attr('class','gFrag')
                    .attr("transform", "translate(" + widthDomain/2 + "," + heightDomain/2 + ")");
                    // Création des nodes frag
                    var frag = gFrag
                        .selectAll("circle")
                        .data(dataFrag)
                        .enter().append("circle")
                        .attr('r', 8)
                        .attr("fill", "#FF7F50")
                        .call(d3.drag()
                            .on("start", dragstarted)
                            .on("drag", dragged)
                            .on("end", dragended));

                    var simulationFrag = d3.forceSimulation(dataFrag)
                        .force("charge", d3.forceCollide().radius(5))
                        .force("r", d3.forceRadial(function (e) {
                            return e.rg;
                        }))
                        .on("tick", ticked);

                    function ticked() {
                        frag
                            .attr("cx", function (d) {
                                return d.x;
                            })
                            .attr("cy", function (d) {
                                return d.y;
                            });
                    }
                    // Création du player audio
                    var idLastOrbit = '#orbit'+(nbRayons-1);
                    var posiOrbit = d3.select(idLastOrbit).node().getBBox();
                    var config = {
                        conteneur: 'audio_conteneur2',
                        couleur_centre: "rgb(0, 0, 0, 0.1)",
                        couleur_progres: "rgb(0, 247, 161, 0.1)",
                        couleur_fond: "rgb(255, 255, 255, 0.1)",
                        couleur_ombre: "black",
                        diametre_lecteur: posiOrbit.width,
                        diametre_detect: 105,
                        epaisseur_barre: 0,
                        ressources: "scripts/res/",
                        class_suplementaire: false,
                        fichier: d.fichier,
                    }
                  //  cercleAudio = new cercle_audio(config);
                    d3.select('#audio_conteneur2')
                        .style('top',(posiOrbit.y+160)+"px")
                        .style('left',(posiOrbit.x-margin.right+margin.left)+"px")


                });
            // Force radial appliqué aux fichiers audio
            var simulationData = d3.forceSimulation(dataDeleuze)
                .force("charge", d3.forceCollide().radius(5))
                .force("r", d3.forceRadial(function (d) {
                    return d.rg;
                }))
                .on("tick", ticked);

            function ticked() {
                node
                    .attr("cx", function (d) {
                        return d.x;
                    })
                    .attr("cy", function (d) {
                        return d.y;
                    });
            }

        });
};