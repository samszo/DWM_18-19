-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 16 mars 2019 à 14:33
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sonar`
--

-- --------------------------------------------------------

--
-- Structure de la table `annotation`
--

DROP TABLE IF EXISTS `annotation`;
CREATE TABLE IF NOT EXISTS `annotation` (
  `id_annotation` int(11) NOT NULL AUTO_INCREMENT,
  `texte_annotation` mediumtext COLLATE utf8_bin,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_annotation`,`id_user`),
  KEY `fk_annotation_user1_idx` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `archive`
--

DROP TABLE IF EXISTS `archive`;
CREATE TABLE IF NOT EXISTS `archive` (
  `id_archive` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `auteur` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `format` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `url` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `id_fragment` int(11) NOT NULL,
  PRIMARY KEY (`id_archive`,`id_fragment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `archivextag`
--

DROP TABLE IF EXISTS `archivextag`;
CREATE TABLE IF NOT EXISTS `archivextag` (
  `archive_id_archive` int(11) NOT NULL,
  `archive_id_fragment` int(11) NOT NULL,
  `tag_id_tag` int(11) NOT NULL,
  PRIMARY KEY (`archive_id_archive`,`archive_id_fragment`,`tag_id_tag`),
  KEY `fk_archive_has_tag_tag1_idx` (`tag_id_tag`),
  KEY `fk_archive_has_tag_archive1_idx` (`archive_id_archive`,`archive_id_fragment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `archivexuser`
--

DROP TABLE IF EXISTS `archivexuser`;
CREATE TABLE IF NOT EXISTS `archivexuser` (
  `archive_id_archive` int(11) NOT NULL,
  `archive_id_fragment` int(11) NOT NULL,
  `user_id_user` int(11) NOT NULL,
  PRIMARY KEY (`archive_id_archive`,`archive_id_fragment`,`user_id_user`),
  KEY `fk_archive_has_user_user1_idx` (`user_id_user`),
  KEY `fk_archive_has_user_archive1_idx` (`archive_id_archive`,`archive_id_fragment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id_commentaire` int(11) NOT NULL AUTO_INCREMENT,
  `pertinence` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `id_archive` int(11) NOT NULL,
  `id_fragment` int(11) NOT NULL,
  PRIMARY KEY (`id_commentaire`,`id_archive`,`id_fragment`),
  KEY `fk_commentaire_archive1_idx` (`id_archive`,`id_fragment`),
  KEY `fk_commentaire_fragment1_idx` (`id_fragment`,`id_archive`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `fragment`
--

DROP TABLE IF EXISTS `fragment`;
CREATE TABLE IF NOT EXISTS `fragment` (
  `id_fragment` int(11) NOT NULL AUTO_INCREMENT,
  `fragment` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `pertinence` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `id_archive` int(11) NOT NULL,
  PRIMARY KEY (`id_fragment`,`id_archive`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `tag`
--

DROP TABLE IF EXISTS `tag`;
CREATE TABLE IF NOT EXISTS `tag` (
  `id_tag` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id_tag`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `tag`
--

INSERT INTO `tag` (`id_tag`, `tag`) VALUES
(1, 'liberte'),
(3, 'politique'),
(8, 'affect'),
(9, 'violence');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `mail` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annotation`
--
ALTER TABLE `annotation`
  ADD CONSTRAINT `fk_annotation_user1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `archivextag`
--
ALTER TABLE `archivextag`
  ADD CONSTRAINT `fk_archive_has_tag_archive1` FOREIGN KEY (`archive_id_archive`,`archive_id_fragment`) REFERENCES `archive` (`id_archive`, `id_fragment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_archive_has_tag_tag1` FOREIGN KEY (`tag_id_tag`) REFERENCES `tag` (`id_tag`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `archivexuser`
--
ALTER TABLE `archivexuser`
  ADD CONSTRAINT `fk_archive_has_user_archive1` FOREIGN KEY (`archive_id_archive`,`archive_id_fragment`) REFERENCES `archive` (`id_archive`, `id_fragment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_archive_has_user_user1` FOREIGN KEY (`user_id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `fk_commentaire_archive1` FOREIGN KEY (`id_archive`,`id_fragment`) REFERENCES `archive` (`id_archive`, `id_fragment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_commentaire_fragment1` FOREIGN KEY (`id_fragment`,`id_archive`) REFERENCES `fragment` (`id_fragment`, `id_archive`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
