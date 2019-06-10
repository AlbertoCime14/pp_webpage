<?php
class Modelo_actividad extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
    }
    
    public function listar_actividades(){
        $this->db->select('*');
        $this->db->from('s0_actividad_estrategica');
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
              'id'        => $row->id_actividad_estrategica,
              'Nombre'    => $row->Nombre,
              'Ejemplo1'  => 1,
               
            ];
        }
        return $datos;
    }
  public function agregaractividad($nombre){
    $fecha_captura = date("Y-m-d");
    $data = array(
        'Nombre' => $nombre,
        'fecha_captura' => $fecha_captura
    );

  $this->db->insert('s0_actividad_estrategica', $data);
  } 
}