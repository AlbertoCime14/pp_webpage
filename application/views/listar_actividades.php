<!-- Shadow Element -->
<!-- Services Part 1, Tabs -->

<section class="page-section-top-alt-np mt-25 pb-155 pb-md-105 pb-sm-85" id="section-login-mp"> 
<div class="container">
  <h2>
    Actividades
  </h2>
  <div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
         
             <div class="form-group row">
            <div class="col-xs-5">
                      <div class="input-group">
                <div class="input-group-btn search-panel">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                      <span id="search_concept">Filter by</span> <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#contains">Contains</a></li>
                      <li><a href="#its_equal">It's equal</a></li>
                      <li><a href="#greather_than">Greather than ></a></li>
                      <li><a href="#less_than">Less than < </a></li>
                      <li class="divider"></li>
                      <li><a href="#all">Anything</a></li>
                    </ul>
                </div>
                <input type="hidden" name="search_param" value="all" id="search_param">         
                <input type="text" class="form-control" name="x" placeholder="Search term...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>

                  
            </div>
            </div>
                     <div class="col-xs-4">
                           <input type="text" class="form-control"  placeholder="Ingrese el nombre de la actividad" id="txtActividad">
                     </div>
                     <div class="col-xs-2">
                       <input type="submit" class="form-control" value="Crear"  onclick="add_actividad()" id="btnAdd">
                     </div>
                   </div>
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
        <table class="table table-striped" id="tablacontenidos">
  <thead>
    <tr>
      <th scope="col">Nombre de actividad</th>
      <th scope="col">Eje</th>
      <th scope="col">PP</th>
      <th scope="col">UBP</th>
      <th scope="col" style="text-align: center;">Opciónes</th>
    </tr>
  </thead>
  <tbody>
<!--

              'id'        => $row->id_actividad_estrategica,
              'Nombre'    => $row->Nombre,
              'Eje'       => $row->eje ,
              'PP'        => $row->nombre_pp ,
              'UBP'       => $row->nombre_ubp ,

            -->
 <?php
  $url=base_url();
 foreach($mydata as $datos)
  {

  echo "<tr>";
 //  echo "<td>".$datos['id'] ." </td>";
    echo "<td>".$datos['Nombre'] ." </td>";
    echo "<td>".$datos['Eje'] ." </td>";
     echo "<td>".$datos['PP'] ." </td>";
        echo "<td>".$datos['UBP'] ." </td>";
    echo '  <td style="text-align: center;"><a href="'.$url.'actividades/editar/'.base64_encode($datos['id']).'">Editar |</a>
          <a href="javascript:void(0)" >Eliminar | </a> 
          <a href="'.$url.'actividades/entregables/'.base64_encode($datos['id']).'" >Editar entregables| </a>
          <a href="javascript:void(0)">Generar reporte</a> </td> ';
    echo "</tr>";

 
  }
 ?>
    </tbody>
</table>
      <!--Cierre-->
         </div>
  </div>
</div>
</section>

<!--Footer Begins-->
<footer>

<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>