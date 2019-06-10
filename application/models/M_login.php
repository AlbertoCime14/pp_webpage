<?php
class M_login extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}


	//=================login
	    public function datos_dependencia($dependencia)
	{
		$this->db->select('id_dependencia,dependencia_abrev');
		$this->db->from('s0_dependencia');
		$this->db->like('dependencia_abrev', $dependencia);

		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	
}