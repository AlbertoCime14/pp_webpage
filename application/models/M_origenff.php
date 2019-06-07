<?php
class M_origenff extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}

    public function recuperacion_origen_ff()
	{	
		$this->db->select('*');
		$this->db->from('origen_fuente');
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
    }


	
	
}