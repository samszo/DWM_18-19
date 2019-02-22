<?php
include_once('connect.php');
session_start(); 

if (!$_SESSION['idUti']) { 
    $ip = $_SERVER['REMOTE_ADDR'];
    $idSession = session_id();
    $sql= "INSERT INTO uti (`ip`, `maj`,`session`)  
    VALUES ('$ip', NOW(),'$idSession')";    
    // Exécution de la requête SQL : insertion de données
    $mysqli->query($sql);
    $idUti = $mysqli->insert_id;
    $_SESSION['idUti'] = $idUti;
    echo "Cession enregistrée = $idUti <br />";    
}else{
    $idUti = $_SESSION['idUti'];
}

if( isset($_POST['lat']) )
{
    // Récupération de la saisie du formulaire
    $lat = $_POST["lat"];
    $lng = $_POST["lng"];
    $alt = $_POST["alt"];
    $acc = $_POST["acc"];

    $sql= "INSERT INTO `geo` (`id_uti`, `lat`, `lng`, `alt`, `acc`, `maj`) 
    VALUES ('$idUti','$lat', '$lng', '$alt', '$acc', NOW())";
    // Exécution de la requête SQL : insertion de données
    $mysqli->query($sql);
    echo "Nouvel enregistrement effectué <br />";
  
}

?>
