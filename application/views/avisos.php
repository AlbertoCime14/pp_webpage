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

function enviar()
{
  $('#envia_form').attr('disabled','disabled');
  $('#contact-form').validate({
            highlight: function(element, errorClass) {
                $(element).fadeOut(function() {
                    $(element).fadeIn();
                });
            },
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                
                message: {
                    required: true
                    }
            },
            messages: {
                name: "<i class='fa fa-exclamation-triangle'></i>Ingrese su nombre.",
                email: {
                    required: "<i class='fa fa-exclamation-triangle'></i>Ingrese su dirección de correo.",
                    email: "<i class='fa fa-exclamation-triangle'></i>Favor de ingresar una dirección de correo válida."
                },
                message: "<i class='fa fa-exclamation-triangle'></i>Please enter your message."
           
            }
          });
    $.post('<?=base_url();?>index.php/control_contacto/enviar', $('#contact-form').serialize(), function(resp){    
      if(resp==1)
      {
        $('#envia_form').removeAttr("disabled");
        document.getElementById("contact-form").reset();
        alert("Mensaje enviado");        
      }
      else alert("Error intente mas tarde");
    });
}

</script>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<!--Preloader-->
<div id="loader-wrapper">
    <div id="loader"></div>
</div>

<?php $seccion=3; include("nav-bar.php"); ?>
<!-- Shadow Element -->

  <section class="header-demo-small" style="min-height: 142px;">
  </section>

<!-- Product Description/Tabs/Reviews -->
<section id="avisos-privacidad" class="page-section-top-alt-np has-border mt-25 pb-85 pb-md-85 pb-sm-65">
 <div class="container">
  <div class="row">
   <div class="col-lg-12">
     <!--<ul id="tabs" class="nav nav-tabs tabs-shop custom-tabs">-->
      <ul id="tabs" class="nav nav-tabs tabs-shop custom-tabs">
       <li class="active"><a href="#aviso-uno" data-toggle="tab">Alta de <br>proveedores</a></li>
       <li class=""><a href="#aviso-dos" data-toggle="tab">Acceso a la <br>información pública</a></li>
       <li class=""><a href="#aviso-tres" data-toggle="tab">Proceso encuestas <br>y evaluaciones</a></li>
       <li class=""><a href="#aviso-cuatro" data-toggle="tab"><br>Alta de empleado</a></li>
       <li class=""><a href="#aviso-cinco" data-toggle="tab">Integración del <br>expediente</a></li>
       <li class=""><a href="#aviso-seis" data-toggle="tab">Capacitación de <br>servidores públicos</a></li>
       <li class=""><a href="#aviso-siete" data-toggle="tab"><br>Derechos ARCO</a></li>
     </ul>

     <div id="tab-content" class="tab-content">
       <div class="tab-pane no-border fade active in" id="aviso-uno">
          <iframe style="width: 1121px; min-height: 430px;" src="<?=base_url();?>archivos/html_integral/Aviso_Privacidad_Alta_de_Provedores.htm"></iframe>
          <a target="_blank" href="<?=base_url();?>archivos/Aviso_Privacidad_Alta_de_Provedores.pdf"><img src="<?=base_url();?>img/Print.png" style="max-height: 50px;" /></a>
       </div>
                    
       <div class="tab-pane no-border fade" id="aviso-dos">
           <iframe style="width: 1121px; min-height: 430px;" src="<?=base_url();?>archivos/html_integral/Aviso_Privacidad_Integral_Solicitud_de_acceso_a_la_inf_pub.htm"></iframe>   
           <a target="_blank" href="<?=base_url();?>archivos/Aviso_Privacidad_Integral_Solicitud_de_acceso_a_la_inf_pub.pdf"><img src="<?=base_url();?>img/Print.png" style="max-height: 50px;" /></a>     
       </div>

       <div class="tab-pane no-border fade" id="aviso-tres">
         <iframe style="width: 1121px; min-height: 430px;" src="<?=base_url();?>archivos/html_integral/Aviso_Privacidad_Proceso_encuestas_y_evaluaciones.htm"></iframe>
         <a target="_blank" href="<?=base_url();?>archivos/Aviso_Privacidad_Proceso_encuestas_y_evaluaciones.pdf"><img src="<?=base_url();?>img/Print.png" style="max-height: 50px;" /></a>
       </div>

       <div class="tab-pane no-border fade" id="aviso-cuatro">
         <iframe style="width: 1121px; min-height: 430px;" src="<?=base_url();?>archivos/html_integral/Aviso_Privacidad_Integral_Alta_de_empleado.htm"></iframe>
         <a target="_blank" href="<?=base_url();?>archivos/Aviso_Privacidad_Integral_Alta_de_empleado.pdf"><img src="<?=base_url();?>img/Print.png" style="max-height: 50px;" /></a>
       </div>

       <div class="tab-pane no-border fade" id="aviso-cinco">
          <iframe style="width: 1121px; min-height: 430px;" src="<?=base_url();?>archivos/html_integral/Aviso_Privacidad_Integral_Integración_del_expediente_del_personal.htm"></iframe>
          <a target="_blank" href="<?=base_url();?>archivos/Aviso_Privacidad_Integral_Integracion_del_expediente_del_personal.pdf"><img src="<?=base_url();?>img/Print.png" style="max-height: 50px;" /></a>
       </div>

       <div class="tab-pane no-border fade" id="aviso-seis">
         <iframe style="width: 1121px; min-height: 430px;" src="<?=base_url();?>archivos/html_integral/Aviso_Privacidad_Capacitacion_de_servidores_Publicos.htm"></iframe>
         <a target="_blank" href="<?=base_url();?>archivos/Aviso_Privacidad_Capacitacion_de_servidores_Publicos.pdf"><img src="<?=base_url();?>img/Print.png" style="max-height: 50px;" /></a>
       </div>
       <div class="tab-pane no-border fade" id="aviso-siete">
         <p>Aquí podrás ejercer tus derechos ARCO de acuerdo los artículos 48, 49, 51, 52, 85, 86 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.</p>
         <a target="_blank" href="<?=base_url();?>archivos/Formato_Derechos_ARCO.docx"><img src="<?=base_url();?>img/Print.png" style="max-height: 50px;" /></a>
       </div>
     </div><!--/.tab-content-->

   </div><!--/.col-lg-12-->
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





