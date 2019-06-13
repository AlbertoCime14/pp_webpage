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
		
		$datos = $model->listar_entregable($id_entregable);
	
		$query = $model->recuperar_periodicidad();
		$periodicidad = $query->result();
		
		$query2=$model->recuperar_u();
		$unidad = $query2->result();
		//$html='<form  id="formulario_'.$datos['id_entregables'].'" >';
		$html = '<tr id="'.$num_entregables.'">
		<td><input type="hidden" name="id'.$num_entregables.'" id="id'.$num_entregables.'" value="'.$datos['id_entregables'].'">
		<input name="nombre'.$id_entregable.'" type="text" id="nombre_'.$datos['id_entregables'].'" class="form-control" value="'.$datos['nombre'].'" required></td>
		<td>'.$this->selector_unidad(0,$id_entregable).'</td>';
		
		/*foreach ($unidad as $u){
			$html.='<td>
				<select id="inputState7" class="form-control">
				<option value="'.$u->id_unidad.'">'.$u->nombre.'</option>
				</select>
			</td>';
		}   */
		$html.='<td>'.$this->selector_periodicidad(0,$id_entregable).'</td>';
		$html.='<td>
					<select name="beneficiario_'.$datos['id_entregables'].'" id="beneficiario_'.$datos['id_entregables'].'" class="form-control">
			<option value="1" selected>Si</option>
			<option value="0">No</option>
			</select>
			</td>
			<td>
				<select name="munizipable_'.$id_entregable.'" id="munizipable_'.$datos['id_entregables'].'" class="form-control">
					<option value="1" selected>Si</option>
					<option value="0">No</option>
			</select>
			</td>
			<td>
				<select name="alineacion_'.$id_entregable.'" id="alineacion_'.$datos['id_entregables'].'" class="form-control">
			<option value="1" selected>Si</option>
			<option value="0">No</option>
			</select>
			</td>
			<td>
			<input name="meta_'.$id_entregable.'" id="meta_'.$datos['id_entregables'].'" type="text" min="1" max="100000000000000000" class="form-control" >
			</td>
			<td>
			<input name="avance_'.$id_entregable.'" id="avance_'.$datos['id_entregables'].' "type="number"  class="form-control">
			</td>
			<td>
			<input name="monto_'.$id_entregable.'" id="monto_'.$datos['id_entregables'].' "type="number" class="form-control">
			</td>
			<td>
			<input type="button" class="btn btn-dark" value="Eliminar" onclick="desactivar_entregable('.$datos['id_entregables'].');">
			</td>
			</tr>';
		//$html.='</form>';

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
			$datos['nombre']=$this->input->post('nombre'.$id);
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

	



	
}