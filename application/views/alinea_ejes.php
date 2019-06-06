<!DOCTYPE html>
<html lang="en" class="no-js"><head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="format-detection" content="telephone=no" />  
    <meta name="description" content="">
    <meta name="author" content="">
    <title>SEPLAN</title>
    <!-- Google Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <!-- CSS Files -->
    <link href="<?=base_url();?>css/helpers/jquery.fancybox-buttons.css?v=1.0.5" rel="stylesheet">
    <link href="<?=base_url();?>css/helpers/jquery.fancybox-thumbs.css?v=1.0.7" rel="stylesheet">
    <link href="<?=base_url();?>css/animations.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/bootstrap.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/settings.css" rel="stylesheet" media="screen" />
    <link href="<?=base_url();?>font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/style.css" rel="stylesheet">
    <link href="<?=base_url();?>css/responsive.css" rel="stylesheet">
    <link href="<?=base_url();?>css/vertical-xc.min.css" rel="stylesheet">
    <link href="<?=base_url();?>plugins/datatables.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?=base_url();?>css/notie.css">
    
</head>
<div id="fb-root"></div>


<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<!--Preloader-->
<div id="loader-wrapper">
    <div id="loader"></div>
</div>

<!-- Navigation -->
   <nav class="navbar mega-menu navbar-fixed-top nav-height white-bgr" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            <a class="navbar-brand" href="javascript:"><img src="<?=base_url();?>img/logo_seplan.png" alt=""></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
               <ul class="nav navbar-nav navbar-right">                
                 <li><a href="#"><i class="xc icon-user-male"></i><?php echo $_SESSION['nom_mun']; ?></a></li>
                 <li><a href="#" onclick="cerrar();"><i class="xc icon-key-xc"></i>Cerrar sesión</a></li>
                 <li class="active"><a href="<?=base_url();?>ejes">Ejes</a></li>
                 <li><a href="<?=base_url();?>objetivos" >Objetivos</a></li>
                 <li><a href="<?=base_url();?>estrategias" >Estrategias</a></li>
                 <li><a href="<?=base_url();?>lineas_accion" >Líneas de acción</a></li>
                    
               </ul><!--/.nav navbar-nav navbar-right-->
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
  <!-- navbar-end -->

<section id="box-shadow-bottom"></section>

<!-- Shadow Element -->

<section class="page-section-top-alt has-border">      
 <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-4 mb-sm-80">
        <div class="form-group">
          <label>Ejes del PED</label>
          <select id="eje_ped" class="form-control sel-list-tpl" onchange="tipo_eje(this.value);">
            <option value="">Ejes PED</option>
            <option value="0">Sin alineación</option>
            <?php 
              if($ejes!=false)
              {
                foreach ($ejes as $veje) {
                  echo '<option value="'.$veje->ejeid.'">'.$veje->eje.'</option>';
                }
              }
            ?>
          </select>        
         </div>       
       </div> <!-- /.col -->      
      <div class="col-md-2 col-sm-2 mb-sm-80">         
        <div class="form-group">
          <label>Tipo de Eje <span style="color: #FF0000">*</span></label>
            <input type="text" name="transversal" id="transv" class="form-control" readonly>
         </div>       
     </div>
     <div class="col-md-3 col-sm-3 mb-sm-80">
        <div class="form-group">
          <label>Eje municipal <span style="color: #FF0000">*</span></label>
          <input id="eje_mun" type="text" class="form-control" placeholder="Eje municipal">
       </div>
      </div>    
     <div class="col-md-3 col-sm-3 mb-sm-80">
       <button id="btn_ejes" class="btn btn-default" onclick="guarda_alineacion();" style="margin-right: 5%; margin-top: 9%;">Guardar</button>
     </div>
      
    </div><!-- /.row -->
    
 </div><!-- /.container -->
</section>
<section>
  <?php print_r($fields); ?>
</section>

