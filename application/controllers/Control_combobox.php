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
	public function buscarnombreubp(){
	$idubp=$this->uri->segment(3);
	$data['nombreubp']=$this->M_combobox->recuperarnombreubp($idubp);
	echo json_encode($data);
	}
	public function buscarplan(){
	$idubp=$this->uri->segment(3);
	$data['plan']=$this->M_combobox->recuperarplanpresupuestal($idubp);
	echo json_encode($data);
	}
	public function buscarfuentefinanciamiento(){
	$idactividad=$this->uri->segment(3);
	$data['plan']=$this->M_combobox->recuperarfuentesfinanciamiento($idactividad);
	echo json_encode($data);
	}
	public function agregarfuentefinanciamiento()
	{
		$id_actividad = $this->input->post('id_actividad');
		$id_fuente = $this->input->post('id_fuente');
		$monto = $this->input->post('monto');
		$data = array(
		'id_actividad' => $id_actividad,
		'id_fuente' => $id_fuente,
		'monto' => $monto
		);
		$this->M_combobox->agregarfuentefinanciamiento($data);
	}
	public function eliminarfuentefinancimiento()
	{
		$id_actividad_fuente = $this->input->post('id_actividad_fuente');
		$this->M_combobox->eliminarfuentefinanciamiento($id_actividad_fuente);
	}
	
}