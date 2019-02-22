<?php

if( isset($_POST['']) )
{
    // Récupération de la saisie du formulaire
    $titre1 = $_POST[""];
    $texte1 = $_POST[""];
    $auteur1 = $_POST[""];
    $date1 = $_POST[""];


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