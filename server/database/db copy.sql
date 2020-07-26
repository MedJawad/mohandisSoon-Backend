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
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filieres`
--

LOCK TABLES `filieres` WRITE;
/*!40000 ALTER TABLE `filieres` DISABLE KEYS */;
INSERT INTO `filieres` VALUES (1,'Génie Informatique','Le génie informatique, ou l\'ingénierie informatique, est une discipline qui traite de la conception, du développement et de la fabrication de systèmes informatiques, aussi bien d\'un point de vue matériels que logiciels','https://piusad.com/php_assets/uploads/2020/02/computer-science.jpeg',1),(2,'Génie Industrielle','Le génie industriel englobe la conception, l\'amélioration et l\'installation de systèmes intégrés. Il utilise les connaissances provenant des sciences mathématiques, physiques et sociales, ainsi que les principes et méthodes propres au “génie” ou, à l\'art de l\'ingénieur, dans le but de spécifier, prédire et évaluer les résultats découlant de ces systèmes. ','https://s27389.pcdn.co/wp-content/uploads/2018/01/AdobeStock_135408512-1024x619.jpeg',1),(3,'Génie Mécanique','Le génie mécanique désigne l\'ensemble des connaissances liées à la mécanique, au sens physique (sciences des mouvements) et au sens technique (étude des mécanismes). ','https://www.lafactory.ma/wp-content/uploads/2018/12/genie-mecanique.jpg',1),(4,'Génie Civil','Le génie civil représente l\'ensemble des techniques de constructions civiles. Les ingénieurs civils ou ingénieurs en génie civil s’occupent de la conception, la réalisation, l’exploitation et la réhabilitation d’ouvrages de construction et d’infrastructures dont ils assurent la gestion afin de répondre aux besoins de la société, tout en assurant la sécurité du public et la protection de l’environnement.','https://www.netpme.fr/wp-content/uploads/2020/05/Les-artisans-du-BTP-peinent-a%CC%80-absorber-les-surcou%CC%82ts-de-la-se%CC%81curite%CC%81-sanitaire-netpme.fr_-682x455.jpeg',1),(5,'Génie Electrique','Le génie électrique ou ingénierie électrique est une branche de la physique qui traite du domaine de l\'électricité et de ses applications. Il regroupe les domaines du génie électrotechnique et du génie électronique. L\'étude de domaine se réalise en physique, l\'application se fait dans le domaine industriel.','https://www.dreamjob.ma/wp-content/uploads/2018/02/Ing%C3%A9nieurs-Techniciens-Casablanca-Dreamjob.ma_-700x350.jpg',1),(6,'Finance et ingénierie décisionnelle','Cette filiere a pour finalité de former des ingénieurs qualifiés en finance de marché, gestion des risques, gestion de portefeuille en maitrisant les outils mathématiques de modélisation et économétriques d\'aide à la décision.','https://www.xda-developers.com/files/2018/09/microsoft-excel-logo.png',1),(7,'Génie des Procédés et Energie et Environement','Le génie des procédés et energie et environment, ou génie des procédés physico-chimiques, désigne l\'application de la chimie physique à l\'échelle industrielle. Elle a pour but la transformation de la matière dans un cadre industriel et consiste en la conception, le dimensionnement et le fonctionnement d\'un procédé comportant une ou plusieurs transformations chimiques et/ou physiques.','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Colonne_distillazione.jpg/800px-Colonne_distillazione.jpg',1);
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
  `annee` enum('1','2','3','4','5') NOT NULL DEFAULT '4',
  `active` tinyint(1) DEFAULT '1',
  `filiere_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `filiere_id` (`filiere_id`),
  CONSTRAINT `modules_ibfk_1` FOREIGN KEY (`filiere_id`) REFERENCES `filieres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES (1,'Genie Logiciel','Contient des outils pour amelioration du niveau de logiciel, en utilisant le framework Spring.','24H','4',1,1),(2,'Theorie de language','Un module qui demontre comment les  languages de programmations sont écrits','30H','4',1,1),(3,'Theorie de Compilation','Un module qui demontre comment les compilateurs interpretent les languages de programmations','30H','4',1,1),(4,'UML 2','Sert à ameliorer l\'esprit de modélisation et conceptions chez l\'élève ingenieur','24H','4',1,1),(5,'Administration Système et Réseaux','Apprends les concepts de bases des réseaux ( DNS, IPTABLES, ...)','60H','4',1,1),(6,'Projet de Fin d\'année','Un projet qui doit être réalisé et soutenu devant un jury à l\'école','80H','4',1,1),(7,'XML','Apprendre l\'utilisation du language XML','48H','4',1,1),(8,'Developpement Mobile','Apprendre le developpement mobile','22H','4',1,1),(9,'Techniques de Communication','Apprendre des techniques de communication','30H','4',1,1),(10,'Economie et gestion d\'entreprise','Apprendre les outils de gestion d\'entreprise','26H','4',1,1),(11,'Reseaux informatiques','Apprendre les bases des réseaux informatiques','23H','4',1,1),(12,'Télecoms','Apprendre les bases des réseaux télécoms et comment ca fonctionne','23H','4',1,1),(13,'Administration des base de données Oracle','Apprendre les bases d\'administration des base de données, en utilisant Oracle comme exemple','32H','4',1,1),(14,'Language PL/SQL','Apprendre le language PL/SQL d\'oracle','28H','4',1,1),(15,'Anglais Professionnel','Apprendre les notions de communication professionnelle en anglais','26H','4',1,1),(16,'Communication Professionnelle','Apprendre des notions de communication professionnelle en francais','26H','4',1,1),(17,'JEE','Apprendre JavaEE pour la création des applications web','42H','4',1,1),(18,'.NET','Apprendre le framework .NET de C# ','34H','4',1,1),(19,'Theorie des graphes','Apprendre la théorie des graphes','30H','4',1,1),(20,'Optimisation','Apprendre les techniques d\'optimisation ','30H','4',1,1),(21,'Analyse Financière','Apprendre l\'analyse financière','38H','4',1,1),(22,'Gestion de projet','Apprendre les techniques de gestion des projets','37H','4',1,1),(23,'Analyse des données','Apprendre les outils et techniques utilisées pour l\'analyse des données','33H','4',1,1),(24,'Processus Stochastiques','Apprendres les notions de bases du processus stochastique','33H','4',1,1);
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supports`
--

