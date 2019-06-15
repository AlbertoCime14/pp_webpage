
<section class="page-section-top-alt-np mt-25 pb-155 pb-md-105 pb-sm-85" id="section-login-mp"> 
<div class="container">
  <h2>
    Entregables
  </h2>
  <div class="text-right"><a href="<?=base_url();?>actividades" class="btn btn-md btn-default float-right"><span class="fa fa-mail-reply"></span>Regresar</a></div>
<section>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="entregables-tab" data-toggle="tab" href="#entregables" role="tab" aria-controls="entregables" aria-selected="false">Entregables</a>
  </li>
  <li class="nav-item" onclick="cargarAlineacion()";>
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
                      <input type="text" class="form-control" placeholder="Ingrese el nombre del entregable" id="txtEntregable">
      
            </div>
            <div class="col-xs-2">  
                <input  id="btnAdd" type="submit" class="form-control" value="Crear"  onclick="add_entregable();">
            </div>
    
        </div>
      
    </div>

    <div class="panel-body">
      <!--Tabla de contenidos-->
      <form name="frmentregables" id="frmentregables" onsubmit="guardar(this,event);">
      <table class="table table-striped" id="tablacontenidos" >
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
      <th scope="col" ></th>
    </tr>
  </thead>
  <tbody>
   
  <?php
  echo $filas;
  /*
 foreach($mydata as $datos)
  {

  echo "<tr id=\"".$num_entregables."\">";
 //  echo "<td>".$datos['id'] ." </td>";
      
      echo '<td><input type="hidden" name="id'.$num_entregables.'" id="id'.$num_entregables.'" value="'.$datos['id_entregables'].'"><input name="nombre'.$datos['id_entregables'].'" type="text" id="nombre_'.$datos['id_entregables'].'" value="'.$datos['nombre'].'" class="form-control"></td>';
      echo '<td>';
          echo '<select name="cbo_unidad'.$datos['id_entregables'].'" id="cbo_unidad'.$datos['id_entregables'].'" class="form-control">';
          
          echo '<option selected>Seleccione...</option>';
      echo ' </select>';
      echo '</td>';
   
      echo '<td>';
        echo '<select name="cbo_periodicidad_" id="cbo_periodicidad" class="form-control">';
          
          echo '<option selected>Seleccione...</option>';
      echo ' </select>';
      echo '</td>';
      echo '<td>';
      echo '<select id="inputState7" class="form-control">';
          echo ' <option value="1" selected>Si</option>';
          echo '<option value="0">No</option>';
      echo ' </select>';
   echo '</td>';
   echo '<td>';
   echo '<select id="inputState7" class="form-control">';
        echo ' <option value="1" selected>Si</option>';
        echo '<option value="0">No</option>';
   echo ' </select>';
echo '</td>';
echo '<td>';
echo '<select id="inputState7" class="form-control">';
    echo ' <option value="1" selected>Si</option>';
    echo '<option value="0">No</option>';
echo ' </select>';
echo '</td>';
echo '<td>';
    echo '<input type="text" class="form-control">';
echo '</td>';
echo '<td>';
    echo '<input type="text" class="form-control">';
echo '</td>';
echo '<td>';
    echo '<input type="text" class="form-control">';
echo '</td>';

    echo "</tr>";
  
    $num_entregables++;
    
 
  } */
 ?>
  </tbody>
</table>

<section>
    <input type="submit" class="btn btn-dark" value="Guardar" >
