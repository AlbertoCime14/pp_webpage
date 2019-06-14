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
                          <select id="cboUbp" class="form-control" onchange="busquedanombreubpypp()" onclick="removerubpindex()">
                            <option value="0">UBP</option>
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
      <th scope="col" style="text-align: center;">Opciones</th>
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
          <a href="javascript:void(0)" onclick="eliminarActividad('.$datos['id'].')" >Eliminar | </a> 
          <a href="'.$url.'actividades/entregables/'.base64_encode($datos['id']).'" >Editar entregables| </a>
          <a id="download" onclick="imp('. $datos['id']. ')">Generar reporte</a> </td> ';
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
  	var ubp_id_ubp=document.getElementById("cboUbp").value;
  	var nombre=document.getElementById("txtActividad").value;
  	if(ubp_id_ubp==0  || nombre.trim()=="") {
  		alert("Por favor seleccione un numero de ubp y escriba un nombre de la actividad");
  	}else{
    document.getElementById("txtActividad").disabled = true;
     document.getElementById("btnAdd").disabled = true;
     /*Url estatica*/
      var url=document.getElementById("url").value;

    $.ajax({
                
                type: "POST",
                url: url+"actividades/add",
                data: "nombre="+nombre+"&ubp_id_ubp="+ubp_id_ubp,
                success: function() {
                	notie.alert({ type: 1, text: 'Correcto!', time: 2 });
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
  	
  	
   
}
</script>
<!--------------------eliminar actividad-------------------->
<script type="text/javascript" charset="utf-8">
	function eliminarActividad(id){
		 var url=document.getElementById("url").value;
 var r = confirm("¿Seguro desea eliminar la actividad?");
  if (r == true) {
  	  $.ajax({
      type: "POST",
      url: url+"actividades/eliminar",
      data: "id_actividad_estrategica="+id,
      success: function() {
      	notie.alert({ type: 1, text: 'Correcto!', time: 2 });
           $("#tablacontenidos").load(" #tablacontenidos");
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Status: " + textStatus);
          alert("Error: " + errorThrown);
      }
  });
    
  } else {
    
  }

 
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
<script>
	function removerubpindex(){
		$("#cboUbp option[value='0']").remove();
	}
</script>

<script>
function imp(id){
  
  $.ajax({         
                type: "GET",
                url:"<?=base_url()?>index.php/Control_generico/generarreporte",
                data: 'id='+id,
                success: function(data) {  
                  console.log(data);
                 //document.getElementById('desc').click();
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