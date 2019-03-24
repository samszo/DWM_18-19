<?php

// Données de connexion serveur MySQL
$servername = "localhost";
$username = "***";
$password = "***";
$dbname = "spip_dwm_sonar";

// Connexion au serveur MySQL
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (mysqli_connect_errno($conn)){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }

// Formulation de requête SQL : sélection de données
$req = "SELECT tag FROM tag";
$myArray = array();
// Exécution de la requête SQL
//$reponse = mysqli_query($conn, $req);
if ($result = $conn->query($req)) {

    while($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row["tag"];
    }
}

// Encode en JSON
function utf8ize( $mixed ) {
    if (is_array($mixed)) {
        foreach ($mixed as $key => $value) {
            $mixed[$key] = utf8ize($value);
        }
    } elseif (is_string($mixed)) {
        return mb_convert_encoding($mixed, "UTF-8", "UTF-8");
    }
    return $mixed;
}

$data = json_encode(utf8ize($myArray));
echo $data;

?>

