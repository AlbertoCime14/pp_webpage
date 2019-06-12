<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'control_sitio';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;



$route['ejes'] = 'control_sitio/alinea_ejes';
$route['objetivos'] = 'control_sitio/alinea_objetivos';
$route['iniciar'] = 'control_sitio/login';
$route['cerrar'] = 'control_sitio/cerrar';

$route['estrategias'] = 'control_sitio/estrategias';
$route['lineas_accion'] = 'control_sitio/lineas_accion';



/*
$route[''] = '';
$route[''] = '';
*/
$route['consulta'] = 'control_alineacion/consulta';




//====================== objetivos ===============
$route['objetivos_ped'] = 'control_alineacion/carga_objetivos';

$route['tabla_obj'] = 'control_alineacion/act_tabla_obj';
$route['consulta_obj'] = 'control_alineacion/consulta_objetivo';


//==================== inicio de sesión ===========
$route['login'] = 'Control_login/inicia_sesion';

//===============Control de actividades=========
$route['actividades'] = 'control_generico/listar_actividades';
//=======================manda a la vista para guardar la nueva informacion=============//
$route['actividades/add'] = 'control_generico/agregaractividad';
//=================para listar la actividad que se desea actualizar===============//
$route['actividades/editar/(:any)'] = 'control_generico/editar_actividad/';
//=================sirve para actulizar la actividad===============//
$route['actividades/actualizar'] = 'control_generico/actualizar_actividad/';
//=============================sirve para recuperar la informacion de la actividad
$route['actividades/recupera_actividad/(:any)'] = 'control_generico/mostardatosactividad';
$route['actividades/recupera_combox/(:any)'] = 'control_generico/mostarcomboactividad';

$route['actividades/entregables/(:any)'] = 'control_generico/editar_entregables/';




//==================Recuperar combobox anidados===============//
//=======================cat temas ====================//
$route['actividades/cat_temas/(:any)'] = 'control_combobox/busquedapp/';
//======================cat objtivos ===============//
$route['actividades/obj/(:any)'] = 'control_combobox/busquedaobjetivo/';
//=======================cat estategias =================//
$route['actividades/cat/(:any)'] = 'control_combobox/busquedaestrategias/';
//========================cat lineas de accion ped ==================//
$route['actividades/cat_linea/(:any)'] = 'control_combobox/busquedalineaaccion/';
//========================recuperar ods ==================//
$route['actividades/ods/(:any)'] = 'control_combobox/busquedaods/';
//========================recuperar poblacion objetivo ==================//
$route['actividades/poblacionobj'] = 'control_combobox/busquedapoblacionobj/';
//========================recuperar fuente ==================//
$route['actividades/fuente'] = 'control_combobox/busquedafuente/';
//========================recuperar nombre de la fuente ==================//
$route['actividades/nombrefuente'] = 'control_combobox/busquedanombrefuente/';
//========================recuperar ubp de la institucion ==================//
$route['actividades/ubp'] = 'control_combobox/busquedaubp/';
//========================recuperar nombre de la ubp ==================//
$route['actividades/nombreubp/(:any)'] = 'control_combobox/buscarnombreubp/';
//========================recuperar nombre de la ubp ==================//
$route['actividades/pp/(:any)'] = 'control_combobox/buscarplan/';


//===============Control de entregables=========
$route['actividades/entregables/(:any)'] = 'control_generico/listar_entregable/';
$route['entregables/add'] = 'Control_entregable/agregar_entregable';

