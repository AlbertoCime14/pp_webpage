<?php
defined('BASEPATH') OR exit('No direct script access allowed');
session_start();
class Control_sitio extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('Model_selectores');
	}
	
	public function index()
	{
		$_SESSION['sis_usuarioid']=91;
		if(isset($_SESSION['sis_usuarioid']))
		{
			$permisos_us = array();
			$_SESSION['idasociado'] = 0;
			$_SESSION['idtit'] = 0;
			$selectores = new Model_selectores();
			$permisos = $selectores->permisos($_SESSION['sis_usuarioid']);

			if($permisos!=false)
			{
				foreach ($permisos as $vper) 
				{
					array_push($permisos_us,$vper->permisoid);
				}
				$_SESSION['permisos'] = $permisos_us;
			}

			$datos['vialidades'] = $selectores->cat_vialidades();
			$datos['asentamiento'] = $selectores->cat_asentamientos();
			$datos['instituciones'] = $selectores->carga_selector(1);
			$datos['categorias'] = $selectores->carga_selector(3);
			$datos['dependencias'] = $selectores->carga_dep();
			
			$this->load->view('index',$datos);
		}
		else
		{
			header ("Location: http://seguimientogabinete.yucatan.gob.mx");	
		}
	}

	public function crea_contacto()
	{
		$this->load->view('crea_contacto');
	}
}
