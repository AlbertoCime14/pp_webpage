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
$route['actividades/add'] = 'control_generico/agregaractividad';
$route['actividades/editar/(:any)'] = 'control_generico/editar_actividad/';
$route['actividades/entregables/(:any)'] = 'control_generico/editar_entregables/';

$route['actividadess'] = 'control_generico/example';

//==================Recuperar combobox anidados===============//
//=======================cat temas ====================//
$route['actividades/pp/(:any)'] = 'control_combobox/busquedapp/';
//======================cat objtivos ===============//
$route['actividades/obj/(:any)'] = 'control_combobox/busquedaobjetivo/';