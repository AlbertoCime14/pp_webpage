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
		$this->db->join('tbl_eje_dependencia', 'tbl_eje_dependencia.id_cat_eje=cat_ejes.ejeid');
		$this->db->where("id_institucion='$dependencia_id'");
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}
    
	public function temas_Alineados($ideje)
	{	
		$this->db->select('*');
		$this->db->from('cat_temas');
		$this->db->where("cat_ejes_ejeid='$ideje'");
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}
	public function objetivos_alineados($temaid)
	{	
		$this->db->select('*');
		$this->db->from('cat_objetivos');
		$this->db->where("cat_temas_temaid='$temaid'");
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}
	public function estrategias_alineadas($objetivoid)
	{	
		$this->db->select('*');
		$this->db->from('cat_estrategias_ped');
		$this->db->where("cat_objetivos_objetivoid='$objetivoid'");
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}
	public function lineas_accion_alineadas($lineaaccionid)
	{	
		$this->db->select('*');
		$this->db->from('ods');
		$this->db->where("cat_lineaaccion_ped_lineaacionid='$lineaaccionid'");//validar que este sea el campo correcto que le pertence al id linea de accion
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}
}