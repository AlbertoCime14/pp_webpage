

-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-06-07 15:29:54.907
create database bd_provicional;
use bd_provicional;
-- tables
-- Table: Unidad_medida
CREATE TABLE Unidad_medida (
    id_unidad int NOT NULL AUTO_INCREMENT,
    codigo int NOT NULL,
    nombre varchar(300) NOT NULL,
    bien_final bool NOT NULL,
    servicio_intermedi bool NOT NULL,
    servicio_final bool NOT NULL,
    bien_intermedio bool NOT NULL,
    CONSTRAINT Unidad_medida_pk PRIMARY KEY (id_unidad)
);

-- Table: actividad_estrategica
CREATE TABLE actividad_estrategica (
    id_actividad_estrategica int NOT NULL AUTO_INCREMENT,
    Nombre varchar(150) NOT NULL,
    objetivo_general varchar(300) NOT NULL,
    descripcion varchar(300) NOT NULL,
    monto_propio decimal(9,2) NOT NULL,
    monto_otro decimal(9,2) NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_fin date NOT NULL,
    fecha_captura date NOT NULL,
    elaboro varchar(300) NOT NULL,
    autorizo varchar(300) NOT NULL,
    cat_lineaaccion_ped_lineaaccionid int NOT NULL,
    ubp_id_ubp int NOT NULL,
    poblacion_objetivo_id_poblacion int NOT NULL,
    origen_fuente_id_origen int NOT NULL,
    fuente_financiamiento_id_ff int NOT NULL,
    CONSTRAINT actividad_estrategica_pk PRIMARY KEY (id_actividad_estrategica)
);

-- Table: alineacion_entregable
CREATE TABLE alineacion_entregable (
    id_alineacion int NOT NULL AUTO_INCREMENT,
    compromisos_id_compromiso int NOT NULL,
    entregables_id_entregables int NOT NULL,
    CONSTRAINT compromisos_pk PRIMARY KEY (id_alineacion)
);

-- Table: cat_ejes
CREATE TABLE cat_ejes (
    ejeid int NOT NULL AUTO_INCREMENT,
    eje text NOT NULL,
    CONSTRAINT cat_ejes_pk PRIMARY KEY (ejeid)
);

-- Table: cat_estrategias_ped
CREATE TABLE cat_estrategias_ped (
    estrategiaid int NOT NULL AUTO_INCREMENT,
    estrategia text NOT NULL,
    cat_objetivos_objetivoid int NOT NULL,
    activo int NOT NULL,
    CONSTRAINT cat_estrategias_ped_pk PRIMARY KEY (estrategiaid)
);

-- Table: cat_lineaaccion_ped
CREATE TABLE cat_lineaaccion_ped (
    lineaaccionid int NOT NULL AUTO_INCREMENT,
    lineaaccion text NOT NULL,
    cat_estrategias_ped_estrategiaid int NOT NULL,
    activo int NOT NULL,
    ods_id_ods int NOT NULL,
    CONSTRAINT cat_lineaaccion_ped_pk PRIMARY KEY (lineaaccionid)
);

-- Table: cat_objetivos
CREATE TABLE cat_objetivos (
    objetivoid int NOT NULL AUTO_INCREMENT,
    objetivo text NOT NULL,
    cat_temas_temaid int NOT NULL,
    activo int NOT NULL,
    CONSTRAINT cat_objetivos_pk PRIMARY KEY (objetivoid)
);

-- Table: cat_temas
CREATE TABLE cat_temas (
    temaid int NOT NULL AUTO_INCREMENT,
    tema varchar(100) NOT NULL,
    cat_ejes_ejeid int NOT NULL,
    activo int NOT NULL,
    CONSTRAINT cat_temas_pk PRIMARY KEY (temaid)
);

-- Table: componentes
CREATE TABLE componentes (
    id_componente int NOT NULL AUTO_INCREMENT,
    nombre_componente text NOT NULL,
    compromisos_id_compromiso int NOT NULL,
    CONSTRAINT componentes_pk PRIMARY KEY (id_componente)
);

-- Table: compromisos
CREATE TABLE compromisos (
    id_compromiso int NOT NULL AUTO_INCREMENT,
    numero_comrpromiso int NOT NULL,
    nombre_compromiso int NOT NULL,
    CONSTRAINT compromisos_pk PRIMARY KEY (id_compromiso)
);

-- Table: dependencia
CREATE TABLE dependencia (
    id_dependencia int NOT NULL AUTO_INCREMENT,
    nombre_dependencia varchar(50) NOT NULL,
    dependencia_abrev varchar(50) NOT NULL,
    CONSTRAINT Institucion_pk PRIMARY KEY (id_dependencia)
) COMMENT 'Elaboracion de la tabla usuario';

-- Table: entregables
CREATE TABLE entregables (
    id_entregables int NOT NULL AUTO_INCREMENT,
    nombre varchar(300) NOT NULL,
    mismo_benef bool NOT NULL,
    municipalizable bool NOT NULL,
    presenta_alineacion bool NOT NULL,
    meta_Anual int NOT NULL,
    avace_acumulado int NOT NULL,
    monto_ejercido decimal(19,2) NOT NULL,
    actividad_estrategica_id_f2 int NOT NULL,
    Unidad_medida_id_unidad int NOT NULL,
    temporalidad_id_temp int NOT NULL,
    CONSTRAINT entregables_pk PRIMARY KEY (id_entregables)
);

