/* Merci à Mike Bostock pour son algorithmme Radial Force : 
    https://bl.ocks.org/mbostock/cd98bf52e9067e26945edd95e8cf6ef9

    Merci @karamel pour son cercle_audio:
    https://codes-sources.commentcamarche.net/source/101676-lecteur-audio-circulaire-;

    Données JSON Deleuze
    http://www.http://jardindesconnaissances.univ-paris8.fr/public/deleuze/cherche?";

    // Merci à Samszo, Amri et Luis et pour leurs conseils !
*/

// Création des orbites dans #orbit
var domOrbit = document.getElementById('orbit'); //Récupération de l'id #orbit avec js
var tag, dataDeleuze, cercleAudio, dataFrag, nbRayons = 4, // création de variables globales
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    }, //paramètres nbRayons
    width = domOrbit.clientWidth,
    height = domOrbit.clientHeight,
    widthDomain = domOrbit.clientWidth - margin.right - margin.left,
    heightDomain = domOrbit.clientHeight - margin.top - margin.bottom,
    svgGlobal = d3.select('#orbit').append("svg") // Création d'un "G" global (voir svg)
    .attr('width', width + 'px')
    .attr('height', height + 'px');
    gGlobal = svgGlobal.append("g")
    .attr("transform", "translate(" + margin.top + "," + margin.left + ")");
    setDegrad(svgGlobal); // Declare le dégradé et permet de le récupérer plus tard pour les axes

//création des cercles
var arrRayons = d3.range(nbRayons); // Création d'un tableau pour les rayons des cercles
var scCircle = d3.scaleBand()
    .domain(arrRayons)
    .range([0, widthDomain < heightDomain ? widthDomain / 2 : heightDomain / 2])
    .padding(0.1);

gGlobal.selectAll('.cFond').data(arrRayons).enter().append('circle') // Création des cercles + attributs
    .attr('class', 'cFond')
    .attr('id', function (d, i) {
        return 'orbit' + i;
    })
    .attr('r', function (d) {
        let r = d == 0 ? 0 : scCircle(d);
        return r;
    })
    .attr('cx', widthDomain / 2)
    .attr('cy', heightDomain / 2)
    .attr('stroke', "#00F7A1")
    .attr('stroke-width', "5")
    .attr('stroke-opacity', "0.5")
    .attr('fill', "none")

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
    //clearQuatreAxes();
}

// Fonction pour effacer les fichiers audio
function clear() {
    d3.selectAll('.gFiles').remove();
    d3.selectAll('.gFrag').remove();
    d3.select('#titreArchive').selectAll('p').remove();
    d3.selectAll('#scatter').remove();
};
// Fonction pour effacer les fragments de fichier
function clearQuatreAxes() {
    //d3.selectAll('#scatter').remove();
};

// Fonction pour créer les axes pertinence / clartés
function quatreAxes() {
    var jsonAxes = [{
        'lbl': 'clair',
        'posi': 0
    }, {
        'lbl': 'obscur',
        'posi': 180
    }, {
        'lbl': 'pertinent',
        'posi': 90
    }, {
        'lbl': 'inadapté',
        'posi': 270
    }];
    var wAxes = hAxes = scCircle(nbRayons-1)*2,
        xAxe = (widthDomain/2)-(wAxes/2),
        yAxe = (heightDomain/2)-(hAxes/2),
        gAxes = gGlobal.append('g').attr('id', 'scatter')
            .attr("transform", "translate(" + xAxe + "," + yAxe + ")");
//            xAxe = (widthDomain/2)-margin.left-(wAxes/2),
//            yAxe = (heightDomain/2)-margin.top-(hAxes/2),
    
    var x = d3.scaleLinear()
        .domain(padExtent([-100, 100]))
        .range(padExtent([0, wAxes]));
    var y = d3.scaleLinear()
        .domain(padExtent([-100, 100]))
        .range(padExtent([hAxes, 0]));

    gAxes.append("rect")
        .attr("width", wAxes)
        .attr("height", hAxes)
        .attr("fill", "none")
        .on('mousemove', function (e) {
            console.log(d3.mouse(this)[0]);
            console.log(x.invert(d3.mouse(this)[0]));
        });
    /*  d3.json("../data/quatreaxes.json", function (error, data) {
          if (error) throw error;
          data.forEach(function (d) {
              d.consequence = +d.consequence;
              d.value = +d.value;
          });
              
          g.selectAll("circle")
              .data(data)
              .enter().append("circle")
              .attr("class", "dot")
              .attr("r", 7)
              .attr("cx", function (d) {
                  return x(d.consequence);
              })
              .attr("cy", function (d) {
                  return y(d.value);
              })
              .style("fill", function (d) {
                  if (d.value >= 3 && d.consequence <= 3) {
                      return "#60B19C"
                  } // Top Left
                  else if (d.value >= 3 && d.consequence >= 3) {
                      return "#8EC9DC"
                  } // Top Right
                  else if (d.value <= 3 && d.consequence >= 3) {
                      return "#D06B47"
                  } // Bottom Left
                  else {
                      return "#A72D73"
                  } //Bottom Right         
              });
    */
   gAxes.append("g")
        .attr("class", "x axis")
        .style('stroke-width','8px')
        .attr("transform", "translate(0," + y.range()[0] / 2 + ")")
        .call(d3.axisBottom(x).ticks(0));
    gAxes.append("g")
        .attr("class", "y axis")
        .style('stroke-width','8px')
        .attr("transform", "translate(" + x.range()[1] / 2 + ", 0)")
        .call(d3.axisLeft(y).ticks(0));
    //ajoute les titre d'axes
    gAxes.selectAll(".txtTitreAxe")
        .data(jsonAxes)
        .enter().append("text")
        .attr("class", '.txtTitreAxe')
        .attr("transform", function (d) {
            t = "rotate(0)";
            //if(d.posi=='0' || d.posi=='180' ) t = "rotate(-90)";        
            return t;
        })
        .attr("y", function (d) {
            if (d.posi == '0') return 0;
            if (d.posi == '90') return (hAxes / 2)+10;
            if(d.posi == '270') return (hAxes / 2)-30;
            if (d.posi == '180') return hAxes;
        })
        .attr("x", function (d) {
            if (d.posi == '0') return (wAxes / 2)+10;
            if (d.posi == '180') return (wAxes / 2)-10;
            if (d.posi == '90') return wAxes;
            if (d.posi == '270') return 0;
        })
        .attr("text-anchor", function (d) {
            if (d.posi == '0' || d.posi == '270') return 'start';
            if (d.posi == '90') return 'end';
            if (d.posi == '180') return 'end';
        })
        .attr("dy", function (d) {
            if (d.posi == '0' || d.posi == '90' || d.posi == '270') return '1em';
            if (d.posi == '180') return '-1em';
        })
        .text(function (d) {
            return d.lbl;
        });


    function padExtent(e, p) {
        if (p === undefined) p = 1;
        return ([e[0] - p, e[1] + p]);
    }
};

