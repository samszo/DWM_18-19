<?php

if( isset($_POST['code']) )
{
    // Récupération de la saisie du formulaire
    $lat = $_POST["lat"];
    $lng = $_POST["lng"];
    $alt = $_POST["alt"];
    $acc = $_POST["acc"];
    $obj = $_POST["obj"];


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
        echo "Erreur de requête :  " , $sql , "<br>" , mysqli_error($conn);}   
}

?>
