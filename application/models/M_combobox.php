<?php
class M_combobox extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);

		
	}
		//Busqueda de la politica publica
	    public function recuperarpp($ideje){
        $this->db->select('*');
        $this->db->from('s0_cat_temas');
        $this->db->where('cat_ejes_ejeid',$ideje);
		$this->db->order_by("tema", "ASC");
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'temaid'       => $row->temaid , 
              'tema'       => $row->tema ,  
            ];
        }
        return $datos;
    }
    		//Busqueda de los objetivos mediante el id temas
	    public function recuperarobjetivo($idtema){
        $this->db->select('*');
        $this->db->from('s0_cat_objetivos');
		$this->db->order_by("objetivo", "ASC");
        $this->db->where('cat_temas_temaid',$idtema);
		
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'objetivoid'       => $row->objetivoid , 
              'objetivo'       => $row->objetivo ,  
            ];
        }
        return $datos;
    }
    //Busqueda de estrategias mediante el id objetivo
    	public function recuperarestrategias($idobjetivo){
        $this->db->select('*');
        $this->db->from('s0_cat_estrategias_ped');
		$this->db->order_by("estrategia", "ASC");
        $this->db->where('cat_objetivos_objetivoid',$idobjetivo);
		
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'estrategiaid'       => $row->estrategiaid , 
              'estrategia'       => $row->estrategia ,  
            ];
        }
        return $datos;
    }
    //Busqueda de la linea de accion mediante el id estrategia
        public function recuperarlineasaccion($idestrategia){
        $this->db->select('*');
        $this->db->from('s0_cat_lineaaccion_ped');
		$this->db->order_by("lineaaccion", "ASC");
        $this->db->where('cat_estrategias_ped_estrategiaid',$idestrategia);
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'lineaaccionid'       => $row->lineaaccionid , 
              'lineaaccion'       => $row->lineaaccion ,  
            ];
        }
        return $datos;
    }
       //Busqueda del ODS mediante el id estrategia
        public function recuperarods($idestrategia){
        $this->db->select('*');
        $this->db->from('s0_ods');
         $this->db->join('s0_cat_lineaaccion_ped','s0_cat_lineaaccion_ped.ods_id_ods=s0_ods.id_ods');
        $this->db->where('s0_cat_lineaaccion_ped.lineaaccionid',$idestrategia);
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             //'nombre_ods'       => $row->nombre_ods , 
              'numero_ods'       => $row->numero_ods ,  
            ];
        }
        return $datos;
    }
      //Busqueda del la poblacion objetivo
      public function recuperarpoblacionobj(){
        $this->db->select('*');
        $this->db->from('s0_poblacion_objetivo');
		$this->db->order_by("nombre", "ASC");
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'id_poblacion'       => $row->id_poblacion , 
              'nombre'       => $row->nombre ,  
            ];
        }
        return $datos;
    }
          //Busqueda de la fuente de financiamiento
      public function recuperarfuente(){
        $this->db->select('*');
        $this->db->from('s0_origen_fuente');
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'id_origen'       => $row->id_origen , 
              'nombre'       => $row->nombre ,  
            ];
        }
        return $datos;
    }
    	//Busqueda del nombre de la fuente de financiamiento
    public function recuperarnombrefuente(){
        $this->db->select('*');
        $this->db->from('s0_fuente_financiamiento');
		$this->db->order_by("nombre_ff", "ASC");
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'id_ff'       => $row->id_ff , 
              'nombre_ff'       => $row->nombre_ff ,  
            ];
        }
        return $datos;
    }
     //Busqueda del los ubp
    public function recuperarubp(){
        $this->db->select('*');
        $this->db->from('s0_ubp');
        $this->db->where('dependencia_id_dependencia',$_SESSION['id_dependencia']);
		$this->db->order_by("numero_ubp", "desc");
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'id_ubp'       => $row->id_ubp , 
              'numero_ubp'       => $row->numero_ubp ,
            ];
        }
        return $datos;
    }
      public function recuperarnombreubp($id_ubp){
        $this->db->select('*');
        $this->db->from('s0_ubp');
        $this->db->where('id_ubp',$id_ubp);
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
              'nombre_ubp'       => $row->nombre_ubp ,
            ];
        }
        return $datos;
    }
        public function recuperarplanpresupuestal($id_ubp){
        $this->db->select('*');
        $this->db->from('s0_programa_presupuestal');
         $this->db->join('s0_ubp','s0_ubp.programa_presupuestal_id_pp=s0_programa_presupuestal.id_pp');
        $this->db->where('id_ubp',$id_ubp);
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
              'num_pp'       => $row->num_pp ,
              'nombre_pp'    => $row->nombre_pp ,
            ];
        }
        return $datos;
    }

}