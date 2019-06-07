<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_origenff extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_origenff');
		
		
    }
    public function recuperar_poblacion(){
       
        $model = new M_eje_ped();
		
		$datos = $model->recuperacion_origen_ff();
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->id_origen.'-'.$datos[0]->nombre;
		}		

		echo $json;
	}

}