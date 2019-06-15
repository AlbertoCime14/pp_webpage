<?php
class M_municipio extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
	}
	
	public function listar_municipios($key){
        $sql = "SELECT m.*, IFNULL(muni.monto,'') AS meta
        FROM s0_cat_municipios m
        LEFT OUTER JOIN s0_municipalizacion muni ON muni.id_municipio = m.id_municipio AND muni.id_entregable = '.$key.'";

        return $this->db->query($sql);
        
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

  

    public function actualizar_registro($tabla,$id,$datos)
    {
      $this->db->where('id_entregables', $id);
      $this->db->update($tabla, $datos);
      $_SESSION['sql'] = $this->db->last_query();
    }

    

	
}