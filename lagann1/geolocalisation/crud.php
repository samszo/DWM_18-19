<?php
include 'connect.php';
session_start();

if(!$_SESSION['idUti'])
{
    $ip = $_SERVER['REMOTE_ADDR'];
    $idSession = session_id();
    $sql= "INSERT INTO uti (`ip`, `maj`,`session`)  
    VALUES ('$ip', NOW(),'$idSession')";
    mysqli_query($connect,$sql);
    $idUti = $mysqli->insert_id;
    $_SESSION['idUti'] = $idUti;
    echo "Session enregistrée = $idUti <br />";   
}else{
    $idUti = $_SESSION['idUti'];
}

explode($_POST["lat"],$_POST["lng"],$_POST["alt"],$_POST["acc"],$_POST["obj"]);

$sql= "INSERT INTO `geo` (`id_uti`, `lat`, `lng`, `alt`, `acc`, `maj`) 
VALUES ('$idUti','$lat', '$lng', '$alt', '$acc', NOW())";

if(mysqli_query($connect,$sql))
    echo "Insertion reussie";
else 
    echo "Echec de la requête";
?>