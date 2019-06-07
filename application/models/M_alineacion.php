<?php
class M_alineacion extends CI_Model {


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

	public function edita_eje($datos,$ejeid)
	{
		$this->db->where('ejeid', $ejeid);
		$query = $this->db->update('cat_ejes_municip', $datos);
		return $query;
	}

	public function elimina_eje($datos,$ejeid)
	{
		$this->db->where('ejeid', $ejeid);
		$query = $this->db->update('cat_ejes_municip', $datos);
		return $query;
	}

	//================================== consultas objetivos ===============================

	public function objetivos_mun()
	{
		$this->db->select('objetivoid,objetivo');
		$this->db->from('cat_objetivos');
		$this->db->where('activo',1);
		
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function carga_objetivos($ejeid=0) 
	{
		$this->db->select('co.objetivoid, co.objetivo');
		$this->db->from('cat_ejes_municip cem');
		$this->db->join('cat_ejes ce','cem.ejeid_ped = ce.ejeid','LEFT');
		$this->db->join('cat_temas ct','ce.ejeid = ct.ejeid','INNER');
		$this->db->join('cat_objetivos co','ct.temaid = co.temaid','INNER');
		$this->db->where('ce.vigente',1);
		$this->db->where('cem.ejeid',$ejeid);

		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function guarda_objetivo($datos)
	{
		$query = $this->db->insert('cat_objetivos_municip',$datos);
		return $query;
	}

	public function tabla_objetivos($municipioid=0)
	{
		$this->db->select('com.objetivoid,com.objetivo as obj_pmd,co.objetivo as obj_ped,cem.eje as eje_pmd,ce.eje as eje_ped');
		$this->db->from('cat_objetivos_municip com');
		$this->db->join('cat_ejes_municip cem','com.ejeid = cem.ejeid','LEFT');
		$this->db->join('cat_ejes ce','cem.ejeid_ped = ce.ejeid','LEFT');
		$this->db->join('cat_objetivos co','com.objetivoid_ped = co.objetivoid','LEFT');
		$this->db->where('com.activo',1);
		$this->db->where('cem.activo',1);
		$this->db->where('cem.municipioid',$municipioid);

		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function elimina_obj($datos,$objid)
	{
		$this->db->where('objetivoid', $objid);
		$query = $this->db->update('cat_objetivos_municip', $datos);
		return $query;
	}

	public function obj_alinead($objid)
	{
		$this->db->select('com.objetivoid,com.objetivo,com.ejeid,com.objetivoid_ped');
		$this->db->from('cat_objetivos_municip com');		
		$this->db->where('com.objetivoid',$objid);

		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function actualiza_objetivo($datos,$objid)
	{
		$this->db->where('objetivoid', $objid);
		$query = $this->db->update('cat_objetivos_municip', $datos);
		return $query;
	}

	//=================login
	public function datos_municipio($mun)
	{
		$this->db->select('municipioid,municipio');
		$this->db->from('cat_municipios');
		$this->db->like('municipio', $mun);

		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function fields()
	{
		$fields = $this->db->list_fields('cat_indicadores');

		
	}
}