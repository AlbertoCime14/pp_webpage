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
	public function busquedaestrategias(){
		$idobjetivo=$this->uri->segment(3);
		$data['cat_estrategia']=$this->M_combobox->recuperarestrategias($idobjetivo);
		echo json_encode($data);
	}
	public function busquedalineaaccion(){
		$idestrategia=$this->uri->segment(3);
		$data['cat_linea']=$this->M_combobox->recuperarlineasaccion($idestrategia);
		echo json_encode($data);
	}
	public function busquedaods(){
		$idlineaaccion=$this->uri->segment(3);
		$data['ods']=$this->M_combobox->recuperarods($idlineaaccion);
		echo json_encode($data);
	}
	public function busquedapoblacionobj(){
		$data['poblacion']=$this->M_combobox->recuperarpoblacionobj();
		echo json_encode($data);
	}
	public function busquedafuente(){
	$data['fuente']=$this->M_combobox->recuperarfuente();
	echo json_encode($data);
	}
		public function busquedanombrefuente(){
	$data['nombrefuente']=$this->M_combobox->recuperarnombrefuente();
	echo json_encode($data);
	}
	public function busquedaubp(){
	$data['ubp']=$this->M_combobox->recuperarubp();
	echo json_encode($data);
	}
	
	
}