LOCK TABLES `supports` WRITE;
/*!40000 ALTER TABLE `supports` DISABLE KEYS */;
INSERT INTO `supports` VALUES (1,'Cours Spring','Description cours spring','cours','https://github.com/elyaakoubi/supportGenieLogiciel2020','link',1,1),(2,'Cours UML','Un cours Uml','cours','http://projet.eu.org/pedago/sin/term/3-UML.pdf','pdf',1,4),(3,'Cours et TPs JEE','Cours + TP de JEE','cours','https://drive.google.com/file/d/12coaK2nXvpTa0NIlAWQ5bvCUz8LL9kzP/view?usp=sharing','link',1,17),(4,'Cours Stochastique','Cours des Processus Stochastiques','cours','https://drive.google.com/drive/folders/1VH-duhvTjkfUMWQbaswK2mPoOJCfxkNZ?usp=sharing','link',1,24),(5,'Cours Gestion de Projet','Cours de gestion projets','cours','https://drive.google.com/drive/folders/1om2azfhs-932OV-pA16x95rbfguFqqba?usp=sharing','link',1,22),(6,'Cours d\'analyse financiere','Cours analyse financiere','cours','https://drive.google.com/drive/folders/19-znLnYu7iYENdgx5z7O0k75tA6ZN7bS?usp=sharing','link',1,21),(7,'TD analyse financiere','TD','td','https://drive.google.com/drive/folders/1K5k-wzoY_BtEWHJw5b2XdIAcoK5XYaSg?usp=sharing','link',1,21),(8,'Cours Administration de Bases des données','Cours','cours','https://drive.google.com/drive/folders/18MhI6qyJ7HBx2nvJJQJndalAAqik1wQz?usp=sharing','link',1,13),(9,'TP Spring','tp sur spring','TD et TP','https://perso.liris.cnrs.fr/lionel.medini/enseignement/CAHD/TP_Spring_bis.pdf','pdf',1,1);
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

-- Dump completed on 2020-07-26 11:30:44
