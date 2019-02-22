<?php

if( isset($_POST['code']) )
{
    // Récupération de la saisie du formulaire
    $lat = $_POST["lat"];
    $lng = $_POST["lng"];
    $alt = $_POST["alt"];
    $acc = $_POST["acc"];


// Formulation de la requête SQL :  insertion de données
    $sql = "INSERT INTO ** (*)
    VALUES ('$auteur1', '$titre1', '$texte1', '$date1')";
    
    // Exécution de la requête SQL : insertion de données
    if (mysqli_query($conn, $sql))
    {
        echo "Nouvel enregistrement effectué <br />";
    } 
    else
    {
        echo "Erreur de requête :  " , $sql , "<br>" , mysqli_error($conn);
    }   
}

?>
