<!-- Shadow Element -->
<!-- Services Part 1, Tabs -->

<section class="page-section-top-alt-np mt-25 pb-155 pb-md-105 pb-sm-85" id="section-login-mp"> 
<div class="container">
  <h2>
    Actividades
  </h2>
  <div class="panel panel-default">
    <div class="panel-heading">               
      <div class="form-group row">            
        <div class="col-xs-12 col-md-2">
          <select id="cboUbp" class="form-control" onchange="busquedanombreubpypp()" onclick="removerubpindex()">
            <option value="0">UBP</option>
          </select>
        </div>
        <div class="col-xs-12 col-md-8">
          <input type="text" class="form-control"  placeholder="Ingrese el nombre de la actividad" id="txtActividad">
        </div>
        <div class="col-xs-12 col-md-2">
          <input type="submit" class="btn btn-dark" value="Crear"  onclick="add_actividad()" id="btnAdd">
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
        <?php
          $url=base_url();
          foreach($mydata as $datos)
          {

            echo "<tr>";
              echo "<td>".$datos['Nombre'] ." </td>";
              echo '<td style="text-align: center;"><a href="'.$url.'actividades/editar/'.base64_encode($datos['id']).'">Editar |</a>
                <a href="javascript:void(0)" onclick="eliminarActividad('.$datos['id'].')" >Eliminar | </a> 
                <a href="'.$url.'actividades/entregables/'.base64_encode($datos['id']).'" >Editar entregables| </a>
                <a style="cursor:pointer;" id="download" onclick="imp('. $datos['id']. ')">Descargar ficha</a></td>';
            echo "</tr>";
          }
        ?>
        </tbody>
      </table>      
    </div>
  </div>
</div>
<a href="<?=base_url();?>Archivos/repo.xls" id='desc'></a>
<input type="text" value="<?=base_url();?>" id="url" style="visibility: hidden">
</section>
<!--Aqui para poner las nuevas funciones-->
<script src="<?=base_url();?>js/jquery-2.1.3.min.js"></script>
<!-------------------------- funcion para guardar la actividad -------------------------------------------->
<script type="text/javascript">
  function add_actividad() {
  	var ubp_id_ubp=document.getElementById("cboUbp").value;
  	var nombre=document.getElementById("txtActividad").value;
  	if(ubp_id_ubp==0  || nombre.trim()=="") {
  		//alert("Por favor seleccione un numero de ubp y escriba un nombre de la actividad");
      notie.alert({ type: 2, text: 'Por favor seleccione un numero de ubp y escriba un nombre de la actividad', time: 2 });
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
        	notie.alert({ type: 1, text: 'Actividad creada', time: 2 });
            $("#tablacontenidos").load(" #tablacontenidos");
             document.getElementById("txtActividad").disabled = false;
             document.getElementById("btnAdd").disabled = false;
              document.getElementById("txtActividad").value = "";
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          notie.alert({ type: 3, text: 'Ha ocurrido un error. Contacte al administrador', time: 2 });
          /*  alert("Status: " + textStatus);
            alert("Error: " + errorThrown);*/

        }
      }); 
	  }
  }

	function eliminarActividad(id){
		var url=document.getElementById("url").value;
    var r = confirm("¿Seguro desea eliminar la actividad?");
    if (r == true) {
  	  $.ajax({
        type: "POST",
        url: url+"actividades/eliminar",
        data: "id_actividad_estrategica="+id,
        success: function() {
        	notie.alert({ type: 1, text: 'Actividad eliminada', time: 2 });
          $("#tablacontenidos").load(" #tablacontenidos");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          notie.alert({ type: 3, text: 'Ha ocurrido un error. Contacte al administrador', time: 2 });
            /*alert("Status: " + textStatus);
            alert("Error: " + errorThrown);*/
          }
      });      
    } 
  }

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
        notie.alert({ type: 3, text: 'Ha ocurrido un error. Contacte al administrador', time: 2 });
          /*alert("Status: " + textStatus);
          alert("Error: " + errorThrown);*/

      }
    }); 
  }

	function removerubpindex(){
		$("#cboUbp option[value='0']").remove();
	}

  function imp(id){
    $.ajax({         
      type: "GET",
      url:"<?=base_url()?>index.php/Control_reporte/gen",
      data: 'id='+id,
      success: function(data) {  
        console.log(data);
       document.getElementById('desc').click();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        notie.alert({ type: 3, text: 'Ha ocurrido un error. Contacte al administrador', time: 2 });
          /*alert("Status: " + textStatus);
          alert("Error: " + errorThrown);*/

      }
    });
  }
</script>

<!--Footer Begins-->
<footer>

<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>