-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2+deb7u8
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Ven 22 Février 2019 à 16:26
-- Version du serveur: 5.5.60
-- Version de PHP: 5.6.40-1~dotdeb+7.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `dwm_1819`
--

-- --------------------------------------------------------

--
-- Structure de la table `geo`
--

DROP TABLE IF EXISTS `geo`;
CREATE TABLE IF NOT EXISTS `geo` (
  `id_geo` int(11) NOT NULL,
  `id_uti` int(11) NOT NULL,
  `lat` decimal(20,17) NOT NULL,
  `lng` decimal(20,17) NOT NULL,
  `alt` int(11) NOT NULL,
  `acc` int(11) NOT NULL,
  `maj` datetime NOT NULL,
  `obj` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `geo`
--

INSERT INTO `geo` (`id_geo`, `id_uti`, `lat`, `lng`, `alt`, `acc`, `maj`, `obj`) VALUES
(0, 1, 48.94638080000000000, 2.36339199999999970, 0, 742, '2019-02-22 16:01:02', ''),
(0, 1, 48.94638080000000000, 2.36339199999999970, 0, 742, '2019-02-22 16:01:16', ''),
(0, 2, 48.94420249999999600, 2.36323620000000000, 0, 32, '2019-02-22 16:02:03', ''),
(0, 1, 48.94638080000000000, 2.36339199999999970, 0, 742, '2019-02-22 16:05:13', ''),
(0, 1, 48.94638080000000000, 2.36339199999999970, 0, 742, '2019-02-22 16:05:32', ''),
(0, 3, 48.84991979999999500, 2.63704110000000000, 0, 354827, '2019-02-22 16:06:17', '');

-- --------------------------------------------------------

--
-- Structure de la table `uti`
--

DROP TABLE IF EXISTS `uti`;
CREATE TABLE IF NOT EXISTS `uti` (
  `id_uti` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) NOT NULL,
  `maj` datetime NOT NULL,
  `session` varchar(255) NOT NULL,
  PRIMARY KEY (`id_uti`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `uti`
--

INSERT INTO `uti` (`id_uti`, `ip`, `maj`, `session`) VALUES
(1, '193.54.152.22', '2019-02-22 16:01:02', 'g4qnlpacipngfidcvcnon8qmm0'),
(2, '193.54.152.22', '2019-02-22 16:02:03', 'o08arq3qk6482ftot1ebt3mi52'),
(3, '80.215.169.198', '2019-02-22 16:06:17', 'vrrgrk53rit89nt0ba93n582c6');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
