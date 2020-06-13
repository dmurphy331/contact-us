CREATE TABLE IF NOT EXISTS `jstest`.`submissions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `address1` VARCHAR(255) NULL,
  `address2` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `county` VARCHAR(255) NULL,
  `postcode` VARCHAR(45) NULL,
  `telephone_number` VARCHAR(45) NULL,
  `email` VARCHAR(255) NULL,
  `message` TEXT(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB