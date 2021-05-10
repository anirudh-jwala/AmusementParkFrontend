/*
SQLyog Enterprise v12.09 (64 bit)
MySQL - 5.5.50 : Database - amusementpark
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`amusementpark` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `amusementpark`;

/*Table structure for table `activity` */

DROP TABLE IF EXISTS `activity`;

CREATE TABLE `activity` (
  `activity_id` int(11) NOT NULL,
  `activity_name` varchar(40) NOT NULL,
  `charge_details` varchar(255) DEFAULT NULL,
  `charges` float NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `activity` */

insert  into `activity`(`activity_id`,`activity_name`,`charge_details`,`charges`,`description`,`image_url`) values (1,'GO Kart','3 Lap',100,'Unleash your go-kart racing genes and head for an exciting experience of go-karting in Indore with your friends and family members. Feel the thrill of speed with an amazing sense of safety. With special and separate go kart for kids and adults, make way for awesomeness. Enjoy this recreational activity, only at FUNDORE.','https://fundore.com/assets/uploads/prices/Gokart.jpg'),(2,'FREE FALL','1 time',100,'All those fearless lads who love that adrenaline rush, take the Free Fall at Fundore. Free fall ride is the perfect activity for you to feel that kick and experience the rise, movements, rolls and falls.','https://fundore.com/assets/uploads/activity/free.jpg'),(3,'PAINT BALL TARGET SHOOTING','10 Ball',100,'Want to play a target shooting game? So for all those precision lovers who want to experience the electrifying experience of shooting a target, go ahead for this one at FUNDORE.','https://fundore.com/assets/uploads/price/target-shooting.jpg'),(4,'WALL CLIMBING','1 time',100,'Wall climbing sounds tough, but what if we told you that it is totally worth the effort. A climbing wall is an artificially constructed wall with grips for hands and feet. We have world class equipment, operated by a team of trained professionals, who are going to take care of you throughout the course.','https://fundore.com/assets/uploads/prices/wall-climbing.jpg'),(5,'HUNTING','100 Bullets',150,'Hunting games are fun. Hunting is no longer a thing humans need to do for food, but some people enjoy it for sport. Bust out the buckshot, grab your camouflage gear, and get ready to skeet shoot or hunt animals at FUNDORE virtual hunting zone.','https://fundore.com/assets/uploads/prices/Hunting.jpg'),(6,'ROPE COURSE','1 Time',200,'With exciting obstacles, experience a unique combination of adventure, teamwork and physical exercise. We are proud to mention that we have the biggest rope course in Madhya Pradesh with 18 obstacles divided in three levels.','https://fundore.com/assets/uploads/price/ropecourse.jpg'),(7,'FUN WALL','8 Walls',250,'The Fun Wall is an interactive wall with loads of fun! Climbing wall is every child`s dream. Make your kids happy and entertained for hours.','https://fundore.com/assets/uploads/prices/fun-wall.jpg'),(8,'AIR HOCKEY','1 Game',50,'Air Hockey is a fun game that helps to develop skills like dexterity, agility, hand-eye coordination and quick reaction time at the same time. Air Hockey is a wonderful activity which you can try.','https://fundore.com/assets/uploads/prices/air-hokey.jpg'),(9,'BILLIARD','30 min',150,'Are you good at playing pool? Welcome to the wonderful world of billiards at FUNDORE. Grab your cue stick, billiard tables are waiting for you. Don&rsquo t stop until the last ball falls!','https://fundore.com/assets/uploads/prices/Billiards.jpg'),(10,'SAND PLAY ARENA','30 min',150,'Why should grown-ups have all the fun? Central India`s largest indoor sand play arena is waiting! Bring your child to Fundore and let them enjoy and play to the fullest.','https://fundore.com/assets/uploads/price/SandPlayArena.jpg'),(11,'RAPPELLING','1 time',100,'Are you ready for the heart-stopping action of rope for rappelling? Challenge yourself and conquer your fear with our rappelling rope set up with five point safety measures.','https://fundore.com/assets/uploads/entertainment/Rappelling.jpg');

/*Table structure for table `activity_seq` */

DROP TABLE IF EXISTS `activity_seq`;

CREATE TABLE `activity_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `activity_seq` */

insert  into `activity_seq`(`next_val`) values (1);

/*Table structure for table `customer` */

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `customer_id` bigint(20) NOT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(10) DEFAULT NULL,
  `password` varchar(3000) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `UK_dwk6cx0afu8bs9o4t536v1j5v` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `customer` */

insert  into `customer`(`customer_id`,`address`,`email`,`mobile_number`,`password`,`username`) values (2,'HyderaBad,Telangana','anirudh.jwala@capgemini.com','9848329488','$2a$10$z.sgSgSwzVeI2oXuIex9P.d9XVOn7b.U.ocB4T0Z/to6XHOGNe2Hm','Anirudh'),(3,'Indore(M.P.)','siddharth.jain@capgemini.com','9617285827','$2a$10$B5kBoCt6Drc7TSREuPwMVeEOoGUbrhBqLW4PYB89i9VGRyEEKfkAy','Siddharth'),(4,'hyderabad,Telangana','bharath.nalla@capgemini.com','9584954983','$2a$10$NOBlPC78PqnwfTwnjke41OvyBRY70Hjz4ZukNE6W8rw0pw8/8P5Dy','Bharath'),(5,'Hyderabad,Telangana','k.sai.teja@capgemini.com','8549068435','$2a$10$2NI50RYw7z94jnmDF4QgZeXhj.A3z1scUP.99seadjsPyHdH2Nwvy','KsaiTeja'),(6,'Puna,Maharashtra','shubham.chandak@capgemini.com','7580865729','$2a$10$GS5v40qtTMNP3IcY7k6SXeXoW/WqQT9FJPlwBYtkijsspqg6hRdtK','Shubham'),(7,'Bhopal(M.P.)','asadullah.behlim@capgemini.com','9898343498','$2a$10$5qFsKat6jcPlL6ppD3hkRerBRKqJIi3zSLmIhiqr85.E6m.q1W9di','Asadullah'),(8,'Bhopal(M.P.)','anuj.soni@gmail.com','9893434946','$2a$10$YBb4DjdopJN96No9PvISiu1I7YO55MW9CJe2DOipELM0FKtRslE/e','Anuj');

/*Table structure for table `customer_roles` */

DROP TABLE IF EXISTS `customer_roles`;

CREATE TABLE `customer_roles` (
  `customer_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`customer_id`,`role_id`),
  KEY `FKnjtvg9npn1etke1ldeffa0ym6` (`role_id`),
  CONSTRAINT `FK5mxc61l5u87g0rjsselvw7dk3` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  CONSTRAINT `FKnjtvg9npn1etke1ldeffa0ym6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `customer_roles` */

insert  into `customer_roles`(`customer_id`,`role_id`) values (2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(2,2);

/*Table structure for table `customer_seq` */

DROP TABLE IF EXISTS `customer_seq`;

CREATE TABLE `customer_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `customer_seq` */

