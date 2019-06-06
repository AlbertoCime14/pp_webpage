<?php
defined('BASEPATH') OR exit('No direct script access allowed');

if(isset($_SESSION['permisos'])) $permisos= $_SESSION['permisos'];
else $permisos=array('0');

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="format-detection" content="telephone=no">
    <meta charset="UTF-8">
    <meta name="description" content="Violate Responsive Admin Template">
    <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">
	
	<title>Directorio</title>

	<link href="<?=base_url();?>css/bootstrap.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/animate.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/font-awesome.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/form.css" rel="stylesheet">
    <link href="<?=base_url();?>css/calendar.css" rel="stylesheet">
    <link href="<?=base_url();?>css/style.css" rel="stylesheet">
    <link href="<?=base_url();?>css/icons.css" rel="stylesheet">
    <link href="<?=base_url();?>css/generics.css" rel="stylesheet">
    <link href="<?=base_url();?>css/chosen.css" rel="stylesheet">
    <link href="<?=base_url();?>css/parsley.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?=base_url();?>css/jquery.tagsinput.css" />
    <link rel="stylesheet" type="text/css" href="<?=base_url();?>css/jquery.dataTables.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url();?>css/dataTables.tableTools.css">
    <style type="text/css">
    	.tab-pane{
    		min-height: 218px;
    	}
    </style>    

