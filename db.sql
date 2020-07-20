-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: mohandissoon.cs6lhlpmefot.us-east-1.rds.amazonaws.com    Database: mohandissoon
-- ------------------------------------------------------
-- Server version	5.7.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` enum('admin','user') DEFAULT 'user',
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (2,'admin','21232F297A57A5A743894A0E4A801FC3','admin',1);
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filieres`
--

DROP TABLE IF EXISTS `filieres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filieres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `pictureUrl` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filieres`
--

LOCK TABLES `filieres` WRITE;
/*!40000 ALTER TABLE `filieres` DISABLE KEYS */;
INSERT INTO `filieres` VALUES (1,'Génie Informatique','Une Genie qui necessite un aspect logique et une capabilité de résoudre les problemes','https://piusad.com/php_assets/uploads/2020/02/computer-science.jpeg',1),(2,'Génie Industrielle','Une Genie qui necessite un aspect d\'autonomie et de communication','https://s27389.pcdn.co/wp-content/uploads/2018/01/AdobeStock_135408512-1024x619.jpeg',1);
/*!40000 ALTER TABLE `filieres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `charge_horaire` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `programme_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `programme_id` (`programme_id`),
  CONSTRAINT `modules_ibfk_1` FOREIGN KEY (`programme_id`) REFERENCES `programmes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES (1,'Genie Logiciel','Contient des outils pour amelioration du niveau de logiciel, en utilisant le framework Spring.','24H',1,1),(2,'Theorie de language','Un module qui demontre comment les  languages de programmations sont écrits','30H',1,1),(3,'Theorie de Compilation','Un module qui demontre comment les compilateurs interpretent les languages de programmations','30H',1,1),(4,'UML 2','Sert à ameliorer l\'esprit de modélisation et conceptions chez l\'élève ingenieur','24H',1,1),(5,'Administration Système et Réseaux','Apprends les concepts de bases des réseaux ( DNS, IPTABLES, ...)','60H',1,1),(6,'Projet de Fin d\'année','Un projet qui doit être réalisé et soutenu devant un jury à l\'école','80H',1,1),(7,'XML','Apprendre l\'utilisation du language XML','48H',1,1),(8,'Developpement Mobile','Apprendre le developpement mobile','22H',1,1),(9,'Techniques de Communication','Apprendre des techniques de communication','30H',1,1),(10,'Economie et gestion d\'entreprise','Apprendre les outils de gestion d\'entreprise','26H',1,1),(11,'Reseaux informatiques','Apprendre les bases des réseaux informatiques','23H',1,1),(12,'Télecoms','Apprendre les bases des réseaux télécoms et comment ca fonctionne','23H',1,1),(13,'Administration des base de données Oracle','Apprendre les bases d\'administration des base de données, en utilisant Oracle comme exemple','32H',1,1),(14,'Language PL/SQL','Apprendre le language PL/SQL d\'oracle','28H',1,1),(15,'Anglais Professionnel','Apprendre les notions de communication professionnelle en anglais','26H',1,1),(16,'Communication Professionnelle','Apprendre des notions de communication professionnelle en francais','26H',1,1),(17,'JEE','Apprendre JavaEE pour la création des applications web','42H',1,1),(18,'.NET','Apprendre le framework .NET de C# ','34H',1,1),(19,'Theorie des graphes','Apprendre la théorie des graphes','30H',1,1),(20,'Optimisation','Apprendre les techniques d\'optimisation ','30H',1,1),(21,'Analyse Financière','Apprendre l\'analyse financière','38H',1,1),(22,'Gestion de projet','Apprendre les techniques de gestion des projets','37H',1,1),(23,'Analyse des données','Apprendre les outils et techniques utilisées pour l\'analyse des données','33H',1,1),(24,'Processus Stochastiques','Apprendres les notions de bases du processus stochastique','33H',1,1);
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programmes`
--

DROP TABLE IF EXISTS `programmes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programmes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `active` tinyint(1) DEFAULT '1',
  `filiere_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `filiere_id` (`filiere_id`),
  CONSTRAINT `programmes_ibfk_1` FOREIGN KEY (`filiere_id`) REFERENCES `filieres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programmes`
--

LOCK TABLES `programmes` WRITE;
/*!40000 ALTER TABLE `programmes` DISABLE KEYS */;
INSERT INTO `programmes` VALUES (1,'4eme annee','Le programme de la 4eme annee genie informatique apprend à l\'èleve les outils nécessaires pour pouvoir bien integrer une entreprise ',1,1),(2,'3eme annee','Le programme de la 3eme annee genie informatique comprend les notions de bases de l\'informatique',1,1);
/*!40000 ALTER TABLE `programmes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supports`
--

DROP TABLE IF EXISTS `supports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `type` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `urlContentType` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `module_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `module_id` (`module_id`),
  CONSTRAINT `supports_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supports`
--

LOCK TABLES `supports` WRITE;
/*!40000 ALTER TABLE `supports` DISABLE KEYS */;
INSERT INTO `supports` VALUES (1,'Cours Spring','Description cours spring','cours','https://github.com/elyaakoubi/supportGenieLogiciel2020','link',1,1);
/*!40000 ALTER TABLE `supports` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-20 17:08:15