</section>
</form>
    </div>
  </div>
  </div>
  <div class="tab-pane fade" id="alineacion" role="tabpanel" aria-labelledby="alineacion-tab">
   		<!--Aqui va los entregables de la actividad previamente seleccionada-->
     	    <div class="panel panel-default" id="panel">
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
      <th scope="col" width="300px">Nombre del compromiso</th>
      <th scope="col">Número de compromiso</th>
      <th scope="col" width="300px">Componente</th>
    </tr>
  </thead>
  <tbody>
    <?php
      $pk = null;
      $selected = null;
      
        foreach ($entregables as $key) {
          //echo "<option value='$key->id_entregables'>$key->nombre</option>";
          $pk .= $key->id_entregables.'.';
      ?>
    <tr>


      <?php
        if(isset($alineacion) && !empty($alineacion) && !empty($alineacion[0])){
          foreach ($alineacion as $a) {
          if($a->entregables_id_entregables === $key->id_entregables){
          echo "<input type='hidden' id='comp$key->id_entregables' value='$a->componente_id_componente'>";
        }
        }
        }
      ?>

      <td>
        <input type="hidden" id="entregable<?php echo $key->id_entregables; ?>" value="<?php echo $key->id_entregables; ?>">
     <input type="text"  id="nombre_entregable" value="<?php echo $key->nombre; ?>" class="form-control" disabled>
    <!--<select id="entregable" class="form-control">
    </select>-->
</td>
<td>            
    <select id="compromiso<?php echo $key->id_entregables; ?>" onchange="onChange(<?php echo $key->id_entregables; ?>)" class="form-control">
      <option>Seleccionar compromiso</option>
      <?php
      
        foreach($compromiso as $r){
          foreach ($alineacion as $a) {
            if($a->compromisos_id_compromiso === $r->id_compromiso && $a->entregables_id_entregables === $key->id_entregables){
              $selected = 'selected';
              break;
            }else{
              $selected = null;
            }
          }
          echo "<option value='$r->id_compromiso' $selected>$r->nombre_compromiso</option>"; 
        }
      ?>
    </select>
</td>
<td>
 <label id="numero<?php echo $key->id_entregables; ?>" class="col-form-label text-md-center"></label>
</td>
<td>
  <select id="componente<?php echo $key->id_entregables; ?>" class="form-control">
    <option>Seleccionar</option>
  </select>
</td>
</form>
    </tr>
    <?php } ?>
  </tbody>
</table>
<div class="container-fluid" style="padding-bottom: 20px">
  <div class="col-md-6">
    <label>Elaboro: </label>
    <input type="text" id="elaboro" class="form-control" value="<?php if(isset($actividad->elaboro)) { echo $actividad->elaboro;}?>">
  </div>
<div class="col-md-6">
  <label>Autorizo: </label>
  <input type="text" id="autorizo" class="form-control" value="<?php if(isset($actividad->autorizo)) { echo $actividad->autorizo;}?>">

</div>
</div>
<input type="hidden" id="array" value="<?php echo trim($pk, '.');?>">
<section>
    <input type="button" onclick="alinear_entregable('<?php echo trim($pk, '.');?>')" class="btn btn-dark" value="Guardar" >
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
<?php $actividad_id = base64_decode($this->uri->segment(3));?>
<input type="text" value="<?= $actividad_id; ?>" id="id_Actividad" style="visibility: hidden">
<input type="hidden" id="key" value="<?php echo $this->uri->segment(3);?>">
</footer>
<script src="<?=base_url();?>js/jquery-2.1.3.min.js"></script>
<script src="<?=base_url();?>js/funcionesentregables.js"></script>
<script>
  var numEntregables = <?=$num_entregables?>;

  function guardar(f,e){
    e.preventDefault();
    
    $.ajax({                            
      type: "POST",
      url: "<?=base_url()?>index.php/Control_entregable/guardar_mod_entregables",
      data: $(f).serialize()+'&numEntregables='+numEntregables,      
      success: function(data) {
        notie.alert({ type: 1, text: 'Correcto!', time: 2 });
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {          
        
      }
    });
  }
  
  var isIE = document.all?true:false;
  var isNS = document.layers?true:false;
  function soloNumeros(e,decReq) {
      var key = (isIE) ? event.keyCode : e.which;
      var obj = (isIE) ? event.srcElement : e.target;
      var isNum = (key > 47 && key < 58) ? true : false;
      var dotOK = (key==46 && decReq=='decOK' && (obj.value.indexOf(".")<0 || obj.value.length==0)) ? true:false;
      var isDel = (key==0 || key==8 ) ? true:false;
      var isEnter = (key==13) ? true:false;
      //e.which = (!isNum && !dotOK && isNS) ? 0 : key;
      return (isNum || dotOK || isDel || isEnter);
}
function myFunction(id_entregable) {
    var id_value = document.getElementById("munizipable_"+id_entregable).value;
    var id_entre=id_entregable;
    if(id_value == 1){
    
        //$("#munizipalizacion").click(function(){
        $("#id_municipalizacion_"+id_entre).css('visibility','');
      //});
      
      
    }
    else{
        //$("#munizipalizacion").click(function(){
          $("#id_municipalizacion_"+id_entre).css('visibility','hidden');
        //$("#munizipalizacion").css('display','none');}
    }
      //document.getElementById("demo").innerHTML = "You selected: " + x;
      
    
}

function munizipalizacion(id_entregable){
  
}

</script>