<?php

/*
 * Squelette : ../plugins/auto/skeleditor/v3.0.3/prive/squelettes/navigation/skeleditor.html
 * Date :      Fri, 03 Nov 2017 15:18:36 GMT
 * Compile :   Thu, 07 Mar 2019 10:37:49 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins/auto/skeleditor/v3.0.3/prive/squelettes/navigation/skeleditor.html
// Temps de compilation total: 6.874 ms
//

function html_affc30ffb6935b32c8ff69ed3c18f14a($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
invalideur_session($Cache, sinon_interdire_acces(((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('skeleditor')?" ":""))) .
'
' .
vide($Pile['vars'][$_zzz=(string)'path'] = skeleditor_dossier('')) .
boite_ouvrir('', 'raccourcis') .
(($t1 = strval(invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('creerdans', 'squelette', invalideur_session($Cache, table_valeur($Pile["vars"], (string)'path', null)))?" ":"")) ?' ' :''))))!=='' ?
		($t1 . (	'
	' .
	filtre_icone_horizontale_dist(generer_url_ecrire('skeleditor'),_T('skeleditor:action_nouveau'),'se-file-16.png','new','',' onclick="return se_newfile();"') .
	'
')) :
		'') .
'
' .
(($t1 = strval(invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('upload', 'squelette', invalideur_session($Cache, table_valeur($Pile["vars"], (string)'path', null)))?" ":"")) ?' ' :''))))!=='' ?
		($t1 . (	'
	' .
	filtre_icone_horizontale_dist(generer_url_ecrire('skeleditor','upload=oui'),_T('skeleditor:action_upload'),'se-upload-16.png','','',' onclick="return se_uploadfile();"') .
	'
')) :
		'') .
'


' .
boite_fermer() .
'


' .
interdire_scripts(((entites_html(table_valeur(@$Pile[0], (string)'retour', null),true) == './') ? vide($Pile['vars'][$_zzz=(string)'retour'] = '../'):vide($Pile['vars'][$_zzz=(string)'retour'] = concat('../',interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'retour', null), ''),true)))))) .
'
' .
(($t1 = strval(interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'retour', null),true))))!=='' ?
		((	'<a class="retour" href="' .
	sinon(table_valeur($Pile["vars"], (string)'retour', null), '') .
	'">' .
	_T('public|spip|ecrire:retour') .
	' <span>') . $t1 . '</span></a>') :
		'') .
'
' .
(($t1 = strval(parametre_url(sinon(table_valeur($Pile["vars"], (string)'retour', null), ''),'var_mode','inclure')))!=='' ?
		('<a class="retour" href="' . $t1 . (	'">' .
	_T('public|spip|ecrire:retour') .
	' <span>var_mode=inclure</span></a>')) :
		'') .
'
<div class="cadre cadre-info">
	' .
_T('skeleditor:skeleditor_description') .
'
	<p><strong>' .
joli_repertoire(table_valeur($Pile["vars"], (string)'path', null)) .
'</strong></p>
	' .
skeleditor_afficher_dir_skel(table_valeur($Pile["vars"], (string)'path', null),table_valeur($Pile["vars"], (string)'file', null)) .
'
</div>

<script type="text/javascript">
function se_newfile(){jQuery("#contenu > :first").ajaxReload({history:true,args:{f:\' \',upload:\' \'}});return false;}
function se_uploadfile(){jQuery("#contenu > :first").ajaxReload({history:true,args:{f:\' \',upload:\'oui\'}});return false;}
</script>');

	return analyse_resultat_skel('html_affc30ffb6935b32c8ff69ed3c18f14a', $Cache, $page, '../plugins/auto/skeleditor/v3.0.3/prive/squelettes/navigation/skeleditor.html');
}
?>