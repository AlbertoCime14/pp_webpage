<?php 
class Model_selectores extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->db1 = $this->load->database('default',TRUE);
		
	}

	public function carga_dep()
	{
		$this->db1->select('dependenciaid,dependencia,nombre_dep');
		$this->db1->from('cat_dependencias');
		$this->db1->where('activo',1);
		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}
	
	public function cat_vialidades()
	{
		$this->db1->select('tipovialidadid,tipovialidad');
		$this->db1->from('cat_tipo_vialidades');
		$query = $this->db1->get();

		if($query!=false) return $query->result();
		else return false;
	}

	public function cat_asentamientos()
	{
		$this->db1->select('tipoasentamientoid,tipoasentamiento');
		$this->db1->from('cat_tipo_asentamientos');

		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function carga_selector($sel)
	{
		switch ($sel) {
			case 1:
				$this->db1->select('institucionid,institucion');
				$this->db1->from('cat_datos_dependencia');				
				break;
			case 2:
				$this->db1->select('asistenteid,nombres,pape,sape');
				$this->db1->from('cat_enlace');
				break;
			case 3:
				//$this->db1->select('categoriadosid,categoriados,numcategoria');
				//$this->db1->from('cat_categoriados');
				$this->db1->select('subtemaid,subtema,seccionid,seccion');
				$this->db1->from('cat_subtemas');
				$this->db1->order_by('seccion','ASC');
				break;
			case 4:
				$this->db1->select('titularid,nombres,pape,sape');
				$this->db1->from('titular');
				break;
		}

		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;

	}	

	public function carga_datosel($id)
	{
		$this->db1->select('titularid,nombres,pape,sape');
		$this->db1->from('titular');
		$this->db1->where('institucionid',$id);

		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function carga_datosel2($id)
	{
		$this->db1->select('ce.asistenteid,ce.nombres,ce.pape,ce.sape');
		$this->db1->from('cat_enlace ce');
		$this->db1->join('conf_enlaces cfe','ce.asistenteid = cfe.asistenteid','INNER');
		$this->db1->where('cfe.titularid',$id);
		
		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}	

	public function permisos($usuarioid)
	{
		$this->db1->select('permisoid,tipoacceso');
		$this->db1->from('conf_permisos');
		$this->db1->where('usuarioid',$usuarioid);

		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}
}
?>