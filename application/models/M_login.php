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

	public function datos_usuario($where)
	{
		$this->db->select('u.id_usuario, u.usuario, d.id_dependencia, d.dependencia_abrev');
		$this->db->from('s0_usuarios u');
		$this->db->join('s0_dependencia d','d.id_dependencia = u.id_dependencia','INNER');
		$this->db->where('u.activo', 1);
		$this->db->where($where);

		$query = $this->db->get();
		return $query;
	}

	
}