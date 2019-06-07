<?php
class M_ubp_pp extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}

    public function recuperarcion_ubp($dependenciaid)
	{	
		$this->db->select('*');
		$this->db->from('ubp');
		$this->db->where("dependencia_id_dependencia='$dependenciaid'");//validar que este sea el campo correcto que le pertence al id linea de accion
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
    }
    public function recuperacion_pp($ubpid){
        $this->db->select('*');
		$this->db->from('ubp');
		$this->db->join('programa_presupuestal', 'programa_presupuestal.id_pp=ubp.programa_presupuestal_id_pp');
		$this->db->where("id_ubp='$ubpid'");
		$query = $this->db->get();
		if($query!=false) return $query->result();
		else return("false");
    }

	
	
}