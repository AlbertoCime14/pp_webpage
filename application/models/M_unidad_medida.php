<?php
class M_unidad_medida extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}
	
	public function listar_unidad(){
        $this->db->select('*');
        $this->db->from('s0_unidad_medida');
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
              'id_unidad'        => $row->id_unidad,
              'codigo'    => $row->codigo,
              'nombre'    => $row->nombre
             
               
            ];
        }
        return $datos;
    }
 


	
}