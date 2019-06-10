<?php
class M_entregable extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}
	
	public function listar_entregables(){
        $this->db->select('*');
        $this->db->from('s0_entregables');
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
              'id'        => $row->id_entregables,
              'Nombre'    => $row->nombre,
              'Nombre'    => $row->nombre,
              'Nombre'    => $row->nombre,
              'Nombre'    => $row->nombre,
              'Nombre'    => $row->nombre,
              'Nombre'    => $row->nombre,
              'Nombre'    => $row->nombre,
               
            ];
        }
        return $datos;
    }
  public function agregar_entregable($nombre){
			$id_actividad=1;
			$data = array(
				
				'nombre' => $nombre,
				'actividad_estrategica_id_f2' =>$id_actividad
			);
			

		$this->db->insert('s0_entregables', $data);
	} 


	
}