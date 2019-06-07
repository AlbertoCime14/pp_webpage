<?php
class M_eje_ped extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}
	
	public function ejes_alineados_dependencia($dependencia_id=0)
	{	
		$this->db->select('*');
		$this->db->from('cat_ejes');
		$this->db->join('tbl_eje_dependencia', 'cat_indicadores_ped.objetivoid=cat_objetivos.objetivoid');
		$this->db->where('activo',1);
		if($ejeid>0) $this->db->where('ejeid',$ejeid);
		
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}
    
   

	
}