-- Table: fuente_financiamiento
CREATE TABLE fuente_financiamiento (
    id_ff int NOT NULL AUTO_INCREMENT,
    num_ff int NOT NULL,
    nombre_ff text NOT NULL,
    tipo_fuente_financiamiento_id_tipo int NOT NULL,
    CONSTRAINT fuente_financiamiento_pk PRIMARY KEY (id_ff)
);

-- Table: ods
CREATE TABLE ods (
    id_ods int NOT NULL AUTO_INCREMENT,
    numero_ods int NOT NULL,
    nombre_ods text NOT NULL,
    CONSTRAINT ods_pk PRIMARY KEY (id_ods)
);

-- Table: origen_fuente
CREATE TABLE origen_fuente (
    id_origen int NOT NULL,
    nombre text NOT NULL,
    CONSTRAINT origen_fuente_pk PRIMARY KEY (id_origen)
);

-- Table: poblacion_objetivo
CREATE TABLE poblacion_objetivo (
    id_poblacion int NOT NULL AUTO_INCREMENT,
    nombre text NOT NULL,
    CONSTRAINT poblacion_objetivo_pk PRIMARY KEY (id_poblacion)
);

-- Table: programa_presupuestal
CREATE TABLE programa_presupuestal (
    id_pp int NOT NULL AUTO_INCREMENT,
    nombre_pp varchar(255) NOT NULL,
    num_pp decimal(5,2) NOT NULL,
    CONSTRAINT programa_presupuestal_pk PRIMARY KEY (id_pp)
);

-- Table: tbl_eje_dependencia
CREATE TABLE tbl_eje_dependencia (
    id_union int NOT NULL AUTO_INCREMENT,
    id_cat_eje int NOT NULL,
    id_institucion int NOT NULL,
    CONSTRAINT tbl_eje_dependencia_pk PRIMARY KEY (id_union)
);

-- Table: temporalidad
CREATE TABLE temporalidad (
    id_temp int NOT NULL AUTO_INCREMENT,
    nombre_temp varchar(300) NOT NULL,
    CONSTRAINT temporalidad_pk PRIMARY KEY (id_temp)
);

-- Table: tipo_fuente_financiamiento
CREATE TABLE tipo_fuente_financiamiento (
    id_tipo int NOT NULL AUTO_INCREMENT,
    nombre_tipo varchar(300) NOT NULL,
    CONSTRAINT tipo_fuente_financiamiento_pk PRIMARY KEY (id_tipo)
);

-- Table: tipo_ubp
CREATE TABLE tipo_ubp (
    id_ubp int NOT NULL AUTO_INCREMENT,
    nombre_ubp varchar(300) NOT NULL,
    CONSTRAINT tipo_ubp_pk PRIMARY KEY (id_ubp)
);

-- Table: ubp
CREATE TABLE ubp (
    id_ubp int NOT NULL AUTO_INCREMENT,
    numero_ubp int NOT NULL,
    nombre_ubp varchar(300) NOT NULL,
    tipo_ubp_id_ubp int NOT NULL,
    dependencia_id_dependencia int NOT NULL,
    programa_presupuestal_id_pp int NOT NULL,
    CONSTRAINT ubp_pk PRIMARY KEY (id_ubp)
);

-- foreign keys
-- Reference: actividad_estrategica_cat_lineaaccion_ped (table: actividad_estrategica)
ALTER TABLE actividad_estrategica ADD CONSTRAINT actividad_estrategica_cat_lineaaccion_ped FOREIGN KEY actividad_estrategica_cat_lineaaccion_ped (cat_lineaaccion_ped_lineaaccionid)
    REFERENCES cat_lineaaccion_ped (lineaaccionid);

-- Reference: actividad_estrategica_fuente_financiamiento (table: actividad_estrategica)
ALTER TABLE actividad_estrategica ADD CONSTRAINT actividad_estrategica_fuente_financiamiento FOREIGN KEY actividad_estrategica_fuente_financiamiento (fuente_financiamiento_id_ff)
    REFERENCES fuente_financiamiento (id_ff);

-- Reference: actividad_estrategica_origen_fuente (table: actividad_estrategica)
ALTER TABLE actividad_estrategica ADD CONSTRAINT actividad_estrategica_origen_fuente FOREIGN KEY actividad_estrategica_origen_fuente (origen_fuente_id_origen)
    REFERENCES origen_fuente (id_origen);

-- Reference: actividad_estrategica_poblacion_objetivo (table: actividad_estrategica)
ALTER TABLE actividad_estrategica ADD CONSTRAINT actividad_estrategica_poblacion_objetivo FOREIGN KEY actividad_estrategica_poblacion_objetivo (poblacion_objetivo_id_poblacion)
    REFERENCES poblacion_objetivo (id_poblacion);

