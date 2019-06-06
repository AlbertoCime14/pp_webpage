<!-- Navigation -->
   <nav class="navbar mega-menu navbar-fixed-top nav-height" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            <a class="navbar-brand page-scroll" href="<?=base_url();?>"><img src="<?=base_url();?>img/logo_seplan.png" alt="SEPLAN"></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
               <ul class="nav navbar-nav navbar-right">
                <?php 
                switch ($seccion) {
                    case 1:
                        echo '<li><a class="page-scroll" href="#page-top">INICIO</a></li>
                             <li class="dropdown">
                                <a href="#about" class="dropdown-toggle" data-toggle="dropdown">CONÓCENOS</a>
                                <ul class="dropdown-menu">
                                <li><a href="#about">QUIÉNES SOMOS</a></li> 
                                   <li><a href="'.base_url().'archivos/CODIGO_Y_ETICA_SEPLAN.docx">CÓDIGO DE ÉTICA</a></li>                                   
                                </ul>
                            </li>
                             <li><a class="page-scroll" href="#section-testimonial">DESARROLLOS</a></li>
                             <li><a class="page-scroll" href="#services">FUNCIONES</a></li>
                             <li><a class="page-scroll" href="#services-bottom">REDES</a></li>                                  



                             <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">COMITES</a>
                                <ul class="dropdown-menu">
                                   <li><a href="'.base_url().'copledey">COPLEDEY</a></li>
                                   <li><a href="'.base_url().'ceieg">CEIEG</a></li>
                                </ul>
                            </li> <!-- /.dropdown -->
                            <li><a class="page-scroll" href="#armonizacion_seplan">ARMONIZACIÓN</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">TRANSPARENCIA</a>
                                <ul class="dropdown-menu">
                                   <li><a href="'.base_url().'avisos">AVISOS DE PRIVACIDAD</a></li>
                                   <li><a href="#section-accordion-mp" class="page-scroll" >TRANSPARENCIA</a></li>
                                </ul>
                            </li> <!-- /.dropdown -->
                            <li><a class="page-scroll" href="#contact">CONTACTO</a></li>';
                        break;
                    case 2:
                        echo '<li><a class="page-scroll" href="'.base_url().'">INICIO</a></li>
                             <li><a class="page-scroll" href="#about">QUIÉNES SOMOS</a></li>
                             <li><a class="page-scroll" href="#services">INTEGRANTES</a></li>
                             <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">COMITES</a>
                                <ul class="dropdown-menu">
                                   <li><a href="'.base_url().'copledey">COPLEDEY</a></li>
                                   <li><a href="'.base_url().'ceieg">CEIEG</a></li>
                                </ul>
                            </li> <!-- /.dropdown -->
                             <li><a class="page-scroll" href="#contact">CONTACTO</a></li>';
                        break;
                    case 3:
                        echo '<li><a class="page-scroll" href="#page-top">INICIO</a></li>                             
                             <li><a class="page-scroll" href="#avisos-privacidad">AVISOS DE PRIVACIDAD</a></li>                             
                             <li><a class="page-scroll" href="#contact">CONTACTO</a></li>';
                        break;
                    
                    default:
                        # code...
                        break;
                }
                ?>                 
               </ul><!--/.nav navbar-nav navbar-right-->
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
  <!-- navbar-end -->