<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_alineacion extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_alineacion');
		$this->load->model('M_institucion');
		//$this->load->library('session');
	}

	public function guarda_eje()
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

	public function edita_eje()
	{
		$ejeid = $this->input->post('ejeid', TRUE);
		$eje_mun = $this->input->post('eje_mun', TRUE);
		$transv = $this->input->post('transv', TRUE);
		$eje_ped = $this->input->post('eje_ped', TRUE);

		$ejes = new M_alineacion();
		$datos = array('eje' => $eje_mun, 'activo' => 1, 'vigente' => 1, 'ejeid_ped' => $eje_ped, 'transversal' => $transv);	
		
		$edita = $ejes->edita_eje($datos,$ejeid);
		echo $edita;
	}	

	public function elimina_eje()
	{
		$ejeid = $this->input->post('ejeid', TRUE);
		
		$ejes = new M_alineacion();
		$datos = array('activo' => 0);
		
		$elimina = $ejes->elimina_eje($datos,$ejeid);
		echo $elimina;
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
	public function inicia_sesion()
	{
		$depen = $this->input->post('user', TRUE);
		$pass = $this->input->post('pass', TRUE);

		$model = new M_institucion();
		$dependencia = $model->datos_dependencia($depen);
		$dependencia_id = $dependencia[0]->id_dependencia;
		$depennom = $dependencia[0]->dependencia_abrev;

		

		$claves = array("GQDJPLU91","L@9YLYVVT","2XKZQBNWT","HM9LHCN0P","4UCNLODB7","9UV8U1VNA","L7K4WZI5W","G9ML139BN","VJZMW91GO","8@OSKITVQ","GXARVHWU5","84IUWVFMM","1A2ZSZ0WH","7UQF5UOBT","RPR8TS1T2","F4I9AFMC@","VNJQD9A4A","DL7SF3169","OV2EQCX4E","2S1ALEZA4","1XIVQQ1MY","RKGAEUZGY","HSA8P505V","IHSV85L5O","VLV10I10F","9SP159B3C","LLUDNXA0D","ASZ3FX1E2","QKUUHOME4","0RS9RLJHC","NEHHCYU9F","1IJQ1QX6Y","VZ6L33O85","SLLBMZBPF","0978@IVXV","F7@PXF@RL","4DR@0N4WT","ZCZ792D4G","3N@T96LLY","GF9DBVVLZ","E3A5Z5LC3","@@ATRFTLV","FZ5ZOELDJ","HV@Q9JFK3","8@HJT2DGL","DBPNWOMQA","V5C595HMD","TUTLLAZ9D","T1HZVCJL6","QZRFDSVNE","W6F1LO9A0","B8ESLVM54","O24V45VLI","SGZLVQ@92","LTLS4H93@","Z110OFGUO","TGYLCDSA8","XR08YFFAE","94I5GN1PY","P6KW5XX51","IZM8M8MZD","AYHZK1@C0","BC6ZGRIYV","H00WLE1@V","4O72ZVLWF","M3LZ9A0QL","7LHLNJOL9","Y923WNEDX","QJ2F62KY7","W7T3L9MK1","1L1XI7YQ1","L75Z9Y8N7","J5DVAEIDV","EVJ@W1O4U","CHDCARVI2","N4KXNTCZF","VMXP34VYC","GESC5KEKI","5340OCPMG","F9541TAF0","LZXZWZ8HN","949Q4Q1DN","1R7KTRVSL","9OE1YHB3R","H9KZSHB5L","BXKL5R7K2","QLML9FFP1","J7QUQM30D","J15ICB69D","1Z5TSF@NN","EIE3ODTFP","ZZE83A98W","2I680R52N","9SACRN8E0","7RC1V9Y1T","8RISM29H6","4687ZOR4W","V3@ZX0SLF","4H9SAVC65","9UO5QZIVI","S5EYO9QLX","1EEXV49@B","LFUCE5F1L","IWZCZ3WX1","E4XZM6KAD","C4Z8RF1XB");
		if($pass == $claves[($dependencia_id-1)]) 
		{
			$datos = array('id_dependencia'=>$dependencia_id, 'dependencia_abrev'=>$depennom);
			//$this->session->set_userdata($datos);
			$_SESSION['id_dependencia'] = $dependencia_id;
			$_SESSION['dependencia_abrev'] = $depennom;
			echo 'correcto';
		}
		else echo 'incorrecto';
	}
}