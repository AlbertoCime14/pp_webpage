<section class="page-section-top-alt-np mt-25 pb-155 pb-md-105 pb-sm-85" id="section-login-mp"> 
<div class="container">
  <h2>
    Actividades
  </h2>
  <div class="text-right"><a href="<?=base_url();?>actividades" class="btn btn-md btn-default float-right"><span class="fa fa-mail-reply"></span>Regresar</a></div>
  <!--Panel del la primera captura-->
  <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
        <div class="form-group row">
        	<div class="col-xs-12">
        	  <label  class="col-xs-3 form-label">Actividad: </label>
        	  <input id="txtNombreactividad" class="col-xs-3 form-control"/>
        	  </div>
        </div>
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
      <section>
<div class="form-group row">
  <label for="inputState1" class="col-xs-1 form-label">Eje:</label>
  <div class="col-xs-3">
  <select id="cboEje" class="form-control" onclick="busquedapp()">
    <option selected>Seleccione...</option>
    <?php 
    foreach($ejes as $datoseje)
  {
      echo ' <option value="'.$datoseje['ejeid'].'">'.$datoseje['eje'].'</option>';
  }
    ?>
    
  </select>
  </div>
    <label for="inputState2" class="col-xs-1 form-label">Politica publica:</label>
  <div class="col-xs-3">
  <select id="cboPP" class="form-control" disabled="disabled" onclick="busquedaobjetivo()">
    <option selected>Seleccione...</option>
    
  </select>
  </div>
    <label for="inputState3" class="col-xs-1 form-label">Objetivo:</label>
  <div class="col-xs-3">
  <select id="cboObjetivo" class="form-control" disabled="disabled" onclick="busquedaestrategias()">
    <option selected>Seleccione...</option>
  </select>
  </div>
</div>
      </section>
      <section>
        <div class="form-group row">
  <label for="inputState1" class="col-xs-1 form-label">Estrategia:</label>
  <div class="col-xs-3">
  <select id="cboEstrategia" class="form-control" disabled="disabled" onclick="busquedalineaaccion()">
    <option selected>Seleccione...</option>
    <option>...</option>
  </select>
  </div>
    <label for="inputState2" class="col-xs-1 form-label" >Lineas de acción:</label>
  <div class="col-xs-3">
  <select id="cboLineaacion" class="form-control" disabled="disabled" onclick="busquedaods()">
    <option selected>Seleccione...</option>
  </select>
  </div>
     <label for="inputState2" class="col-xs-1 form-label">Población objetivo:</label>
  <div class="col-xs-3">
  <select id="cobPoblacion" class="form-control">
    <option selected>Seleccione...</option>
  </select>
  </div>
</div>
      </section>
        <section>
       <label class="col-xs-1 form-label" id="lblods" style="visibility: hidden;">ODS: </label>
  </section>
    </div>
  </div>
  
  <!---Panel de objetivo y descripcion----->
    <div class="panel panel-default">
    <div class="panel-heading">Objetivo general</div>
    <div class="panel-body">
    	<section>
    		<textarea id="txtObjetivo" maxlength="300" class="form-control"></textarea>
    	</section>
    </div>
  </div>
  
  <!------descripcion----->
  <div class="panel panel-default">
    <div class="panel-heading">Descripción</div>
    <div class="panel-body">
    	<section>
    		<textarea id="txtDescripcion" maxlength="300" class="form-control"></textarea>
    	</section>
    </div>
  </div>


<!----Modulo monetario---------->
    <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
         Módulo monerario
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
     <section>
     	<div class="form-group row">
     		              
            <label for="inputState7" class="col-xs-2 form-label">Fecha de inicio de la actividad:</label>
 <div class="col-xs-2">
<input type="date" class="form-control" id="txtFechaInicio">
 </div>
    
                      <label for="inputState7" class="col-xs-2 form-label">Fecha de termino de la actividad:</label>
 <div class="col-xs-2">
