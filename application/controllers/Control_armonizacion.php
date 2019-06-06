<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_armonizacion extends CI_Controller {

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
	}

	public function carga_opciones()
	{
		$op = $this->input->post('op',TRUE);
		$nivel = $this->input->post('nivel', TRUE);
		$datos['op'] = $op;
		$datos['nivel'] = $nivel;
		$this->load->view('contenedor',$datos);
	}

	public function descargas_modal() 
	{
		$archivos = array();
		
		$op = $this->input->post('op', TRUE);
		switch ($op) {
		    case 1: 
		    	$titulo = "Estado de Situación financiera";
		    	$archivos['18']['t1'] = "Estado_de_Situacion_financiera_1_18";
		    	$archivos['19']['t1'] = "Estado_de_Situacion_financiera_1_19";
		    	$archivos['18']['t2'] = "Estado_de_Situacion_financiera_2_18";
		    	$archivos['18']['t3'] = "Estado_de_Situacion_financiera_3_18";
		    	$archivos['18']['t4'] = "Estado_de_Situacion_financiera_4_18";
		    	break;
		    case 2: 
		    	$titulo = "Estado de Actividades";
		    	$archivos['18']['t1'] = "Estado_de_Actividades_1_18";
		    	$archivos['19']['t1'] = "Estado_de_Actividades_1_19";
		    	$archivos['18']['t2'] = "Estado_de_Actividades_2_18";
		    	$archivos['18']['t3'] = "Estado_de_Actividades_3_18";
		    	$archivos['18']['t4'] = "Estado_de_Actividades_4_18";
		    	break;
		    case 3: 
		    	$titulo = "Estado de variaciones en la Hacienda Pública / Patrimonio";
		    	$archivos['18']['t1'] = "Estado_de_variaciones_en_la_Hacienda_Publica_1_18";
		    	$archivos['19']['t1'] = "Estado_de_variaciones_en_la_Hacienda_Publica_1_19";
		    	$archivos['18']['t2'] = "Estado_de_variaciones_en_la_Hacienda_Publica_2_18";
		    	$archivos['18']['t3'] = "Estado_de_variaciones_en_la_Hacienda_Publica_3_18";
		    	$archivos['18']['t4'] = "Estado_de_variaciones_en_la_Hacienda_Publica_4_18";
		    	break;
		    case 4: 
		    	$titulo = "Estado de Cambios en la Situación Financiera";
		    	$archivos['18']['t1'] = "Estado_de_Cambios_en_la_Situacion_Financiera_1_18";
		    	$archivos['19']['t1'] = "Estado_de_Cambios_en_la_Situacion_Financiera_1_19";
		    	$archivos['18']['t2'] = "Estado_de_Cambios_en_la_Situacion_Financiera_2_18";
		    	$archivos['18']['t3'] = "Estado_de_Cambios_en_la_Situacion_Financiera_3_18";
		    	$archivos['18']['t4'] = "Estado_de_Cambios_en_la_Situacion_Financiera_4_18";
		    	break;
		    case 5: 
		    	$titulo = "Estado de flujos de Efectivos";
		    	$archivos['18']['t1'] = "Estado_de_flujos_de_Efectivos_1_18";
		    	$archivos['19']['t1'] = "Estado_de_flujos_de_Efectivos_1_19";
		    	$archivos['18']['t2'] = "Estado_de_flujos_de_Efectivos_2_18";
		    	$archivos['18']['t3'] = "Estado_de_flujos_de_Efectivos_3_18";
		    	$archivos['18']['t4'] = "Estado_de_flujos_de_Efectivos_4_18";
		    	break;
		    case 6: 
		    	$titulo = "Estado Analítico del Activo";
		    	$archivos['18']['t1'] = "Estado_Analitico_del_Activo_1_18";
		    	$archivos['19']['t1'] = "Estado_Analitico_del_Activo_1_19";
		    	$archivos['18']['t2'] = "Estado_Analitico_del_Activo_2_18";
		    	$archivos['18']['t3'] = "Estado_Analitico_del_Activo_3_18";
		    	$archivos['18']['t4'] = "Estado_Analitico_del_Activo_4_18";
		    	break;
		    case 7: 
		    	$titulo = "Estado Analítico de la Deuda y Otros Pasivos";
		    	$archivos['18']['t1'] = "Estado_Analitico_de_la_Deuda_y_Otros_Pasivos_1_18";
		    	$archivos['19']['t1'] = "Estado_Analitico_de_la_Deuda_y_Otros_Pasivos_1_19";
		    	$archivos['18']['t2'] = "Estado_Analitico_de_la_Deuda_y_Otros_Pasivos_2_18";
		    	$archivos['18']['t3'] = "Estado_Analitico_de_la_Deuda_y_Otros_Pasivos_3_18";
		    	$archivos['18']['t4'] = "Estado_Analitico_de_la_Deuda_y_Otros_Pasivos_4_18";
		    	break;
		    case 8: 
		    	$titulo = "Notas a los Estados Financieros";
		    	$archivos['18']['t1'] = "Notas_a_los_Estados_Financieros_1_18";
		    	$archivos['19']['t1'] = "Notas_a_los_Estados_Financieros_1_19";
		    	$archivos['18']['t2'] = "Notas_a_los_Estados_Financieros_2_18";
		    	$archivos['18']['t3'] = "Notas_a_los_Estados_Financieros_3_18";
		    	$archivos['18']['t4'] = "Notas_a_los_Estados_Financieros_4_18";
		    	break;
		    case 9: 
		    	$titulo = "Informe sobre Pasivos Contingente";
		    	$archivos['18']['t1'] = "Informe_sobre_Pasivos_Contingente_1_18";
		    	$archivos['19']['t1'] = "Informe_sobre_Pasivos_Contingente_1_19";
		    	$archivos['18']['t2'] = "Informe_sobre_Pasivos_Contingente_2_18";
		    	$archivos['18']['t3'] = "Informe_sobre_Pasivos_Contingente_3_18";
		    	$archivos['18']['t4'] = "Informe_sobre_Pasivos_Contingente_4_18";
		    	break;
		    case 10:
		    	$titulo = "Estado analítico de ingresos";
		    	$archivos['18']['t1'] = "Estado_analitico_de_ingresos_1_18";
		    	$archivos['19']['t1'] = "Estado_analitico_de_ingresos_1_19";
		    	$archivos['18']['t2'] = "Estado_analitico_de_ingresos_2_18";
		    	$archivos['18']['t3'] = "Estado_analitico_de_ingresos_3_18";
		    	$archivos['18']['t4'] = "Estado_analitico_de_ingresos_4_18";
		    	break;
		    case 11:
		    	$titulo = "Clasificación por Objeto del Gasto (Capítulo y Concepto)";
		    	$archivos['18']['t1'] = "Clasificacion_por_Objeto_del_Gasto_(Capitulo_y_Concepto)_1_18";
		    	$archivos['19']['t1'] = "Clasificacion_por_Objeto_del_Gasto_(Capitulo_y_Concepto)_1_19";
		    	$archivos['18']['t2'] = "Clasificacion_por_Objeto_del_Gasto_(Capitulo_y_Concepto)_2_18";
		    	$archivos['18']['t3'] = "Clasificacion_por_Objeto_del_Gasto_(Capitulo_y_Concepto)_3_18";
		    	$archivos['18']['t4'] = "Clasificacion_por_Objeto_del_Gasto_(Capitulo_y_Concepto)_4_18";
		    	break;
		    case 12:
		    	$titulo = "Clasificación Económica (por Tipo de Gasto)";
		    	$archivos['18']['t1'] = "Clasificacion_Economica_(por_Tipo_de_Gasto)_1_18";
		    	$archivos['19']['t1'] = "Clasificacion_Economica_(por_Tipo_de_Gasto)_1_19";
		    	$archivos['18']['t2'] = "Clasificacion_Economica_(por_Tipo_de_Gasto)_2_18";
		    	$archivos['18']['t3'] = "Clasificacion_Economica_(por_Tipo_de_Gasto)_3_18";
		    	$archivos['18']['t4'] = "Clasificacion_Economica_(por_Tipo_de_Gasto)_4_18";
		    	break;
		    case 13:
		    	$titulo = "Clasificación Administrativa";
		    	$archivos['18']['t1'] = "Clasificacion_Administrativa_1_18";
		    	$archivos['19']['t1'] = "Clasificacion_Administrativa_1_19";
		    	$archivos['18']['t2'] = "Clasificacion_Administrativa_2_18";
		    	$archivos['18']['t3'] = "Clasificacion_Administrativa_3_18";
		    	$archivos['18']['t4'] = "Clasificacion_Administrativa_4_18";
		    	break;
		    case 14:
		    	$titulo = "Clasificación Funcional (Finalidad y Función)";
		    	$archivos['18']['t1'] = "Clasificacion_Funcional_(Finalidad_y_Funcion)_1_18";
		    	$archivos['19']['t1'] = "Clasificacion_Funcional_(Finalidad_y_Funcion)_1_19";
		    	$archivos['18']['t2'] = "Clasificacion_Funcional_(Finalidad_y_Funcion)_2_18";
		    	$archivos['18']['t3'] = "Clasificacion_Funcional_(Finalidad_y_Funcion)_3_18";
		    	$archivos['18']['t4'] = "Clasificacion_Funcional_(Finalidad_y_Funcion)_4_18";
		    	break;
		    case 15:
		    	$titulo = "Gasto por Categoría Programática";
		    	$archivos['18']['t1'] = "Gasto_por_Categoria_Programática_1_18";
		    	$archivos['19']['t1'] = "Gasto_por_Categoria_Programática_1_19";
		    	$archivos['18']['t2'] = "Gasto_por_Categoria_Programática_2_18";
		    	$archivos['18']['t3'] = "Gasto_por_Categoria_Programática_3_18";
		    	$archivos['18']['t4'] = "Gasto_por_Categoria_Programática_4_18";
		    	break;
		    case 16: 
	   			$titulo = "Indicadores de Postura Fiscal";
	   			$archivos['18']['t1'] = "Indicadores_de_Postura_Fiscal_1_18";
	   			$archivos['19']['t1'] = "Indicadores_de_Postura_Fiscal_1_19";
	   			$archivos['18']['t2'] = "Indicadores_de_Postura_Fiscal_2_18";
	   			$archivos['18']['t3'] = "Indicadores_de_Postura_Fiscal_3_18";
	   			$archivos['18']['t4'] = "Indicadores_de_Postura_Fiscal_4_18";
	   			break;
	   		case 17: 
	   			$titulo ="Endeudamiento neto";
	   			$archivos['18']['t1'] = "Endeudamiento_neto_1_18";
	   			$archivos['19']['t1'] = "Endeudamiento_neto_1_19";
	   			$archivos['18']['t2'] = "Endeudamiento_neto_2_18";
	   			$archivos['18']['t3'] = "Endeudamiento_neto_3_18";
	   			$archivos['18']['t4'] = "Endeudamiento_neto_4_18";
	   			break;
	   		case 18: 
	   			$titulo ="Intereses de la deuda";
	   			$archivos['18']['t1'] = "Intereses_de_la_deuda_1_18";
	   			$archivos['19']['t1'] = "Intereses_de_la_deuda_1_19";
	   			$archivos['18']['t2'] = "Intereses_de_la_deuda_2_18";
	   			$archivos['18']['t3'] = "Intereses_de_la_deuda_3_18";
	   			$archivos['18']['t4'] = "Intereses_de_la_deuda_4_18";
	   			break;
	   		case 19: 
	   			$titulo ="Programas y Proyectos de Inversión";
	   			$archivos['18']['t1'] = "Programas_y_Proyectos_de_Inversion_1_18";
	   			$archivos['19']['t1'] = "Programas_y_Proyectos_de_Inversion_1_19";
	   			$archivos['18']['t2'] = "Programas_y_Proyectos_de_Inversion_2_18";
	   			$archivos['18']['t3'] = "Programas_y_Proyectos_de_Inversion_3_18";
	   			$archivos['18']['t4'] = "Programas_y_Proyectos_de_Inversion_4_18";
	   			break;
	   		case 20:
	   			$titulo ="Indicadores de resultado";
	   			$archivos['18']['t1'] = "Indicadores_de_resultado_1_18";
	   			$archivos['19']['t1'] = "Indicadores_de_resultado_1_19";
	   			$archivos['18']['t2'] = "Indicadores_de_resultado_2_18";
	   			$archivos['18']['t3'] = "Indicadores_de_resultado_3_18";
	   			$archivos['18']['t4'] = "Indicadores_de_resultado_4_18";
	   			break;
	   		case 21: 
	   			$titulo = "Montos pagados por ayudas y subsidios";
	   			$archivos['18']['t1'] = "Montos_pagados_por_ayudas_y_subsidios_1_18";
	   			$archivos['19']['t1'] = "Montos_pagados_por_ayudas_y_subsidios_1_19";
	   			$archivos['18']['t2'] = "Montos_pagados_por_ayudas_y_subsidios_2_18";
	   			$archivos['18']['t3'] = "Montos_pagados_por_ayudas_y_subsidios_3_18";
	   			$archivos['18']['t4'] = "Montos_pagados_por_ayudas_y_subsidios_4_18";
	   			break;
		}

		echo '<div class="row"><div class="col-md-12" align="center"><h2>'.$titulo.'</h2></div>';

		if(isset($archivos['18']) && !empty($archivos['18']))
		{
			echo '<div class="col-md-12" align="center"><h4>2018</h4></div>';
			foreach ($archivos['18'] as $key => $value) {
				switch ($key) {
					case 't1': $t = 'Trimestre 1'; break; case 't2': $t = 'Trimestre 2'; break; 
					case 't3': $t = 'Trimestre 3'; break; case 't4': $t = 'Trimestre 4'; break;
					
				}
			echo '<div class="col-md-3">
					<div class="col-md-12">'.$t.'</div>
					<a target="_blank" href="'.base_url().'archivos/armonizacion_contable/trimestrales/'.$value.'.pdf" class="btn btn-outline-dark">Descargar</a>
				</div>';
			}
		}

		if(isset($archivos['19']) && !empty($archivos['19']))
		{
			echo '<div class="col-md-12" align="center"><hr style="margin-top: 2%;border: 1px dashed #cacaca;"><h4>2019</h4></div>';
			foreach ($archivos['19'] as $key => $value) {
				switch ($key) {
					case 't1': $t = 'Trimestre 1'; break; case 't2': $t = 'Trimestre 2'; break; 
					case 't3': $t = 'Trimestre 3'; break; case 't4': $t = 'Trimestre 4'; break;
					
				}
			echo '<div class="col-md-3">
					<div class="col-md-12">'.$t.'</div>
					<a target="_blank" href="'.base_url().'archivos/armonizacion_contable/trimestrales/'.$value.'.pdf" class="btn btn-outline-dark">Descargar</a>
				</div>';
			}
		}

		echo '</div>';
	}
}