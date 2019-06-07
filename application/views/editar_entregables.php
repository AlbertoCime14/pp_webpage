
<section class="page-section-top-alt-np mt-25 pb-155 pb-md-105 pb-sm-85" id="section-login-mp"> 
<div class="container">
  <h2>
    Entregables
  </h2>
<section>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="entregables-tab" data-toggle="tab" href="#entregables" role="tab" aria-controls="entregables" aria-selected="false">Entregables</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="alineacion-tab" data-toggle="tab" href="#alineacion" role="tab" aria-controls="alineacion" aria-selected="false">Alineación</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  
  <div class="tab-pane fade active in" id="entregables" role="tabpanel" aria-labelledby="entregables-tab">
  	<!--Aqui va los entregables de la actividad previamente seleccionada-->
  	    <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
        <div class="form-group row">
          <div class="col-xs-6"></div>
            <div class="col-xs-4">
                      <input type="text" class="form-control" placeholder="Ingrese el nombre del entregable">
      
            </div>
            <div class="col-xs-2">  <input type="submit"  class="form-control" value="Crear">
            </div>
    
        </div>
      
    </div>

    <div class="panel-body">
      <!--Tabla de contenidos-->
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Unidad de medida</th>
      <th scope="col">Periodicidad</th>
      <th scope="col">Los beneficiarios son los mismos en cada periodo</th>
      <th scope="col" >Municipalizable</th>
      <th scope="col" >Presenta alineación a compromiso</th>
      <th scope="col" >Meta anual</th>
      <th scope="col" >Avance físico acumulado</th>
      <th scope="col" >Monto ejercido acumulado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td><input type="text" class="form-control"></td>
     <td>
        <select id="inputState7" class="form-control">
    <option selected>Si</option>
    <option>No</option>
  </select>
     </td>
     <td>
               <select id="inputState7" class="form-control">
    <option selected>Trimestral</option>
    <option>Bimestral</option>
  </select>
     </td>
     <td>
               <select id="inputState7" class="form-control">
    <option selected>Si</option>
    <option>No</option>
  </select>
     </td>
     <td>
               <select id="inputState7" class="form-control">
    <option selected>Si</option>
    <option>No</option>
  </select>
     </td>
     <td>
               <select id="inputState7" class="form-control">
    <option selected>Si</option>
    <option>No</option>
  </select>
     </td>
     <td>
       <input type="text" class="form-control">
     </td>
     <td>
       <input type="text" class="form-control">
     </td>
     <td>
       <input type="text" class="form-control">
     </td>
    </tr>
  </tbody>
</table>
<section>
    <input type="submit" class="btn btn-dark" value="Guardar" >
</section>
    </div>
  </div>
  </div>
   <div class="tab-pane fade" id="alineacion" role="tabpanel" aria-labelledby="alineacion-tab">
   		<!--Aqui va los entregables de la actividad previamente seleccionada-->
     	    <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
         Alineación del entregable 
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
       <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre del entregable</th>
      <th scope="col">Numero de compromiso</th>
      <th scope="col">Nombre del compromiso</th>
      <th scope="col">Componente</th>
    </tr>
  </thead>
  <tbody>
    <tr>
           <td>            
      <select id="inputState7" class="form-control">
    <option selected>Si</option>
    <option>No</option>
  </select>
</td>
      <td>            
      <select id="inputState7" class="form-control">
    <option selected>Si</option>
    <option>No</option>
  </select>
</td>
<td>
 ok 
</td>
<td>
  na
</td>

    </tr>
  </tbody>
</table>
<section>
    <input type="submit" class="btn btn-dark" value="Guardar" >
</section>
   </div>
    
    </div>
  </div>
</div>
</section>
</div>
</section>
<footer>
<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>