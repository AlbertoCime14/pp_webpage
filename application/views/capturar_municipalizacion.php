<section class="page-section-top-alt-np mt-25 pb-155 pb-md-105 pb-sm-85" id="section-login-mp"> 
<div class="container">
  <h2>
    Municipalización
  </h2>
  <div class="text-right"><a href="<?=base_url();?>actividades/entregables/<?=$key?>" class="btn btn-md btn-default float-right"><span class="fa fa-mail-reply"></span>Regresar</a></div><br>
  <div class="panel panel-default">
    <div class="panel-body">
      <!--Tabla de contenidos-->
      <form method="POST" onsubmit="guardarMetasMunicipio(this,event);">
      <div class="row">
        <div class="col-md-12">
          <h3><?=$nombre?></h3>
          <input type="hidden" name="id_entregable" id="id_entregable" value="<?=$id_entregables?>">
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped" id="tablacontenidos">
          <thead>
            <tr>
              <th scope="col" width="20px">#</th>
              <th scope="col" >Municipio</th>
              <th scope="col">Meta anual por municipio</th>
              <th scope="col" >Unidad de medida</th>
            </tr>
          </thead>
          <tbody>
            <?=$filas?>
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col-md-6 text-center">
          <h2>Suma metas:<span id="total"><?=$suma_metas?></span></h2>
        </div>
        <div class="col-md-6 text-center">
          <h2>Meta anual:<?=$meta_Anual?></h2>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-12 text-center">
          <input type="submit" class="btn btn-dark" value="Guardar">&nbsp;<a href="<?=base_url();?>actividades/entregables/<?=$key?>" class="btn btn-md btn-default float-right"><span class="fa fa-mail-reply"></span>Regresar</a>
        </div>
      </div>

      </form>
    </div>
  </div>
</div>
</section>
<footer>
<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>
<!--Aqui para poner las nuevas funciones-->
<script src="<?=base_url();?>js/jquery-2.1.3.min.js"></script>
<script type="text/javascript">
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

function compararMetas(){
  var total = 0;
  for (var i = 1; i < 107; i++) {
    if($("#meta_"+i).val() > 0 && $("#meta_"+i).val() != ''){
      total = parseFloat(total) + parseFloat($("#meta_"+i).val());
    }
  }
  console.log((total ==<?=$meta_Anual?>));
  return (total ==<?=$meta_Anual?>);
}

function actualizarTotal(){
  var total = 0;
  for (var i = 1; i < 107; i++) {
    if($("#meta_"+i).val() > 0 && $("#meta_"+i).val() != ''){
      total = parseFloat(total) + parseFloat($("#meta_"+i).val());
    }
  }
  $("#total").html(total);
}

function guardarMetasMunicipio(f,e){
  e.preventDefault();
  if(compararMetas()){
    $.ajax({                            
        type: "POST",
        url: "<?=base_url()?>index.php/Control_entregable/guardar_metas_municipio",
        data: $(f).serialize(),      
        success: function(resp) {
          if(resp=='correcto') notie.alert({ type: 1, text: 'Los datos han sido guardados', time: 2 });
          else notie.alert({ type: 2, text: 'Ha ocurrido un error.', time: 2 });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          notie.alert({ type: 2, text: 'Ha ocurrido un error. Contacte al administrador', time: 2 });
        }
    });
  }else {
    notie.alert({ type: 2, text: 'Las metas no coinciden con la meta anual.', time: 2 });
  }
}
</script>