insert  into `customer_seq`(`next_val`) values (9);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`) values (1,'ROLE_CUSTOMER'),(2,'ROLE_ADMIN');

/*Table structure for table `ticket_booking` */

DROP TABLE IF EXISTS `ticket_booking`;

CREATE TABLE `ticket_booking` (
  `ticket_id` int(11) NOT NULL,
  `bill` float NOT NULL,
  `date` date NOT NULL,
  `customer_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `FKqs7qbghgqwunwg92q33b0h25m` (`customer_id`),
  CONSTRAINT `FKqs7qbghgqwunwg92q33b0h25m` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ticket_booking` */

insert  into `ticket_booking`(`ticket_id`,`bill`,`date`,`customer_id`) values (1000,350,'2021-05-10',7),(1001,400,'2021-05-10',7),(1002,400,'2021-05-10',4),(1003,450,'2021-05-10',5),(1004,500,'2021-05-10',3),(1005,100,'2021-05-10',8),(1006,100,'2021-05-10',8);

/*Table structure for table `ticket_booking_activities` */

DROP TABLE IF EXISTS `ticket_booking_activities`;

CREATE TABLE `ticket_booking_activities` (
  `ticket_booking_ticket_id` int(11) NOT NULL,
  `activities_activity_id` int(11) NOT NULL,
  KEY `FKhbtutr3yqwodpl6d07nuc8obc` (`activities_activity_id`),
  KEY `FK98w1i56uqw5paktrtsddoqtji` (`ticket_booking_ticket_id`),
  CONSTRAINT `FK98w1i56uqw5paktrtsddoqtji` FOREIGN KEY (`ticket_booking_ticket_id`) REFERENCES `ticket_booking` (`ticket_id`),
  CONSTRAINT `FKhbtutr3yqwodpl6d07nuc8obc` FOREIGN KEY (`activities_activity_id`) REFERENCES `activity` (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ticket_booking_activities` */

insert  into `ticket_booking_activities`(`ticket_booking_ticket_id`,`activities_activity_id`) values (1000,5),(1000,4),(1000,2),(1001,11),(1001,10),(1001,9),(1002,1),(1002,2),(1002,3),(1002,4),(1003,3),(1003,2),(1003,9),(1003,11),(1004,6),(1004,5),(1004,4),(1004,8),(1005,4),(1006,4);

/*Table structure for table `ticket_seq` */

DROP TABLE IF EXISTS `ticket_seq`;

CREATE TABLE `ticket_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ticket_seq` */

insert  into `ticket_seq`(`next_val`) values (1007);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
