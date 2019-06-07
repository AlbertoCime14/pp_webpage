<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_alineacion extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_actividad');
		
		//$this->load->library('session');
	}

	public function crear_Actividad()
	{

		$eje_mun = $this->input->post('eje_mun',TRUE);
		$transversal = $this->input->post('transv',TRUE);
		$eje_ped = $this->input->post('eje_ped',TRUE);
		if($transversal=="Transversal") $transv = 1;
		else $transv = 0;
		$datos = array('eje' => $eje_mun,
			'activo' => 1,
			'municipioid' => $_SESSION['clave_mun'],
			'vigente' => 1,
			'ejeid_ped' => $eje_ped,
			'transversal' => $transv);
		
		$ejes = new M_alineacion();
		$guarda = $ejes->guarda_eje($datos);

		echo $guarda;
	}

	public function act_tabla_eje()
	{
		$ejes = new M_alineacion();
		$ejes_mun = $ejes->tabla_ejes($_SESSION['clave_mun']);
		echo '<table class="table table-striped" id="tab_ejes"> 
          <thead> 
            <tr> 
              <th>Num</th>
              <th>Eje</th>
              <th>Tipo de Eje</th>
              <th>Alineación PED</th>
              <th>Opciones</th>
            </tr> 
          </thead> 
          <tbody>';
          if($ejes_mun!=false)
          {
          	foreach ($ejes_mun as $vejem) {

          		if($vejem->transversal==1) $tipo_eje = "Transversal";
	            elseif($vejem->transversal==0)
	            {
	              if($vejem->ejeid_ped>0) $tipo_eje = "Sectorial";
	              else $tipo_eje = "No aplica";
	            }

          		echo '<tr>
			              <th scope="row">'.$vejem->ejeid.'</th> 
			              <td>'.$vejem->eje.'</td>
			              <td>'.$tipo_eje.'</td>
			              <td>'.$vejem->eje_ped.'</td> 
			              <td><a href="javascript:" onclick="editar('.$vejem->ejeid.');"><i class="fa fa-edit"></i></a> <a href="javascript:" onclick="elimina_eje('.$vejem->ejeid.');"><i class="fa fa-trash-o"></i></a></td>
			            </tr>';
          	}
          }
          echo '</tbody>
        </table>';
	}

	public function consulta()
	{
		$ejeid = $this->input->post('ejeid', TRUE);
		$eje = new M_alineacion();
		$datos = $eje->ejes_alineados($ejeid);
		$json = "";
		if($datos!=false)
		{
			if($datos[0]->transversal==1) $transv = "Transversal";
            elseif($datos[0]->transversal==0)
            {
              if($datos[0]->ejeid_ped>0) $transv = "Sectorial";
              else $transv = "No aplica";
            }

			$json = $datos[0]->ejeid.'-'.$datos[0]->eje.'-'.$datos[0]->ejeid_ped.'-'.$transv;
		}		

		echo $json;


	}

	

	

	public function ejes_transv()
	{
		$op = $this->input->post('op', TRUE);
		$model = new M_alineacion();
		$ejes = $model->ejes($op);
		if($ejes!=false)
		{
			foreach ($ejes as $veje) {
				echo '<option value="'.$veje->ejeid.'">'.$veje->eje.'</option>';
			}
		}
	}


	//=============================== funciones alineacion objetivos

	public function carga_objetivos()
	{
		$id = $this->input->post('id', TRUE);
		$model = new M_alineacion();
		$objetivos = $model->carga_objetivos($id);
		if($objetivos!=false) 
		{
			foreach ($objetivos as $vobj) {
				echo '<option value="'.$vobj->objetivoid.'">'.$vobj->objetivo.'</option>';
			}
		}
	}

	public function guarda_alinea_obj()
	{
		$obj_mun = $this->input->post('obj_mun', TRUE);
		$eje_pmd = $this->input->post('eje_pmd', TRUE);
		$obj_ped = $this->input->post('obj_ped', TRUE);

		$model = new M_alineacion();
		$datos = array('objetivo' => $obj_mun, 'ejeid' => $eje_pmd, 'objetivoid_ped' => $obj_ped);
		$guarda = $model->guarda_objetivo($datos);
		echo $guarda;
	}

	public function elimina_objetivo()
	{
		$objid = $this->input->post('objid', TRUE);
		$model = new M_alineacion();
		$datos = array('activo'=>0);
		$elimina = $model->elimina_obj($datos,$objid);
		echo $elimina;
	}

	public function act_tabla_obj()
	{
		$obj = new M_alineacion();
		$obj_mun = $obj->tabla_objetivos($_SESSION['clave_mun']);
		echo '<table class="table table-striped" id="tabla_objetivos"> 
          <thead> 
            <tr> 
              <th>Num</th>
              <th>Objetivo PMD</th>
              <th>Eje PMD</th>
              <th>Eje PED</th>
              <th>Objetivo PED</th>
              <th>Opciones</th>
            </tr> 
          </thead> 
          <tbody>';
          if($obj_mun!=false)
          {
          	foreach ($obj_mun as $vobjm) {            
              echo '<tr>
                    <th scope="row">'.$vobjm->objetivoid.'</th> 
                    <td>'.$vobjm->obj_pmd.'</td>
                    <td>'.$vobjm->eje_pmd.'</td>
                    <td>'.$vobjm->eje_ped.'</td>
                    <td>'.$vobjm->obj_ped.'</td>
                    <td><a href="javascript:" onclick="editar_obj('.$vobjm->objetivoid.');"><i class="fa fa-edit"></i></a> <a href="javascript:" onclick="elimina_obj('.$vobjm->objetivoid.');"><i class="fa fa-trash-o"></i></a></td>
                  </tr>';          
            }
          }
          echo '</tbody>
        </table>';
	}

	public function consulta_objetivo()
	{
		$objid = $this->input->post('objid', TRUE);
		$model = new M_alineacion();
		$obj = $model->obj_alinead($objid);
		$json = "";
		if($obj!=false) 
		{
			$json = $obj[0]->objetivoid.'-'.$obj[0]->objetivo.'-'.$obj[0]->ejeid.'-'.$obj[0]->objetivoid_ped;
		}

		echo $json;
	}

	public function actualizar_objetivo()
	{
		$objid = $this->input->post('objid', TRUE);
		$obj_mun = $this->input->post('obj_mun', TRUE);
		$eje_pmd = $this->input->post('eje_pmd', TRUE);
		$obj_ped = $this->input->post('obj_ped', TRUE);

		$model = new M_alineacion();
		$datos = array('objetivo' => $obj_mun, 'ejeid' => $eje_pmd, 'objetivoid_ped' => $obj_ped);

		$act = $model->actualiza_objetivo($datos,$objid);
		echo $act;
	}


	//================================== claves usuarios ==========================
	
}