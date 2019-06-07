<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_poblacion extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_ff');
		
		
    }
    public function recuperar_ff(){
       
        $model = new M_ff();
		
		$datos = $model->recuperacion_ff();
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->id_ff.'-'.$datos[0]->num_ff.'-'.$datos[0]->nombre_ff.'-'.$datos[0]->tipo_fuente_financiamiento_id_tipo;
		}		

		echo $json;
	}
	
	



	
}