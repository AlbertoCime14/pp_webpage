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
            <!--<div class="col-xs-5">
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
			-->
                        <div class="col-xs-2">
                          <select id="cboUbp" class="form-control" onchange="busquedanombreubpypp()">
                            <option>UBP</option>
                          </select>
                        </div>

                     <div class="col-xs-8">
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
<!--Aqui para poner las nuevas funciones-->
<script src="<?=base_url();?>js/jquery-2.1.3.min.js"></script>




<!-------------------------- funcion para guardar la actividad -------------------------------------------->
<script type="text/javascript">
  function add_actividad() {
   var nombre=document.getElementById("txtActividad").value;
   var ubp_id_ubp=document.getElementById("cboUbp").value;
   
    document.getElementById("txtActividad").disabled = true;
     document.getElementById("btnAdd").disabled = true;
     /*Url estatica*/
      var url=document.getElementById("url").value;

    $.ajax({
                
                type: "POST",
                url: url+"actividades/add",
                data: "nombre="+nombre+"&ubp_id_ubp="+ubp_id_ubp,
                success: function() {
                    $("#tablacontenidos").load(" #tablacontenidos");
                     document.getElementById("txtActividad").disabled = false;
                     document.getElementById("btnAdd").disabled = false;
                      document.getElementById("txtActividad").value = "";
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);

                }
}); 

}

function eliminarActividad(id){
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: url+"actividades/add",
      data: "nombre="+nombre,
      success: function() {
          $("#tablacontenidos").load(" #tablacontenidos");
           document.getElementById("txtActividad").disabled = false;
           document.getElementById("btnAdd").disabled = false;
            document.getElementById("txtActividad").value = "";
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Status: " + textStatus);
          alert("Error: " + errorThrown);

      }
  }); 
}

</script>

<!--------------------seleccionar el ubp --------------------->
<input type="text" value="<?=base_url();?>" id="url" style="visibility: hidden">
<script type="text/javascript">
  (function(){
 busquedaubp();   
})();
function busquedaubp(){
    //El boleano valida un numero en los input y mantener los values dinamicamente
 var validador = true;
 var optionvalue=0;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/ubp",
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){

                        if(typeof v === 'object'){}else{                          
                        }
                    }else{
                    //numero
                     value=v;     
                    if (validador=== true) {          
                        optionvalue=value;
                        validador=false;
                        } else {
                     //este guarda el nombre del option
                           $('#cboUbp').prepend("<option value="+optionvalue+">"+value+"</option>");
                            validador=true;
                        }                   
                    }                
                
            });     
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);

                }
                }); 
}
</script>

<!--Footer Begins-->
<footer>

<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>