use evalua;
DROP TABLE IF EXISTS `s0_usuarios`;

CREATE TABLE `s0_usuarios` (
  `id_usuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL COMMENT 'Password códificado en SHA1',
  `nombres` varchar(100) NOT NULL,
  `primer_apellido` varchar(100) NOT NULL,
  `segundo_apellido` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `id_dependencia` int(10) unsigned NOT NULL,
  `id_rol` int(10) unsigned NOT NULL,
  `activo` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '1:Sí, 0:No',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `s0_usuarios` */

insert  into `s0_usuarios`(`id_usuario`,`usuario`,`password`,`nombres`,`primer_apellido`,`segundo_apellido`,`correo`,`id_dependencia`,`id_rol`,`activo`) values (1,'admin','36e618512a68721f032470bb0891adef3362cfa9','Jorge','Estrella','Zavala','jorge.estrella@yucatan.gob.mx',73,1,1);


ALTER TABLE s0_actividad_estrategica
ADD activo int; 
ALTER TABLE s0_entregables
ADD activo int; 


ALTER TABLE s0_actividad_estrategica
ALTER activo SET DEFAULT 1;

ALTER TABLE s0_entregables
ALTER activo SET DEFAULT 1;



alter table s0_actividad_estrategica drop fuente_financiamiento_id_ff;

DROP TABLE IF EXISTS s0_actividad_fuente;

CREATE TABLE `s0_actividad_fuente` (
  `id_actividad_fuente` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_actividad` INT,
   `id_fuente` INT,
  `monto` decimal(9,2) NOT NULL,
  PRIMARY KEY (`id_actividad_fuente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;