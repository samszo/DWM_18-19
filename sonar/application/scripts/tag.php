<?php

// Données de connexion serveur MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sonar";

// Connexion au serveur MySQL
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (mysqli_connect_errno($conn)){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }

// Formulation de requête SQL : sélection de données
$req = "SELECT tag FROM tag";

// Exécution de la requête SQL
$reponse = mysqli_query($conn, $req);

    if (mysqli_num_rows($reponse) > 0)
    {
        while($row = mysqli_fetch_assoc($reponse)) 
        {
            echo  $row["tag"]. "<br>";
        }
    }
    else 
    {
        echo "Pas de données";
    }

// Encode en JSON

echo json_encode($row);

?>