-- Reference: actividad_estrategica_ubp (table: actividad_estrategica)
ALTER TABLE actividad_estrategica ADD CONSTRAINT actividad_estrategica_ubp FOREIGN KEY actividad_estrategica_ubp (ubp_id_ubp)
    REFERENCES ubp (id_ubp);

-- Reference: alineacion_entregable_compromisos (table: alineacion_entregable)
ALTER TABLE alineacion_entregable ADD CONSTRAINT alineacion_entregable_compromisos FOREIGN KEY alineacion_entregable_compromisos (compromisos_id_compromiso)
    REFERENCES compromisos (id_compromiso);

-- Reference: alineacion_entregable_entregables (table: alineacion_entregable)
ALTER TABLE alineacion_entregable ADD CONSTRAINT alineacion_entregable_entregables FOREIGN KEY alineacion_entregable_entregables (entregables_id_entregables)
    REFERENCES entregables (id_entregables);

-- Reference: cat_estrategias_ped_cat_objetivos (table: cat_estrategias_ped)
ALTER TABLE cat_estrategias_ped ADD CONSTRAINT cat_estrategias_ped_cat_objetivos FOREIGN KEY cat_estrategias_ped_cat_objetivos (cat_objetivos_objetivoid)
    REFERENCES cat_objetivos (objetivoid);

-- Reference: cat_lineaaccion_ped_cat_estrategias_ped (table: cat_lineaaccion_ped)
ALTER TABLE cat_lineaaccion_ped ADD CONSTRAINT cat_lineaaccion_ped_cat_estrategias_ped FOREIGN KEY cat_lineaaccion_ped_cat_estrategias_ped (cat_estrategias_ped_estrategiaid)
    REFERENCES cat_estrategias_ped (estrategiaid);

-- Reference: cat_lineaaccion_ped_ods (table: cat_lineaaccion_ped)
ALTER TABLE cat_lineaaccion_ped ADD CONSTRAINT cat_lineaaccion_ped_ods FOREIGN KEY cat_lineaaccion_ped_ods (ods_id_ods)
    REFERENCES ods (id_ods);

-- Reference: cat_objetivos_cat_temas (table: cat_objetivos)
ALTER TABLE cat_objetivos ADD CONSTRAINT cat_objetivos_cat_temas FOREIGN KEY cat_objetivos_cat_temas (cat_temas_temaid)
    REFERENCES cat_temas (temaid);

-- Reference: cat_temas_cat_ejes (table: cat_temas)
ALTER TABLE cat_temas ADD CONSTRAINT cat_temas_cat_ejes FOREIGN KEY cat_temas_cat_ejes (cat_ejes_ejeid)
    REFERENCES cat_ejes (ejeid);

-- Reference: componentes_compromisos (table: componentes)
ALTER TABLE componentes ADD CONSTRAINT componentes_compromisos FOREIGN KEY componentes_compromisos (compromisos_id_compromiso)
    REFERENCES compromisos (id_compromiso);

-- Reference: entregables_Unidad_medida (table: entregables)
ALTER TABLE entregables ADD CONSTRAINT entregables_Unidad_medida FOREIGN KEY entregables_Unidad_medida (Unidad_medida_id_unidad)
    REFERENCES Unidad_medida (id_unidad);

-- Reference: entregables_actividad_estrategica (table: entregables)
ALTER TABLE entregables ADD CONSTRAINT entregables_actividad_estrategica FOREIGN KEY entregables_actividad_estrategica (actividad_estrategica_id_f2)
    REFERENCES actividad_estrategica (id_actividad_estrategica);

-- Reference: entregables_temporalidad (table: entregables)
ALTER TABLE entregables ADD CONSTRAINT entregables_temporalidad FOREIGN KEY entregables_temporalidad (temporalidad_id_temp)
    REFERENCES temporalidad (id_temp);

-- Reference: fuente_financiamiento_tipo_fuente_financiamiento (table: fuente_financiamiento)
ALTER TABLE fuente_financiamiento ADD CONSTRAINT fuente_financiamiento_tipo_fuente_financiamiento FOREIGN KEY fuente_financiamiento_tipo_fuente_financiamiento (tipo_fuente_financiamiento_id_tipo)
    REFERENCES tipo_fuente_financiamiento (id_tipo);

-- Reference: ubp_dependencia (table: ubp)
ALTER TABLE ubp ADD CONSTRAINT ubp_dependencia FOREIGN KEY ubp_dependencia (dependencia_id_dependencia)
    REFERENCES dependencia (id_dependencia);

-- Reference: ubp_programa_presupuestal (table: ubp)
ALTER TABLE ubp ADD CONSTRAINT ubp_programa_presupuestal FOREIGN KEY ubp_programa_presupuestal (programa_presupuestal_id_pp)
    REFERENCES programa_presupuestal (id_pp);

-- Reference: ubp_tipo_ubp (table: ubp)
ALTER TABLE ubp ADD CONSTRAINT ubp_tipo_ubp FOREIGN KEY ubp_tipo_ubp (tipo_ubp_id_ubp)
    REFERENCES tipo_ubp (id_ubp);

-- End of file.