// Récupération des données de la base de données depuis le script tag.php (liste)
$.get('scripts/tag.php', function (data) {
    tag = JSON.parse(data);
    $('input[type=list]').w2field('enum', {
        items: tag,
        max: 1,
        onAdd: function (event) {
            getSelect(event.item);
        }
    })
});
// Créer le dégradé de couleurs sur les axes x et y 
function setDegrad(svg){
    arrColor = [{'name':'degraxeH', 'x1':"0%", 'y1':"0%", 'x2':"100%", 'y2':"0%",'colors':[{'c': 'rgb(173,158,253)','o':"0%"},{'c':'rgb(252,161,205)','o':"100%"}]}
    ,{'name':'degraxeV', 'x1':"0%", 'y1':"0%", 'x2':"0%", 'y2':"100%",'colors':[{'c': 'rgb(3,246,162)','o':"0%"},{'c': 'rgb(84,214,255)','o':"100%"}]}
    ]
    // Create the svg:defs element and the main gradient definition.
    var svgDefs = svg.append('defs');

    var linearG = svgDefs.selectAll('linearGradient').data(arrColor).enter().append('linearGradient')
        .attr('id', function(d){
            return d.name;})
        .attr('x1', function(d){
        return d.x1;})
        .attr('y1', function(d){
            return d.y1;})
        .attr('x2', function(d){
            return d.x2;})
        .attr('y2', function(d){
            return d.y2;});
                                        
    // Create the stops of the main gradient. Each stop will be assigned
    // a class to style the stop using CSS.
    linearG.selectAll('stop').data(function(d){return d.colors;}).enter().append('stop')
        .attr('stop-color', function(d){
            return d3.color(d.c);
        })
        .attr('offset', function(d){
            return d.o;
        });
}

// Récupération de l'item selectionné dans la liste pour push dans l'url
function getSelect(select) {
    clear();
    //var select = $('input[type=list]').w2field().get().text;

    var urlDeleuze = 'http://jardindesconnaissances.univ-paris8.fr/public/deleuze/cherche?term=' + select.text;
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

            var gFiles = gGlobal.append('g').attr('class', 'gFiles')
                .attr("transform", "translate(" + widthDomain / 2 + "," + heightDomain / 2 + ")");

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

                    var gFrag = gGlobal.append('g').attr('class', 'gFrag')
                        .attr("transform", "translate(" + widthDomain / 2 + "," + heightDomain / 2 + ")");
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
                    var idLastOrbit = '#orbit' + (nbRayons - 1);
                    var posiOrbit = d3.select(idLastOrbit).node().getBBox();
                    var config = {
                        conteneur: 'audio_conteneur2',
                        couleur_centre: "rgb(0, 0, 0, 0.1)",
                        couleur_progres: "rgb(0, 247, 161, 0.1)",
                        couleur_fond: "none",
                        couleur_ombre: "none",
                        diametre_lecteur: posiOrbit.width,
                        diametre_detect: 105,
                        epaisseur_barre: 0,
                        ressources: "scripts/res/",
                        class_suplementaire: false,
                        fichier: d.fichier,
                    }
                    cercleAudio = new cercle_audio(config);
                    d3.select('#audio_conteneur2')
                        .style('top', (posiOrbit.y + 90) + "px")
                        .style('left', (posiOrbit.x - margin.right + margin.left) + "px")

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

