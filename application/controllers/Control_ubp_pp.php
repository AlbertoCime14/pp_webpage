<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_ubp_pp extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_ubp');
		
		
    }
    public function recuperar_ubp(){
        $_SESSION['id_dependencia'] = $dependencia_id;
        $model = new M_eje_ped();
		
		$datos = $model->recuperarcion_ubp($dependencia_id);
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->id_ubp.'-'.$datos[0]->numero_ubp;
		}		

		echo $json;
	}
	public function recuperar_pp(){
		$ubpid = $this->input->post('ubpid', TRUE);
        $model = new M_ubp_pp();
		
		$datos = $model->recuperacion_pp($ubpid);
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->id_ubp.'-'.$datos[0]->numero_ubp.'-'.$datos[0]->nombre_ubp.'-'.$datos[0]->id_pp.'-'.$datos[0]->nombre_pp.'-'.$datos[0]->num_pp;
		}		

		echo $json;
	}
	



	
}