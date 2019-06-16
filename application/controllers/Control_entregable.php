<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_entregable extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_entregable');	
		//$this->load->library('session');
	}

	function selector_periodicidad($seleccionado=0,$id_entregable)
	{
		$model = new M_entregable();
		$query = $model->recuperar_periodicidad();
		$periodicidad = $query->result();
		$html = '';

		$html.='<select name="cbo_periodicidad_'.$id_entregable.'" id="cbo_periodicidad_'.$id_entregable.'" class="form-control">';
		foreach ($periodicidad as $p){
			$selected = ($p->id_temp == $seleccionado) ? 'selected':'';
			$html.='<option value="'.$p->id_temp.'" '.$selected.'>'.$p->nombre_temp.'</option>';
		}  
		$html .= '</select>'; 

		return $html;
	}
	function selector_unidad($seleccionado=0,$id_entregable)
	{
		$model = new M_entregable();
		$query2=$model->recuperar_u();
		$unidad = $query2->result();
		$html = '';

		$html.='<select name="cbo_unidad'.$id_entregable.'" id="cbo_unidad_'.$id_entregable.'" class="form-control">';
		foreach ($unidad as $u){
			$selected = ($u->id_unidad == $seleccionado) ? 'selected':'';
			$html.='<option value="'.$u->id_unidad.'" '.$selected.'>'.$u->nombre.'</option>';
		}  
		$html .= '</select>'; 

		return $html;
	}

	public function agregar_entregable(){
	
		$model = new M_entregable();
		$nombre = $this->input->post('nombre');
		$num_entregables = $this->input->post('numEntregables');
		$id_actividad = $this->input->post('id_Actividad');
		$id_entregable = $model->agregar_entregable($nombre,$id_actividad);
		$url=base_url();
		$datos = $model->listar_entregable($id_entregable);
	
		$query = $model->recuperar_periodicidad();
		$periodicidad = $query->result();
		
		$query2=$model->recuperar_u();
		$unidad = $query2->result();
		$class = ($datos['municipalizable'] == 0) ? 'oculto"':'visible';
		$html = '<tr id="'.$num_entregables.'">
			<td><input type="hidden" name="id'.$num_entregables.'" id="id'.$num_entregables.'" value="'.$datos['id_entregables'].'">
			<input name="nombre'.$id_entregable.'" type="text" id="nombre_'.$datos['id_entregables'].'" class="form-control" value="'.$datos['nombre'].'" required></td>
			<td>'.$this->selector_unidad(0,$id_entregable).'</td>';
		
		$html.='<td>'.$this->selector_periodicidad(0,$id_entregable).'</td>';
		$html.='<td>
					<select name="beneficiario_'.$datos['id_entregables'].'" id="beneficiario_'.$datos['id_entregables'].'" class="form-control">
						<option value="1" selected>Si</option>
					<option value="0">No</option>
					</select>
				</td>
				<td>
					<select name="munizipable_'.$id_entregable.'" id="munizipable_'.$datos['id_entregables'].'" class="form-control" onchange="mostrarBotonMunicipalizacion('.$datos['id_entregables'].')">
						<option value="1" >Si</option>
						<option value="0" selected >No</option>
				</select>
				</td>
				<td>
					<select name="alineacion_'.$id_entregable.'" id="alineacion_'.$datos['id_entregables'].'" class="form-control">
						<option value="1" selected>Si</option>
						<option value="0">No</option>
					</select>
				</td>
			<td>
			<input name="meta_'.$id_entregable.'" id="meta_'.$datos['id_entregables'].'" type="number" min="1" max="99999999999999" maxlength="11" onKeyPress="return soloNumeros(event,\'decNO\');" class="form-control" required>
			</td>
			<td>
			<input name="avance_'.$id_entregable.'" id="avance_'.$datos['id_entregables'].' "type="text"
			maxlength="11" onKeyPress="return soloNumeros(event,\'decNO\');" class="form-control" required>
			</td>
			<td>
			<input name="monto_'.$id_entregable.'" id="monto_'.$datos['id_entregables'].' "type="text"
			maxlength="19" onKeyPress="return soloNumeros(event,\'decOK\');" class="form-control" required>
			</td>
			<td>
			<input type="button" class="btn btn-danger" value="Eliminar" onclick="desactivar_entregable('.$datos['id_entregables'].');" style="font-size:11px;">
			</td>
			<td>
				<input type="button" class="btn btn-black '.$class.'" value="Municipalización" id="id_municipalizacion_'.$datos['id_entregables'].'" style="font-size:11px;" onclick="capturarMunizipalizacion('.$datos['id_entregables'].');" >
			</td>
		</tr>';

		echo $html;
		return "correcto";
	}
	public function recuperar_periodicidad(){
		//$ideje = $this->uri->segment(3);
		$data['pp'] = $this->M_entregable->recuperar_periodicidad();
		
		//echo json_encode($data);
	}
	public function recuperar_unidad(){
		//$ideje = $this->uri->segment(3);
		$data['pp'] = $this->M_entregable->recuperar_u();
		//echo json_encode($data);
	}

	function guardar_mod_entregables()
	{
		$num = $this->input->post('numEntregables');
		$datos = array();
		//var_dump($_POST);
		for($i=0; $i<$num; $i++)	
		{
			$id=$this->input->post('id'.$i);
			$datos['nombre']=trim($this->input->post('nombre'.$id));
			$datos['Unidad_medida_id_unidad']=$this->input->post('cbo_unidad'.$id);
			$datos['temporalidad_id_temp']=$this->input->post('cbo_periodicidad_'.$id);
			$datos['mismo_benef']= $this->input->post('beneficiario_'.$id);
			$datos['municipalizable']=$this->input->post('munizipable_'.$id);
			$datos['presenta_alineacion']=$this->input->post('alineacion_'.$id);
			$datos['meta_Anual']=$this->input->post('meta_'.$id);
			$datos['avace_acumulado']=$this->input->post('avance_'.$id);
			$datos['monto_ejercido']=$this->input->post('monto_'.$id);

			$this->M_entregable->actualizar_registro('s0_entregables',$id,$datos);
		}
		echo 'Correcto!';
		//$this->M_entregable->actualizar_registro('s0_entregables',$id_entregables,$datos);
	}
	function eliminar_entregable(){
		$id_entregables=$this->input->post('id_entregables');
		$data = array(
		'activo' => 0
		);
		$model = new M_entregable();
		$model->desactivar_entregable($data,$id_entregables);
	}

	function capturar_municipalizacion(){
		if(isset($_POST['id_entregable']) && !empty($_POST['id_entregable'])){

			$id_entregable = $this->input->post('id_entregable');
			$model = new M_entregable();
			$query_entregable = $model->datos_entregable($id_entregable);
			$query_metas = $model->metas_municipales($id_entregable);
			$datos = array();
			$datos['key'] = $this->input->post('key_entregable');
			foreach ($query_entregable as $key => $value){
				$datos[$key] =$value;
			}
			$datos['filas'] = '';
			$datos['suma_metas'] = 0;
			if($query_metas->num_rows() > 0){
				$query_metas = $query_metas->result();
				foreach ($query_metas as $registro){

					$datos['filas'] .= '<tr id="'.$registro->id_municipio.'">
											<td>'.$registro->id_municipio.'</td>
											<td>'.$registro->municipio.'</td>
											<td>
												<input name="meta_'.$registro->id_municipio.'" id="meta_'.$registro->id_municipio.'" type="text"  class="form-control meta"  value="'.$registro->meta.'" onKeyPress="return soloNumeros(event,\'decOK\')" maxlength="19" onblur="actualizarTotal();" >
											</td>
											<td>'.$datos['unidad_medida'].'</td>';
					$datos['suma_metas'] += $registro->meta;
				}
			}

			$this->load->view('masterpage/head');
			$this->load->view('capturar_municipalizacion',$datos);
			$this->load->view('masterpage/footer');
		}else echo '<h1>Acceso denegado</h1>';
	}

	function guardar_metas_municipio(){
		if(isset($_POST['id_entregable']) && !empty($_POST['id_entregable'])){
			$this->load->model('M_general');
			$model = new M_general();
			$where['id_entregable'] = $this->input->post('id_entregable');

			//	Eliminamos los registros anteriores
			$resp = $model->eliminar_registro('s0_municipalizacion',$where);
			//	Insertamos los nuevos registros
			for ($i=1; $i < 107 ; $i++) { 
				if(isset($_POST['meta_'.$i]) && !empty($_POST['meta_'.$i])){
					$datos = array(	
									'id_municipio' => $i,
									'id_entregable' => $this->input->post('id_entregable'),
									'monto' => $this->input->post('meta_'.$i)
								);
					$resp = $model->insertar_registro_no_pk('s0_municipalizacion',$datos);
				}
			}

			echo 'correcto';
		}
		else echo '<h1>Acceso denegado</h1>';
	}
	
}