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
    
</head>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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

<?php $seccion=2; include("nav-bar.php"); ?>

<section id="box-shadow-bottom"></section>

<!-- Shadow Element -->

<!-- Section About -->                
<section class="page-section-top-alt has-border" id="about">      
 <div class="container">
  <div class="row">
    
    <div class="col-md-7 col-sm-7 mb-sm-80">
        <!--Heading-->
        <h2 class="section-title" style="color: #41A5AA;">QUIÉNES SOMOS</h2>
          <!--Content-->
          <p class="intro-text">El Consejo de Planeación y Evaluación del Estado de Yucatán (Copledey) es el órgano máximo del Sistema de Planeación del Desarrollo Estatal, de carácter permanente, consultivo y deliberativo, en cuyo seno se definen los objetivos, estrategias y principales mecanismos para la ejecución de los instrumentos de planeación del desarrollo, mediante la coordinación interinstitucional y la participación ciudadana.</p>
     </div> <!-- /.col -->
       
    <!--Right Side Image-->
    <div class="col-md-5 col-sm-5 hidden-xs">
        <img class="person" src="<?=base_url();?>img/escudo_copledey.png" alt="Steve Power">
    </div> 
    
  </div><!-- /.row -->
 </div><!-- /.container -->
</section>  

<!--Services Part 2-->
<section id="services-bottom" style="background-color: #ffffff; color: #000000; padding:0px; border-bottom: 1px dashed #DDDDDD">
 <div class="container">
    <!--<div class="row">
             <h2 class="section-title-line text-center pb-md-70 pb-sm-55" style="color: #41A5AA;">FUNCIONES</h2>
        </div><!-- /.row -->
        <?php /*
    <ul class="section-slides">
     
     <!--Slide 1-->
      <li class="active">  
           <div class="row">
            <div class="col-md-12" style="margin-bottom: 2%;"> 
              <img src="<?=base_url();?>img/ima_copledey.jpg">
             </div>

             <!--<div class="col-md-8">
                <div class="col-md-6">
                  <div class="media">
                    <div class="pull-left">
                        <div class="main-icon">
                       <i class="et icon-clipboard"></i>
                      </div>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">PLANEACIÓN</h4>
                        <p>Operar el Sistema Estatal, para avanzar en el proceso de desarrollo integral.</p>
                    </div>
                  </div>                
                </div>  
                <div class="col-md-6">
                  <div class="media">
                    <div class="pull-left">
                        <div class="main-icon">
                         <i class="fa fa-group"></i>
                        </div>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">COORDINACIÓN</h4>
                        <p>Ser el único medio de coordinación y comunicación permanente entre las instancias de planeación nacional, estatal y municipal.</p>
                    </div>
                  </div>                
                </div>   
                <div class="col-md-6">
                  <div class="media">
                    <div class="pull-left">
                        <div class="main-icon">
                         <i class="fa fa-check-square-o"></i>
                        </div>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">EVALUACIÓN</h4>
                        <p>Establecer los mecanismos y procedimientos de coordinación interinstitucional y de concertación social</p>
                    </div>
                  </div>                
                </div>  
                <div class="col-md-6">
                  <div class="media">
                    <div class="pull-left">
                        <div class="main-icon">
                         <i class="fa fa-cogs"></i>
                        </div>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">ESTRATÉGIAS</h4>
                        <p>Realizar el proceso de planeación en sus etapas de formulación, instrumentación, seguimiento y evaluación.</p>
                    </div>
                  </div>                
                </div> 
           </div>-->
             
           </div> 
      </li><!--Slide 1 End--> 
    </ul><!--/.section-slides-->    
    */?>

  </div>
</section> 

<!-- Services Part 1, Tabs -->
<section class="page-section" id="services">
 <div class="container">
    <div class="row">    
   <div class="col-lg-12">
     <div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                <span class="xc icon-minus"></span>
                Quiénes lo integran
              </a>
            </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in">
            <div class="panel-body" style="padding: 28px;">
              <ul>
                <li>I.- El Gobernador del Estado, quien lo preside;</li>
                <li>II.- El Secretario Técnico de Planeación y Evaluación, quien lo coordina;</li>
                <li>III.- Los titulares de las dependencias y entidades de la Administración Pública del Estado y los delegados de las dependencias y entidades de la Administración Pública Federal;</li>
                <li>IV.- Los presidentes de las comisiones sectoriales, regionales y especiales;</li>
                <li>V.- Los presidentes municipales, en sus caracteres de presidentes de los COPLADEMUN;</li>
                <li>VI.- Representantes de la sociedad civil organizada;</li>
                <li>VII.- Representantes del pueblo maya;</li>
                <li>VIII.- Representantes de los partidos políticos en el estado;</li>
                <li>IX.- Representantes de los organismos constitucionales autónomos en el estado;</li>
                <li>X.- Los legisladores representantes de Yucatán en el Congreso de la Unión y los del Congreso del Estado;</li>
                <li>XI.- Los magistrados del Tribunal Superior de Justicia del Estado y los Consejeros de la Judicatura del Poder Judicial del Estado;</li>
                <li>XII.- Representantes de:
                  <ul style="padding-left: 2%;"> 
                   <li>a) Las asociaciones civiles, colegios de profesionales y las organizaciones no gubernamentales;</li> 
                   <li>b) Las cámaras y grupos empresariales;</li> 
                   <li>c) Los sindicatos y agrupaciones de trabajadores;</li> 
                   <li>d) Los cooperativas y uniones de productores;</li> 
                   <li>e) Las instituciones de educación superior y centros de investigación que operen en el estado.</li> 
                   
                   </ul> 
                </li>
              </ul>
            </div>
          </div>
        </div>
       </div>
      </div>
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


</body>
</html>





