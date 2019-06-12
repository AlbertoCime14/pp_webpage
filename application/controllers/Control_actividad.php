<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_actividad extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');		
		$this->load->model('M_general');
		
	}

	function eliminar_actividad()
	{
		if(isset($_POST['id']) && !empty($_POST['id']))
		{
			$id = $this->input->post('id');
			$model = new M_general();

			$where['id_actividad_estrategica'] = $id;
			if($model->desactivar_registro('s0_actividad_estrategica',$where) > 0) echo '0';
			else echo '1';
		}
	} 
}