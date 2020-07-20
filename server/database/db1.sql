CREATE TABLE IF NOT EXISTS `filieres` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` TEXT,
  `pictureUrl` varchar(255),
  `active` BOOLEAN DEFAULT true
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `programmes` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` TEXT,
  `active` BOOLEAN DEFAULT true,
  `filiere_id` INT,
 FOREIGN KEY (filiere_id) REFERENCES filieres(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `modules` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` TEXT,
  `charge_horaire` varchar(255),
  `active` BOOLEAN DEFAULT true,
  `programme_id` INT,
 FOREIGN KEY (programme_id) REFERENCES programmes(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `supports` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` TEXT,
  `type` varchar(255),
  `url` VARCHAR(255),
  `urlContentType` varchar(255),
  `active` BOOLEAN DEFAULT true,
  `module_id` INT,
 FOREIGN KEY (module_id) REFERENCES modules(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` ENUM("admin","user") DEFAULT "user",
  `active` BOOLEAN DEFAULT true
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
