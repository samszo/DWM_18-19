<?php
// Données de connexion serveur MySQL
$servername = "localhost";
$username = "root";
$password = "Lucie2014";
$dbname = "dwm_1819";

// Connexion au serveur MySQL
$mysqli = new mysqli($servername,$username, $password, $dbname);

/* Vérification de la connexion */
if (mysqli_connect_errno()) {
    printf("Échec de la connexion : %s\n", mysqli_connect_error());
    exit();
}

?>
