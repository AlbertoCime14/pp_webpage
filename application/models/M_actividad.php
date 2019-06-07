<?php
class M_actividad extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
		
    }
    
    public function inset_nombre_actividad(){
        
    } 

	
}