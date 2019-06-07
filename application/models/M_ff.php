<?php
class M_ff extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}

    public function recuperacion_ff()
	{	
		$this->db->select('*');
		$this->db->from('fuente_financiamiento');
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
    }


	
	
}