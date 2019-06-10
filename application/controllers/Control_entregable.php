<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_entregable extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_entregable');
		
		//$this->load->library('session');
	}

	public function agregar_entregable(){
		$model = new M_entregable();
		$nombre = $this->input->post('nombre');
		$datos = $model->agregar_entregable($nombre);
		
		
		

	}




	
}