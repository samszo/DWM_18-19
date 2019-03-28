
var donnee_menu = {
    vue: {
        couleur: '#F20742',
        titre: 'La vue',
        menu: [
            { libelle: 'Les concerts', url: '' },
            { libelle: 'Les pièces de thêatre', url: '' },
            { libelle: 'La danse', url: '' },
            { libelle: 'La peinture', url: '' }

        ]
    },
    ouie: {
        couleur: '#5A0334',
        titre: 'L\'ouie',
        menu: [
            { libelle: 'Les concerts', url: '' },
            { libelle: 'Les pièces de thêatre', url: '' },
            { libelle: 'La danse', url: '' },
            { libelle: 'La musique', url: '' }
        ]
    },
    gouter: {
        couleur: '#F3907F',
        titre: 'Le gouter',
        menu: [
            { libelle: 'Les chants', url: '' },
            { libelle: 'La gastronomie', url: '' },
            { libelle: 'La cuisine', url: '' }
        ]
    },
    toucher: {
        couleur: '#05F3CA',
        titre: 'Le toucher',
        menu: [
            { libelle: 'La cuisine', url: '' },
            { libelle: 'Les jeux', url: '' }

        ]
    },
    odorat: {
        couleur: '#D2295D',
        titre: 'L\'odorat',
        menu: [
            { libelle: 'La gastronomie', url: '' },
            { libelle: 'La cuisine', url: '' }
        ]
    }
};

function afficherMenu(elt) {
    var id = '';
    if (typeof (elt) === 'string') {
        id = elt;
        elt = document.getElementById(elt);
    } else {
        id = elt.id;
    }

    if (elt) {
        var portion = donnee_menu[id];
        var elt_menu = document.getElementById('menu_id');
        var liens = '<a href="#" id="menu_header" style="background-color:' + portion.couleur + ';" class="mheader">' + portion.titre
            + '<span onclick="fermerMenu();" title="Fermer le menu" class="btnFermer">&times;</i></span>';
        for (let i = 0; i < portion.menu.length; i++) {
            const m = portion.menu[i];
            liens += '<a onclick="fermerMenu();afficherDonneeSurCarte(\'' + m.libelle + '\');" class="lien_menu" href="#">' + m.libelle + '</a>';
        }
        elt_menu.innerHTML = liens;
        elt_menu.style.display = 'block';
    }
}

function afficherDonneeSurCarte(id) {
    alert('Affiche ' + id + ' sur la carte');
}

function calculPortion(angle, centreDessin) {
    var aCalc = (angle > 180) ? 360 - angle : angle;
    var aRad = aCalc * Math.PI / 180;
    var z = Math.sqrt(2 * centreDessin * centreDessin - (2 * centreDessin * centreDessin * Math.cos(aRad)));
    var x = 0;
    if (aCalc <= 90) {
        x = centreDessin * Math.sin(aRad);
    } else {
        x = centreDessin * Math.sin((180 - aCalc) * Math.PI / 180);
    }

    var y = Math.sqrt(z * z - x * x);
    var Y = y;
    var X = 0;

    if (angle <= 180) {
        X = centreDessin + x;
    } else {
        X = centreDessin - x;
    }
    console.log('centreDessin = ' + centreDessin, 'X = ' + X);
    console.log('Y =  ' + Y, 'z = ' + z);
}

function pesent(elt) {
    if (elt && elt.getAttribute('stroke-width') == 4) {
        elt.setAttribute('stroke-width', 1);
    }
}

function restore(elt) {
    if (elt && elt.getAttribute('stroke-width') == 1) {
        elt.setAttribute('stroke-width', 4);
    }
}
