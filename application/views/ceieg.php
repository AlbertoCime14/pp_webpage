<?php 
$funciones[] = "Presentar al Comité Ejecutivo del Subsistema correspondiente el Programa de Trabajo.";
$funciones[] = "Desarrollar y dar seguimiento a las actividades establecidas en el Programa de Trabajo.";
$funciones[] = "Participar en el desarrollo y análisis de normas técnicas, así como de lineamientos metodológicos, con el fin de generar información homogénea y comparable en el marco del Sistema.";
$funciones[] = "Difundir en sus reuniones las normas técnicas y lineamientos metodológicos correspondientes a su ámbito de trabajo, que hayan sido aprobados por la Junta de Gobierno del INEGI, así como promover su aplicación entre las Unidades.";
$funciones[] = "Elaborar y/o someter a consideración del Comité Ejecutivo correspondiente proyectos relativos a Información de Interés Nacional que les corresponda en el marco de Sistema.";
$funciones[] = "Analizar y opinar respecto a propuestas relacionadas con Información de Interés Nacional, presentadas por algún Comité Ejecutivo o, en su caso, por integrantes del mismo Comité Técnico Especializado.";
$funciones[] = "Solicitar a las Unidades la información necesaria para la integración del Catálogo Nacional de Indicadores de conformidad con los términos establecidos por la Junta de Gobierno.";
$funciones[] = "Presentar a consideración del Comité Ejecutivo correspondiente los proyectos de indicadores clave de su competencia en el marco del Sistema.";
$funciones[] = "Analizar y opinar respecto de las propuestas de indicadores clave que les sean presentadas por el Presidente del Comité Ejecutivo.";
$funciones[] = "Poner a consideración de los Comités Ejecutivos las propuestas derivadas de los análisis y evaluaciones sobre los programas del Sistema que se les encomiende.";
$funciones[] = "Elaborar y presentar informes semestrales de la ejecución de su Programa de Trabajo al Comité Ejecutivo del Subsistema correspondiente, conforme al procedimiento establecido por la Dirección General de Coordinación del Sistema Nacional de Información Estadística y Geográfica. El informe correspondiente al primer semestre enero-junio, deberá presentarse a más tardar el último día hábil de julio. El informe correspondiente al segundo semestre julio-diciembre, deberá presentarse a más tardar el último día hábil de enero del año inmediato posterior.";
$funciones[] = "Reportar trimestralmente los avances realizados en la consecución de las Actividades específicas registradas en el Programa Anual de Estadística y Geografía, a través del Sitio de Monitoreo dispuesto para estos efectos por la Dirección General de Coordinación del Sistema Nacional de Información Estadística y Geográfica. Estas Actividades específicas podrán estar o no establecidas en el Programa de Trabajo del Comité Técnico Especializado.";
$funciones[] = "Opinar respecto de los demás asuntos que someta a su consideración el Presidente del Comité Ejecutivo.";

?>
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
          <p class="intro-text">Somos uno de los Comités Técnicos Especializados Estatales establecidos de conformidad con las normas del Sistema Nacional de Información Estadística y Geográfica (SNIEG).</p>
          <p class="intro-text">Los Comités Estatales se constituyen como órganos colegiados de participación y consulta, donde confluyen los representantes de las áreas administrativas con actividades estadísticas y geográficas del estado, sus municipios y el INEGI, para la ejecución y cumplimiento de los principios, bases y normas establecidos en el SNIEG; la elaboración del Programa Estatal de Estadística y Geografía, así como para promover el conocimiento y aplicación de las normas técnicas en las Unidades de su competencia.</p>
     </div> <!-- /.col -->
       
    <!--Right Side Image-->
    <div class="col-md-5 col-sm-5 hidden-xs">
        <img class="person" src="<?=base_url();?>img/logo_ceieg.png" alt="Steve Power">
    </div> 
    
  </div><!-- /.row -->
 </div><!-- /.container -->
</section>  