<input type="date" class="form-control" id="txtFechafin">
 </div>  	  
   <div class="col-xs-2">
   	  <label for="inputState7" class="col-xs-2 form-label">Origen de financiamiento:</label>
   	    </div>
  <div class="col-xs-2">
  	<select id="cbofuente" class="form-control">
    <option selected>Seleccione...</option>
  </select>
  </div>
 
     	</div>
     </section>
     
     <!---Montos --->
     <center>
     <section>
     	<div class="form-group row">
     	<label for="inputState7" class="col-xs-2 form-label">Nombre la fuente de financiamiento:</label>
  <div class="col-xs-3">
  <select id="nombrefuente" class="form-control">
    <option value="0" selected>Seleccione...</option>
  </select>
  </div>
     <label for="inputState7" class="col-xs-2 form-label">Monto de la fuente:</label>
  <div class="col-xs-3">
  <input id="txtMontofuente" type="number" class="form-control" value=0 onclick="validarcantidad()" onkeydown="validarcantidad()"/>
  </div>
  <div class="col-xs-2">

  	<input type="submit"  class="btn btn-dark" value="Agregar" onclick="agregarfuente()"> 
  	
  </div>

     </section>
       </center>
     

 
 <section>
 </br>
 </section>
 <section>
   <table class="table table-striped" id="tablamonto">
  <thead>
    <tr>
      <th scope="col">Nombre de la fuente de financiamiento</th>
      <th scope="col">Cantidad</th>
      <th scope="col" >Opciones</th>
    </tr>
  </thead>
  <tbody id="tbodyid">

    </tbody>
</table>
      <!--Cierre-->
 	
 </section>
 
  <section>
 	  <div class="form-group row">
                   <div class="col-xs-7"></div>
 	             <label for="inputState7" class="col-xs-2 form-label">Monto total:</label>
 <div class="col-xs-3">
<input type="text" class="form-control" placeholder="0.00MXN" disabled="disabled" value="0" id="txtMontototal">
 </div> 
  </div> 
 </section>
 
  <!--    <section>
          
         <div class="form-group row">
          <div class="col-xs-1"></div>
            <label for="inputState7" class="col-xs-2 form-label">Monto de recursos propios:</label>
 <div class="col-xs-3">
<input type="number" class="form-control" placeholder="0.00MXN" id="txtMontoPropio"  style="visibility: hidden" onclick ="actualizar_monto()">
 </div>
             <label for="inputState7" class="col-xs-2 form-label">Monto de otras fuentes de financiamiento:</label>
 <div class="col-xs-3">
<input type="number" class="form-control" placeholder="0.00MXN" id="txtMontoOtras" style="visibility: hidden" onclick="actualizar_monto()"> 
 </div>
         </div>
      </section>
      -->
   
    </div>
  </div>

    <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
         Alineación UBP 
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
            <section>
         <div class="form-group row">
            <div class="col-xs-1"></div>
            <label for="inputState7" class="col-xs-2 form-label">Numero UBP:</label>
 <div class="col-xs-3">
  <select id="cboUbp" class="form-control" onclick="busquedanombreubpypp()">
    <option selected>Seleccione...</option>
  </select>
 </div>
             <label id="txtNombrepp" class="col-xs-6 form-label"></label>

         </div>
      </section>
      <section>
        <div class="form-group row">
            <div class="col-xs-1"></div>
          <label class="col-xs-2 form-label">Nombre de la UBP:</label>
               <div class="col-xs-3 form-label">
          <label id="nombreUbp"></label>
        </div>
           <div class="col-xs-2 form-label">
          <label id="txtNumeropp"></label>
        </div>
        </div>


      </section>
    </div>
  </div>
  <input type="submit" class="btn btn-dark" value="Guardar" onclick="actualizaractividad()">
</div>
</section>
<!--
Variables de la actividad
-->


<?php 
  $idactividad = $this->uri->segment(3);
?>
<!--Aqui para poner las nuevas funciones-->
<input type="text" value="<?=base_url();?>" id="url" style="visibility: hidden">

<input type="text" id="txtActividadId" style="visibility: hidden;" value=<?=base64_decode($idactividad);?>>
<!--Footer Begins-->
<footer>

<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>

<!--Aqui para poner las nuevas funciones-->
<script src="<?=base_url();?>js/jquery-2.1.3.min.js"></script>
<script src="<?=base_url();?>js/funcionesactividades.js"></script>