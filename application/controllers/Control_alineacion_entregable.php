<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_alineacion extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_alineacion_entregable');
		
		//$this->load->library('session');
	}



	
}