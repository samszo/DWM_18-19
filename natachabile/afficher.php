<?php

//1:connextion au serveur MySQL via PDO et choix de la base cms1

try
{
    $bdd = new PDO('mysql:host=localhost;dbname=cms1;charset=utf8', 'root', '');
    //echo "connexion au serveur ok";
}
// En cas d'erreur, on affiche un message et on arrête tout
 catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

//:okay, on peut continuer

//2: formulation de la requete sql : affichage des données: on recupere le contenu de la table formulaire
$requete = 'SELECT * FROM formulaire ORDER BY id DESC';

//3: execution de la requete sql

$resultat = $bdd->query($requete);

//3: affichage du resultat ligne par ligne

while ($ligne_donnees = $resultat->fetch()) {
    echo "<p>"; //<strong>Rubrique</strong> :";
    echo '<b>', $ligne_donnees['rubrique'], '</b>';
    echo "<br /><br/>";
    //echo "Vous avez ecris :";
    echo $ligne_donnees['texte'];
    // echo "le ", $ligne_donnees['dat'], "</em>",
    echo '</p>';

}
//7: Termine le traitement de la requête
$resultat->closeCursor();
?>
<!DOCTYPE html>
<html>
<head>


</head>
<body>
<p> Retourner au formulaire, <a href="creer.html">clique ici</a>
</body>
</html>
