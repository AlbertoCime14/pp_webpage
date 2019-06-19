<?php
class Modelo_reporte extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
  		
    }


    public function actividad($id){
      $this->db->select('act.Nombre, act.objetivo_general, act.descripcion, act.fecha_inicio, act.fecha_fin, act.elaboro, act.autorizo, pob.nombre as poblacion, ubp.numero_ubp, ubp.nombre_ubp, num_pp, nombre_pp, d.nombre_dependencia');
      $this->db->from('s0_actividad_estrategica AS act'); 
      $this->db->join('s0_poblacion_objetivo as pob', 'poblacion_objetivo_id_poblacion = pob.id_poblacion','LEFT OUTER');
      $this->db->join('s0_ubp as ubp', 'ubp_id_ubp = id_ubp','INNER');
      $this->db->join('s0_dependencia AS d', 'd.id_dependencia = ubp.dependencia_id_dependencia','INNER');
      $this->db->join('s0_programa_presupuestal pp', 'pp.id_pp = ubp.programa_presupuestal_id_pp','LEFT OUTER');
      $this->db->where('id_actividad_estrategica',$id); 
      $query = $this->db->get();
        
      foreach ($query->result() as $row) {
         $datos[] = [
            'Nombre'           => $row->Nombre, 
            'objetivo_general' => $row->objetivo_general, 
            'descripcion'      => $row->descripcion, 
            'fecha_inicio'     => $row->fecha_inicio, 
            'fecha_fin'        => $row->fecha_fin,  
            'elaboro'          => $row->elaboro, 
            'autorizo'         => $row->autorizo,
            'poblacion'        => $row->poblacion,
            'numero_ubp'       => $row->numero_ubp,
            'nombre_ubp'       => $row->nombre_ubp,
            'num_pp'           => $row->num_pp,
            'nombre_pp'        => $row->nombre_pp,
            'dependencia'      => $row->nombre_dependencia
          ];
      }
      return $datos;
    }


    public function recuperarcombobox($idactividad){
        $this->db->select('eje, tema, objetivo, estrategia, lineaaccion, nombre_ods');
        $this->db->from('s0_actividad_estrategica');
        $this->db->join('s0_cat_lineaaccion_ped', 's0_actividad_estrategica.cat_lineaaccion_ped_lineaaccionid=s0_cat_lineaaccion_ped.lineaaccionid');
        $this->db->join('s0_cat_estrategias_ped', 's0_cat_lineaaccion_ped.cat_estrategias_ped_estrategiaid=s0_cat_estrategias_ped.estrategiaid');
        $this->db->join('s0_cat_objetivos', 's0_cat_estrategias_ped.cat_objetivos_objetivoid=s0_cat_objetivos.objetivoid');
        $this->db->join('s0_cat_temas', 's0_cat_objetivos.cat_temas_temaid=s0_cat_temas.temaid');
        $this->db->join('s0_cat_ejes', 's0_cat_temas.cat_ejes_ejeid=s0_cat_ejes.ejeid');
        $this->db->join('s0_ods', 'id_ods = ods_id_ods');
         $this->db->where('s0_actividad_estrategica.id_actividad_estrategica',$idactividad);
           
          $query = $this->db->get();
          
              foreach ($query->result() as $row) {
                 $datos[] = [
                    'eje' => $row->eje,
                    'tema' => $row->tema,
                    'objetivo' => $row->objetivo,
                    'estrategia' => $row->estrategia,
                    'lineaaccion' => $row->lineaaccion,
                    'nombre_ods' => $row->nombre_ods
                 ];
              }
              return $datos;
      
        }

    public function entregables($id){
        $this->db->select('e.nombre AS entregable, t.nombre_temp, u.nombre as unidad, e.mismo_benef, e.municipalizable, e.presenta_alineacion, e.meta_Anual, e.avace_acumulado, e.monto_ejercido');
        $this->db->from('s0_entregables e');
        $this->db->join('s0_temporalidad t', 't.id_temp = e.temporalidad_id_temp','LEFT OUTER');
        $this->db->join('s0_unidad_medida u', 'u.id_unidad = e.Unidad_medida_id_unidad','LEFT OUTER');
        $this->db->where('e.actividad_estrategica_id_f2', $id);
        $this->db->where('e.activo', 1);
        $query = $this->db->get();
          
        /*foreach ($query->result() as $row) {
           $datos[] = [
              'entregable' => $row->entregable,
              'nombre_temp' => $row->nombre_temp,
              'unidad' => $row->unidad,
              'mismo_benef' => $row->mismo_benef,
              'municipalizable' => $row->municipalizable,
              'presenta_alineacion' => $row->presenta_alineacion,
              'meta_Anual' => $row->meta_Anual,
              'avace_acumulado' => $row->avace_acumulado, 
              'monto_ejercido' => $row->monto_ejercido
           ];
        }
        return $datos;*/
        return $query;
    }

    public function compromiso($id){
        $this->db->select('e.nombre as nom_ent, c.numero_comrpromiso, c.nombre_compromiso, comp.nombre_componente');
        $this->db->from('s0_entregables e');
        $this->db->join('s0_alineacion_entregable ae', 'ae.entregables_id_entregables = e.id_entregables','LEFT OUTER');
        $this->db->join('s0_compromisos c', 'c.id_compromiso = ae.compromisos_id_compromiso','LEFT OUTER');
        $this->db->join('s0_componentes comp','comp.id_componente = ae.componente_id_componente','LEFT OUTER');
        $this->db->where('e.actividad_estrategica_id_f2', $id);
        $this->db->where('e.activo', 1);
        return $query = $this->db->get();
        /*  
              foreach ($query->result() as $row) {
                $datos[] = [
                    'nom_ent' => $row->nom_ent,
                    'numero_comrpromiso' => $row->numero_comrpromiso,
                    'nombre_compromiso' => $row->nombre_compromiso,
                    'nombre_componente' => $row->nombre_componente
                ];
              }
              return $datos;
        */
    }

    public function dependencia($id){
        $this->db->select('nombre_dependencia, dependencia_abrev');
        $this->db->from('s0_dependencia');
        $this->db->join('s0_ubp', 'id_dependencia = dependencia_id_dependencia');
        $this->db->join('s0_actividad_estrategica', 'id_ubp = ubp_id_ubp');
        $this->db->where('id_actividad_estrategica', $id);

        $query = $this->db->get();
          
              foreach ($query->result() as $row) {
                 $datos[] = [
                    'nombre_dependencia' => $row->nombre_dependencia,
                    'dependencia_abrev' => $row->dependencia_abrev
                 ];
              }
              return $datos;
    }
    public function fuente($id){
        $this->db->select('nombre_ff, monto');
        $this->db->from('s0_actividad_estrategica');
        $this->db->join('s0_actividad_fuente', 'id_actividad_estrategica = id_actividad');
        $this->db->join('s0_fuente_financiamiento', 'id_ff = id_fuente');
        $this->db->where('id_actividad_estrategica', $id);

         $query = $this->db->get();
        foreach ($query->result() as $row) {
            $datos[] = [
                'nombre_ff' => $row->nombre_ff,
                'monto' => $row->monto
            ];
          }
          return $datos;
    }

    public function eje($id){
        $this->db->select('eje');
        $this->db->from('s0_cat_ejes');
        $this->db->where('ejeid', $id);

        $query = $this->db->get();

        foreach($query->result() as $row){
            $datos[] = [
                'eje' => $row->eje
            ];
        }
        return $datos;
    }

    public function tema($id){
        $this->db->select('tema');
        $this->db->from('s0_cat_temas');
        $this->db->where('temaid', $id);

        $query = $this->db->get();

        foreach($query->result() as $row){
            $datos[] = [
                'tema' => $row->tema
            ];
        }
        return $datos;
    }
}