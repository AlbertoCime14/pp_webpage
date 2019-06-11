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
		$id_actividad = $this->input->post('id_Actividad');
		$datos = $model->agregar_entregable($nombre,$id_actividad);
		
	}
	public function recuperar_periodicidad(){
		//$ideje = $this->uri->segment(3);
		$data['pp'] = $this->M_entregable->recuperar_periodicidad();
		echo json_encode($data);
	}
	public function recuperar_unidad(){
		//$ideje = $this->uri->segment(3);
		$data['pp'] = $this->M_entregable->recuperar_u();
		echo json_encode($data);
	}




	
}