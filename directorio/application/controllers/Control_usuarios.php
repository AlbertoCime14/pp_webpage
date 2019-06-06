<?php
defined('BASEPATH') OR exit('No direct script access allowed');
session_start();
class Control_usuarios extends CI_Controller {

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
		$this->load->helper('url');
		$this->load->model('Model_usuarios');
		$this->load->model('Model_selectores');
		$this->load->library('PHPExcel');
		$this->load->library('PHPExcel/IOFactory');
	}
	
	public function crea_usuario()
	{
		
		if(isset($_SESSION['idasociado']) && $_SESSION['idasociado']>0)
		{
			$titularesinst=0;
			$idinst = $_SESSION['idasociado'];
			$nombre = $this->input->post('nombre', TRUE);
			$pape = $this->input->post('pape', TRUE);
			$sape = $this->input->post('sape', TRUE);		
			//$categoria = $this->input->post('categoria', TRUE);
			$tipo_usuario = $this->input->post('tipo_usuario', TRUE);
			$cargo = $this->input->post('cargo', TRUE);
			$ladatel = $this->input->post('ladatel', TRUE);
			$telefono = $this->input->post('telefono', TRUE);
			$extension = $this->input->post('extension', TRUE);
			$celular = $this->input->post('celular', TRUE);
			$correoinst = $this->input->post('correoinst', TRUE);
			$correoper = $this->input->post('correoper', TRUE);
			$nacces = $this->input->post('nacces', TRUE);
			$usuarios = new Model_usuarios();	
			$ver_exist = $usuarios->verifica_esistencia($nombre,$pape,$sape,$correoinst,$tipo_usuario);	
			if($ver_exist==false)	
			{
				if(!empty($nombre) && !empty($pape) && !empty($cargo) && !empty($correoinst) && !empty($ladatel) && !empty($telefono))
				{
					switch ($tipo_usuario) {
						case '1':
							$datos = array(
								'nombres' => strtoupper($nombre),
								'pape' => strtoupper($pape),
								'sape' => strtoupper($sape),
								'cargo' => strtoupper($cargo),
								'lada' => $ladatel,
								'telefono' => $telefono,
								'extension' => $extension,
								'celular' => $celular,
								'correoins' => $correoinst,
								'correoper' => $correoper,				
								'acceso' => $nacces,	
								'institucionid' => $idinst			
								);

							/*Titular = 1, Asistente = 2, Enlace = 3 */
							break;
						case '2':
							$titularesinst = $this->input->post('titularesinst', TRUE);
							$datos = array(
								'nombres' => strtoupper($nombre),
								'pape' => strtoupper($pape),
								'sape' => strtoupper($sape),
								'cargo' => strtoupper($cargo),
								'lada' => $ladatel,
								'telefono' => $telefono,
								'extension' => $extension,
								'celular' => $celular,
								'correoins' => $correoinst,
								'correoper' => $correoper,				
								'acceso' => $nacces,	
								'tipo' => 1
								);
							break;
						case '3':
							$titularesinst = $this->input->post('titularesinst', TRUE);
							$datos = array(
								'nombres' => strtoupper($nombre),
								'pape' => strtoupper($pape),
								'sape' => strtoupper($sape),
								'cargo' => strtoupper($cargo),
								'lada' => $ladatel,
								'telefono' => $telefono,
								'extension' => $extension,
								'celular' => $celular,
								'correoins' => $correoinst,
								'correoper' => $correoper,				
								'acceso' => $nacces,	
								'tipo' => 3
								);
							break;
						case '4':
							$titularesinst = $this->input->post('titularesinst', TRUE);
							$datos = array(
								'nombres' => strtoupper($nombre),
								'pape' => strtoupper($pape),
								'sape' => strtoupper($sape),
								'cargo' => strtoupper($cargo),
								'lada' => $ladatel,
								'telefono' => $telefono,
								'extension' => $extension,
								'celular' => $celular,
								'correoins' => $correoinst,
								'correoper' => $correoper,				
								'acceso' => $nacces,	
								'tipo' => 4
								);
							break;
					}			
					$resultado = $usuarios->inserta_usuario($datos,$tipo_usuario);

					if($tipo_usuario==1)
					{
						if($resultado>0) 
						{
							//for ($i=0; $i < count($categoria); $i++) 
							//{ 
							//	$datos_cat = array('categoriaid' => $categoria[$i], 'titularid' => $resultado);
							//	$usuarios->inserta_categoria($datos_cat);
							//}
							$_SESSION['idtit'] = $resultado;
							echo "correcto";
						}
						else echo "error2";				
					}
					else
					{
						if($resultado>0) 
						{
							$datos_conf = array('titularid'=>$titularesinst, 'asistenteid' => $resultado);
							$insercion = $usuarios->inserta_conf($datos_conf);
							if($insercion>0) echo 'correcto';
							else echo 'error3';
						}
						else echo "error2";
					}
				}
				else echo "error5";
				
			}	
			else echo "error4";
		}
		else echo "error1";
	}

	public function crea_institucion()
	{	
		$error=0;	
		$nombre_inst = $this->input->post('nombre_inst', TRUE);
		$siglas = $this->input->post('siglas', TRUE);
		$tipoinst = $this->input->post('tipoinst', TRUE);
		//$categoria = $this->input->post('categoria', TRUE);

		$tipo_vial = $this->input->post('tipo_vial', TRUE); 	
		$nombre_via = $this->input->post('nombre_via', TRUE); 		
		$num_ext = $this->input->post('num_ext', TRUE);
		$alf_ext = $this->input->post('alf_ext', TRUE);
		$num_int = $this->input->post('num_int', TRUE);
		$alf_int = $this->input->post('alf_int', TRUE);
		$tipo_cruz1 = $this->input->post('tipo_cruz1', TRUE); 		
		$nombre_cruz1 = $this->input->post('nombre_cruz1', TRUE); 				
		$tipo_cruz2 = $this->input->post('tipo_cruz2', TRUE); 		
		$nombre_cruz2 = $this->input->post('nombre_cruz2', TRUE); 				
		$tipo_asent = $this->input->post('tipo_asent', TRUE); 		
		$nombre_asent = $this->input->post('nombre_asent', TRUE); 	
		$cpostal = $this->input->post('cpostal', TRUE);

		if(!empty($nombre_inst) &&  !empty($tipoinst) && !empty($tipo_vial) && !empty($nombre_via) && !empty($num_ext) && !empty($tipo_cruz1) && !empty($nombre_cruz1))
		{
			//if(preg_match("/^[0-9]+$/i", $cadena)) $validacion = true;
        	//else $validacion = "DEBE_SER_SOLO_NUMEROS";
			
			$datos = array(
				'institucion' => strtoupper($nombre_inst),
				'siglas' => strtoupper($siglas),
				'tipoinstitucion' => strtoupper($tipoinst),
				'tipo_vialidad' => $tipo_vial,
				'nombre_vialidad' => strtoupper($nombre_via),
				'num_exterior' => $num_ext,
				'alfanumerico_exterior' => strtoupper($alf_ext),
				'num_interior' => $num_int,
				'alfanumerico_interior' => strtoupper($alf_int),
				'tipo_cruzamiento1' => $tipo_cruz1,
				'nombre_cruzamiento1' => strtoupper($nombre_cruz1),
				'tipo_cruzamiento2' => $tipo_cruz2,
				'nombre_cruzamiento2' => strtoupper($nombre_cruz2),
				'tipo_asentamiento' => $tipo_asent,
				'nombre_asentamiento' => strtoupper($nombre_asent),
				'codigopostal' => $cpostal
				);
			$direccion = new Model_usuarios();
			$res = $direccion->inserta_direccion($datos);
			if($res>0) $_SESSION['idasociado'] = $res;
			echo $res;					
		}
		else echo "-1";

		//if(preg_match("/^[0-9]+$/i", $cadena)) $validacion = true;
        //else $validacion = "DEBE_SER_SOLO_NUMEROS";        
	}

	public function carga_titulares()
	{
		$id = $this->input->post('id',TRUE);
		if(isset($_SESSION['idasociado']) && $_SESSION['idasociado']>0)
		{
			$idinst = $_SESSION['idasociado'];
			$titulares = new Model_usuarios();
			$resp = $titulares->carga_titulares($idinst);
			if($resp!=false) 
			{
				$sel_tit ='<select class="chosen-select" id="titularesinst" name="titularesinst" data-placeholder="Titulares*"><option value=""></option>';
				foreach ($resp as $vresp) 
				{
					$sel_tit.='<option value="'.$vresp->titularid.'">'.$vresp->nombres.' '.$vresp->pape.' '.$vresp->sape.'</option>';
				}
				$sel_tit.='</select>';
				echo $sel_tit;
			}
			else echo "error2";
		}
		else echo "error1";
	}

	public function carga_categorias()
	{
		$categorias = new Model_selectores();
		$res = $categorias->carga_selector(3);
		if($res!=false)
		{
			echo '
			<select class="chosen-select" multiple id="categoria" name="categoria[]" data-placeholder="Categoría*" required><option value=""></option>';
			foreach ($res as $vres) 
			{
				echo '<option value="'.$vres->subtemaid.'">'.$vres->subtema.'</option>';
			}
			echo '</select>';		
		}
			                                            
	}

	public function carga_selectores()
	{
		
			                                        													
		$sel =  $this->input->post('sel', TRUE);
		$selectores = new Model_selectores();

		$resultado = $selectores->carga_selector($sel);

		switch ($sel) {
			case '1':
				$selector = '<div class="col-md-3 m-b-10" id="cont_inst">';
				$selector.= '<select class="chosen-select" id="busq_inst" name="busq_inst" data-placeholder="Instituciones"><option value=""></option>';
				foreach ($resultado as $vres) 
				{
					$selector.='<option value="'.$vres->institucionid.'">'.$vres->institucion.'</option>';
				}
				break;
			case '2':
				$selector = '<div class="col-md-3 m-b-10" id="cont_enlace">';
				$selector.= '<select class="chosen-select" id="busq_usuario" name="busq_usuario" data-placeholder="Enlaces"><option value=""></option>';
				foreach ($resultado as $vres) 
				{
					$selector.='<option value="'.$vres->asistenteid.'">E -'.$vres->nombres.' '.$vres->pape.' '.$vres->sape.'</option>';
				}
				break;
			case '3':
				$selector = '<div class="col-md-3 m-b-10" id="cont_cat">';
				$selector.= '<select class="chosen-select" id="busq_cat" name="busq_cat" data-placeholder="Categorías"><option value=""></option>';
				foreach ($resultado as $vres) 
				{
					$selector.='<option value="'.$vres->categoriadosid.'">'.$vres->numcategoria.' - '.$vres->categoriados.'</option>';
				}
				break;	
			case '4':
				$selector = '<div class="col-md-3 m-b-10" id="cont_tit">';
				$selector.= '<select class="chosen-select" id="busq_tit" name="busq_tit" data-placeholder="Titular"><option value=""></option>';
				foreach ($resultado as $vres) 
				{
					$selector.='<option value="'.$vres->titularid.'">T -'.$vres->nombres.' '.$vres->pape.' '.$vres->sape.'</option>';
				}
				break;		
		}
		$selector.='</select></div>';
		echo $selector;
	}

	public function carga_datosel1()
	{
		$selectores = new Model_selectores();
		$valor = $this->input->post('valor', TRUE);		
		$resultado = $selectores->carga_datosel($valor);
		$selector='<select class="chosen-select" id="busq_tit" name="busq_tit" data-placeholder="Titulares" onchange="carga_datosel2(this.value);"><option value=""></option>';
		foreach ($resultado as $vres) 
		{
			$selector.='<option value="'.$vres->titularid.'">T -'.$vres->nombres.' '.$vres->pape.' '.$vres->sape.'</option>';
		}
		$selector.="</select>";
		echo $selector;
	}

	public function carga_datosel2()
	{
		$selectores = new Model_selectores();
		$valor = $this->input->post('valor', TRUE);		
		$resultado = $selectores->carga_datosel2($valor);
		$selector='<select class="chosen-select" id="busq_usuario" name="busq_usuario" data-placeholder="Enlaces"><option value=""></option>';
		foreach ($resultado as $vres) 
		{
			$selector.='<option value="'.$vres->asistenteid.'">E -'.$vres->nombres.' '.$vres->pape.' '.$vres->sape.'</option>';
		}
		$selector.="</select>";
		echo $selector;
	}

	public function carga_resultado()
	{
		$busq_inst = $this->input->post('busq_inst', TRUE);
		$busq_usuario = $this->input->post('busq_usuario', TRUE);
		$busq_cat = $this->input->post('busq_cat', TRUE);
		$busq_tit = $this->input->post('busq_tit', TRUE);
		$nom_tit="";
		$nom_enl="";

		$busqueda = new Model_usuarios();
		$resp = $busqueda->carga_resultado($busq_inst,$busq_usuario,$busq_cat,$busq_tit);
		$tabla ='<table id="example" class="display" cellspacing="0" width="100%"><thead><tr><th>Categoría</th><th style="width: 97px;">Institución</th><th style="width: 97px;">Titular</th><th>Correo</th><th style="width: 97px;">Asistente/Enlace</th><th>Correo</th></tr></thead><tbody>';
		foreach ($resp as $vresp) 
		{
			if($vresp->nombres!="" && $vresp->pape!="") {
				$nom_tit = $vresp->nombres.' '.$vresp->pape.' '.$vresp->sape;
				$nom_tit= substr($nom_tit, 0, 15).'<a data-toggle="modal" href="#modalDefault" onclick="muestra_datos(2,'.$vresp->titularid.');">&nbsp;&nbsp;<span class="icon" style="font-size:13px;">&#61788;</span></a>';
			}

			if($vresp->nombrese!="" && $vresp->papee!="") {
				$nom_enl = $vresp->nombrese.' '.$vresp->papee.' '.$vresp->sapee;
				$nom_enl = substr($nom_enl,0, 15).'<a data-toggle="modal" href="#modalDefault" onclick="muestra_datos(3,'.$vresp->asistenteid.');">&nbsp;&nbsp;<span class="icon" style="font-size:13px;">&#61788;</span></a>';
			}

			$tabla.='
			<tr>
			<td>'.$vresp->categoriaid.'</td>
			<td>'.substr($vresp->institucion, 0, 15).'<a data-toggle="modal" href="#modalDefault" onclick="muestra_datos(1,'.$vresp->institucionid.');">&nbsp;&nbsp;<span class="icon" style="font-size:13px;">&#61788;</span></a></td>
			<td>'.$nom_tit.'</td>
			<td>'.$vresp->correoins.'</td>
			<td>'.$nom_enl.'</td>
			<td>'.$vresp->correoinse.'</td></tr>';
			
		}
		$tabla.='</tbody></table>';
		echo $tabla;
	}

	public function muestra_datos()
	{
		if(isset($_SESSION['permisos'])) $permisos = $_SESSION['permisos'];
		//1.- Institución, 2.- Titular, 3.- Enlace

		$id = $this->input->post('id', TRUE);
		$tipo = $this->input->post('tipo', TRUE);
		$consulta = new Model_usuarios();
		$resp = $consulta->muestra_dato($id,$tipo);
		$modal ='<div class="tile">';
		//echo $id.' - '.$tipo;
		//print_r($resp);
		if($tipo==1)
		{
			foreach ($resp as $vresp) 
			{
				$dir = $vresp->tipov.' '.$vresp->nombre_vialidad.' x '.$vresp->nombre_cruzamiento1.' y '.$vresp->nombre_cruzamiento2.' Num. ext. '.$vresp->num_exterior.' '.$vresp->alfanumerico_exterior;			
				$nominst = $vresp->institucion;
				$siglas = $vresp->siglas;
				$asentamiento = $vresp->tipoasentamiento.' '.$vresp->nombre_asentamiento;
			}					
			$modal.='<div class="tile">
                        <h2 class="tile-title">Institución</h2>                                
                        <div class="listview icon-list">
                            <div class="media"><i class="icon pull-left">&#61744</i><div class="media-body">Nombre: '.$nominst.'</div></div>
                            <div class="media"><i class="icon pull-left">&#61753</i><div class="media-body">Siglas: '.$siglas.'</div></div>
                            <div class="media"><i class="icon pull-left">&#61713</i><div class="media-body">Dirección: '.$dir.'</div></div>
                            <div class="media"><i class="icon pull-left">&#61742</i><div class="media-body">Asentamiento: '.$asentamiento.'</div></div>
                        </div>
                    </div>';
                    if (in_array("23", $permisos) || in_array("24", $permisos) || in_array("25", $permisos)) 
					{
                    	$modal.='<button type="button" id="btn_mod" name="btn_mod" data-drawer="modificar" class="btn btn-sm drawer-toggle" onclick="carga_fmod(1,'.$vresp->institucionid.')" data-dismiss="modal">Modificar</button>';
					}
		}
		elseif ($tipo==2) 
		{
			foreach ($resp as $vresp) 
			{
				$nomtit = $vresp->nombres.' '.$vresp->pape.' '.$vresp->sape;
				$cargo =$vresp->cargo;
				$datosinst = 'Lada: '.$vresp->lada.' Teléfono: '.$vresp->telefono.' Extensión: '.$vresp->extension.' Correo: '.$vresp->correoins;
				$datosper = 'Celular: '.$vresp->celular.' Correo: '.$vresp->correoper;
			}					
			$modal.='<div class="tile">
                        <h2 class="tile-title">Titular</h2>                                
                        <div class="listview icon-list">
                        <div class="media"><i class="icon pull-left">&#61744</i><div class="media-body">Nombre: '.$nomtit.'</div></div>
                        <div class="media"><i class="icon pull-left">&#61753</i><div class="media-body">Cargo: '.$cargo.'</div></div>
                        <div class="media"><i class="icon pull-left">&#61713</i><div class="media-body">(Institucional)'.$datosinst.'</div></div>';

                        if (in_array("25", $permisos)) 
						{
                        	$modal.='<div class="media"><i class="icon pull-left">&#61742</i><div class="media-body">(Personal)'.$datosper.'</div></div>';
						}
                        $modal.='</div></div>';
                    
                    if (in_array("23", $permisos) || in_array("24", $permisos) || in_array("25", $permisos)) 
					{
						$modal.='<button type="button" id="btn_mod" name="btn_mod" data-drawer="modificar" class="btn btn-sm drawer-toggle" onclick="carga_fmod(2,'.$vresp->titularid.')" data-dismiss="modal">Modificar</button>';
					}
		}
		elseif ($tipo==3) 
		{
			foreach ($resp as $vresp) 
			{
				$nomenl = $vresp->nombres.' '.$vresp->pape.' '.$vresp->sape;
				$cargo =$vresp->cargo;
				$datosinst = 'Lada: '.$vresp->lada.' Teléfono: '.$vresp->telefono.' Extensión: '.$vresp->extension.' Correo: '.$vresp->correoins;
				$datosper = 'Celular: '.$vresp->celular.' Correo: '.$vresp->correoper;
			}					
			$modal.='<div class="tile">
                        <h2 class="tile-title">Enlace</h2>                                
                        <div class="listview icon-list">
                            <div class="media"><i class="icon pull-left">&#61744</i><div class="media-body">Nombre: '.$nomenl.'</div></div>
                            <div class="media"><i class="icon pull-left">&#61753</i><div class="media-body">Cargo: '.$cargo.'</div></div>
                            <div class="media"><i class="icon pull-left">&#61713</i><div class="media-body">(Institucional)'.$datosinst.'</div></div>';

                        if (in_array("25", $permisos)) 
						{
                            $modal.='<div class="media"><i class="icon pull-left">&#61742</i><div class="media-body">(Personal)'.$datosper.'</div></div>';
						}
                        
                        $modal.='</div></div>';
                    if (in_array("23", $permisos) || in_array("24", $permisos) || in_array("25", $permisos)) 
					{
         	           $modal.='<button type="button" id="btn_mod" name="btn_mod" data-drawer="modificar" class="btn btn-sm drawer-toggle" onclick="carga_fmod(3,'.$vresp->asistenteid.')" data-dismiss="modal">Modificar</button>';
					}
		}

        $modal.= '</div>';
        echo $modal;

	}

	public function carga_fmod()
	{
		$tipo = $this->input->post('tipo', TRUE);
		$id = $this->input->post('id', TRUE);
		$consulta = new Model_usuarios();
		$selectores = new Model_selectores();

		$form = $consulta->muestra_dato($id,$tipo);
		$vial = $selectores->cat_vialidades();
		$asent = $selectores->cat_asentamientos();
		$deps = $selectores->carga_selector(1);

		$datos['form']=$form;
		$datos['tipo']=$tipo;
		$datos['asent']=$asent;
		$datos['vial']=$vial;
		$datos['deps']=$deps;

		$this->load->view('formulario_mod',$datos);
	}

	public function form_modinst()
	{
		$id_inst = $this->input->post('midinst', TRUE);
		$nombre_inst = $this->input->post('nombre_inst', TRUE);
		$siglas = $this->input->post('siglas', TRUE);
		$tipoinst = $this->input->post('tipoinst', TRUE);
		//$categoria = $this->input->post('categoria', TRUE);

		$tipo_vial = $this->input->post('tipo_vial', TRUE); 	
		$nombre_via = $this->input->post('nombre_via', TRUE); 		
		$num_ext = $this->input->post('num_ext', TRUE);
		$alf_ext = $this->input->post('alf_ext', TRUE);
		$num_int = $this->input->post('num_int', TRUE);
		$alf_int = $this->input->post('alf_int', TRUE);
		$tipo_cruz1 = $this->input->post('tipo_cruz1', TRUE); 		
		$nombre_cruz1 = $this->input->post('nombre_cruz1', TRUE); 				
		$tipo_cruz2 = $this->input->post('tipo_cruz2', TRUE); 		
		$nombre_cruz2 = $this->input->post('nombre_cruz2', TRUE); 				
		$tipo_asent = $this->input->post('tipo_asent', TRUE); 		
		$nombre_asent = $this->input->post('nombre_asent', TRUE); 				
		if(!empty($id_inst) && !empty($nombre_inst) &&  !empty($tipoinst) && !empty($tipo_vial) && !empty($nombre_via) && !empty($num_ext) && !empty($tipo_cruz1) && !empty($nombre_cruz1))
		{
			//if(preg_match("/^[0-9]+$/i", $cadena)) $validacion = true;
        	//else $validacion = "DEBE_SER_SOLO_NUMEROS";
			
			$datos = array(
				'institucion' => $nombre_inst,
				'siglas' => $siglas,
				'tipoinstitucion' => $tipoinst,
				'tipo_vialidad' => $tipo_vial,
				'nombre_vialidad' => $nombre_via,
				'num_exterior' => $num_ext,
				'alfanumerico_exterior' => $alf_ext,
				'num_interior' => $num_int,
				'alfanumerico_interior' => $alf_int,
				'tipo_cruzamiento1' => $tipo_cruz1,
				'nombre_cruzamiento1' => $nombre_cruz1,
				'tipo_cruzamiento2' => $tipo_cruz2,
				'nombre_cruzamiento2' => $nombre_cruz2,
				'tipo_asentamiento' => $tipo_asent,
				'nombre_asentamiento' => $nombre_asent
				);
			$direccion = new Model_usuarios();
			$res = $direccion->modifica_inst($datos,$id_inst);
			if($res>0) echo $res;		
			else echo "error2";
			//print_r($datos);
		}
		else echo "error1";
	}

	public function form_modtit()
	{
		$titid = $this->input->post('midtit', TRUE);
		$nombre = $this->input->post('nombre', TRUE);
		$pape = $this->input->post('pape', TRUE);
		$sape = $this->input->post('sape', TRUE);		
		$categoria = $this->input->post('categoria', TRUE);
		$tipo_usuario = $this->input->post('tipo_usuario', TRUE);
		$cargo = $this->input->post('cargo', TRUE);
		$ladatel = $this->input->post('ladatel', TRUE);
		$telefono = $this->input->post('telefono', TRUE);
		$extension = $this->input->post('extension', TRUE);
		$celular = $this->input->post('celular', TRUE);
		$correoinst = $this->input->post('correoinst', TRUE);
		$correoper = $this->input->post('correoper', TRUE);
		$nacces = $this->input->post('nacces', TRUE);
		$idinst = $this->input->post('mod_idinst', TRUE);
		$usuarios = new Model_usuarios();

		if(!empty($nombre) && !empty($pape) && !empty($cargo) && !empty($correoinst) && !empty($ladatel) && !empty($telefono))
		{			
			$datos = array(
				'nombres' => $nombre,
				'pape' => $pape,
				'sape' => $sape,
				'cargo' => $cargo,
				'lada' => $ladatel,
				'telefono' => $telefono,
				'extension' => $extension,
				'celular' => $celular,
				'correoins' => $correoinst,
				'correoper' => $correoper,				
				'acceso' => $nacces,
				'institucionid'	=> $idinst
				);
			$res = $usuarios->modifica_tit($datos,$titid);	
			if($res>0) echo $res;
			else echo "error2";
		}
		else echo "error1";
	}

	public function form_modasist()
	{
		$asistid = $this->input->post('midenlace', TRUE);
		$nombre = $this->input->post('nombre', TRUE);
		$pape = $this->input->post('pape', TRUE);
		$sape = $this->input->post('sape', TRUE);		
		$categoria = $this->input->post('categoria', TRUE);
		$tipo_usuario = $this->input->post('tipo_usuario', TRUE);
		$cargo = $this->input->post('cargo', TRUE);
		$ladatel = $this->input->post('ladatel', TRUE);
		$telefono = $this->input->post('telefono', TRUE);
		$extension = $this->input->post('extension', TRUE);
		$celular = $this->input->post('celular', TRUE);
		$correoinst = $this->input->post('correoinst', TRUE);
		$correoper = $this->input->post('correoper', TRUE);
		$nacces = $this->input->post('nacces', TRUE);
		$usuarios = new Model_usuarios();

		if(!empty($nombre) && !empty($pape) && !empty($cargo) && !empty($correoinst) && !empty($ladatel) && !empty($telefono))
		{			
			$datos = array(
				'nombres' => $nombre,
				'pape' => $pape,
				'sape' => $sape,
				'cargo' => $cargo,
				'lada' => $ladatel,
				'telefono' => $telefono,
				'extension' => $extension,
				'celular' => $celular,
				'correoins' => $correoinst,
				'correoper' => $correoper,				
				'acceso' => $nacces,
				'tipo' => $tipo_usuario
				);
			$res = $usuarios->modifica_asist($datos,$asistid);	
			if($res>0) echo $res;
			else echo "error2";
		}
		else echo "error1";
	}

	public function reporte_excel()
	{		
		$ejecutivo = $this->input->get('ejecutivo', TRUE);
		$inst = $this->input->get('inst', TRUE);
		$enl = $this->input->get('enl', TRUE);
		$cat = $this->input->get('cat', TRUE);
		$tit = $this->input->get('tit', TRUE);

		$objPHPExcel = new PHPExcel();
		$objPHPExcel->getProperties()->setTitle("ReporteIndicadores")
		                 ->setDescription("description")
						 ->setCreator("STGPE")
						 ->setSubject("Indicadores")
						 ->setKeywords("reporte phpexcel indicadores")
						 ->setCategory("reportes");

		$title = array(
            'font' => array(
                'name' => 'Arial',
                'size' => 8,
                'bold' => true,
                'color' => array(
                    'rgb' => 'FFFFFF'
                ),
            ),    
            'fill' => array(
                'type' => PHPExcel_Style_Fill::FILL_SOLID,
                'startcolor' => array(
                    'rgb' => '808080',
                ),
            ),
        );

        $consulta = new Model_usuarios();
		$datos = $consulta->genera_reporte($inst,$enl,$cat,$tit);

		if($ejecutivo>0)
		{
			$objPHPExcel->getActiveSheet()->setCellValue('A1', 'Institución');
			$objPHPExcel->getActiveSheet()->setCellValue('I1', 'Titular');
			$objPHPExcel->getActiveSheet()->setCellValue('Q1', 'Enlace/Asistente');
			$objPHPExcel->getActiveSheet()->setCellValue('Z1', 'Categoría');

	        $objPHPExcel->getActiveSheet()->mergeCells('A1:H1');
	        $objPHPExcel->getActiveSheet()->mergeCells('I1:P1');
	        $objPHPExcel->getActiveSheet()->mergeCells('Q1:Y1');
	        $objPHPExcel->getActiveSheet()->mergeCells('Z1:AA1');

	        $objPHPExcel->getActiveSheet()->getStyle('A1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	        $objPHPExcel->getActiveSheet()->getStyle('P1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	        $objPHPExcel->getActiveSheet()->getStyle('Z1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

	        $objPHPExcel->setActiveSheetIndex(0);
			$objPHPExcel->getActiveSheet()->setCellValue('A2', 'Institución');
			$objPHPExcel->getActiveSheet()->setCellValue('B2', 'Siglas');
			$objPHPExcel->getActiveSheet()->setCellValue('C2', 'Tipo de institución');
			$objPHPExcel->getActiveSheet()->setCellValue('D2', 'Dirección');
			$objPHPExcel->getActiveSheet()->setCellValue('E2', 'número interior');
			$objPHPExcel->getActiveSheet()->setCellValue('F2', 'Alfanumerico interior');
			$objPHPExcel->getActiveSheet()->setCellValue('G2', 'Tipo asentamiento');
			$objPHPExcel->getActiveSheet()->setCellValue('H2', 'Asentamiento');

			$objPHPExcel->getActiveSheet()->setCellValue('I2', 'Nombre');
			$objPHPExcel->getActiveSheet()->setCellValue('J2', 'Cargo');
			$objPHPExcel->getActiveSheet()->setCellValue('K2', 'Lada');
			$objPHPExcel->getActiveSheet()->setCellValue('L2', 'Teléfono');
			$objPHPExcel->getActiveSheet()->setCellValue('M2', 'Extensión');
			$objPHPExcel->getActiveSheet()->setCellValue('N2', 'Celular');
			$objPHPExcel->getActiveSheet()->setCellValue('O2', 'Correo personal');
			$objPHPExcel->getActiveSheet()->setCellValue('P2', 'Correo institucional');
			
			$objPHPExcel->getActiveSheet()->setCellValue('Q2', 'Nombre');
			$objPHPExcel->getActiveSheet()->setCellValue('R2', 'Cargo');
			$objPHPExcel->getActiveSheet()->setCellValue('S2', 'Lada');
			$objPHPExcel->getActiveSheet()->setCellValue('T2', 'Teléfono');
			$objPHPExcel->getActiveSheet()->setCellValue('U2', 'Extensión');
			$objPHPExcel->getActiveSheet()->setCellValue('V2', 'Celular');
			$objPHPExcel->getActiveSheet()->setCellValue('W2', 'Correo personal');
			$objPHPExcel->getActiveSheet()->setCellValue('X2', 'Correo institucional');
			$objPHPExcel->getActiveSheet()->setCellValue('Y2', 'Tipo');
			$objPHPExcel->getActiveSheet()->setCellValue('Z2', 'Sub categoría');
			$objPHPExcel->getActiveSheet()->setCellValue('AA2', 'Categoría');
			$cont=3;			

			if($datos!=false)
			{
				foreach ($datos as $vdato) 
				{
					switch ($vdato->tipoinstitucion) {
						case 1: $inst="Empresas"; break;
						case 2: $inst="Dependencias"; break;
						case 3: $inst="Intituciones"; break;
						case 4: $inst="Universidades"; break;
						case 5: $inst="Asociaciones civiles"; break;
						case 6: $inst="Cámaras empresariales"; break;
					}
					if($vdato->num_interior>0)
						$numint=$vdato->num_interior;
					else
						$numint="";
					$dirrep = $vdato->tipovialidad.' '.$vdato->nombre_vialidad.' '.$vdato->num_exterior.$vdato->alfanumerico_exterior.' x '.$vdato->tipocruz1.' '.$vdato->nombre_cruzamiento1.' '.$vdato->tipocruz2.' '.$vdato->nombre_cruzamiento2;
					$objPHPExcel->getActiveSheet()->setCellValue('A'.$cont, $vdato->institucion);
					$objPHPExcel->getActiveSheet()->setCellValue('B'.$cont, $vdato->siglas);
					$objPHPExcel->getActiveSheet()->setCellValue('C'.$cont, $inst);
					$objPHPExcel->getActiveSheet()->setCellValue('D'.$cont, $dirrep);
					$objPHPExcel->getActiveSheet()->setCellValue('E'.$cont, $numint);
					$objPHPExcel->getActiveSheet()->setCellValue('F'.$cont, $vdato->alfanumerico_interior);
					$objPHPExcel->getActiveSheet()->setCellValue('G'.$cont, $vdato->tipoasentamiento);
					$objPHPExcel->getActiveSheet()->setCellValue('H'.$cont, $vdato->nombre_asentamiento);

					//titular
					$objPHPExcel->getActiveSheet()->setCellValue('I'.$cont, $vdato->tnombres.' '.$vdato->tpape.' '.$vdato->tsape);
					$objPHPExcel->getActiveSheet()->setCellValue('J'.$cont, $vdato->tcargo);
					$objPHPExcel->getActiveSheet()->setCellValue('K'.$cont, $vdato->tlada);
					$objPHPExcel->getActiveSheet()->setCellValue('L'.$cont, $vdato->ttelefono);
					$objPHPExcel->getActiveSheet()->setCellValue('M'.$cont, $vdato->textension);
					$objPHPExcel->getActiveSheet()->setCellValue('N'.$cont, $vdato->tcelular);
					$objPHPExcel->getActiveSheet()->setCellValue('O'.$cont, $vdato->tcorreoper);
					$objPHPExcel->getActiveSheet()->setCellValue('P'.$cont, $vdato->tcorreoins);
					//enlace
					$objPHPExcel->getActiveSheet()->setCellValue('Q'.$cont, $vdato->nombres.' '.$vdato->pape.' '.$vdato->sape);
					$objPHPExcel->getActiveSheet()->setCellValue('R'.$cont, $vdato->cargo);
					$objPHPExcel->getActiveSheet()->setCellValue('S'.$cont, $vdato->lada);
					$objPHPExcel->getActiveSheet()->setCellValue('T'.$cont, $vdato->telefono);
					$objPHPExcel->getActiveSheet()->setCellValue('U'.$cont, $vdato->extension);
					$objPHPExcel->getActiveSheet()->setCellValue('V'.$cont, $vdato->celular);
					$objPHPExcel->getActiveSheet()->setCellValue('W'.$cont, $vdato->correoper);
					$objPHPExcel->getActiveSheet()->setCellValue('X'.$cont, $vdato->correoins);
					$objPHPExcel->getActiveSheet()->setCellValue('Y'.$cont, $vdato->tipo);
					$objPHPExcel->getActiveSheet()->setCellValue('Z'.$cont, $vdato->subtema);
					$objPHPExcel->getActiveSheet()->setCellValue('AA'.$cont, $vdato->seccion);

					$cont++;
				}
			    $objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(44);
				$objPHPExcel->getActiveSheet()->getColumnDimension('I')->setWidth(37);
			}
		}
		else
		{
	        $objPHPExcel->getActiveSheet()->setCellValue('A1', 'Institución');
			$objPHPExcel->getActiveSheet()->setCellValue('P1', 'Titular');
			$objPHPExcel->getActiveSheet()->setCellValue('Z1', 'Enlace/Asistente');
			$objPHPExcel->getActiveSheet()->setCellValue('AK1', 'Categoría');

	        $objPHPExcel->getActiveSheet()->mergeCells('A1:O1');
	        $objPHPExcel->getActiveSheet()->mergeCells('P1:Y1');
	        $objPHPExcel->getActiveSheet()->mergeCells('Z1:AJ1');
	        $objPHPExcel->getActiveSheet()->mergeCells('AK1:AL1');

	        $objPHPExcel->getActiveSheet()->getStyle('A1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	        $objPHPExcel->getActiveSheet()->getStyle('P1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	        $objPHPExcel->getActiveSheet()->getStyle('Z1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			// Assign cell values
			$objPHPExcel->setActiveSheetIndex(0);
			$objPHPExcel->getActiveSheet()->setCellValue('A2', 'Institución');
			$objPHPExcel->getActiveSheet()->setCellValue('B2', 'Siglas');
			$objPHPExcel->getActiveSheet()->setCellValue('C2', 'Tipo de institución');
			$objPHPExcel->getActiveSheet()->setCellValue('D2', 'Tipo de vialidad');
			$objPHPExcel->getActiveSheet()->setCellValue('E2', 'nombre vialidad');
			$objPHPExcel->getActiveSheet()->setCellValue('F2', 'número exterior');
			$objPHPExcel->getActiveSheet()->setCellValue('G2', 'Alfanumerico exterior');
			$objPHPExcel->getActiveSheet()->setCellValue('H2', 'número interior');
			$objPHPExcel->getActiveSheet()->setCellValue('I2', 'Alfanumerico interior');
			$objPHPExcel->getActiveSheet()->setCellValue('J2', 'Tipo cruzamiento 1');
			$objPHPExcel->getActiveSheet()->setCellValue('K2', 'Cruzamiento 1');
			$objPHPExcel->getActiveSheet()->setCellValue('L2', 'Tipo cruzamiento 2');
			$objPHPExcel->getActiveSheet()->setCellValue('M2', 'Cruzamiento 2');
			$objPHPExcel->getActiveSheet()->setCellValue('N2', 'Tipo asentamiento');
			$objPHPExcel->getActiveSheet()->setCellValue('O2', 'Asentamiento');
			$objPHPExcel->getActiveSheet()->setCellValue('P2', 'Nombre');
			$objPHPExcel->getActiveSheet()->setCellValue('Q2', 'Primer apellido');
			$objPHPExcel->getActiveSheet()->setCellValue('R2', 'Segundo apellido');
			$objPHPExcel->getActiveSheet()->setCellValue('S2', 'Cargo');
			$objPHPExcel->getActiveSheet()->setCellValue('T2', 'Lada');
			$objPHPExcel->getActiveSheet()->setCellValue('U2', 'Teléfono');
			$objPHPExcel->getActiveSheet()->setCellValue('V2', 'Extensión');
			$objPHPExcel->getActiveSheet()->setCellValue('W2', 'Celular');
			$objPHPExcel->getActiveSheet()->setCellValue('X2', 'Correo personal');
			$objPHPExcel->getActiveSheet()->setCellValue('Y2', 'Correo institucional');
			$objPHPExcel->getActiveSheet()->setCellValue('Z2', 'Nombre');
			$objPHPExcel->getActiveSheet()->setCellValue('AA2', 'Primer apellido');
			$objPHPExcel->getActiveSheet()->setCellValue('AB2', 'Segundo apellido');
			$objPHPExcel->getActiveSheet()->setCellValue('AC2', 'Cargo');
			$objPHPExcel->getActiveSheet()->setCellValue('AD2', 'Lada');
			$objPHPExcel->getActiveSheet()->setCellValue('AE2', 'Teléfono');
			$objPHPExcel->getActiveSheet()->setCellValue('AF2', 'Extensión');
			$objPHPExcel->getActiveSheet()->setCellValue('AG2', 'Celular');
			$objPHPExcel->getActiveSheet()->setCellValue('AH2', 'Correo personal');
			$objPHPExcel->getActiveSheet()->setCellValue('AI2', 'Correo institucional');
			$objPHPExcel->getActiveSheet()->setCellValue('AJ2', 'Tipo');
			$objPHPExcel->getActiveSheet()->setCellValue('AK2', 'Sub categoría');
			$objPHPExcel->getActiveSheet()->setCellValue('AL2', 'Categoría');
			$cont=3;			

			if($datos!=false)
			{
				foreach ($datos as $vdato) 
				{
					switch ($vdato->tipoinstitucion) {
						case 1: $inst="Empresas"; break;
						case 2: $inst="Dependencias"; break;
						case 3: $inst="Intituciones"; break;
						case 4: $inst="Universidades"; break;
						case 5: $inst="Asociaciones civiles"; break;
						case 6: $inst="Cámaras empresariales"; break;
					}

					$objPHPExcel->getActiveSheet()->setCellValue('A'.$cont, $vdato->institucion);
					$objPHPExcel->getActiveSheet()->setCellValue('B'.$cont, $vdato->siglas);
					$objPHPExcel->getActiveSheet()->setCellValue('C'.$cont, $inst);
					$objPHPExcel->getActiveSheet()->setCellValue('D'.$cont, $vdato->tipovialidad);
					$objPHPExcel->getActiveSheet()->setCellValue('E'.$cont, $vdato->nombre_vialidad);
					$objPHPExcel->getActiveSheet()->setCellValue('F'.$cont, $vdato->num_exterior);
					$objPHPExcel->getActiveSheet()->setCellValue('G'.$cont, $vdato->alfanumerico_exterior);
					$objPHPExcel->getActiveSheet()->setCellValue('H'.$cont, $vdato->num_interior);
					$objPHPExcel->getActiveSheet()->setCellValue('I'.$cont, $vdato->alfanumerico_interior);
					$objPHPExcel->getActiveSheet()->setCellValue('J'.$cont, $vdato->tipocruz1);
					$objPHPExcel->getActiveSheet()->setCellValue('K'.$cont, $vdato->nombre_cruzamiento1);
					$objPHPExcel->getActiveSheet()->setCellValue('L'.$cont, $vdato->tipocruz2);
					$objPHPExcel->getActiveSheet()->setCellValue('M'.$cont, $vdato->nombre_cruzamiento2);
					$objPHPExcel->getActiveSheet()->setCellValue('N'.$cont, $vdato->tipoasentamiento);
					$objPHPExcel->getActiveSheet()->setCellValue('O'.$cont, $vdato->nombre_asentamiento);

					//titular
					$objPHPExcel->getActiveSheet()->setCellValue('P'.$cont, $vdato->tnombres);
					$objPHPExcel->getActiveSheet()->setCellValue('Q'.$cont, $vdato->tpape);
					$objPHPExcel->getActiveSheet()->setCellValue('R'.$cont, $vdato->tsape);
					$objPHPExcel->getActiveSheet()->setCellValue('S'.$cont, $vdato->tcargo);
					$objPHPExcel->getActiveSheet()->setCellValue('T'.$cont, $vdato->tlada);
					$objPHPExcel->getActiveSheet()->setCellValue('U'.$cont, $vdato->ttelefono);
					$objPHPExcel->getActiveSheet()->setCellValue('V'.$cont, $vdato->textension);
					$objPHPExcel->getActiveSheet()->setCellValue('W'.$cont, $vdato->tcelular);
					$objPHPExcel->getActiveSheet()->setCellValue('X'.$cont, $vdato->tcorreoper);
					$objPHPExcel->getActiveSheet()->setCellValue('Y'.$cont, $vdato->tcorreoins);
					//enlace
					$objPHPExcel->getActiveSheet()->setCellValue('Z'.$cont, $vdato->nombres);
					$objPHPExcel->getActiveSheet()->setCellValue('AA'.$cont, $vdato->pape);
					$objPHPExcel->getActiveSheet()->setCellValue('AB'.$cont, $vdato->sape);
					$objPHPExcel->getActiveSheet()->setCellValue('AC'.$cont, $vdato->cargo);
					$objPHPExcel->getActiveSheet()->setCellValue('AD'.$cont, $vdato->lada);
					$objPHPExcel->getActiveSheet()->setCellValue('AE'.$cont, $vdato->telefono);
					$objPHPExcel->getActiveSheet()->setCellValue('AF'.$cont, $vdato->extension);
					$objPHPExcel->getActiveSheet()->setCellValue('AG'.$cont, $vdato->celular);
					$objPHPExcel->getActiveSheet()->setCellValue('AH'.$cont, $vdato->correoper);
					$objPHPExcel->getActiveSheet()->setCellValue('AI'.$cont, $vdato->correoins);
					$objPHPExcel->getActiveSheet()->setCellValue('AJ'.$cont, $vdato->tipo);
					$objPHPExcel->getActiveSheet()->setCellValue('AK'.$cont, $vdato->subtema);
					$objPHPExcel->getActiveSheet()->setCellValue('AL'.$cont, $vdato->seccion);

					$cont++;
				}
			}
		}
		
		$objPHPExcel->getActiveSheet()->setTitle("Reporte");

        header ('Content-type: text/html; charset=utf-8');
		header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="Reporte_directorio".xls"');
        header('Cache-Control: max-age=0');
        $objWriter=IOFactory::createWriter($objPHPExcel,'Excel5');
        $objWriter->save('php://output');
	}

	public function alinea_temas()
	{
		if(isset($_SESSION['idtit']) && $_SESSION['idtit']!=0)
		{
			$id = $_SESSION['idtit'];
			$subtemas = $this->input->post('subtema', TRUE);
			$categorias = new Model_usuarios();
			foreach ($subtemas as $value) 
			{
				$datos = array("titularid" => $id, "categoriaid" => $value);
				$resp = $categorias->inserta_temas($datos);
			}
			$_SESSION['idtit']=0;
			
			$tags = $this->input->post('tags', TRUE);

			$tot_tags = explode(",",$tags);
			$total = count($tot_tags);
			for ($i=0; $i < $total; $i++) 
			{ 
				$val = array('etiqueta' => $tot_tags[$i], 'titularid' => $id);
				$etiquetas = $categorias->inserta_etiqueta($val);
			}
			echo "correcto";
		}
		else echo "error1";
	}

}
