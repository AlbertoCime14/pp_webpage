<?php
class M_entregable extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}
	
	public function listar_entregables($key){
        $this->db->select('*');
        $this->db->from('s0_entregables');
        $where='actividad_estrategica_id_f2='.$key.' AND activo=1';
        $this->db->where($where);
        $this->db->order_by('id_entregables');
        $query = $this->db->get();
        $datos = array();
		
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
    public function listar_entregable($id){
      $this->db->select('*');
      $this->db->from('s0_entregables');
      $this->db->where('id_entregables',$id);
      $query = $this->db->get()->row();
      $datos = array();
      foreach($query as $campo => $value)
      {
        $datos[$campo] = $value;
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
    return $this->db->insert_id();
  } 
      public function recuperar_periodicidad(){
        
        $sql = "SELECT *
            FROM s0_temporalidad s ORDER BY `nombre_temp` ASC";

        return $this->db->query($sql);
    }
    public function recuperar_u(){
      
          $sql = "SELECT *
                FROM s0_unidad_medida m";

            return $this->db->query($sql);
    }

    public function actualizar_registro($tabla,$id,$datos)
    {
      $this->db->where('id_entregables', $id);
      $this->db->update($tabla, $datos);
      $_SESSION['sql'] = $this->db->last_query();
    }

    public function desactivar_entregable($data,$id_entregables)
  {
   	$this->db->where('id_entregables', $id_entregables);
	$this->db->update('s0_entregables', $data);   
  }

  function metas_municipales($id_entregable){
    $sql = "SELECT m.id_municipio, m.municipio, IFNULL(muni.monto,'') AS meta
            FROM s0_cat_municipios m
            LEFT OUTER JOIN s0_municipalizacion muni ON muni.id_municipio = m.id_municipio AND muni.id_entregable = $id_entregable
            ORDER BY m.municipio";
    return $this->db->query($sql);
  }

  function datos_entregable($id_entregable){
    $this->db->select('e.id_entregables, e.nombre, e.meta_Anual, u.nombre AS unidad_medida',FALSE);
    $this->db->from('s0_entregables e');
    $this->db->join('s0_unidad_medida u','u.id_unidad = e.Unidad_medida_id_unidad','LEFT OUTER');
    $this->db->where('e.id_entregables',$id_entregable);

    return $this->db->get()->row();
  }

	
}