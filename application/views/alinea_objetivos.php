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
                 <li><a href="<?=base_url();?>ejes" >Ejes</a></li>
                 <li class="active"><a href="<?=base_url();?>objetivos" >Objetivos</a></li>                
                    
               </ul><!--/.nav navbar-nav navbar-right-->
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
  <!-- navbar-end -->

<section id="box-shadow-bottom"></section>

<!-- Shadow Element -->
<!-- Section About -->                
<section class="page-section-top-alt has-border" id="about">      
 <div class="container">
    <div class="row">
      
      <div class="col-md-3 col-sm-3 mb-sm-80">
        <div class="form-group">
          <label>Objetivo municipal <span style="color: #FF0000">*</span></label>
          <input id="objetivo_mun" type="text" class="form-control" placeholder="Objetivo municipal" minlength="20">
       </div>
      </div>
      <div class="col-md-3 col-sm-3 mb-sm-80">         
        <div class="form-group">
          <label>Ejes PMD <span style="color: #FF0000">*</span></label>
          <select id="eje_pmd" class="form-control sel-list-tpl" onchange="carga_objped(this.value);">
            <option value="">Ejes PMD</option>
            <?php 
              if($ejes_mun!=false)
              {
                foreach ($ejes_mun as $veje) {
                  echo '<option value="'.$veje->ejeid.'">'.$veje->eje.'</option>';
                }
              }
            ?>
          </select>        
         </div>       
     </div>
      <div class="col-md-3 col-sm-3 mb-sm-80">
        <div class="form-group">
          <label>Objetivos PED</label>
          <select id="objetivo_ped" class="form-control sel-list-tpl">
            <option value="">Objetivos PED</option>                      
          </select>        
         </div>       
       </div> <!-- /.col -->
       <div class="col-md-3 col-sm-3 mb-sm-80">
         <button id="btn_objetivos" class="btn btn-default" onclick="guarda_alinea();" style="margin-right: 5%; margin-top: 9%;">Guardar</button>
       </div>
      
    </div><!-- /.row -->
    
 </div><!-- /.container -->
</section>

<!-- Services Part 1, Tabs -->
<section class="page-section" id="services">
 <div class="container">
    <div class="row">    
      <div class="col-lg-12" id="tab_obj">
        <table class="table table-striped" id="tabla_objetivos"> 
          <thead> 
            <tr> 
              <th>Num</th>
              <th>Objetivo PMD</th>
              <th>Eje PMD</th>
              <th>Eje PED</th>
              <th>Objetivo PED</th>
              <th>Opciones</th>
            </tr> 
          </thead> 
          <tbody>
            <?php
            //print_r($objetivos_mun);
          if($ejes_mun!=false)
          {
            foreach ($objetivos_mun as $vobjm) {            
              echo '<tr>
                    <th scope="row">'.$vobjm->objetivoid.'</th> 
                    <td>'.$vobjm->obj_pmd.'</td>
                    <td>'.$vobjm->eje_pmd.'</td>
                    <td>'.$vobjm->eje_ped.'</td>
                    <td>'.$vobjm->obj_ped.'</td>
                    <td><a href="javascript:" onclick="editar_obj('.$vobjm->objetivoid.');"><i class="fa fa-edit"></i></a> <a href="javascript:" onclick="elimina_obj('.$vobjm->objetivoid.');"><i class="fa fa-trash-o"></i></a></td>
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
    $('#tabla_objetivos').DataTable({
            "language": {
                "url": "<?=base_url();?>plugins/spanish.json"
            }
        });
  });

 function carga_objped(id) {
  $.post('<?=base_url();?>objetivos_ped', {id:id}, function(resp){
    $("#objetivo_ped").empty().append('<option value="">Objetivos PED</option>'+resp);
  });
 }

 function guarda_alinea() {
  var obj_mun = $('#objetivo_mun').val();
  var eje_pmd = $('#eje_pmd').val();
  var obj_ped = $('#objetivo_ped').val();
  if(obj_mun!="" && eje_pmd!="")
  $.post('<?=base_url();?>guarda_obj',{obj_mun:obj_mun,eje_pmd:eje_pmd,obj_ped:obj_ped}, function(resp){
    if(resp==1) {
      notie.alert({ type: 1, text: 'Guardado Correctamente!', time: 2 });
      $("#objetivo_ped").empty().html('<option value="">Objetivos PED</option>');
      $('#objetivo_mun').val('');
      $('#eje_pmd').val('');
      act_tabla();
      }
      else notie.alert({ type: 3, text: 'Error al guardar', time: 2 }) 
  });
 }

 function elimina_obj(objid) {
  $.post('<?=base_url();?>elimina_obj', {objid:objid}, function(resp){
    if(resp==1) {
      notie.alert({ type: 1, text: 'Objetivo eliminado correctamente!', time: 2 });
      act_tabla();
    }
    else notie.alert({ type: 3, text: 'Error al eliminar el objetivo', time: 2 });
  });
 }

 function act_tabla() {
  $.post('<?=base_url();?>tabla_obj', function(resp){    
    $('#tab_obj').html(resp);
    $('#tabla_objetivos').DataTable({
            "language": {
                "url": "<?=base_url();?>plugins/spanish.json"
            }
        });
  });
 }

 function actualizar_obj(objid) {
  var obj_mun = $('#objetivo_mun').val();
  var eje_pmd = $('#eje_pmd').val();
  var obj_ped = $('#objetivo_ped').val();
  $.post('<?=base_url();?>actualiza_obj',{objid:objid,obj_mun:obj_mun,eje_pmd:eje_pmd,obj_ped:obj_ped}, function(resp){
    if(resp==1) {
      notie.alert({ type: 1, text: 'Actualizado correctamente', time: 2 });
      act_tabla();
    }
    else notie.alert({ type: 3, text: 'Error al actualizar los datos', time: 2 }) 
  });
 }

 function editar_obj(objid) {
  $.post('<?=base_url();?>consulta_obj', {objid:objid}, function(resp){
    console.log(resp);
    if(resp!="") {
      var json = resp.split("-");
      $( "#objetivo_mun" ).val(json[1]);
      $( "#eje_pmd" ).val(json[2])
      
      carga_objped(json[2]);
      setTimeout(function(){$( "#objetivo_ped" ).val(json[3]);}, 1000);
              
      $('#btn_objetivos').text('Actulizar');
      $('#btn_objetivos').attr('onclick','actualizar_obj('+objid+')');

      if(!$("#btn_cancelar").length ) {
        $('#btn_objetivos').after('<button id="btn_cancelar" class="btn btn-default" onclick="cancelar_act();" style="margin-top: 9%;">Cancelar</button>');
      }
    }
  });
 }

 function cancelar_act() {
    $( "#objetivo_mun" ).val('');
    $( "#eje_pmd" ).val('');
    $( "#objetivo_ped" ).empty().html('<option value="">Objetivos PED</option>');
    $('#btn_objetivos').text('Guardar');
    $('#btn_objetivos').attr('onclick','guarda_alinea()');
    $('#btn_cancelar').remove();
  }

  function cerrar() {
  $.post('<?=base_url();?>cerrar', function(resp){
    if(resp=="correcto") location.href = "<?=base_url();?>iniciar";
  });
 }
</script>

</body>
</html>





