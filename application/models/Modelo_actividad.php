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
			$this->db->join('s0_ubp','s0_ubp.id_ubp=s0_actividad_estrategica.ubp_id_ubp');
			$where='dependencia_id_dependencia='.$_SESSION['id_dependencia'].' AND activo=1';
			$this->db->order_by("id_actividad_estrategica", "desc");
			 $this->db->where($where);
			
			
        $query = $this->db->get();
		
        foreach ($query->result() as $row) {
           $datos[] = [
              'id'        => $row->id_actividad_estrategica,
              'Nombre'    => $row->Nombre               
            ];
        }
        return $datos;
    }
  public function agregaractividad($nombre,$ubp_id_ubp){
    $fecha_captura = date("Y-m-d");
    $data = array(
        'Nombre' => $nombre,
        'fecha_captura' => $fecha_captura,
        'ubp_id_ubp' =>$ubp_id_ubp
    );

  $this->db->insert('s0_actividad_estrategica', $data);
  }
  
  public function eliminaractividad($data,$id_actividad_estrategica)
  {
   	$this->db->where('id_actividad_estrategica', $id_actividad_estrategica);
	$this->db->update('s0_actividad_estrategica', $data);   
  }
  public function recuperareje(){
            $this->db->select('*');
            $this->db->from('s0_cat_ejes');
        $this->db->join('s0_tbl_eje_dependencia','s0_tbl_eje_dependencia.id_cat_eje=s0_cat_ejes.ejeid');
		$this->db->order_by("eje", "ASC");
         $this->db->where('s0_tbl_eje_dependencia.id_institucion',  $_SESSION['id_dependencia'] );

        $query = $this->db->get();
    
        foreach ($query->result() as $row) {
           $datos[] = [
              'ejeid'        => $row->ejeid,
              'eje'          => $row->eje,               
            ];
        }
        return $datos;
  }
  public function actualizaractividad($data,$id){
$this->db->where('id_actividad_estrategica', $id);
$this->db->update('s0_actividad_estrategica', $data);

  }
public function recuperaractividad($idactividad){
  $this->db->select('*');
  $this->db->from('s0_actividad_estrategica'); 
  $this->db->where('id_actividad_estrategica',$idactividad); 
    $query = $this->db->get();
    
        foreach ($query->result() as $row) {
           $datos[] = [
              'Nombre'                             => $row->Nombre, 
              'objetivo_general'                   => $row->objetivo_general, 
              'descripcion'                        => $row->descripcion, 
              'monto_propio'                       => $row->monto_propio, 
              'monto_otro'                         => $row->monto_otro, 
              'fecha_inicio'                       => $row->fecha_inicio, 
              'fecha_fin'                          => $row->fecha_fin, 
              'fecha_captura'                      => $row->fecha_captura, 
              'cat_lineaaccion_ped_lineaaccionid'  => $row->cat_lineaaccion_ped_lineaaccionid, 
              'ubp_id_ubp'                         => $row->ubp_id_ubp, 
              'poblacion_objetivo_id_poblacion'    => $row->poblacion_objetivo_id_poblacion, 
              'origen_fuente_id_origen'            => $row->origen_fuente_id_origen, 
              'fuente_financiamiento_id_ff'        => $row->fuente_financiamiento_id_ff, 

            ];
        }
        return $datos;

  }
  /**********  Recupera los combox previamente guardados del la bd *************/
  public function recuperarcombobox($idactividad){
  $this->db->select('*');
  $this->db->from('s0_actividad_estrategica');
  $this->db->join('s0_cat_lineaaccion_ped','s0_actividad_estrategica.cat_lineaaccion_ped_lineaaccionid=s0_cat_lineaaccion_ped.lineaaccionid');
  $this->db->join('s0_cat_estrategias_ped','s0_cat_lineaaccion_ped.cat_estrategias_ped_estrategiaid=s0_cat_estrategias_ped.estrategiaid');
  $this->db->join('s0_cat_objetivos','s0_cat_estrategias_ped.cat_objetivos_objetivoid=s0_cat_objetivos.objetivoid');
    $this->db->join('s0_cat_temas','s0_cat_objetivos.cat_temas_temaid=s0_cat_temas.temaid');
   $this->db->join('s0_cat_ejes','s0_cat_temas.cat_ejes_ejeid=s0_cat_ejes.ejeid');
   $this->db->where('s0_actividad_estrategica.id_actividad_estrategica',$idactividad);
     
    $query = $this->db->get();
    
        foreach ($query->result() as $row) {
           $datos[] = [
           // 'id_actividad_estrategica' =>$row->id_actividad_estrategica,
              'ejeid'           => $row->ejeid,
              'temaid'           => $row->temaid,
              'objetivoid'           => $row->objetivoid,
              'estrategiaid'           => $row->estrategiaid,
              'lineaaccionid'           => $row->lineaaccionid

            ];
        }
        return $datos;

  }

}
