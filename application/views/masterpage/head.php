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
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
               <ul class="nav navbar-nav navbar-right">
                  <!-- Dropdown Mega-Menu 2 Col -->
                    <li class="dropdown">
                     <a href="#" class="dropdown-toggle" data-toggle="dropdown" onclick="cerrarSesion(event);">Cerar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /.container -->
    </nav>
  <!-- navbar-end -->

<section id="box-shadow-bottom"></section>
<script type="text/javascript">
    function cerrarSesion(e){
        e.preventDefault();
        if(confirm('¿Realmente desea cerrar sesión?')){
            $.ajax({                            
              type: "POST",
              url: "<?=base_url()?>index.php/Control_login/cerrar_sesion",
              success: function(data) {
                notie.alert({ type: 1, text: 'Sesión cerrada', time: 2 });
                window.location.href = '<?=base_url();?>';
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) {          
                
              }
            });
        }
    }
</script>