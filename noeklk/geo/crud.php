<?php

include 'connect.php';



    // Récupération de la saisie du formulaire
    $lat = $_POST["lat"] ? $_POST["lat"] : "0.00000000000000010";
    $lng = $_POST["lng"] ? $_POST["lng"] : "0.00000000000000002";
    $alt = $_POST["alt"] ? $_POST["alt"] : "0";
    $acc = $_POST["acc"] ? $_POST["acc"] : "0";
    $obj = $_POST["obj"] ? $_POST["obj"] : "TEXTTEST";


// Formulation de la requête SQL :  insertion de données
   $sql= "INSERT INTO `geo` (`lat`, `lng`, `alt`, `acc`, `maj`, `obj`) 
    VALUES ('$lat', '$lng', '$alt', '$acc', NOW(), '$obj')";


    
    // Exécution de la requête SQL : insertion de données
    if (mysqli_query($conn, $sql))
    {
        echo "Nouvel enregistrement effectué <br />";
    } 
    else
    {
        echo "Erreur de requête :  " , $sql , "<br>" , mysqli_error($conn);
    }   


?>