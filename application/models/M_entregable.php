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
              'id_entregables'        => $row->id_entregables,
              'nombre'    => $row->nombre,
              'mismo_benef'    => $row->mismo_benef,
              'municipalizable'    => $row->municipalizable,
              'presenta_alineacion'    => $row->presenta_alineacion,
              'meta_Anual'    => $row->meta_Anual,
              'avace_acumulado'    => $row->avace_acumulado,
              'monto_ejercido'    => $row->monto_ejercido,
              'actividad_estrategica_id_f2'    => $row->actividad_estrategica_id_f2,
              'Unidad_medida_id_unidad'    => $row->Unidad_medida_id_unidad,
              'temporalidad_id_temp'    => $row->temporalidad_id_temp,
               
            ];
        }
        return $datos;
    }
  public function agregar_entregable($nombre,$id_actividad){
		//	$id_actividad=1;
			$data = array(
				'nombre' => $nombre,
				'actividad_estrategica_id_f2' =>$id_actividad
			);
			

		$this->db->insert('s0_entregables', $data);
  } 
  public function recuperar_periodicidad(){
    $this->db->select('*');
    $this->db->from('s0_temporalidad');
   
    $query = $this->db->get();

    foreach ($query->result() as $row) {
       $datos[] = [
         'id_temp'       => $row->id_temp , 
          'nombre_temp'       => $row->nombre_temp ,  
        ];
    }
    return $datos;
}
public function recuperar_u(){
  $this->db->select('*');
  $this->db->from('s0_unidad_medida');
 
  $query = $this->db->get();

  foreach ($query->result() as $row) {
     $datos[] = [
       'id_unidad'       => $row->id_unidad , 
        'nombre'       => $row->nombre ,  
      ];
  }
  return $datos;
}

	
}