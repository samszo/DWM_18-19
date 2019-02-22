-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  ven. 22 fév. 2019 à 12:57
-- Version du serveur :  8.0.12
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dwm_1819`
--

-- --------------------------------------------------------

--
-- Structure de la table `geo`
--

DROP TABLE IF EXISTS `geo`;
CREATE TABLE `geo` (
  `id_geo` int(11) NOT NULL,
  `lat` decimal(20,17) NOT NULL,
  `lng` decimal(20,17) NOT NULL,
  `alt` int(11) NOT NULL,
  `acc` int(11) NOT NULL,
  `maj` datetime NOT NULL,
  `obj` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `geo`
--

INSERT INTO `geo` (`id_geo`, `lat`, `lng`, `alt`, `acc`, `maj`, `obj`) VALUES
(1, '0.00000000000000000', '0.00000000000000000', 0, 0, '2019-02-08 00:00:00', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `geo`
--
ALTER TABLE `geo`
  ADD PRIMARY KEY (`id_geo`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `geo`
--
ALTER TABLE `geo`
  MODIFY `id_geo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
