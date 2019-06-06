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


$route['copledey'] = 'control_sitio/copledey';
$route['ceieg'] = 'control_sitio/ceieg';
$route['avisos'] = 'control_sitio/avisos';
$route['armonizacion_contable'] = 'control_sitio/armonizacion_contable';
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

$route['tabla_eje'] = 'control_alineacion/act_tabla_eje';
$route['guarda_eje'] = 'control_alineacion/guarda_eje';
$route['actualiza_eje'] = 'control_alineacion/actualizar_eje';

$route['edita_eje'] = 'control_alineacion/edita_eje';
$route['elimina_eje'] = 'control_alineacion/elimina_eje';
$route['ejes_transv'] = 'control_alineacion/ejes_transv';

//====================== objetivos ===============
$route['objetivos_ped'] = 'control_alineacion/carga_objetivos';
$route['guarda_obj'] = 'control_alineacion/guarda_alinea_obj';
$route['elimina_obj'] = 'control_alineacion/elimina_objetivo';
$route['tabla_obj'] = 'control_alineacion/act_tabla_obj';
$route['consulta_obj'] = 'control_alineacion/consulta_objetivo';
$route['actualiza_obj'] = 'control_alineacion/actualizar_objetivo';

//==================== inicio de sesión ===========
$route['login'] = 'control_alineacion/inicia_sesion';


