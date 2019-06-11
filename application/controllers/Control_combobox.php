<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_combobox extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->model('M_combobox');
	}
	//Busqueda de la politica publica
	public function busquedapp(){
	$ideje = $this->uri->segment(3);
	$data['pp'] = $this->M_combobox->recuperarpp($ideje);
	echo json_encode($data);
	}
	public function busquedaobjetivo(){
			$idtema = $this->uri->segment(3);
	$data['obj'] = $this->M_combobox->recuperarobjetivo($idtema);
	echo json_encode($data);
	}
}