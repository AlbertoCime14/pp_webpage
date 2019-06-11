<section class="page-section-top-alt-np mt-25 pb-155 pb-md-105 pb-sm-85" id="section-login-mp"> 
<div class="container">
  <h2>
    Actividades
  </h2>
  <!--Panel del la primera captura-->
  <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
         Actividad : Mejorar la calidad
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
      <section>
<div class="form-group row">
  <label for="inputState1" class="col-xs-1 form-label">Eje:</label>
  <div class="col-xs-3">
  <select id="cboEje" class="form-control" onchange="busquedapp()">
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
  <select id="cboPP" class="form-control" disabled="disabled" onchange="busquedaobjetivo()">
    <option selected>Seleccione...</option>
    
  </select>
  </div>
    <label for="inputState3" class="col-xs-1 form-label">Objetivo:</label>
  <div class="col-xs-3">
  <select id="cboObjetivo" class="form-control" disabled="disabled">
    <option selected>Seleccione...</option>
  </select>
  </div>
</div>
      </section>
      <section>
        <div class="form-group row">
  <label for="inputState1" class="col-xs-1 form-label">Estrategia:</label>
  <div class="col-xs-3">
  <select id="inputState1" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
  </div>
    <label for="inputState2" class="col-xs-1 form-label">Lineas de acción:</label>
  <div class="col-xs-3">
  <select id="inputState2" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
  </div>
     <label for="inputState2" class="col-xs-1 form-label">Población objetivo:</label>
  <div class="col-xs-3">
  <select id="inputState2" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
  </div>
</div>
      </section>
        <section>
       <label for="inputState3" class="col-xs-1 form-label">ODS: 1</label>
  </section>
    </div>
  </div>
    <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
         Modulo monerario
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
      <section>
<div class="form-group row">
  <div class="col-xs-1"></div>
  <label for="inputState7" class="col-xs-2 form-label">Origen de financiamiento:</label>
  <div class="col-xs-3">
  <select id="inputState7" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
  </div>
  
  <label for="inputState7" class="col-xs-2 form-label">Nombre la fuente de financiamiento:</label>
  <div class="col-xs-3">
  <select id="inputState7" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
  </div>
</div>
      </section>
      <section>
          
         <div class="form-group row">
          <div class="col-xs-1"></div>
            <label for="inputState7" class="col-xs-2 form-label">Monto de recursos propios:</label>
 <div class="col-xs-3">
<input type="text" class="form-control" placeholder="0.00MXN">
 </div>
             <label for="inputState7" class="col-xs-2 form-label">Monto de otras fuentes de financiamiento:</label>
 <div class="col-xs-3">
<input type="text" class="form-control" placeholder="0.00MXN">
 </div>
         </div>
      </section>
      <section>
                <div class="form-group row">
                   <div class="col-xs-1"></div>
            <label for="inputState7" class="col-xs-2 form-label">Fecha de inicio de la actividad:</label>
 <div class="col-xs-3">
<input type="date" class="form-control">
 </div>
              <label for="inputState7" class="col-xs-2 form-label">Monto total:</label>
 <div class="col-xs-3">
<input type="text" class="form-control" placeholder="0.00MXN">
 </div>       
      </section>
      <section>
         
        <div class="form-group row">
           <div class="col-xs-1"></div>
                      <label for="inputState7" class="col-xs-2 form-label">Fecha de termino de la actividad:</label>
 <div class="col-xs-3">
<input type="date" class="form-control">
 </div>
        </div>
      </section>
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
  <select id="inputState7" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
 </div>
             <label for="inputState7" class="col-xs-6 form-label">Nombre de PP: Seguimiento del desempeño de la gestion</label>

         </div>
      </section>
      <section>
        <div class="form-group row">
            <div class="col-xs-1"></div>
          <label class="col-xs-2 form-label">Nombre de la UBP:</label>
               <div class="col-xs-3 form-label">
          <label>Ejemplo de ubp sdsdssdssdsd</label>
        </div>
           <div class="col-xs-2 form-label">
          <label>Numero PP: 155</label>
        </div>
        </div>


      </section>
    </div>
  </div>
  <input type="submit" class="btn btn-dark" value="Guardar" >
</div>
</section>
<!--
Variables de la actividad
-->
<?php 
  $idactividad = $this->uri->segment(3);
?>
<input type="text" id="txtActividadId" style="visibility: hidden;" value=<?=base64_decode($idactividad);?>>
<!--Footer Begins-->
<footer>

<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>