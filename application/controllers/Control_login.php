<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Control_login extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		session_start();
		$this->load->helper('url');
		$this->load->model('M_login');
		
		//$this->load->library('session');
	}
	public function inicia_sesion()
	{
		$depen = $this->input->post('user', TRUE);
		$pass = $this->input->post('pass', TRUE);

		$model = new M_login();
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