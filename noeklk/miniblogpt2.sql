-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 26 oct. 2018 à 12:33
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
-- Base de données :  `miniblogpt2`
--

-- --------------------------------------------------------

--
-- Structure de la table `blog2`
--

DROP TABLE IF EXISTS `blog2`;
CREATE TABLE IF NOT EXISTS `blog2` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `auteur` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titre` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `texte` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `blog2`
--

INSERT INTO `blog2` (`id`, `auteur`, `titre`, `texte`, `date`) VALUES
(6, 'reeeeee1111', 'ereeee22', 'ree333', '2018-10-25'),
(5, 'REEE2222', 'reeeeee22222', 'reeeeee3333333333', '2018-10-25'),
(7, 'REEEE', '22222', '11111111', '25-10-2018'),
(8, 'DDD', 'GDFGD', 'QSFQSDFQ', '25-10-2018'),
(9, 'henry', 'jacque', 'saluuut', '5-11-2018'),
(10, 'zaaa', 'zaaaaaaa', 'zaaaaaaaa', '25-10-2018'),
(11, 'okk', 'zezea', 'salutttt', '26-10-2018');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
