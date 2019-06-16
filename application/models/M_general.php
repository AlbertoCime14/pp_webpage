<?php
class M_general extends CI_Model {


	function __construct()
	{
		parent::__construct();
		$this->db = $this->load->database('default',TRUE);
	}

	/*	Funciones para usar transacciones
	======================================
	*/
	public function iniciar_transaccion()
	{
	  $con = $this->load->database('default',TRUE);
	  $con->trans_begin();
	  return  $con;
	}

	public function terminar_transaccion($con)
	{
		if ($con->trans_status() === FALSE)
		{
			$con->trans_rollback();
			return false;
		}
		else 
		{
			$con->trans_commit();
			return true;
		}
	}

	public function insertar_registro($tabla,$datos,$con='')
	{
		if($con == '') $con = $this->db;

		if($con->insert($tabla,$datos)) return $con->insert_id();
		else return false;
	}

	public function insertar_registro_no_pk($tabla,$datos,$con='')
	{
		if($con == '') $con = $this->db;

		if($con->insert($tabla,$datos)) return true;
		else return false;
	}

	public function actualizar_registro($tabla,$where,$datos,$con='')
	{
		if($con == '') $con = $this->db;
		$con->where($where);
		return $con->update($tabla, $datos);
	}

	public function eliminar_registro($tabla,$where,$con='')
	{
		if($con == '') $con = $this->db;
		return $con->delete($tabla,$where);
	}

	public function desactivar_registro($tabla,$where,$con='')
	{
		if($con == '') $con = $this->db;
		$con->where($where);
		return $con->update($tabla, array('activo' => 0));

		return ($con->affected_rows() > 0);
	}

	public function activar_registro($tabla,$where,$con='')
	{
		if($con == '') $con = $this->db;
		$con->where($where);
		$con->update($tabla, array('activo' => 1));

		return ($con->affected_rows() > 0);
	}

	/*	Funciones para usar transacciones
	======================================
	*/
}
?>