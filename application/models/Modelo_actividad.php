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
        $this->db->join('s0_ubp','s0_ubp.id_ubp=s0_actividad_estrategica.ubp_id_ubp','left');
        $this->db->join('s0_programa_presupuestal','s0_programa_presupuestal.id_pp=s0_ubp.programa_presupuestal_id_pp','left');
        $this->db->join('s0_dependencia','s0_dependencia.id_dependencia=s0_ubp.dependencia_id_dependencia','left');
         $this->db->join('s0_tbl_eje_dependencia','s0_tbl_eje_dependencia.id_institucion=s0_dependencia.id_dependencia','left');
        $this->db->join('s0_cat_ejes','s0_cat_ejes.ejeid=s0_tbl_eje_dependencia.id_cat_eje','left');

        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
              'id'        => $row->id_actividad_estrategica,
              'Nombre'    => $row->Nombre,
              'Eje'       => $row->eje ,
              'PP'        => $row->nombre_pp ,
              'UBP'       => $row->nombre_ubp ,
               
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
  public function recuperareje(){
            $this->db->select('*');
            $this->db->from('s0_cat_ejes');
        $this->db->join('s0_tbl_eje_dependencia','s0_cat_ejes.ejeid=s0_tbl_eje_dependencia.id_cat_eje','left');
         $this->db->where('id_institucion',1);

        $query = $this->db->get();
    
        foreach ($query->result() as $row) {
           $datos[] = [
              'ejeid'        => $row->ejeid,
              'eje'          => $row->eje,               
            ];
        }
        return $datos;

  }

}