<!--Services Part 2-->
<section id="services-bottom" style="background-color: #ffffff; color: #000000; padding:0px; border-bottom: 1px dashed #DDDDDD">
 <div class="container">
    <!--<div class="row">
             <h2 class="section-title-line text-center pb-md-70 pb-sm-55" style="color: #41A5AA;">FUNCIONES</h2>
        </div> -->
    <ul class="section-slides">
     
     <!--Slide 1-->
      <li class="active">  
           <div class="row">

             <!--<div class="col-md-8">-->
              
              <?php /*
            <div class="col-md-12" style="margin-bottom: 2%;"> 
              <img src="<?=base_url();?>img/ima_ceieg.jpg">
             </div>
                $nf = count($funciones);
                for ($i=0; $i < 4; $i++) { 
                  echo '<div class="col-md-6">
                  <div class="media">
                    <div class="pull-left">
                        <div class="main-icon">
                       <i class="et icon-clipboard"></i>
                      </div>
                    </div>
                    <div class="media-body">
                        <p>'.$funciones[$i].'</p>
                    </div>
                  </div>                
                </div>';
                }*/
              ?>
                <!--<div class="col-lg-12">
                 <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <h4 class="panel-title">
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                            <span class="xc icon-minus"></span>
                            Ver más
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body" style="padding: 28px;">-->
                          <?php /*
                            $nf = count($funciones);
                            for ($i=4; $i < $nf; $i++) { 
                              echo '<div class="col-md-6">
                              <div class="media">
                                <div class="pull-left">
                                    <div class="main-icon">
                                   <i class="et icon-clipboard"></i>
                                  </div>
                                </div>
                                <div class="media-body">
                                    <p>'.$funciones[$i].'</p>
                                </div>
                              </div>                
                            </div>';
                            }*/
                          ?>
                        <!--</div>
                      </div>
                    </div>
                   </div>
              </div>
           </div>-->
             
           </div> 
      </li><!--Slide 1 End--> 
    </ul><!--/.section-slides-->    

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
              <h3>Presidencia y secretaría técnica</h3>
              <p>Las “Reglas para la integración y operación de los Comités Técnicos Especializados de los Subsistemas Nacionales de Información” establecen que las Unidades correspondientes, es decir, aquellas áreas administrativas con actividades estadísticas y geográficas, serán organizadas por un presidente, que para el caso de Yucatán es el titular de la Secretaría Técnica de Planeación y Evaluación (SEPLAN), y el secretario técnico es el titular de la Dirección Regional del INEGI.</p>

              <h3>Vocales</h3>
              <h5>Representantes de los siguientes organismos estatales:</h5>
              <ul style="list-style-type: disc;">
                <li>Consejería Jurídica</li>
                <li>Fiscalía General del Estado</li>
                <li>Secretaría General de Gobierno</li>
                <li>Secretaría de Administración y Finanzas</li>
                <li>Secretaría de Desarrollo Rural</li>
                <li>Secretaría de Desarrollo Social</li>
                <li>Secretaría de Desarrollo Urbano y Medio Ambiente</li>
                <li>Secretaría de Educación</li>
                <li>Secretaría de Fomento Económico</li>
                <li>Secretaría de Fomento Turístico</li>
                <li>Secretaría de la Contraloría General</li>
                <li>Secretaría de la Cultura y de las Artes</li>
                <li>Secretaria de la Juventud</li>
                <li>Secretaría de Obras Públicas</li>
                <li>Secretaría de Salud</li>
                <li>Secretaría de Seguridad Pública</li>
                <li>Secretaría de Trabajo y Previsión Social</li>
                <li>Catastro del Estado</li>
                <li>Centro Estatal de Prevención Social del Delito y Participación Ciudadana</li>
                <li>Consejo Estatal de Población</li>
                <li>Consejo de Ciencia, Innovación y Tecnología</li>
                <li>Coordinación Metropolitana</li>
                <li>Instituto de Becas y Crédito Educativo</li>
                <li>Instituto de Desarrollo Regional y Municipal</li>
                <li>Instituto de Educación para Adultos</li>
                <li>Instituto de Infraestructura Carretera</li>
                <li>Instituto para el Desarrollo de la Cultura Maya</li>
                <li>Instituto para la Equidad de Género</li>
                <li>Instituto de Seguridad Jurídica Patrimonial</li>
                <li>Instituto de Vivienda</li>
                <li>Junta de Agua Potable y Alcantarillado</li>
                <li>Junta de Electrificación</li>
                <li>Sistema para el Desarrollo Integral de la Familia</li>
                <li>Registro Civil</li>
                <li>Unidad de Gestión de la Inversión</li>
              </ul>
              <h5>Representantes de los siguientes organismos federales:</h5>
              <ul style="list-style-type: disc;">
                <li>Secretaría de Agricultura, Ganadería, Desarrollo Rural, Pesca y Alimentación</li>
                <li>Secretaría de Comunicaciones y Transportes</li>
                <li>Secretaría de Desarrollo Agrario, Territorial y Urbano</li>
                <li>Secretaría de Desarrollo Social</li>
                <li>Secretaría de Economía</li>
                <li>Secretaría de Gobernación</li>
                <li>Secretaría del Medio Ambiente y Recursos Naturales</li>
                <li>Secretaría del Trabajo y Previsión Social</li>
                <li>Comisión Nacional para el desarrollo de los Pueblos Indígenas</li>
                <li>Instituto del Fondo Nacional de Vivienda para los Trabajadores</li>
                <li>Instituto Mexicano del Seguro Social</li>
                <li>Instituto Nacional de las Personas Adultas Mayores</li>
                <li>Instituto de Seguridad y Servicios Sociales de Los Trabajadores del Estado</li>
                <li>Oficina de Servicios Federales de Apoyo a la Educación</li>
                <li>Organismo de Cuenca Península de Yucatán de la Comisión Nacional del Agua</li>
                <li>Programa Oportunidades</li>
              </ul>
              <h5>Los siguientes representantes municipales:</h5>
              <ul style="list-style-type: disc;">
                <li>Región I (Maxcanú)</li>
                <li>Región II (Mérida)</li>
                <li>Región III (Izamal)</li>
                <li>Región IV (Motul)</li>
                <li>Región V (Tizimín)</li>
                <li>Región VI (Valladolid)</li>
                <li>Región VII (Tekax)</li>

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





