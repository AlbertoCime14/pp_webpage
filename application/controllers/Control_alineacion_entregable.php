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
			$query = $this->M_alineacion_entregable->dataQuery($_POST['key']);
			if(!isset($query->id_alineacion)){
				$response = $this->M_alineacion_entregable->dataEntry($data);
			}else{
				$response = $this->M_alineacion_entregable->updateRecord($query->id_alineacion, $data);
			}
			echo $response;
		}
	}
}