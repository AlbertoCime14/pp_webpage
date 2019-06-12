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
		 $data['mydata'] = $this->M_entregable->listar_entregables(); 
		
		 //$data['mydata'] = $this->M_entregable->listar_entregables();
		 //$data['mydata']= $this->M_unidad_medida->listar_unidad();
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
	//==================recupera informacion si existe informacion guardada de la actividad
	public function mostardatosactividad(){
		$idactividad=$this->uri->segment(3);
		 $data = $this->Modelo_actividad->recuperaractividad($idactividad); 
		 $datos=json_encode($data);
		echo $datos;
	}
		public function mostarcomboactividad(){
		$idactividad=$this->uri->segment(3);
		 $data = $this->Modelo_actividad->recuperarcombobox($idactividad); 
		 $datos=json_encode($data);
		echo $datos;
	}
	//==========================fin ================================//
	public function actualizar_actividad(){
					//actualiza los datos de la actividad
			$id_actividad_estrategica = $this->input->post('id_actividad_estrategica');
			//	$Nombre = $this->input->post('Nombre');
			$objetivo_general = $this->input->post('objetivo_general');
			$descripcion = $this->input->post('descripcion');
			$monto_propio = $this->input->post('monto_propio');
			$monto_otro = $this->input->post('monto_otro');
			$fecha_inicio = $this->input->post('fecha_inicio');
			$fecha_fin = $this->input->post('fecha_fin');
			$elaboro = $this->input->post('elaboro');
			$autorizo = $this->input->post('autorizo');
			$cat_lineaaccion_ped_lineaaccionid = $this->input->post('cat_lineaaccion_ped_lineaaccionid');
			$ubp_id_ubp = $this->input->post('ubp_id_ubp');
			$poblacion_objetivo_id_poblacion = $this->input->post('poblacion_objetivo_id_poblacion');
			$origen_fuente_id_origen = $this->input->post('origen_fuente_id_origen');
			$fuente_financiamiento_id_ff= $this->input->post('fuente_financiamiento_id_ff');
			    $data = array(
	        'id_actividad_estrategica' => $id_actividad_estrategica,
	     		//   'Nombre' => $Nombre,
	        'objetivo_general' => $objetivo_general,
	        'descripcion' => $descripcion,
	        'monto_propio' => $monto_propio,
	        'monto_otro' => $monto_otro,
	        'fecha_inicio' => $fecha_inicio,
	        'fecha_fin' => $fecha_fin,
	        'elaboro' => $elaboro,
	        'autorizo' => $autorizo,
	        'cat_lineaaccion_ped_lineaaccionid' => $cat_lineaaccion_ped_lineaaccionid,
	        'ubp_id_ubp' => $ubp_id_ubp,
	        'poblacion_objetivo_id_poblacion' => $poblacion_objetivo_id_poblacion,
	        'origen_fuente_id_origen' => $origen_fuente_id_origen,
	        'fuente_financiamiento_id_ff'=>$fuente_financiamiento_id_ff
	        );
			$this->Modelo_actividad->actualizaractividad($data,$id_actividad_estrategica);
	}
	public function editar_entregables(){
	$this->load->view('masterpage/head');
	$this->load->view('editar_entregables');
	$this->load->view('masterpage/footer');
	}
	public function example(){
		 $data = $this->Modelo_actividad->listar_actividades(); 
		$datos=json_encode($data);
		echo $datos;
	}
	
}
