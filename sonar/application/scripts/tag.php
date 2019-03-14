<?php

// Données de connexion serveur MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sonar";

// Connexion au serveur MySQL
$conn = mysqli_connect($servername, $username, $password, $dbname);



// Formulation de requête SQL : sélection de données
$req = "SELECT tag FROM tag";


// Exécution de la requête SQL
$reponse = mysqli_query($conn, $req);
    while($row = mysqli_fetch_assoc($reponse))
    {
        $data []= $row;
    }
    $tag = json_encode($data);
?>