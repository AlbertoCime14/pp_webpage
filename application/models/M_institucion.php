<?php
class M_institucion extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}

	public function ejes($transv=0)
	{	
		$this->db->select('ejeid,eje');
		$this->db->from('cat_ejes');
		$this->db->where('activo',1);
		$this->db->where('vigente',1);
		$this->db->where('ejeid<',17);
		/*if($transv==0) 
		{
			$this->db->where('ejeid>',7);
			$this->db->where('ejeid<',12);
		}
		elseif($transv==1)
		{
			$this->db->where('ejeid>',11);	
			$this->db->where('ejeid<',17);
		}*/
		
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}

	public function ejes_alineados($ejeid=0)
	{	
		$this->db->select('ejeid,eje,ejeid_ped,transversal');
		$this->db->from('cat_ejes_municip');
		$this->db->where('activo',1);
		if($ejeid>0) $this->db->where('ejeid',$ejeid);
		
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
	}

	public function guarda_eje($datos)
	{
		$query = $this->db->insert('cat_ejes_municip', $datos);
		return $query;
	}

	public function tabla_ejes($municipioid)
	{
		$this->db->select('cem.ejeid,cem.eje,cem.transversal,cem.municipioid,cem.ejeid_ped,ce.ejeid as ejeidped,ce.eje as eje_ped');
		$this->db->from('cat_ejes_municip cem');
		$this->db->join('cat_ejes ce','cem.ejeid_ped = ce.ejeid','LEFT');
		$this->db->where('cem.municipioid',$municipioid);
		$this->db->where('cem.activo',1);

		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	

	//================================== consultas objetivos ===============================



	public function guarda_objetivo($datos)
	{
		$query = $this->db->insert('cat_objetivos_municip',$datos);
		return $query;
	}


	//=================login
	    public function datos_dependencia($dependencia)
	{
		$this->db->select('id_dependencia,dependencia_abrev');
		$this->db->from('dependencia');
		$this->db->like('dependencia_abrev', $dependencia);

		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	
}