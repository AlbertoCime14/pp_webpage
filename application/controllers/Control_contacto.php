<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control_contacto extends CI_Controller {

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

	public function enviar()
	{
		$nombre = $this->input->post('name',TRUE);
		$correo = $this->input->post('email',TRUE);
		$mensaje = $this->input->post('message',TRUE);
   		if($nombre!="" && $mensaje!="")
   		{
	    	$encabezado="From: noreply@yucatan.gob.mx\r\n".                            	
		    "MIME-Version: 1.0\r\n".
	        //"Reply-To:".$correo."\r\n".
		    //"Content-type: text/html; charset=UTF-8";	
	    	//"MIME-Version: 1.0\r\n".
			//"Reply-To:antonio_avp@hotmail.com\r\n".
			"Content-type: text/html; charset=UTF-8";
			 $cuerpo =  "<br>
			              <table border='1'>
	                      <tr><td>Nombre: </td> <td><b>".$nombre."</b></td></tr>
	                      <tr><td>Correo: </td> <td>".$correo."</td></tr>
	                      <tr><td>Comentarios: </td> <td>".$mensaje."</td></tr>
	                      </table>"; 
	     	$estado = mail('geo_barbosa89@hotmail.com' , 'SEPLAN Web[contacto]', $cuerpo, $encabezado);
	        //$estado = mail('geo_barbosa89@hotmail.com' , 'Observatorio de compromisos[contacto]', $cuerpo, $encabezado);
		  if($estado)
		  	{
		  		echo 1;	  		
		  	}
		  else
		   {
	            echo 0;
		   }   			
   		}
   		else echo "No puede dejar campos vacios";
	}
}