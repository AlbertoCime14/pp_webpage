<?php
class M_poblacion extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}

    public function recuperacion_poblacion()
	{	
		$this->db->select('*');
		$this->db->from('poblacion_objetivo');
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
    }
   

	
	
}