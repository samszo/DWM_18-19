<?php

$insert_comm = "INSERT INTO commentaire (pseudo, email, texte, `date`, id_article) VALUES ('$pseud', '$mail', '$_comment', '$today','$ID_ART')";

$affichart = "SELECT id, auteur, titre, texte, `date` FROM article WHERE id = '$ID_ART'";
?>