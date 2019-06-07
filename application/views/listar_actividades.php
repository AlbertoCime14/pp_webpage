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
        </div>
        <!-- /.container -->
    </nav>
  <!-- navbar-end -->

<section id="box-shadow-bottom"></section>

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
    <div class="panel-body">
      <!--Tabla de contenidos-->

      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre de actividad</th>
      <th scope="col">Eje</th>
      <th scope="col">PP</th>
      <th scope="col">UBP</th>
      <th scope="col" style="text-align: center;">Opciónes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Actividad 1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>

      <td style="text-align: center;"><a href=<?="actividades/editar/".base64_encode("ok")?>>Editar | </a><a href="javascript:void(0)" onclick="ok();">Eliminar | </a> <a href="javascript:void(0)" onclick="ok();">Editar entregables| </a><a href="javascript:void(0)" onclick="ok();">Generar reporte</a> </td>
    </tr>
  </tbody>
</table>

    </div>
  </div>
</div>
<section>
   <div class="col-md-12 col-md-offset-8">
<input type="text"  placeholder="Ingrese el nombre de la actividad">
<input type="submit"  value="Crear">
</div>
</section>
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
<script src="<?=base_url();?>js/notie.js"></script>

<script>

 function inicia_sesion() {
  var user = $('#user_mun').val();
  var pass = $('#pass_mun').val();

  $.post('<?=base_url();?>login', {user:user,pass:pass}, function(resp) {    
    
    if(resp==="incorrecto") notie.alert({ type: 3, text: 'Contraseña incorreecta.', time: 2 });
    else if(resp==="correcto") {
      notie.alert({ type: 1, text: 'Correcto!', time: 2 });
      setTimeout(function(){ location.href = "<?=base_url();?>actividades"; }, 1000);
      }
  });
 }

 function cerrar() {
  $.post('<?=base_url();?>cerrar', function(resp){
    if(resp=="correecto") location.href = "<?=base_url();?>iniciar";
  });
 }
</script>


</body>
</html>





