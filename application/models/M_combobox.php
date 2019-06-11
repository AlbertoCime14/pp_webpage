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
	
	
}