<!-- Section About eje bueno hasta ahora-->                
<?php /*<section class="page-section-top-alt has-border" id="about">      
 <div class="container">
    <div class="row">
      
      <div class="col-md-3 col-sm-3 mb-sm-80">
        <div class="form-group">
          <label>Eje municipal <span style="color: #FF0000">*</span></label>
          <input id="eje_mun" type="text" class="form-control" placeholder="Eje municipal">
       </div>
      </div>
      <div class="col-md-2 col-sm-2 mb-sm-80">         
        <div class="form-group">
          <label>Tipo de Eje <span style="color: #FF0000">*</span></label>
          <select id="transv" class="form-control sel-list-tpl" onchange="carga_ejes_transv(this.value);">
            <option value="1">Transversal</option>
            <option value="0" selected>Sectorial</option>
          </select>        
         </div>       
     </div>
      <div class="col-md-4 col-sm-4 mb-sm-80">
        <div class="form-group">
          <label>Ejes del PED</label>
          <select id="eje_ped" class="form-control sel-list-tpl">
            <option value="">Ejes PED</option>          
            <?php 
              if($ejes!=false)
              {
                foreach ($ejes as $veje) {
                  echo '<option value="'.$veje->ejeid.'">'.$veje->eje.'</option>';
                }
              }
            ?>
          </select>        
         </div>       
       </div> <!-- /.col -->
       <div class="col-md-3 col-sm-3 mb-sm-80">
         <button id="btn_ejes" class="btn btn-default" onclick="guarda_alineacion();" style="margin-right: 5%; margin-top: 9%;">Guardar</button>
       </div>
      
    </div><!-- /.row -->
    
 </div><!-- /.container -->
</section>*/?>

<!-- Services Part 1, Tabs -->
<section class="page-section" id="services">
 <div class="container">
    <div class="row">    
      <div class="col-lg-12" id="tabla_ejes">
        <table id="tab_ejes" class="table table-striped"> 
          <thead> 
            <tr> 
              <th>Num</th>
              <th>Eje</th>
              <th>Tipo de Eje</th>
              <th>Alineación PED</th>
              <th>Opciones</th>
            </tr> 
          </thead> 
          <tbody>
            <?php
          if($ejes_mun!=false)
          {
            foreach ($ejes_mun as $vejem) {

            if($vejem->transversal==1) $tipo_eje = "Transversal";
            elseif($vejem->transversal==0)
            {
              if($vejem->ejeid_ped>0) $tipo_eje = "Sectorial";
              else $tipo_eje = "No aplica";
            }




              echo '<tr>
                    <th scope="row">'.$vejem->ejeid.'</th> 
                    <td>'.$vejem->eje.'</td>
                    <td>'.$tipo_eje.'</td>
                    <td>'.$vejem->eje_ped.'</td> 
                    <td><a href="javascript:" onclick="editar('.$vejem->ejeid.');"><i class="fa fa-edit"></i></a> <a href="javascript:" onclick="elimina_eje('.$vejem->ejeid.');"><i class="fa fa-trash-o"></i></a></td>
                  </tr>';
            }
          }
          ?>
          </tbody>
        </table>
      </div>
      
      <div class="col-md-2 col-md-offset-8"><a href="<?=base_url();?>exporta_excel">Exportar Excel</a></div>
      <div class="col-md-2"><a target="_blank" href="<?=base_url();?>archivos/Metodologia_redaccion_objetivos_estrategias_y_lineas_de_accion.pdf">Descargar PDF guia</a></div>
    </div>
 </div> <!--/.container-->
</section>


<!--Footer Begins-->
<footer>

<!-- Contact Section -->
<?php include("contacto.php") ?>



</footer>

<script src="<?=base_url();?>js/jquery-2.1.3.min.js"></script>
<script src="<?=base_url();?>js/bootstrap.min.js"></script>
<script src="<?=base_url();?>js/jquery.easing.min.js"></script>
<script src="<?=base_url();?>js/scrolling-nav.js"></script>
<script src="<?=base_url();?>js/classie.js"></script>
<script src="<?=base_url();?>js/cbpAnimatedHeader.min.js"></script>
<script src="<?=base_url();?>js/appear.min.js" type="text/javascript"></script>
<script src="<?=base_url();?>js/animations.min.js" type="text/javascript"></script>
<script src="<?=base_url();?>js/retina-1.1.0.min.js"></script>
<script src="<?=base_url();?>js/jquery.fancybox.pack.js?v=2.1.5"></script>
<script src="<?=base_url();?>js/jquery.fancybox-buttons.js?v=1.0.5"></script>
<script src="<?=base_url();?>js/jquery.fancybox-media.js?v=1.0.6"></script>
<script src="<?=base_url();?>js/jquery.fancybox-thumbs.js?v=1.0.7"></script>
<script src="<?=base_url();?>js/jquery.flexslider.min.js"></script>
<script src="<?=base_url();?>js/jquery.validate.min.js"></script>
<script src="<?=base_url();?>js/jquery.form.min.js"></script>
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script src="<?=base_url();?>js/map.grey.js"></script>
<script src="<?=base_url();?>js/isotope.pkgd.min.js" type="text/javascript"></script>
<script src="<?=base_url();?>js/owl.carousel.min.js"></script>
<script src="<?=base_url();?>js/jquery.parallax-1.1.3.js"></script>
<script src="<?=base_url();?>js/jquery.countTo.js" type="text/javascript"></script>
<!--<script src="<?=base_url();?>js/SmoothScroll.js"></script>-->
<script src="<?=base_url();?>js/lazy-bootstrap-carousel-v3.js"></script>
<script src="<?=base_url();?>js/jquery.themepunch.tools.min.js"></script>
<script src="<?=base_url();?>js/jquery.themepunch.revolution.min.js"></script>
<script src="<?=base_url();?>js/main.js" type="text/javascript"></script>
<script src="<?=base_url();?>plugins/datatables.js" type="text/javascript"></script>
<script src="<?=base_url();?>js/notie.js"></script>

