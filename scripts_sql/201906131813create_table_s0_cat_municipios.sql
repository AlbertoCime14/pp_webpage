/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.7.19 : Database - evalua
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `s0_cat_municipios` */

DROP TABLE IF EXISTS `s0_cat_municipios`;

CREATE TABLE `s0_cat_municipios` (
  `id_municipio` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `clave` varchar(3) NOT NULL,
  `municipio` varchar(100) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_municipio`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;

/*Data for the table `s0_cat_municipios` */

insert  into `s0_cat_municipios`(`id_municipio`,`clave`,`municipio`,`activo`) values (1,'001','Abalá',1),(2,'002','Acanceh',1),(3,'003','Akil',1),(4,'004','Baca',1),(5,'005','Bokobá',1),(6,'006','Buctzotz',1),(7,'007','Cacalchén',1),(8,'008','Calotmul',1),(9,'009','Cansahcab',1),(10,'010','Cantamayec',1),(11,'011','Celestún',1),(12,'012','Cenotillo',1),(13,'013','Conkal',1),(14,'014','Cuncunul',1),(15,'015','Cuzamá',1),(16,'016','Chacsinkín',1),(17,'017','Chankom',1),(18,'018','Chapab',1),(19,'019','Chemax',1),(20,'020','Chicxulub Pueblo',1),(21,'021','Chichimilá',1),(22,'022','Chikindzonot',1),(23,'023','Chocholá',1),(24,'024','Chumayel',1),(25,'025','Dzán',1),(26,'026','Dzemul',1),(27,'027','Dzidzantún',1),(28,'028','Dzilam de Bravo',1),(29,'029','Dzilam González',1),(30,'030','Dzitás',1),(31,'031','Dzoncauich',1),(32,'032','Espita',1),(33,'033','Halachó',1),(34,'034','Hocabá',1),(35,'035','Hoctún',1),(36,'036','Homún',1),(37,'037','Huhí',1),(38,'038','Hunucmá',1),(39,'039','Ixil',1),(40,'040','Izamal',1),(41,'041','Kanasín',1),(42,'042','Kantunil',1),(43,'043','Kaua',1),(44,'044','Kinchil',1),(45,'045','Kopomá',1),(46,'046','Mama',1),(47,'047','Maní',1),(48,'048','Maxcanú',1),(49,'049','Mayapán',1),(50,'050','Mérida',1),(51,'051','Mocochá',1),(52,'052','Motul',1),(53,'053','Muna',1),(54,'054','Muxupip',1),(55,'055','Opichén',1),(56,'056','Oxkutzcab',1),(57,'057','Panabá',1),(58,'058','Peto',1),(59,'059','Progreso',1),(60,'060','Quintana Roo',1),(61,'061','Río Lagartos',1),(62,'062','Sacalum',1),(63,'063','Samahil',1),(64,'064','Sanahcat',1),(65,'065','San Felipe',1),(66,'066','Santa Elena',1),(67,'067','Seyé',1),(68,'068','Sinanché',1),(69,'069','Sotuta',1),(70,'070','Sucilá',1),(71,'071','Sudzal',1),(72,'072','Suma',1),(73,'073','Tahdziú',1),(74,'074','Tahmek',1),(75,'075','Teabo',1),(76,'076','Tecoh',1),(77,'077','Tekal de Venegas',1),(78,'078','Tekantó',1),(79,'079','Tekax',1),(80,'080','Tekit',1),(81,'081','Tekom',1),(82,'082','Telchac Pueblo',1),(83,'083','Telchac Puerto',1),(84,'084','Temax',1),(85,'085','Temozón',1),(86,'086','Tepakán',1),(87,'087','Tetiz',1),(88,'088','Teya',1),(89,'089','Ticul',1),(90,'090','Timucuy',1),(91,'091','Tinum',1),(92,'092','Tixcacalcupul',1),(93,'093','Tixkokob',1),(94,'094','Tixmehuac',1),(95,'095','Tixpéhual',1),(96,'096','Tizimín',1),(97,'097','Tunkás',1),(98,'098','Tzucacab',1),(99,'099','Uayma',1),(100,'100','Ucú',1),(101,'101','Umán',1),(102,'102','Valladolid',1),(103,'103','Xocchel',1),(104,'104','Yaxcabá',1),(105,'105','Yaxkukul',1),(106,'106','Yobaín',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
