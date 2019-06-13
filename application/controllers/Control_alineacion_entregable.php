<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_alineacion_entregable extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_alineacion_entregable');
		
		//$this->load->library('session');
	}

	public function getComponente(){
		$this->load->model('M_alineacion_entregable');
		$key = null;
		if(isset($_POST['key'])){
			$key = $_POST['key'];
		}
		$data = $this->M_alineacion_entregable->getComponente($key);
		echo json_encode($data);
	}	

	public function dataEntry(){
		$this->load->model('M_alineacion_entregable');
		if(isset($_POST['key']) && !empty($_POST['key']) && isset($_POST['compromiso']) && !empty($_POST['compromiso']) && isset($_POST['componente']) && !empty($_POST['componente'])){
			$data['entregables_id_entregables'] = $_POST['key'];
			$data['compromisos_id_compromiso'] = $_POST['compromiso'];
			$data['componente_id_componente'] = $_POST['componente'];
			$query = $this->M_alineacion_entregable->dataQuery($_POST['key'])[0];
			if(!isset($query->id_alineacion)){
				$response = $this->M_alineacion_entregable->dataEntry($data);
			}else{
				$response = $this->M_alineacion_entregable->updateRecord($query->id_alineacion, $data);
			}
			echo $response;
		}
	}
	public function updateActividad(){
		if(isset($_POST['autorizo']) && !empty($_POST['autorizo']) && isset($_POST['elaboro']) && !empty($_POST['elaboro']) && !empty($_POST['key']) && isset($_POST['key']))
		{
			$key = base64_decode($_POST['key']);
			$data['elaboro'] = $_POST['elaboro'];
			$data['autorizo'] = $_POST['autorizo'];
			$this->load->model('M_alineacion_entregable');
			$response = $this->M_alineacion_entregable->updateActividad($key, $data);
		}
		echo $response;
	}
	public function getView(){
		$array = null;
		$data['compromiso'] = $this->M_alineacion_entregable->getCompromiso();
		//$key=base64_decode($this->uri->segment(3));
		$key = base64_decode($_GET['key']);
		$data['entregables'] = $this->M_alineacion_entregable->getEntregables($key);
		
		$data['actividad'] = $this->M_alineacion_entregable->getActividad($key);
		foreach ($data['entregables'] as $r) {
			$temp = $this->M_alineacion_entregable->findRecord($r->id_entregables);
			if(!empty($temp[0])){
				$array[] = $temp[0];
			}
		}
		$data['alineacion'] = $array;

		
		$this->load->view('vistaentregable', $data);
	}
}