<?php
class M_alineacion_entregable extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
    }
    
   	public function getCompromiso(){
   		$this->db->select('*');
		$this->db->from('s0_compromisos');
		$this->db->order_by('nombre_compromiso');
   		$query = $this->db->get();
   		return $query->result();
   	}

	
   	public function getComponente($key){
   		$this->db->select('*');
   		$this->db->from('s0_componentes');
   		$this->db->where('compromisos_id_compromiso', $key);
   		$query = $this->db->get();
   		return $query->result();
   	}

	   public function getEntregables($key){
		$this->db->select('*');
	 $this->db->from('s0_entregables');
	 $where='actividad_estrategica_id_f2='.$key.' AND activo=1';
	 $this->db->where($where);
	 $this->db->order_by('id_entregables');
	  $query = $this->db->get();
		return $query->result();   
	}

   	public function dataEntry($data){
   		$this->db->insert('s0_alineacion_entregable', $data);
        return $this->db->insert_id();
   	}

   	public function dataQuery($key){
   		$this->db->select('id_alineacion');
   		$this->db->from('s0_alineacion_entregable');
   		$this->db->where('entregables_id_entregables', $key);
   		$query = $this->db->get();
   		return $query->result();
   	}
   	public function updateRecord($key, $data){
   		$this->db->where('id_alineacion', $key);
   		$this->db->update('s0_alineacion_entregable', $data);
        return $this->db->affected_rows();
	   }
	   public function findRecord($key){
		$this->db->select('*');
		$this->db->from('s0_alineacion_entregable');
		$this->db->where('entregables_id_entregables', $key);
		$query = $this->db->get();
		return $query->result();
	}
	public function updateActividad($key, $data){
		$this->db->where('id_actividad_estrategica', $key);
		$this->db->update('s0_actividad_estrategica', $data);
	 return $this->db->affected_rows();
	}
	public function getActividad($key){
		$this->db->select('elaboro, autorizo');
		$this->db->from('s0_actividad_estrategica');
		$this->db->where('id_actividad_estrategica', $key);
		$query = $this->db->get();
		return $query->result()[0];
	}
}