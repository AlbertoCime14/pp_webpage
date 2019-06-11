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
        $this->db->where('s0_ods.id_ods',$idestrategia);
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
             'nombre_ods'       => $row->nombre_ods , 
              'numero_ods'       => $row->numero_ods ,  
            ];
        }
        return $datos;
    }
	
	
}