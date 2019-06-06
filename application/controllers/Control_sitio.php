<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_sitio extends CI_Controller {

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
		$this->load->model('M_alineacion');
		//$this->load->library('session');
	}

	public function index()
	{
		$this->load->view('index');
	}

	public function copledey()
	{
		$this->load->view('copledey');
	}

	public function ceieg()
	{
		$this->load->view("ceieg");
	}

	public function avisos() 
	{
		$this->load->view("avisos");
	}

	public function armonizacion_contable()
	{
		$this->load->view("armonizacion");
	}

	public function alinea_ejes()
	{
		//$clave_us = $this->session->userdata('clave_mun');
		//$usuario = $this->session->userdata();
		if(!isset($_SESSION['clave_mun']) || $_SESSION['clave_mun']=="")
			header('Location: '.base_url().'iniciar');
		else 
		{
			$ejes = new M_alineacion();

			$datos['ejes'] = $ejes->ejes();
			$datos['ejes_mun'] = $ejes->tabla_ejes($_SESSION['clave_mun']);
			$datos['fields'] = $ejes->fields();
			$this->load->view('alinea_ejes',$datos);			
		}			
	}

	public function alinea_objetivos()
	{
		//$clave_us = $this->session->userdata('clave_mun');
		//$usuario = $this->session->userdata();
		if(!isset($_SESSION['clave_mun']) || $_SESSION['clave_mun']=="")
			header('Location: '.base_url().'iniciar');
		else 
		{
			$objetivos = new M_alineacion();

			$datos['ejes_mun'] = $objetivos->ejes_alineados();
			$datos['objetivos_mun'] = $objetivos->tabla_objetivos($_SESSION['clave_mun']);
			$datos['fields'] = $objetivos->fields();
			$this->load->view('alinea_objetivos',$datos);
		}
	}

	public function login()
	{
		//$clave_us = $this->session->userdata('clave_mun');
		//$nom_us =  $this->session->userdata('nom_mun');
		if(isset($_SESSION['clave_mun']) && $_SESSION['clave_mun']!="")
			header('Location: '.base_url().'ejes');
		else
			$this->load->view('login');
	}

	public function cerrar()
	{
		//$this->session->sess_destroy();
		session_destroy();
		echo 'correcto';
	}

	public function estrategias()
	{
		$this->load->view('estrategias');
	}

	public function lineas_accion()
	{
		$this->load->view('lineas_accion');
	}
}
