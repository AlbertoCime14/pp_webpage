<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_poblacion extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_poblacion');
		
		
    }
    public function recuperar_poblacion(){
       
        $model = new M_eje_ped();
		
		$datos = $model->recuperacion_poblacion();
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->id_poblacion.'-'.$datos[0]->nombre;
		}		

		echo $json;
	}
	
	



	
}