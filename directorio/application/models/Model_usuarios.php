<?php 
class Model_usuarios extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->db1 = $this->load->database('default',TRUE);
		
	}
	
	public function inserta_usuario($datos,$tipo_usuario)
	{		
		switch ($tipo_usuario) {
			case '1':
				$this->db1->insert('titular', $datos);				
				return $this->db1->insert_id();
				break;
			case '2':			
			case '3':
				$this->db1->insert('cat_enlace', $datos);
				return $this->db1->insert_id();
				break;
		}
		//return $this->db1->insert_id();		
	}

	public function inserta_direccion($datos)
	{
		$this->db1->insert('cat_datos_dependencia',$datos);
		return $this->db1->insert_id();

		//$this->db1->where('titularid',$idtitular);
		//return $this->db1->update('titular',$datos);
	}

	public function inserta_categoria($datos_cat)
	{
		return $this->db1->insert('conf_categorias',$datos_cat);
	}

	public function carga_titulares($idinst)
	{
		$this->db1->select('titularid,nombres,pape,sape');
		$this->db1->from('titular');
		$this->db1->where('institucionid',$idinst);

		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}

	public function inserta_conf($datos_conf)
	{
		return $this->db1->insert('conf_enlaces',$datos_conf);
	}

	public function verifica_esistencia($nombre,$pape,$sape,$correoinst,$tipo_usuario)
	{
		/*Titular = 1, Asistente = 2, Enlace = 3 */
		
		if($tipo_usuario>1) { $this->db1->select('asistenteid'); $this->db1->from('cat_enlace');}
		else {$this->db1->select('titularid'); $this->db1->from('titular');}
		$this->db1->where('nombres',$nombre);
		$this->db1->where('pape',$pape);
		$this->db1->where('sape',$sape);

		$query = $this->db1->get();
		if($query->num_rows() > 0) return true;
		else return false;
	}

	public function carga_resultado($busq_inst=0,$busq_usuario=0,$busq_cat=0,$busq_tit=0)
	{
		$this->db1->select('cd.institucionid,cd.institucion, cd.siglas, ct.titularid, ct.nombres, ct.pape, ct.sape, ct.correoins, ce.asistenteid, ce.nombres as nombrese, ce.pape as papee, ce.sape as sapee, cc.categoriaid, ce.correoins as correoinse');
		$this->db1->from('cat_datos_dependencia cd');
		$this->db1->join('titular ct','cd.institucionid = ct.institucionid','LEFT');
		$this->db1->join('conf_enlaces cfe','ct.titularid = cfe.titularid','LEFT');
		$this->db1->join('cat_enlace ce','cfe.asistenteid = ce.asistenteid','LEFT');
		$this->db1->join('conf_categorias cc','ct.titularid = cc.titularid','LEFT');

		if($busq_inst>0) $this->db1->where('cd.institucionid',$busq_inst);
		if($busq_usuario>0) $this->db1->where('ce.asistenteid',$busq_usuario);
		if($busq_tit>0) $this->db1->where('ct.titularid',$busq_tit);
		if($busq_cat>0) $this->db1->where('cc.categoriaid',$busq_cat);


		$query = $this->db1->get();

		if($query!=false) return $query->result();
		else return false;
	}

	public function muestra_dato($id,$tipo)
	{
		switch ($tipo) {
			case '1':
				$this->db1->select('cd.institucionid,cd.institucion,cd.siglas,cd.tipoinstitucion,cd.tipo_vialidad,cv.tipovialidad as tipov,cd.nombre_vialidad,cd.num_exterior,cd.alfanumerico_exterior,cd.num_interior,cd.alfanumerico_interior,cd.tipo_cruzamiento1,cd.nombre_cruzamiento1,cd.tipo_cruzamiento2,cd.nombre_cruzamiento2,cd.tipo_asentamiento,ca.tipoasentamiento,cd.nombre_asentamiento');
				$this->db1->from('cat_datos_dependencia cd');
				$this->db1->join('cat_tipo_vialidades cv','cd.tipo_vialidad = cv.tipovialidadid','INNER');
				$this->db1->join('cat_tipo_asentamientos ca','cd.tipo_asentamiento = ca.tipoasentamientoid','INNER');
				$this->db1->where('cd.institucionid',$id);
				break;
			case '2':
				$this->db1->select('titularid,nombres,pape,sape,cargo,lada,telefono,extension,celular,correoper,correoins,institucionid,acceso');
				$this->db1->from('titular');
				$this->db1->where('titularid',$id);
				break;
			case '3':
				$this->db1->select('asistenteid,nombres,pape,sape,cargo,lada,telefono,extension,celular,correoper,correoins,acceso,tipo');
				$this->db1->from('cat_enlace');
				$this->db1->where('asistenteid',$id);
				break;
		}

		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}
	//----------------------------modificacion de las tablas----------------------------------------------------
	public function modifica_inst($datos,$id_inst)
	{
		$this->db1->where('institucionid',$id_inst);
		return $this->db1->update('cat_datos_dependencia',$datos);
	}

	public function modifica_tit($datos,$titid)
	{
		$this->db1->where('titularid',$titid);
		return $this->db1->update('titular',$datos);
	}

	public function modifica_asist($datos,$asistid)
	{
		$this->db1->where('asistenteid',$asistid);
		return $this->db1->update('cat_enlace',$datos);
	}
	//--------------------------------- reporte de la busqueda -------------------------------------------------

	public function genera_reporte($inst=0,$enl=0,$cat=0,$tit=0)
	{
		$this->db1->select('cd.institucion,cd.siglas,cd.tipoinstitucion,cd.tipo_vialidad,cv.tipovialidad,cd.nombre_vialidad,cd.num_exterior,cd.alfanumerico_exterior,cd.num_interior,cd.alfanumerico_interior,cd.tipo_cruzamiento1,cv2.tipovialidad as tipocruz1,cd.nombre_cruzamiento1,cd.tipo_cruzamiento2,cv3.tipovialidad as tipocruz2,cd.nombre_cruzamiento2,cd.tipo_asentamiento,ca.tipoasentamiento,cd.nombre_asentamiento,t.nombres as tnombres,t.pape as tpape,t.sape as tsape,t.cargo as tcargo,t.lada as tlada,t.telefono as ttelefono,t.extension as textension,t.celular as tcelular,t.correoper as tcorreoper,t.correoins as tcorreoins,ce.nombres,ce.pape,ce.sape,ce.cargo,ce.lada,ce.telefono,ce.extension,ce.celular,ce.correoper,ce.correoins,ce.tipo,ccd.subtema,ccd.seccion');
		$this->db1->from('cat_datos_dependencia cd');
		$this->db1->join('titular t','cd.institucionid = t.institucionid','LEFT');
		$this->db1->join('conf_enlaces coe','t.titularid = coe.titularid','LEFT');
		$this->db1->join('cat_enlace ce','coe.asistenteid = ce.asistenteid','LEFT');
		$this->db1->join('conf_categorias coc','t.titularid = coc.titularid','LEFT');
		$this->db1->join('cat_subtemas ccd','coc.categoriaid = ccd.subtemaid','LEFT');
		$this->db1->join('cat_tipo_vialidades cv', 'cd.tipo_vialidad = cv.tipovialidadid', 'INNER');
		$this->db1->join('cat_tipo_vialidades cv2', 'cd.tipo_cruzamiento1 = cv2.tipovialidadid', 'INNER');
		$this->db1->join('cat_tipo_vialidades cv3', 'cd.tipo_cruzamiento2 = cv3.tipovialidadid', 'INNER');
		$this->db1->join('cat_tipo_asentamientos ca', 'cd.tipo_asentamiento = ca.tipoasentamientoid', 'INNER');

		if($inst>0 && $inst!="") $this->db1->where("cd.institucionid",$inst);
		if($enl>0 && $enl !="") $this->db1->where("ce.asistenteid",$enl);
		if($cat>0 && $cat !="") $this->db1->where("ccd.subtemaid",$cat);
		if($tit>0 && $tit !="") $this->db1->where("t.titularid",$tit);

		$query = $this->db1->get();
		if($query!=false) return $query->result();
		else return false;
	}

	//--------------------------------------------------------------------------------------

	public function inserta_temas($datos)
	{
		return $this->db1->insert('conf_categorias',$datos);
	}

	public function inserta_etiqueta($val)
	{
		return $this->db1->insert('conf_etiquetas',$val);
	}
}
?>