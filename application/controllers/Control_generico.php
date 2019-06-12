<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_generico extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		//$this->load->model('M_alineacion');
		$this->load->model('Modelo_actividad');
		$this->load->model('M_entregable');
		$this->load->model('M_unidad_medida');
		$this->load->model('M_alineacion_entregable');
		//$this->load->library('session');
	}

	public function index()
	{
		$this->load->view('login');
	}
	public function listar_actividades(){
		// $data = $this->Modelo_actividad->listar_actividades(); 
		if(isset($_SESSION['id_usuario']) && !empty($_SESSION['id_usuario']))
		{		 
			$data['mydata'] = $this->Modelo_actividad->listar_actividades();
			$this->load->view('masterpage/head');
			$this->load->view('listar_actividades',$data);
			$this->load->view('masterpage/footer');
		} else $this->index();

	}
	public function listar_entregable(){
		$array=null;
		$data['mydata'] = $this->M_entregable->listar_entregables(); 
		$data['filas'] = '';
		$data['num_entregables'] = 0;

		foreach($data['mydata'] as $datos)
	   {
		   $datos['id_entregables'];
		   $data['filas'].= $this->fila_entregable($datos['id_entregables'],$data['num_entregables']);
		   $data['num_entregables']++;
	   }		
	   
		//$data['mydata'] = $this->M_entregable->listar_entregables();
		//$data['mydata']= $this->M_unidad_medida->listar_unidad();
		//Agregue estos metodos
		
		$data['compromiso'] = $this->M_alineacion_entregable->getCompromiso();
		$key=base64_decode($this->uri->segment(3));
		
		$data['entregables'] = $this->M_alineacion_entregable->getEntregables($key);
		
		$data['actividad'] = $this->M_alineacion_entregable->getActividad($key);
		foreach ($data['entregables'] as $r) {
			$temp = $this->M_alineacion_entregable->findRecord($r->id_entregables);
			if(!empty($temp[0])){
				$array[] = $temp[0];
			}
		}
		   $data['alineacion'] = $array;
		$this->load->view('masterpage/head');
		$this->load->view('editar_entregables',$data);
		$this->load->view('masterpage/footer');

   }
  
   public function agregaractividad(){
	$nombre = $this->input->post('nombre');
	$this->Modelo_actividad->agregaractividad($nombre);


}



