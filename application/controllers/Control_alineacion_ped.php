<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_alineacion extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_eje_ped');
		
		//$this->load->library('session');
	}



	/*public function ejemplo()
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
	}*/
	public function consultar_eje_dependencia()
	{
		$_SESSION['id_dependencia'] = $dependencia_id;
		$eje = new M_eje_ped();
		$datos = $eje->ejes_alineados_dependencia($dependencia_id);	
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->ejeid.'-'.$datos[0]->eje;
			echo $json;
		}else{
			echo "error en la consulta de los ejes";
		}	

	}

	public function consulta_tema_ped()
	{
		$ejeid = $this->input->post('ejeid', TRUE);//este input es el que contiene los id de los ejes para poder ahcer la consulta a la base de datos
		$eje = new M_eje_ped();
		$datos = $eje->temas_Alineados($ejeid);
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->temaid.'-'.$datos[0]->tema;
		}		

		echo $json;


	}



	
	public function recuper_objetivos()
	{
		$temaid = $this->input->post('temaid', TRUE);//este input recupera el id del tema
		$model = new M_eje_ped();
		
		$datos = $model->objetivos_alineados($temaid);
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->objetivoid.'-'.$datos[0]->objetivo;
		}		

		echo $json;
	}


	//=============================== funciones alineacion objetivos

	public function recuperar_estrategia()
	{
		$objetivoid = $this->input->post('objetivoid', TRUE);//este input recupera el id del objetivo
		$model = new M_eje_ped();
		
		$datos = $model->estrategias_alineadas($objetivoid);
		$json = "";
		if($datos!=false)
		{
			

			$json = $datos[0]->estrategiaid.'-'.$datos[0]->estrategia;
		}		

		echo $json;
	}
	public function recuperar_linea_accion()
	{
		$estrategiaid = $this->input->post('estrategiaid', TRUE);//este input recupera el id de la estrategia
		$model = new M_eje_ped();
		$datos = $model->lineas_accion_alineadas($estrategiaid);
		$json = "";
		if($datos!=false) 
		{
			$json = $datos[0]->lineaaccionid.'-'.$datos[0]->lineaaccion;
		}

		echo $json;
	}
	public function recuperar_ods()
	{
		$lineaaccionid = $this->input->post('lineaaccionid', TRUE);//este input recupera el id de la linea de accion
		$model = new M_eje_ped();
		$datos = $model->lineas_accion_alineadas($lineaaccionid);
		$json = "";
		if($datos!=false) 
		{
			$json = $datos[0]->id_ods.'-'.$datos[0]->numero_ods;
		}

		echo $json;
	}
	


	/*public function act_tabla_obj()
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
	}*/

	

	
}