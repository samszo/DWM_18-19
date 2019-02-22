-- MySQL Script generated by MySQL Workbench
-- Tue Jan 29 18:42:45 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sonar
-- -----------------------------------------------------
-- Base de données pour l'application SONAR
DROP SCHEMA IF EXISTS `sonar` ;

-- -----------------------------------------------------
-- Schema sonar
--
-- Base de données pour l'application SONAR
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sonar` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `sonar` ;

-- -----------------------------------------------------
-- Table `sonar`.`table1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sonar`.`table1` ;

CREATE TABLE IF NOT EXISTS `sonar`.`table1` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sonar`.`commentaire`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sonar`.`commentaire` ;

CREATE TABLE IF NOT EXISTS `sonar`.`commentaire` (
  `id_commentaire` INT NOT NULL AUTO_INCREMENT,
  `texte_commentaire` MEDIUMTEXT NULL,
  PRIMARY KEY (`id_commentaire`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sonar`.`annotation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sonar`.`annotation` ;

CREATE TABLE IF NOT EXISTS `sonar`.`annotation` (
  `id_annotation` INT NOT NULL AUTO_INCREMENT,
  `lien_annotation` MEDIUMTEXT NULL,
  PRIMARY KEY (`id_annotation`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sonar`.`archive`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sonar`.`archive` ;

CREATE TABLE IF NOT EXISTS `sonar`.`archive` (
  `id_archive` INT NOT NULL AUTO_INCREMENT,
  `titre_archive` VARCHAR(70) NULL,
  `date_archive` DATETIME NULL DEFAULT yyyy-mm-jj,
  `auteur_archive` VARCHAR(45) NULL,
  `format_archive` VARCHAR(45) NULL,
  `duree_archive` DECIMAL(10,20) NULL,
  `URL` VARCHAR(100) NULL,
  `commentaire_id_commentaire` INT NOT NULL,
  `annotation_id_annotation` INT NOT NULL,
  PRIMARY KEY (`id_archive`, `commentaire_id_commentaire`),
  INDEX `fk_archive_commentaire1_idx` (`commentaire_id_commentaire` ASC) VISIBLE,
  INDEX `fk_archive_annotation1_idx` (`annotation_id_annotation` ASC) VISIBLE,
  CONSTRAINT `fk_archive_commentaire1`
    FOREIGN KEY (`commentaire_id_commentaire`)
    REFERENCES `sonar`.`commentaire` (`id_commentaire`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_archive_annotation1`
    FOREIGN KEY (`annotation_id_annotation`)
    REFERENCES `sonar`.`annotation` (`id_annotation`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sonar`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sonar`.`user` ;

CREATE TABLE IF NOT EXISTS `sonar`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `pseudo_user` VARCHAR(45) NULL,
  `mail_user` VARCHAR(45) NULL,
  `archive_id_archive` INT NOT NULL,
  `annotation_id_annotation` INT NOT NULL,
  `commentaire_id_commentaire` INT NOT NULL,
  PRIMARY KEY (`id_user`, `archive_id_archive`, `annotation_id_annotation`, `commentaire_id_commentaire`),
  INDEX `fk_user_archive_idx` (`archive_id_archive` ASC) VISIBLE,
  INDEX `fk_user_annotation1_idx` (`annotation_id_annotation` ASC) VISIBLE,
  INDEX `fk_user_commentaire1_idx` (`commentaire_id_commentaire` ASC) VISIBLE,
  CONSTRAINT `fk_user_archive`
    FOREIGN KEY (`archive_id_archive`)
    REFERENCES `sonar`.`archive` (`id_archive`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_annotation1`
    FOREIGN KEY (`annotation_id_annotation`)
    REFERENCES `sonar`.`annotation` (`id_annotation`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_commentaire1`
    FOREIGN KEY (`commentaire_id_commentaire`)
    REFERENCES `sonar`.`commentaire` (`id_commentaire`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;