public function editar_actividad(){
	//actualiza los datos de la actividad
if(isset($_POST['id_actividad_estrategica'])){
$id_actividad_estrategica = $this->input->post('id_actividad_estrategica');
$Nombre = $this->input->post('Nombre');
$objetivo_general = $this->input->post('objetivo_general');
$descripcion = $this->input->post('descripcion');
$monto_propio = $this->input->post('monto_propio');
$monto_otro = $this->input->post('monto_otro');
$fecha_inicio = $this->input->post('fecha_inicio');
$fecha_fin = $this->input->post('fecha_fin');
$elaboro = $this->input->post('elaboro');
$autorizo = $this->input->post('autorizo');
$cat_lineaaccion_ped_lineaaccionid = $this->input->post('cat_lineaaccion_ped_lineaaccionid');
$ubp_id_ubp = $this->input->post('ubp_id_ubp');
$poblacion_objetivo_id_poblacion = $this->input->post('poblacion_objetivo_id_poblacion');
$origen_fuente_id_origen = $this->input->post('origen_fuente_id_origen');
$fuente_financiamiento_id_ff= $this->input->post('fuente_financiamiento_id_ff');
	$data = array(
'id_actividad_estrategica' => $id_actividad_estrategica,
'Nombre' => $Nombre,
'objetivo_general' => $objetivo_general,
'descripcion' => $descripcion,
'monto_propio' => $monto_propio,
'monto_otro' => $monto_otro,
'fecha_inicio' => $fecha_inicio,
'fecha_fin' => $fecha_fin,
'elaboro' => $elaboro,
'autorizo' => $autorizo,
'cat_lineaaccion_ped_lineaaccionid' => $cat_lineaaccion_ped_lineaaccionid,
'ubp_id_ubp' => $ubp_id_ubp,
'poblacion_objetivo_id_poblacion' => $poblacion_objetivo_id_poblacion,
'origen_fuente_id_origen' => $origen_fuente_id_origen,
'fuente_financiamiento_id_ff'=>$fuente_financiamiento_id_ff
);
$this->Modelo_actividad->actualizaractividad($data,$id_actividad_estrategica);


}
$dataeje['ejes'] = $this->Modelo_actividad->recuperareje();
$this->load->view('masterpage/head');
$this->load->view('editar_actividad',$dataeje);	
$this->load->view('masterpage/footer');
}
public function editar_entregables(){
	$this->load->view('masterpage/head');
	$this->load->view('editar_entregables');
	$this->load->view('masterpage/footer');
	}
	public function example(){
		 $data = $this->Modelo_actividad->listar_actividades(); 
		 print_r($data);
}




	
	//==================recupera informacion si existe informacion guardada de la actividad
	public function mostardatosactividad(){
		$idactividad=$this->uri->segment(3);
		 $data = $this->Modelo_actividad->recuperaractividad($idactividad); 
		 $datos=json_encode($data);
		echo $datos;
	}
		public function mostarcomboactividad(){
		$idactividad=$this->uri->segment(3);
		 $data = $this->Modelo_actividad->recuperarcombobox($idactividad); 
		 $datos=json_encode($data);
		echo $datos;
	}
	//==========================fin ================================//
	public function actualizar_actividad(){
					//actualiza los datos de la actividad
			$id_actividad_estrategica = $this->input->post('id_actividad_estrategica');
			//	$Nombre = $this->input->post('Nombre');
			$objetivo_general = $this->input->post('objetivo_general');
			$descripcion = $this->input->post('descripcion');
			$monto_propio = $this->input->post('monto_propio');
			$monto_otro = $this->input->post('monto_otro');
			$fecha_inicio = $this->input->post('fecha_inicio');
			$fecha_fin = $this->input->post('fecha_fin');
			$elaboro = $this->input->post('elaboro');
			$autorizo = $this->input->post('autorizo');
			$cat_lineaaccion_ped_lineaaccionid = $this->input->post('cat_lineaaccion_ped_lineaaccionid');
			$ubp_id_ubp = $this->input->post('ubp_id_ubp');
			$poblacion_objetivo_id_poblacion = $this->input->post('poblacion_objetivo_id_poblacion');
			$origen_fuente_id_origen = $this->input->post('origen_fuente_id_origen');
			$fuente_financiamiento_id_ff= $this->input->post('fuente_financiamiento_id_ff');
			    $data = array(
	        'id_actividad_estrategica' => $id_actividad_estrategica,
	     		//   'Nombre' => $Nombre,
	        'objetivo_general' => $objetivo_general,
	        'descripcion' => $descripcion,
	        'monto_propio' => $monto_propio,
	        'monto_otro' => $monto_otro,
	        'fecha_inicio' => $fecha_inicio,
	        'fecha_fin' => $fecha_fin,
	        'elaboro' => $elaboro,
	        'autorizo' => $autorizo,
	        'cat_lineaaccion_ped_lineaaccionid' => $cat_lineaaccion_ped_lineaaccionid,
	        'ubp_id_ubp' => $ubp_id_ubp,
	        'poblacion_objetivo_id_poblacion' => $poblacion_objetivo_id_poblacion,
	        'origen_fuente_id_origen' => $origen_fuente_id_origen,
	        'fuente_financiamiento_id_ff'=>$fuente_financiamiento_id_ff
	        );
			$this->Modelo_actividad->actualizaractividad($data,$id_actividad_estrategica);
	}
	
	
	public function fila_entregable($id_entregable,$num_entregables){
	
		$model = new M_entregable();		
		
		$datos = $model->listar_entregable($id_entregable);
		$html = '<tr id="'.$num_entregables.'">
		<td><input type="hidden" name="id'.$num_entregables.'" id="id'.$num_entregables.'" value="'.$datos['id_entregables'].'">
		<input name="nombre'.$id_entregable.'" type="text" id="nombre_'.$datos['id_entregables'].'" class="form-control" value="'.$datos['nombre'].'"></td>
		<td>'.$this->selector_unidad($datos['Unidad_medida_id_unidad'],$id_entregable).'</td>';
		
		/*foreach ($unidad as $u){
			$html.='<td>
				<select id="inputState7" class="form-control">
				<option value="'.$u->id_unidad.'">'.$u->nombre.'</option>
				</select>
			</td>';
		}   */
		$html.='<td>'.$this->selector_periodicidad($datos['temporalidad_id_temp'],$id_entregable).'</td>';
		$html.='<td>
					<select name="beneficiario_'.$datos['id_entregables'].'" id="beneficiario_'.$datos['id_entregables'].'" class="form-control">';
		$html .= ($datos['mismo_benef'] == 1) ? '<option value="1" selected>Si</option>':'<option value="1">Si</option>';
		$html .= ($datos['mismo_benef'] == 0) ? '<option value="0" selected>No</option>':'<option value="0">No</option>';
		$html .=	'</select>
			</td>
			<td>
				<select name="munizipable_'.$id_entregable.'" id="munizipable_'.$datos['id_entregables'].'" class="form-control">';
		$html.=	($datos['municipalizable'] == 1) ? '<option value="1" selected>Si</option>':'<option value="1">Si</option>';
		$html.=	($datos['municipalizable'] == 0) ? '<option value="0" selected>No</option>':'<option value="0">No</option>';
		$html.=	'</select>
			</td>
			<td>
				<select name="alineacion_'.$id_entregable.'" id="alineacion_'.$datos['id_entregables'].'" class="form-control">';
		$html.=	($datos['presenta_alineacion'] == 1) ? '<option value="1" selected>Si</option>':'<option value="1">Si</option>';
		$html.=	($datos['presenta_alineacion'] == 0) ? '<option value="0" selected>No</option>':'<option value="0">No</option>';
		$html.='</select>
			</td>
			<td>
			<input name="meta_'.$id_entregable.'" id="meta_'.$datos['id_entregables'].'" type="text" class="form-control" value="'.$datos['meta_Anual'].'">
			</td>
			<td>
			<input name="avance_'.$id_entregable.'" id="avance_'.$datos['id_entregables'].' "type="text" class="form-control"  value="'.$datos['avace_acumulado'].'">
			</td>
			<td>
			<input name="monto_'.$id_entregable.'" id="monto_'.$datos['id_entregables'].' "type="text" class="form-control"  value="'.$datos['monto_ejercido'].'">
			</td>
			
			</tr>';
		//$html.='</form>';

		return $html;
		return "correcto";
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
	
}