<script>
  $(document).ready(function() {
    $('#tab_ejes').DataTable({
            "language": {
                "url": "<?=base_url();?>plugins/spanish.json"
            }
        });
  });

  function tipo_eje(ejeid) {      
    if(ejeid>=8 && ejeid<=11) $('#transv').val('Sectorial');
    else if(ejeid>=12 && ejeid<=16) $('#transv').val('Transversal');
    else $('#transv').val('No aplica');
  }

 function guarda_alineacion() {
  var eje_mun = $('#eje_mun').val();
  var transv = $('#transv').val();
  var eje_ped = $('#eje_ped').val();
  if(eje_mun.trim()!="") {
    $.post('<?=base_url();?>guarda_eje', {eje_mun:eje_mun,transv:transv,eje_ped:eje_ped}, function(resp){      
      if(resp==1) {        
        notie.alert({ type: 1, text: 'Guardado Correctamente!', time: 2 });    
        act_tabla();
      }
      else notie.alert({ type: 3, text: 'Error al guardar', time: 2 }) 
    });
  }
  else notie.alert({ type: 2, text: 'Debe completar los campos obligatorios', time: 2 });
 }

 function act_tabla() {
  $.post('<?=base_url();?>tabla_eje', function(resp){
    $('#tabla_ejes').html(resp);
    $('#tab_ejes').DataTable({
            "language": {
                "url": "<?=base_url();?>plugins/spanish.json"
            }
        });
  });
 } 

 function editar(ejeid)
 {
  $.post('<?=base_url();?>consulta', {ejeid:ejeid}, function(resp){
    console.log(resp);
    var json = resp.split("-");
    $( "#eje_mun" ).val(json[1]);
    $( "#eje_ped" ).val(json[2]);
    $( "#transv" ).val(json[3]);
    $('#btn_ejes').text('Actulizar');
    $('#btn_ejes').attr('onclick','actualizar_eje('+ejeid+')');
    if(!$("#btn_cancelar").length ) {
      $('#btn_ejes').after('<button id="btn_cancelar" class="btn btn-default" onclick="cancelar_act();" style="margin-top: 9%;">Cancelar</button>');
    }
    
  });
 }

 function cancelar_act()
 {
    $("#eje_mun" ).val('');
    $("#eje_ped" ).val('');
    $("#transv" ).val('');
    $('#btn_ejes').text('Guardar');
    $('#btn_ejes').attr('onclick','guarda_alineacion()');
    $('#btn_cancelar').remove();
 }

 function actualizar_eje(ejeid)
 {
  var eje_mun = $('#eje_mun').val();
  var transv = $('#transv').val();
  var eje_ped = $('#eje_ped').val();
  $.post('<?=base_url();?>edita_eje',{ejeid:ejeid,eje_mun:eje_mun,transv:transv,eje_ped:eje_ped}, function(resp){
    if(resp==1) {      
      notie.alert({ type: 1, text: 'Actualizado correctamente!', time: 2 });
      act_tabla();
    }
    else notie.alert({ type: 3, text: 'Error al actualizar los datos', time: 2 }) 
  });
 }

 function elimina_eje(ejeid) {
  $.post('<?=base_url();?>elimina_eje', {ejeid:ejeid}, function(resp){
    console.log(resp);
    if(resp==1) {      
      notie.alert({ type: 1, text: 'Eje eliminado correctamente!', time: 2 });
    }
    else notie.alert({ type: 3, text: 'Error al eliminar el eje', time: 2 });
    act_tabla();
  })
 }

 function carga_ejes_transv(op) {
  $.post('<?=base_url();?>ejes_transv', {op:op}, function(resp) {
    $("#eje_ped").empty().append('<option value="">Ejes PED</option>'+resp);
  });
 }

function cerrar() {
  $.post('<?=base_url();?>cerrar', function(resp){
    if(resp=="correcto") location.href = "<?=base_url();?>iniciar";
  });
 }
</script>

</body>
</html>