</head>
<body id="skin-blur-violate">
        <header id="header" class="media">
            <a href="" id="menu-toggle"></a> 
            <a class="logo pull-left" href="index.html">SEPLAN</a>
            
            <div class="media-body">
                <div class="media" id="top-menu">    
                    <div id="time" class="pull-right">
                        <span id="hours"></span>
                        :
                        <span id="min"></span>
                        :
                        <span id="sec"></span>
                    </div>
                    
                    <div class="media-body">
                        <input type="text" class="main-search">
                    </div>
                </div>
            </div>
        </header>
        
        <div class="clearfix"></div>
        
        <section id="main" class="p-relative" role="main">
            
            <!-- Sidebar -->
            <aside id="sidebar">
                
                <!-- Sidbar Widgets -->
                <div class="side-widgets overflow">
                    <!-- Profile Menu -->
                    <div class="text-center s-widget m-b-25 dropdown" id="profile-menu">
                        <a href="" data-toggle="dropdown">
                            <img class="profile-pic animated" src="<?=base_url();?>img/logo_seplan.png" alt="">
                        </a>
                        <ul class="dropdown-menu profile-menu">
                            <li><a href="">Salir</a></li>
                        </ul>
                        <h4 class="m-0">SEPLAN</h4>
                        @seplan-g
                    </div>

                    <!-- Calendar -->
                    <div class="s-widget m-b-25">
                        <div id="sidebar-calendar"></div>
                    </div>
                </div>
                
                <!-- Side Menu -->
                <ul class="list-unstyled side-menu">
                	<?php 
                	
                		
	            		if (in_array("21", $permisos) || in_array("24", $permisos)) 
	            		{
						    echo '<li>
			                        <a style="background-image: url(img/icon/search@2x.png); background-size: 25px 25px; background-position: center; background-repeat: no-repeat;" href="" data-drawer="buscar" class="drawer-toggle">
			                            <span class="menu-item">Buscar</span>
			                        </a>
			                    </li>';
						}
						
						if (in_array("22", $permisos)) 
						{
							echo '<li class="active">
			                        <a style="background-image: url(img/icon/file@2x.png); background-size: 25px 25px; background-position: center; background-repeat: no-repeat;" href="" data-drawer="crear" class="drawer-toggle">
			                            <span class="menu-item">Crear contacto</span>
			                        </a>
			                    </li>';							
						}

						if (in_array("23", $permisos) || in_array("25", $permisos)) 
						{
							echo '<li>
			                        <a style="background-image: url(img/icon/search@2x.png); background-size: 25px 25px; background-position: center; background-repeat: no-repeat;" href="" data-drawer="buscar" class="drawer-toggle">
			                            <span class="menu-item">Buscar</span>
			                        </a>
			                    </li>
			                    <li class="active">
			                        <a style="background-image: url(img/icon/file@2x.png); background-size: 25px 25px; background-position: center; background-repeat: no-repeat;" href="" data-drawer="crear" class="drawer-toggle">
			                            <span class="menu-item">Crear contacto</span>
			                        </a>
			                    </li>';							
						}				                	
                	?>
                </ul>

            </aside>
        
            <!-- Content -->
            <section id="content" class="container">            
                <!-- Breadcrumb -->
                <ol class="breadcrumb hidden-xs">
                    <li class="active">ID asociado a la institución:   <b id="idasociado"></b></li>
                </ol>                
                <h4 class="page-title">DIRECTORIO</h4>
                                                
                <hr class="whiter" />
                <!-- Notification Drawer -->
                <div id="crear" class="tile drawer animated" data-backdrop="static">
                    <div class="listview narrow">
                        <div class="media">
                            <a href="">Crear contacto</a>
                            <span class="drawer-close">&times;</span>
                        </div>
                        <div class="overflow" style="height: 500px">
                            <div class="block-area" id="multi-column">
			                    <div class="tab-container tile media" id="tabs" style="height: 80%; margin-bottom: 0px;">
			                        <ul class="tab pull-left tab-vertical nav nav-tabs">
			                            <li class="active"><a href="#dependencia">Datos de la institución</a></li>  
			                            <li><a href="#titular">Datos del titular/enlace</a></li>
			                        </ul>
			                          
			                        <div class="tab-content media-body" style="height: 100%;">
			                            <div class="tab-pane" id="titular">
			                                <form class="row form-columned" data-parsley-validate id="form_crear" role="form">
			                                    <div class="col-md-4 m-b-10">
			                                        <select class="chosen-select" id="tipo_usuario" name="tipo_usuario" data-placeholder="Tipo de usuario*" onchange="carga_titulares(this.value);" required>
			                                            <option value=""></option>
			                                            <option value="1">Titular</option>
			                                            <option value="2">Asistente</option>
			                                            <option value="3">Enlace</option>
			                                            <option value="4">Contacto</option>
			                                        </select>
			                                    </div>
			                                    <div class="col-md-8" id="titulares"></div>			                                    
			                                    <div class="clearfix"></div>

			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10" id="nombre" name="nombre" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜ ]+$/i" placeholder="Nombre"  style="text-transform: uppercase;" required>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <div class="form-group">
			                                        	<input class="form-control input-sm m-b-10" id="pape" name="pape" type="text" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜ ]+$/i" placeholder="Primer Apellido" style="text-transform: uppercase;" required>
			                                        </div>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10" id="sape" name="sape" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜ ]+$/i" placeholder="Segundo Apellido" style="text-transform: uppercase;">
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10" id="cargo" name="cargo" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜ ]+$/i" placeholder="Cargo" style="text-transform: uppercase;" required>
			                                    </div>
			                                    <div class="clearfix"></div>
			                                    			                                    
			                                    <div class="col-md-4">
			                                        <input type="email" class="form-control input-sm m-b-10" id="correoinst" data-parsley-trigger="change"  name="correoinst" placeholder="Correo institucional" required>
			                                    </div>
			                                    <div class="col-md-4">
			                                        <input type="email" class="form-control input-sm m-b-10" id="correoper"  data-parsley-trigger="change" name="correoper" placeholder="Correo personal">
			                                    </div>			                                    
			                                    <div class="col-md-4 m-b-10">
			                                        <select class="chosen-select" id="nacces" name="nacces" data-placeholder="Nivel de acceso*" required>
			                                            <option value=""></option>
			                                            <option value="1">Nivel 1</option>
			                                            <option value="2">Nivel 2</option>
			                                            <option value="3">Nivel 3</option>
			                                        </select>
			                                    </div>                                  
			                                    <div class="clearfix"></div>
			                                    <!-- Only Letter/Number -->                        
			                                    <div class="col-md-3">
			                                        <div class="form-group">
							                            <input class="form-control input-sm" id="ladatel" name="ladatel" type="text" placeholder="Lada" data-parsley-type="number" required>
							                        </div>
			                                    </div>
			                                    <div class="col-md-3">		                                       
			                                        <div class="form-group">							                            
							                            <input class="form-control input-sm" id="telefono" name="telefono" type="text" placeholder="Teléfono" data-parsley-type="number" required>
							                        </div>
			                                    </div>
			                                    <div class="col-md-3">			                                        
			                                        <div class="form-group">							                            
							                            <input class="form-control input-sm" id="extension" name="extension" type="text" placeholder="Extensión" data-parsley-type="number">
							                        </div>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <div class="form-group">							                            
							                            <input class="form-control input-sm" id="celular" name="celular" type="text" placeholder="Celular" data-parsley-type="number">
							                        </div>
			                                    </div>                                  
			                                    <div class="clearfix"></div>
			                                    <div class="col-md-12" id="categorias">
			                                        <a data-toggle="modal" href="#modalTemas" class="btn btn-sm">Alinear temas</a><br>
			                                    </div>
			                                    <div class="clearfix"></div>

			                                    <div class="col-md-10">
			                                        <button type="submit" id="btn_usuario" class="btn btn-sm pover" data-trigger="hover" data-toggle="popover" data-placement="right" data-content="Una vez guardada la información del titular se deberá completar el resto de la información para poder agregar otro." title="Importante">Guardar</button>
			                                        
			                                    </div>			                                    
			                                </form>
			                            </div>
			                            <div class="tab-pane active" id="dependencia">
			                                <form class="row form-columned" id="form_direccion" role="form">
			                                	<div class="col-md-10 m-b-10">
			                                        <select class="chosen-select" id="cat_deps" name="cat_deps" data-placeholder="Dependencias*" onchange="obtener_datos();">
			                                            <option value=""></option>
			                                            <?php
			                                            foreach ($dependencias as $vdep) {
			                                            	echo '<option value="'.$vdep->dependenciaid.'">'.$vdep->nombre_dep.'-'.$vdep->dependencia.'</option>';
			                                            }
			                                            ?>
			                                        </select>
			                                    </div>
			                                    <div class="clearfix"></div>			    
			                                	<div class="col-md-5">
			                                        <input type="text" class="form-control input-sm m-b-10" id="nombre_inst" name="nombre_inst" placeholder="Nombre de la institución*" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" style="text-transform: uppercase;" data-parsley-trigger="change" required>
			                                    </div>
			                                    <div class="col-md-4">
			                                        <input type="text" class="form-control input-sm m-b-10" id="siglas" name="siglas" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" style="text-transform: uppercase;" placeholder="Siglas" data-parsley-trigger="change">
			                                    </div>
			                                    <div class="col-md-3 m-b-10">
			                                        <select class="chosen-select" id="tipoinst" name="tipoinst" data-placeholder="Tipo de institución*" required>
			                                            <option value=""></option>			                                           

														<option value="1">Empresa</option>
														<option value="2">Organización de la Sociedad Civil</option>
														<option value="3">Cámara industrial o empresarial</option>
														<option value="4">Academia</option>
														<option value="5">Asociación Religiosa</option>
														<option value="6">Organismo público estatal</option>
														<option value="7">Organismo público federal</option>
														<option value="8">Organismo público municipal</option>
														<option value="9">Particular</option>
			                                        </select>
			                                    </div> 			                                    
			                                    <div class="clearfix"></div>                          
			                                    <div class="col-md-3 m-b-10">
			                                        <select class="chosen-select" id="tipo_vial" name="tipo_vial" data-placeholder="Tipo de vialidad*" required>
			                                            <option value=""></option>
			                                            <?php
			                                            foreach ($vialidades as $vtvial) {
			                                            	echo '<option value="'.$vtvial->tipovialidadid.'">'.$vtvial->tipovialidad.'</option>';
			                                            }
			                                            ?>
			                                        </select>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_via" name="nombre_via" style="text-transform: uppercase;" placeholder="Nombre de la vialidad*" required>
			                                    </div>	
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="num_ext" name="num_ext" placeholder="Número exterior*" data-parsley-type="number" required>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="alf_ext" name="alf_ext" style="text-transform: uppercase;" placeholder="Alfanumérico exterior">
			                                    </div>
			                                    <div class="clearfix"></div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="num_int" name="num_int" placeholder="Número interior" data-parsley-type="number">
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="alf_int" name="alf_int" style="text-transform: uppercase;" placeholder="Alfanumérico interior">
			                                    </div>

												<div class="col-md-3 m-b-10">
			                                        <select class="chosen-select" id="tipo_cruz1" name="tipo_cruz1" data-placeholder="Tipo de cruzamiento 1*" required>
			                                            <option value=""></option>
			                                            <?php 
			                                            foreach ($vialidades as $vcruz1) {
			                                            	echo '<option value="'.$vcruz1->tipovialidadid.'">'.$vcruz1->tipovialidad.'</option>';
			                                            }
			                                            ?>
			                                        </select>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_cruz1" name="nombre_cruz1" style="text-transform: uppercase;" placeholder="Nombre del cruzamiento 1*" required>
			                                    </div>	
			                                    <div class="clearfix"></div>
			                                    <div class="col-md-3 m-b-10">
			                                        <select class="chosen-select" id="tipo_cruz2" name="tipo_cruz2" data-placeholder="Tipo de cruzamiento 2*">
			                                            <option value=""></option>
			                                            <?php 
			                                            foreach ($vialidades as $vcruz2) {
			                                            	echo '<option value="'.$vcruz2->tipovialidadid.'">'.$vcruz2->tipovialidad.'</option>';
			                                            }
			                                            ?>
			                                        </select>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_cruz2" name="nombre_cruz2" style="text-transform: uppercase;" placeholder="Nombre del cruzamiento 2">
			                                    </div>	
			                                    <div class="col-md-3 m-b-10">
			                                        <select class="chosen-select" id="tipo_asent" name="tipo_asent" data-placeholder="Tipo de asentamiento*" required>
			                                            <option value=""></option>
			                                            <?php 
			                                            foreach ($asentamiento as $vasent) {
			                                            	echo '<option value="'.$vasent->tipoasentamientoid.'">'.$vasent->tipoasentamiento.'</option>';
			                                            }
			                                            ?>			                                            
			                                        </select>
			                                    </div>
			                                    <div class="col-md-3">
			                                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_asent" name="nombre_asent" style="text-transform: uppercase;" placeholder="Nombre del asentamiento" required>
			                                    </div>	                                  
			                                    <div class="clearfix"></div>
			                                    <!-- Integer -->  
			                                    <div class="col-md-3">
			                                        <div class="form-group">							                            
							                            <input class="form-control input-sm" id="cpostal" name="cpostal" type="text" placeholder="Código postal" data-parsley-type="number">
							                        </div>
			                                    </div>  

			                                    <div class="col-md-9">
			                                        <button type="submit" id="btn_dir" name="btn_dir" class="btn btn-sm">Guardar</button>
			                                    </div>
			                                </form>
			                            </div>
			                        </div>
			                        
			                    </div>
			                    <div id="alertas"></div>			                    
			                </div>
                        </div>                        
                    </div>
                </div>
                <hr class="whiter" />
                <!--********************************************************************************* PANEL PARA LA BUSQUEDA DE CONTACTOS ******************************************************************************* -->
                <div id="buscar" class="tile drawer animated" data-backdrop="static">
                    <div class="listview narrow">
                        <div class="media">
                            <a href="">Búsqueda</a>
                            <span class="drawer-close">&times;</span>
                        </div>
                        <div class="overflow" style="height: 640px">
                            <div class="block-area" id="multi-column">
			                    <div class="tab-container tile media" id="tabs" style="height: 80%; margin-bottom: 0px;">
			                        <ul class="tab pull-left tab-vertical nav nav-tabs">
			                            <li class="active"><a href="#busqueda">Búsqueda</a></li>
			                            <li><a href="#resultados">Resultados</a></li>
			                        </ul>
			                          
			                        <div class="tab-content media-body" style="height: 100%;">			                            
			                            <div class="tab-pane active" id="busqueda">			                            
			                                <form class="row form-columned" id="form_busqueda" role="form">
			                                	<div class="col-md-12 m-b-10">
			                                		<!--<p>Seleccione los parámetros que desea para su búsqueda</p>
								                    <label class="checkbox-inline" onclick="carga_selectores(1);">
								                        <input type="checkbox" id="check_inst">
								                        Institución
								                    </label>
								                    <label class="checkbox-inline" onclick="carga_selectores(4);">
								                        <input type="checkbox" id="check_tit">
								                        Titular
								                    </label>
								                    
								                    <label class="checkbox-inline" onclick="carga_selectores(2);">
								                        <input type="checkbox" id="check_enlace">
								                        Enlace
								                    </label>
								                    
								                    <label class="checkbox-inline" onclick="carga_selectores(3);">
								                        <input type="checkbox" id="check_cat">
								                        Categoría
								                    </label>-->
								                    <label class="checkbox-inline">
								                        <input type="checkbox" id="check_ejec">
								                        Reporte Ejecutivo
								                    </label>
			                                	</div>
			                                	<div id="sel_busqueda">			                                		
													<div class="col-md-3 m-b-10" id="cont_inst">
														<select class="chosen-select" id="busq_inst" name="busq_inst" data-placeholder="Instituciones" onchange="carga_datosel(this.value,1);"><option value=""></option>
														<?php 
															foreach ($instituciones as $vinst) 
															{
																echo '<option value="'.$vinst->institucionid.'">'.$vinst->institucion.'</option>';
															}
														?>
														</select>
													</div>

													<div class="col-md-3 m-b-10" id="cont_tit">
														<select class="chosen-select" id="busq_tit" name="busq_tit" data-placeholder="Titulares" disabled><option value=""></option>
														</select>
													</div>

													<div class="col-md-3 m-b-10" id="cont_enlace">
														<select class="chosen-select" id="busq_usuario" name="busq_usuario" data-placeholder="Enlaces" disabled><option value=""></option>
														</select>
													</div>

													<div class="col-md-3 m-b-10" id="cont_cat">
														<select class="chosen-select" id="busq_cat" name="busq_cat" data-placeholder="Categorías"><option value=""></option>
														<?php 
														foreach ($categorias as $vcat) 
														{
															echo '<option value="'.$vcat->subtemaid.'">'.$vcat->subtema.'</option>';
														}
														?>
														</select>
													</div>
			                                	</div>
			                                    <div class="clearfix"></div>
			                                    <div class="col-md-2">
			                                        <button type="button" id="btn_dir" name="btn_dir" onclick="busca_datos();" class="btn btn-sm">Buscar</button>
			                                    </div>
			                                    <div class="col-md-4">
			                                        <button type="button" id="btn_rep" name="btn_rep" onclick="descarga_rep();" class="btn btn-sm">Descargar reporte</button>
			                                    </div>
			                                </form>
			                            </div>
			                            <div class="tab-pane" id="resultados">
			                                <!-- aqui van los resuldatos de la busqueda-->			                                
			                            </div>
			                        </div>
			                        
			                    </div>
			                    <div id="alertas_busq"></div>			                    
			                </div>
                        </div>                        
                    </div>
                </div>
                <hr class="whiter"/>
                <!--********************************************************************************* PANEL PARA LA MODIFICACIÓN DE CONTACTOS ******************************************************************************* -->
                <div id="modificar" class="tile drawer animated" data-backdrop="static">
                    <div class="listview narrow">
                        <div class="media">
                            <a href="">Modificación</a>
                            <span class="drawer-close">&times;</span>
                        </div>
                        <div class="overflow" style="height: 640px">
                            <div class="block-area" id="multi-column">
			                    <div class="tab-container tile media" id="tabsmod" style="height: 70%; margin-bottom: 0px;">
			                        <ul class="tab pull-left tab-vertical nav nav-tabs">
			                            <li class="active"><a href="#fmod">Modificación</a></li>
			                        </ul>
			                          
			                        <div class="tab-content media-body" style="height: 100%;">			                            
			                            <div class="tab-pane active" id="fmod">			                            			                                
			                            </div>			                            
			                        </div>
			                        
			                    </div>
			                    <div id="alertas_mod"></div>			                    
			                </div>
                        </div>                        
                    </div>
                </div>
                <hr class="whiter"/>
                
            </section>


            <!-- Older IE Message -->
            <!--[if lt IE 9]>
                <div class="ie-block">
                    <h1 class="Ops">Ooops!</h1>
                    <p>You are using an outdated version of Internet Explorer, upgrade to any of the following web browser in order to access the maximum functionality of this website. </p>
                    <ul class="browsers">
                        <li>
                            <a href="https://www.google.com/intl/en/chrome/browser/">
                                <img src="img/browsers/chrome.png" alt="">
                                <div>Google Chrome</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.mozilla.org/en-US/firefox/new/">
                                <img src="img/browsers/firefox.png" alt="">
                                <div>Mozilla Firefox</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.opera.com/computer/windows">
                                <img src="img/browsers/opera.png" alt="">
                                <div>Opera</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://safari.en.softonic.com/">
                                <img src="img/browsers/safari.png" alt="">
                                <div>Safari</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://windows.microsoft.com/en-us/internet-explorer/downloads/ie-10/worldwide-languages">
                                <img src="img/browsers/ie.png" alt="">
                                <div>Internet Explorer(New)</div>
                            </a>
                        </li>
                    </ul>
                    <p>Upgrade your browser for a Safer and Faster web experience. <br/>Thank you for your patience...</p>
                </div>   
            <![endif]-->
        </section>

        <div class="modal fade" id="modalDefault" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">                    
                    <div class="modal-body" id="modal-body">                        
                    </div>                    
                </div>
            </div>
        </div>

        <!-- Modal Default -->  
        <div class="modal fade" id="modalTemas" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <button type="button" class="btn btn-sm" onclick="alinea_temas();">Guardar</button>
                    </div>
                    <div class="modal-body">
                    	<form class="row form-columned" id="form_temas" role="form">
                    	<input id="tags" name="tags" type="text" class="tags" value="" />
                        <?php 
                        $seccion="";
                        foreach ($categorias as $vtem) 
                        {
                        	//echo $vtem->subtemaid.':'.$vtem->subtema.' - '.$vtem->seccionid.':'.$vtem->seccion;

                        	if($vtem->seccion != $seccion)
	                        {
	                          $seccion = $vtem->seccion;
	                          echo '<div class="col-sm-12" style="border-top: 1px solid #cacaca;"><h2 style="font-size:16px">';
	                          switch ($seccion) {
	                              case 'Economía':
	                                echo '<img src="'.base_url().'img/icons/economia.png" style="margin-right: 1%; width: 20px;">';
	                                break;
	                              case 'Política Social':
	                                echo '<img src="'.base_url().'img/icons/politica.png" style="margin-right: 1%; width: 20px;">';
	                                break;
	                              case 'Salud':
	                                echo '<img src="'.base_url().'img/icons/salud.png" style="margin-right: 1%; width: 20px;">';
	                                break;
	                              case 'Educación, Cultura y Deporte':
	                                echo '<img src="'.base_url().'img/icons/educacion.png" style="margin-right: 1%; width: 20px;">';
	                                break;
	                              case 'Infraestructura y Medio Ambiente':
	                                echo '<img src="'.base_url().'img/icons/infraestructura.png" style="margin-right: 1%; width: 20px;">';
	                                break;
	                              case 'Gobierno, seguridad y Justicia':
	                                echo '<img src="'.base_url().'img/icons/gobierno.png" style="margin-right: 1%; width: 20px;">';
	                                break;
	                              case 'Equidad de género':
	                                echo '<img src="'.base_url().'img/icons/equidad.png" style="margin-right: 1%; width: 20px;">';
	                                break;

	                            }  

	                          echo $vtem->seccion.'</h2></div>';
	                        }
		                	echo '<div class="col-sm-4 col-md-4"><input style="margin-right: 2%;" type="checkbox" class="subtemas" name="subtema[]" id="subtema[]" value="'.$vtem->subtemaid.'">'.$vtem->subtema.'</div>';
                        }
                       	?>
                       	</form>
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Javascript Libraries -->
        <!-- jQuery -->
        <script src="<?=base_url();?>js/jquery.min.js"></script> <!-- jQuery Library -->
        <script src="<?=base_url();?>js/jquery-ui.min.js"></script> <!-- jQuery UI -->
        <script src="<?=base_url();?>js/jquery.easing.1.3.js"></script> <!-- jQuery Easing - Requirred for Lightbox + Pie Charts-->

        <script src="<?=base_url();?>js/parsley.js"></script> <!-- Custom Checkbox + Radio -->
        <!-- Bootstrap -->
        <script src="<?=base_url();?>js/bootstrap.min.js"></script>


        <!--  Form Related -->
        <script src="<?=base_url();?>js/icheck.js"></script> <!-- Custom Checkbox + Radio -->

        <!-- UX -->
        <script src="<?=base_url();?>js/scroll.min.js"></script> <!-- Custom Scrollbar -->

        <!-- Other -->
        <script src="<?=base_url();?>js/calendar.min.js"></script> <!-- Calendar -->
        <script src="<?=base_url();?>js/feeds.min.js"></script> <!-- News Feeds -->

        <script src="<?=base_url();?>js/select.min.js"></script> <!-- Custom Select -->
        <script src="<?=base_url();?>js/chosen.jquery.min.js"></script> <!-- chosen Select -->

        <!--  Form Related -->
        

        <!-- All JS functions -->
        <script src="<?=base_url();?>js/functions.js"></script>
		<script type="text/javascript" src="<?=base_url();?>js/jquery.tagsinput.js"></script>

        <script type="text/javascript" language="javascript" src="<?=base_url();?>js/jquery.dataTables.js"></script>
		<script type="text/javascript" language="javascript" src="<?=base_url();?>js/dataTables.tableTools.js"></script>
        <script type="text/javascript">

        	$(document).ready(function(){
		     	$(".chosen-select").chosen({'width':'100%','white-space':'nowrap'});
		     	$('#tags').tagsInput({width:'auto'});				
		    });		    

			$(function () {
			  $('#form_crear').parsley().on('field:validated', function() {
			    var ok = $('.parsley-error').length === 0;
			    $('.bs-callout-info').toggleClass('hidden', !ok);
			    $('.bs-callout-warning').toggleClass('hidden', ok);
			  })
			  .on('form:submit', function() {
			  	crea_usuario();
			    return false; // Don't submit form for this demo
			  });
			});

			$(function () {
			  $('#form_direccion').parsley().on('field:validated', function() {
			    var ok = $('.parsley-error').length === 0;
			    $('.bs-callout-info').toggleClass('hidden', !ok);
			    $('.bs-callout-warning').toggleClass('hidden', ok);
			  })
			  .on('form:submit', function() {
			  	crea_institucion();
			    return false; // Don't submit form for this demo
			  });
			});

        	function crea_usuario()
        	{   
        		var tipous = $('#tipo_usuario').val();

	        	$.post('<?=base_url();?>index.php/control_usuarios/crea_usuario', $('#form_crear').serialize(), function(resp){
					switch(resp) {
					    case "error1":
					        alerta = '<div class="alert alert-warning alert-icon">Advertencia! Primero debe capturar los datos de una institución.<i class="icon">&#61730;</i></div>';
					        break;
					    case "error2":
					        alerta = '<div class="alert alert-danger alert-icon">No se pudo insertar el usuario.<i class="icon">&#61907;</i></div>';
					        break;
					    case "error3":
					        alerta = '<div class="alert alert-danger alert-icon">No se pudo vincular el titular con su enlace.<i class="icon">&#61907;</i></div>';
					        break;
					    case "error4":
					        alerta = '<div class="alert alert-danger alert-icon">El usuario que intenta insertar ya existe en el sistema.<i class="icon">&#61907;</i></div>';
					        break;
					    case "error5":
					        alerta = '<div class="alert alert-danger alert-icon">Debe completar todos los campos requeridos.<i class="icon">&#61907;</i></div>';
					        break;
					    case "correcto":
					        alerta = '<div class="alert alert-success alert-icon">Inserción correcta!<i class="icon">&#61845;</i></div>';
					        document.getElementById("form_crear").reset();
					        $('#form_crear .chosen-select').val('').trigger('chosen:updated');
					        $('#btn_dir').attr("disabled","disabled");
					        $('input').removeClass('parsley-success');					        
					        break;					    
					}
					if(tipous=="1") $('#modalTemas').modal('show');

					alertas('alertas');
        		
        		//alert(cats);
        		//alert(resp);
        		});
        	}

        	function alertas(contenedor)
        	{
        		$("#"+contenedor).html(alerta);
				$("#"+contenedor).fadeIn(2000);
				$("#"+contenedor).fadeOut(3000);
        	}

        	function carga_titulares(id)
        	{
        		if(id==2 || id==3)
        		{
        			$.post("<?=base_url();?>index.php/control_usuarios/carga_titulares", {id:id}, function(resp){
        				//alert(resp);
        				switch(resp) {
						    case "error1":
						        alerta = '<div class="alert alert-warning alert-icon">Advertencia! Para poder capturar los datos del titular/enlace primero deberá agregar una institución<i class="icon">&#61730;</i></div>';
						        alertas('alertas');
						        break;
						    case "error2":
						        alerta = '<div class="alert alert-danger alert-icon">Oh snap! No existen titulares relacionados a esta institución.<i class="icon">&#61907;</i></div>';
						        	alertas('alertas');
						        break;
						    default:					        					        
						        $('#titulares').html(resp);
						        $('#titularesinst').chosen({'width':'100%','white-space':'nowrap'});
						        break;					    
						}						
        			});        			
        		}
        		else if(id==1)
        		{
        			<?php /* 
        			echo '$.post('<?=base_url();?>index.php/control_usuarios/carga_categorias', {id:id}, function(resp){        				
        				$('#categorias').html(resp);
						$('#categoria').chosen({'width':'100%','white-space':'nowrap'});
        			})
        			alert('bien');
        			$('#categorias').html('<a data-toggle="modal" href="#modalTemas" class="btn btn-sm">Alinear temas</a><br>');
        			';*/
        			?>
        		}
        	}

        	function crea_institucion()
        	{
        		$.post('<?=base_url();?>index.php/control_usuarios/crea_institucion', $('#form_direccion').serialize(), function(resp){
        			//alert(resp);
        			if(resp>0)
        			{
        				alerta = '<div class="alert alert-success alert-icon">Inserción correcta! You successfully read this important alert message.<i class="icon">&#61845;</i></div>';
				        document.getElementById("form_direccion").reset();
				        $('#form_direccion .chosen-select').val('').trigger('chosen:updated');
				        $('#btn_dir').attr("disabled","disabled");
				        $('#idasociado').html(resp);
				        $('input').removeClass('parsley-success');
        			}
        			else
        			{
        				if(resp==0) {alerta = '<div class="alert alert-danger alert-icon">Oh snap! Hubo un error al realizar la inserción<i class="icon">&#61907;</i></div>';}
        				
        				else {alerta = '<div class="alert alert-warning alert-icon">Advertencia! Debe completar todos los campos obligatorios<i class="icon">&#61730;</i></div>';}
        			}
        							
					alertas('alertas');
        		});
        	}   

        	function carga_selectores(selector)
        	{
        		if(selector==1)
        		{
			        if(!$('#check_inst').is(':checked'))
			    	{
				        $.post('<?=base_url();?>index.php/control_usuarios/carga_selectores', {sel:selector}, function(resp){
		        			$('#sel_busqueda').append(resp);
		        			$('#busq_inst').chosen({'width':'100%','white-space':'nowrap'});
		        		})
			    	}
	    			else $('#cont_inst').remove();
        		}
        		else if(selector==2)
        		{
			        if(!$('#check_enlace').is(':checked'))
			    	{
				        $.post('<?=base_url();?>index.php/control_usuarios/carga_selectores', {sel:selector}, function(resp){
		        			$('#sel_busqueda').append(resp);
		        			$('#busq_usuario').chosen({'width':'100%','white-space':'nowrap'});
		        		})
			    	}
	    			else $('#cont_enlace').remove();
        		}
        		else if(selector==3)
        		{
			        if(!$('#check_cat').is(':checked'))
			    	{
				        $.post('<?=base_url();?>index.php/control_usuarios/carga_selectores', {sel:selector}, function(resp){
		        			$('#sel_busqueda').append(resp);
		        			$('#busq_cat').chosen({'width':'100%','white-space':'nowrap'});
		        		})
			    	}
	    			else $('#cont_cat').remove();
        		}  
        		else if(selector==4)
        		{
			        if(!$('#check_tit').is(':checked'))
			    	{
				        $.post('<?=base_url();?>index.php/control_usuarios/carga_selectores', {sel:selector}, function(resp){
		        			$('#sel_busqueda').append(resp);
		        			$('#busq_tit').chosen({'width':'100%','white-space':'nowrap'});
		        		})
			    	}
	    			else $('#cont_tit').remove();
        		}       		
        		/*if($("#check_inst").is(':checked')) {  
		            alert("Está activado");  
		        } else {  
		            alert("No está activado");  
		        } */ 
        	}

        	function busca_datos()
        	{
        		$.post('<?=base_url();?>index.php/control_usuarios/carga_resultado', $('#form_busqueda').serialize(), function(resp){
        			//alert(resp);
        			setTimeout(function(){$('.nav-tabs > .active').next('li').find('a').trigger('click');},500); 
        			$('#resultados').html(resp);
        			$('#example').DataTable( {
						"scrollY":        "350px",
						"scrollCollapse": true,
						"paging":         true
					} );
        		});
        	}

        	function descarga_rep()
        	{
        		var busq_inst = $('#busq_inst').val();
				var busq_usuario = $('#busq_usuario').val();
				var busq_cat = $('#busq_cat').val();
				var busq_tit = $('#busq_tit').val();
        		var par = "&inst="+busq_inst+'&enl='+busq_usuario+'&cat='+busq_cat+'&tit='+busq_tit;

        		var ejecutivo=0;
	       		if($('#check_ejec').is(':checked')) ejecutivo=1;

        		window.open('<?=base_url();?>index.php/control_usuarios/reporte_excel?indicadorid=1&ejecutivo='+ejecutivo+par);
        	}

        	function muestra_datos(tipo,id)
        	{
        		$.post('<?=base_url();?>index.php/control_usuarios/muestra_datos', {tipo:tipo,id:id}, function(resp){
        			//alert("yeah man, el tipo de busqueda es: "+tipo+' y el identificador es: '+id);
        			//alert(resp);
        			$('#modal-body').html(resp);

        		});
        	}

        	function carga_fmod(tipo,id)        	
        	{
        		$.post('<?=base_url();?>index.php/control_usuarios/carga_fmod', {tipo:tipo,id:id}, function(resp){
        			$('#fmod').html(resp);
        		});
        	}

        	function carga_datosel(valor,sel)
        	{
	        		$.post('<?=base_url();?>index.php/control_usuarios/carga_datosel1', {valor:valor}, function(resp){
	        			$('#cont_tit').html(resp);
	        			$('#busq_tit').chosen({'width':'100%','white-space':'nowrap'});
	        		});	        		
        	}

        	function carga_datosel2(valor)
        	{
        		$.post('<?=base_url();?>index.php/control_usuarios/carga_datosel2', {valor:valor}, function(resp){
        			$('#cont_enlace').html(resp);
        			$('#busq_usuario').chosen({'width':'100%','white-space':'nowrap'});
        		});
        	}

        	function obtener_datos()
        	{
        		var nombre = $('#cat_deps option:selected').text();
        		var res = nombre.split("-");

        		$('#nombre_inst').val(res[0].toUpperCase());
				$('#siglas').val(res[1].toUpperCase());
        	}

        	function alinea_temas()
        	{
        		var subtema = $('#subtema').val();
        		$.post('<?=base_url();?>index.php/control_usuarios/alinea_temas', $('#form_temas').serialize(), function(resp){
        			
        			switch(resp) {
						    case "error1":
						        alert("Debe insertar los datos del titular antes de alinear los temas");
						        break;						    
						    case "correcto":
						        $('#modalTemas').modal('hide');
						        alerta = '<div class="alert alert-success alert-icon">Inserción correcta!<i class="icon">&#61845;</i></div>';
								alertas('alertas');
						        break;					    
						}
        		});
        	}

        </script>

    </body>
</html>