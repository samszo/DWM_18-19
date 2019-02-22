<?php
 //1: données de connextion au serveur mysql

$hote = "localhost";
$login = "root";
$mdp = "";
$bdd = "cms1";

//2: connexion serveur mysql
$connect = mysqli_connect($hote, $login, $mdp, $bdd);
?>