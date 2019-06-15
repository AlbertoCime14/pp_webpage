<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_reporte extends CI_Controller {

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
		$this->load->library('excel');
		$this->load->model('modelo_reporte');
		
    }
    
    public function gen(){
        $id = $_REQUEST['id'];
        $data = $this->modelo_reporte->actividad($id);
        $data2 = $this->modelo_reporte->recuperarcombobox($id);
        $data3 = $this->modelo_reporte->entregables($id);
        $dep = $this->modelo_reporte->dependencia($id);
        $data4 = $this->modelo_reporte->compromiso($id);
        $data5 = $this->modelo_reporte->fuente($id);
        $mes = '';
        $dia = '';
        if(date("n") == 1){
            $mes = 'Enero';
        }else if(date("n") == 2){
            $mes = 'Febrero';
        }else if(date("n") == 3){
            $mes = 'Marzo';
        }else if(date("n") == 4){
            $mes = 'Abril';
        }else if(date("n") == 5){
            $mes = 'Mayo';
        }else if(date("n") == 6){
            $mes = 'Junio';
        }else if(date("n") == 7){
            $mes = 'Julio';
        }else if(date("n") == 8){
            $mes = 'Agosto';
        }else if(date("n") == 9){
            $mes = 'Septiembre';
        }else if(date("n") == 10){
            $mes = 'Octubre';
        }else if(date("n") == 11){
            $mes = 'Noviembre';
        }else if(date("n") == 12){
            $mes = 'Diciembre';
        }
        if(date("w") == 2){
            $dia = 'Lunes';
        }else if(date("w") == 3){
            $dia = 'Martes';
        }else if(date("w") == 4){
            $dia = 'Miercoles';
        }else if(date("w") == 5){
            $dia = 'Jueves';
        }else if(date("w") == 6){
            $dia = 'Viernes';
        }else if(date("w") == 7){
            $dia = 'Sabado';
        }else if(date("w") == 1){
            $dia = 'Domingo';
        }
        $fecha = $dia. date("d"). ' de ' . $mes. ' del ' . date("Y");
        //print_r($data2);

        $reporte = new PHPExcel();
		$reader = PHPExcel_IOFactory::createReader('Excel2007');
		$reporte = $reader->load('Archivos/reporte.xlsx');

		$reporte->setActiveSheetIndex('0');

        $nombreactividad = '';
	    $objetivogeneral = '';
	    $descripcion = '';
	    $fecha_inicio= '';
	    $fecha_fin= '';
	    $elaboro = '';
	    $autorizo = '';
	    $poblacion = '';
	    $numero_ubp = '';
	    $nombre_ubp = '';
	    $num_pp = '';
        $nombre_pp = '';
        

        $reporte->getActiveSheet()->SetCellValue('I6', $fecha);
        foreach($dep as $de){
            $reporte->getActiveSheet()->SetCellValue('C6', $de['nombre_dependencia']);
            $reporte->getActiveSheet()->SetCellValue('B6', $de['dependencia_abrev']);
        }

        foreach($data as $dat){
                $nombreactividad = $dat['Nombre'];
                $objetivogeneral = $dat['objetivo_general'];
                $descripcion = $dat['descripcion'];
                $fecha_inicio= $dat['fecha_inicio'];
                $fecha_fin= $dat['fecha_fin'];
                $elaboro = $dat['elaboro'];
                $autorizo = $dat['autorizo'];
                $poblacion = $dat['poblacion'];
                $numero_ubp = $dat['numero_ubp'];
                $nombre_ubp = $dat['nombre_ubp'];
                $num_pp = $dat['num_pp'];
                $nombre_pp = $dat['nombre_pp'];
         }

         $reporte->getActiveSheet()->SetCellValue('B14', $nombreactividad);
         $reporte->getActiveSheet()->SetCellValue('B16', $objetivogeneral);
         $reporte->getActiveSheet()->SetCellValue('B18', $descripcion);
         $reporte->getActiveSheet()->SetCellValue('C26', $fecha_inicio);
         $reporte->getActiveSheet()->SetCellValue('I26', $fecha_fin);
         $reporte->getActiveSheet()->SetCellValue('A74', $elaboro);
         $reporte->getActiveSheet()->SetCellValue('E74', $autorizo);
         $reporte->getActiveSheet()->SetCellValue('B20', $poblacion);
         $reporte->getActiveSheet()->SetCellValue('B22', $numero_ubp);
         $reporte->getActiveSheet()->SetCellValue('E22', $nombre_ubp);
         $reporte->getActiveSheet()->SetCellValue('B24', $num_pp);
         $reporte->getActiveSheet()->SetCellValue('E24', $nombre_pp);

         foreach($data2 as $dat){
            $ej = $dat['eje'];
            $te = $dat['tema'];
            $obj = $dat['objetivo'];
            $estra = $dat['estrategia'];
            $linea = $dat['lineaaccion'];
            $ods = $dat['nombre_ods'];
    
            
            $reporte->getActiveSheet()->SetCellValue('B9', $ej);
            $reporte->getActiveSheet()->SetCellValue('E9', $te);
            $reporte->getActiveSheet()->SetCellValue('I9', $obj);
            $reporte->getActiveSheet()->SetCellValue('B11', $estra);
            $reporte->getActiveSheet()->SetCellValue('E11', $linea);
            $reporte->getActiveSheet()->SetCellValue('I11', $ods);
            
         }
         
         $fil = 40;
	 

	 foreach($data3 as $dat3){
		
		$reporte->getActiveSheet()->SetCellValue('A'.$fil, $dat3['entregable']);
		$reporte->getActiveSheet()->SetCellValue('C'.$fil, $dat3['nombre_temp']);
        $reporte->getActiveSheet()->SetCellValue('D'.$fil, $dat3['unidad']);
        $reporte->getActiveSheet()->SetCellValue('H'.$fil, $dat3['meta_Anual']);
        $reporte->getActiveSheet()->SetCellValue('I'.$fil, $dat3['avace_acumulado']);
        $reporte->getActiveSheet()->SetCellValue('J'.$fil, $dat3['monto_ejercido']);

		if($dat3['mismo_benef'] == 1){
			$reporte->getActiveSheet()->SetCellValue('E'.$fil, 'Si');
		}else{
			$reporte->getActiveSheet()->SetCellValue('E'.$fil, 'No');
		}

		if($dat3['municipalizable'] == 1){
			$reporte->getActiveSheet()->SetCellValue('F'.$fil, 'Si');
		}else{
			$reporte->getActiveSheet()->SetCellValue('F'.$fil, 'No');
		}

		if($dat3['presenta_alineacion'] == 1){
			$reporte->getActiveSheet()->SetCellValue('G'.$fil, 'Si');
		}else{
			$reporte->getActiveSheet()->SetCellValue('G'.$fil, 'No');
        }

     }

     $fila = 57;
	 foreach($data4 as $dat4){
		 
		$reporte->getActiveSheet()->SetCellValue('A'.$fila, $dat4['nom_ent']);
		$reporte->getActiveSheet()->SetCellValue('C'.$fila, $dat4['numero_comrpromiso']);
		$reporte->getActiveSheet()->SetCellValue('D'.$fila, $dat4['nombre_compromiso']);
		$reporte->getActiveSheet()->SetCellValue('H'.$fila, $dat4['nombre_componente']);
		$fila++;
		
     }
     
     $fi = 30;

     foreach($data5 as $dat5){
        $reporte->getActiveSheet()->SetCellValue('A'.$fi, $dat5['nombre_ff']);
        $reporte->getActiveSheet()->SetCellValue('I'.$fi, $dat5['monto']);

        $fi++;
     }

        $ruta = 'Archivos/repo.xls';
		$imprimir = PHPExcel_IOFactory::createWriter($reporte, 'Excel2007');
		if($dato = $imprimir->save($ruta)){
			echo 'ok';
		}else{
		    echo 'no ok';
		}
    }

}