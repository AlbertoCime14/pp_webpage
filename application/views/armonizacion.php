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
    <link href="<?=base_url();?>css/jquery.fancybox.css?v=2.1.5" rel="stylesheet">
    <link href="<?=base_url();?>css/helpers/jquery.fancybox-buttons.css?v=1.0.5" rel="stylesheet">
    <link href="<?=base_url();?>css/helpers/jquery.fancybox-thumbs.css?v=1.0.7" rel="stylesheet">
    <link href="<?=base_url();?>css/flexslider.css" rel="stylesheet">
    <link href="<?=base_url();?>css/animations.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/carousel.css" rel="stylesheet">
    <link href="<?=base_url();?>css/owl.carousel.css" rel="stylesheet">
	  <link href="<?=base_url();?>css/bootstrap.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/settings.css" rel="stylesheet" media="screen" />
    <link href="<?=base_url();?>font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="<?=base_url();?>css/style.css" rel="stylesheet">
    <link href="<?=base_url();?>css/responsive.css" rel="stylesheet">
    <link href="<?=base_url();?>css/vertical-xc.min.css" rel="stylesheet">
    <style type="text/css">
      .services-alt li {
          line-height: 2;
          border: solid 2px;
          margin-bottom: 34px;

      }
      #section-accordion-mp .panel-title {
          font-size: 13px;
          font-weight: 300;
          color: inherit;
          text-transform: uppercase;
      }

      #section-accordion-mp .panel-default>.panel-heading {         
          padding: 3px 0;
      }
      #section-testimonial {
        background: #226d71;
        padding: 80px 0 50px;
        color: #ffffff;
      }
      #section-testimonial h2{
        color: #ffffff;
      }
    </style>
</head>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function hideModal() {
  $('#modalAvisos').modal('hide');
  setTimeout(function(){ scroll()}, 400);
}

function scroll() 
{   
  var $anchor = $(this);
  $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('contact')).offset().top -59)
      }, 1500, 'easeInOutExpo');
        
}

function carga_opciones(op,nivel) 
{
  var regresar = document.getElementById("btn_regresar");
  var op_r;
  var niv_r;
  
  if(nivel==0){
    if(regresar.getAttribute("onclick") != null) regresar.removeAttribute("onclick");    
  }
  else {
    if(nivel==1) {
      var op_r = 1;
      var niv_r = 0;
    } else if(nivel==2) {
      niv_r = 1;
      if(op==1 || op==2 || op==3) op_r = 2;
    } else if(nivel==3) {
      op_r = 2;
      niv_r = 2;
    }

    regresar.setAttribute("onclick","carga_opciones("+op_r+","+niv_r+")");
  }

  $.post("<?=base_url();?>index.php/control_armonizacion/carga_opciones", {op:op,nivel:nivel}, function(resp){
    $('#contenedor_datos').html(resp);
  });
}

   function modal_descarga(op) {
    $.post('<?=base_url();?>index.php/control_armonizacion/descargas_modal',{op:op}, function(resp){
      $('#cmodal_desc').html(resp);
      $('#modal_descargas').modal('show');
    });    
   }  


</script>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<!--Preloader-->
<div id="loader-wrapper">
    <div id="loader"></div>
</div>

<?php $seccion=4; include("nav-bar.php"); ?>
<!-- Shadow Element -->

  <section class="header-demo-small" style="min-height: 142px;">
  </section>

<section class="page-section-top-alt-np mt-25 mb-105 mb-md-85 mb-sm-65" id="button-style">
 <div class="container">
   
   <div class="row">
    <div class="col-lg-12 mt-20">
       <p>
        <a href="#" onclick="carga_opciones(1,0)" class="btn btn-outline-dark">Ir al inicio</a>
        <a href="#" id="btn_regresar" class="btn btn-outline-dark">Regresar</a>
       </p>
   </div><!--/.col-->
  </div><!--/.row-->  
 </div><!--/.container-->
</section>

<!-- Product Description/Tabs/Reviews -->
<section id="avisos-privacidad" class="page-section-top-alt-np has-border mt-25 pb-85 pb-md-85 pb-sm-65">
 <div class="container">
    <div class="row" id="contenedor_datos">
      <div class="col-md-5" id="cont_buttons">
        <div class="services-alt animate-in" data-anim-type="fade-in-left" data-anim-delay="500">
          <h2></h2>        
            <ul class="servives-alt-list">
              <li onclick="carga_opciones(1,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Marco Legal y Normativo</li>
              <li onclick="carga_opciones(2,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Información financiera, Presupuestal, Programática y de Postura Fiscal</li>
              <a target="_blank" href="<?=base_url();?>archivos/armonizacion_contable/Relacion_de_bienes_de_la_SEPLAN.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Inventario de Bienes Muebles e Inmuebles</li></a>
              <li onclick="carga_opciones(4,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Información relativa al Título V de la LGCG</li>
              <a target="_blank" href="<?=base_url();?>archivos/armonizacion_contable/Indicadores_Desempeño_SEPLAN.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Indicadores de Desempeño</li></a>
              <a target="_blank" href="<?=base_url();?>archivos/armonizacion_contable/Cuenta_Publica_SEPLAN.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Cuentas Públicas</li></a>
              <li onclick="carga_opciones(7,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Disciplina Financiera</li>
            </ul>
        </div>
      </div>
      <div class="col-md-7 pt-10" id="cont_einfo">
        <div class="animate-in" data-anim-type="fade-in-left" data-anim-delay="500">  
          <p style="font-size: 15px;">En seguimiento a la estrategia de transparencia y modernización del Sistema de Contabilidad Gubernamental, implantada por la Secretaría Técnica de Planeación y Evaluación (SEPLAN), en cumplimiento de la Ley General de Contabilidad Gubernamental (LGCG) y las disposiciones normativas emitidas por el Consejo Nacional de Armonización Contable (CONAC), le damos la cordial bienvenida a este apartado de armonización contable gubernamental.

          <br><br>Este apartado, difundirá en forma permanente los avances de la SEPLAN en la adopción e implementación de las Normas y Lineamientos emitidos por el CONAC y el cumplimiento de la LGCG.

          <br><br>Por lo anterior, esta herramienta tecnológica permitirá mantener informado a la ciudadanía y organismos gubernamentales sobre la instrumentación de la armonización contable en el Ente Público. 

          <br><br>Asimismo, seguiremos trabajando atendiendo las mejores prácticas de transparencia, rendición de cuentas e implementación de las disposiciones normativas vigentes y de esta manera garantizar el proceso de armonización contable en la SEPLAN.

          <br><br><br><b>Atentamente.</b>


          <br><b>C. Rafael Hernández Kotasek.</b>
          </p>
        </div>  
      </div> 
    </div><!--/.row-->
 </div><!--/.container-->
</section> 


<!--Footer Begins-->
<footer>
<!-- /.Google Maps End -->

<!-- Contact Section -->
<?php include("contacto.php") ?>
</footer>

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

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






</body>
</html>





