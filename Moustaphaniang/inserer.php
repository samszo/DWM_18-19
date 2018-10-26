<?php 

//1: récupération de la saisie du formulaire
$pseudo = $_POST["pseudo"];
$texte = $_POST["texte"];

//echo $pseudo, "<br/>", $texte;

//2: données de connextion au serveur mysql
$hote = "localhost";
$login = "root";
$mdp = "";
$bdd = "livredor";

//3: connexion serveur
$connect = mysqli_connect($hote, $login, $mdp, $bdd);
if ($connect)
{
    echo "connexion au serveur ok";
    //4: formulation de la requete sql d'ecriture
    $sql = "insert into commentaire (pseudo, texte) values ('$pseudo', '$texte')";
    
    //5: execution de la requete sql : $sql
    $query = mysqli_query($connect, $sql);
    if ($query) echo "requête sql ok";
    else echo "erreur requête sql";
}
else
{
    echo "erreur de connexion mysql";
}

//6: cloture de la connexion
mysqli_close ($connect);

?>