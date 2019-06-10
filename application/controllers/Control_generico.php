<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_generico extends CI_Controller {

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
		session_start();
		$this->load->helper('url');
		//$this->load->model('M_alineacion');
		$this->load->model('Modelo_actividad');
		$this->load->model('M_entregable');
		$this->load->model('M_unidad_medida');
		//$this->load->library('session');
	}

	public function index()
	{
		$this->load->view('login');
	}
	public function listar_actividades(){
		// $data = $this->Modelo_actividad->listar_actividades(); 
		 $data['mydata'] = $this->Modelo_actividad->listar_actividades();
		$this->load->view('masterpage/head');
		$this->load->view('listar_actividades',$data);
		$this->load->view('masterpage/footer');

	}
	public function listar_entregable(){
		// $data = $this->Modelo_actividad->listar_actividades(); 
		
		 //$data['mydata'] = $this->M_entregable->listar_entregables();
		 $data['mydata']= $this->M_unidad_medida->listar_unidad();
		 $this->load->view('masterpage/head');
		 $this->load->view('editar_entregables',$data);
		 $this->load->view('masterpage/footer');

	}
	public function agregaractividad(){
		$nombre = $this->input->post('nombre');
		$this->Modelo_actividad->agregaractividad($nombre);

	}
	public function editar_actividad(){
	 $dataeje['ejes'] = $this->Modelo_actividad->recuperareje();
	$this->load->view('masterpage/head');
	$this->load->view('editar_actividad',$dataeje);	
	$this->load->view('masterpage/footer');
	}
	public function editar_entregables(){
	$this->load->view('masterpage/head');
	$this->load->view('editar_entregables');
	$this->load->view('masterpage/footer');
	}
	public function example(){
		 $data = $this->Modelo_actividad->listar_actividades(); 
		 print_r($data);
	}
	
}
