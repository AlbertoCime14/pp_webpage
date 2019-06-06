<?php 

foreach ($form as $vform) {
    switch ($tipo) {
        case 1:
            if($vform->num_interior==0) $num_interior="";

            $validacion = "$(function () {
              $('#form_mdir').parsley().on('field:validated', function() {
                var ok = $('.parsley-error').length === 0;
                $('.bs-callout-info').toggleClass('hidden', !ok);
                $('.bs-callout-warning').toggleClass('hidden', ok);
              })
              .on('form:submit', function() {
                form_modinst();
                return false; // Don't submit form for this demo
              });
            });";

            echo '<form class="row form-columned" id="form_mdir" role="form">   
                    <input type="hidden" name="midinst" id="midinst" value="'.$vform->institucionid.'">           
                    <div class="col-md-5">
                        <input type="text" class="form-control input-sm m-b-10" id="nombre_inst" name="nombre_inst" value="'.$vform->institucion.'" placeholder="Nombre de la institución*" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" required>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control input-sm m-b-10" id="siglas" name="siglas" value="'.$vform->siglas.'" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" placeholder="Siglas">
                    </div>
                    <div class="col-md-3 m-b-10">
                        <select class="chosen-select" id="tipoinst" name="tipoinst" data-placeholder="Tipo de institución*" required>
                            <option value=""></option>';?>
                            <option value="1"<?php if($vform->tipoinstitucion==1) echo "selected"; ?>>Empresas</option>
                            <option value="2"<?php if($vform->tipoinstitucion==2) echo "selected"; ?>>Dependencias</option>
                            <option value="3"<?php if($vform->tipoinstitucion==3) echo "selected"; ?>>Intituciones</option>
                            <option value="4"<?php if($vform->tipoinstitucion==4) echo "selected"; ?>>Universidades</option>
                            <option value="5"<?php if($vform->tipoinstitucion==5) echo "selected"; ?>>Asociaciones civiles</option>
                            <option value="6"<?php if($vform->tipoinstitucion==6) echo "selected"; ?>>Cámaras empresariales</option>
                    <?php echo '</select>
                    </div>                                              
                    <div class="clearfix"></div>                          
                    <div class="col-md-3 m-b-10">
                        <select class="chosen-select" id="tipo_vial" name="tipo_vial" data-placeholder="Tipo de vialidad*" required>
                            <option value=""></option>';
                            foreach ($vial as $vtvial) {
                                if($vtvial->tipovialidadid==$vform->tipo_vialidad)
                                    echo '<option value="'.$vtvial->tipovialidadid.'" selected>'.$vtvial->tipovialidad.'</option>';
                                else
                                    echo '<option value="'.$vtvial->tipovialidadid.'">'.$vtvial->tipovialidad.'</option>';
                            }
                        echo '</select>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_via" name="nombre_via" value="'.$vform->nombre_vialidad.'" placeholder="Nombre de la vialidad*" required>
                    </div>  
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="num_ext" name="num_ext" value="'.$vform->num_exterior.'" placeholder="Número exterior*" data-parsley-type="number" required>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="alf_ext" name="alf_ext" value="'.$vform->alfanumerico_exterior.'" placeholder="Alfanumérico exterior">
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="num_int" name="num_int" value="'.$num_interior.'" placeholder="Número interior" data-parsley-type="number">
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="alf_int" name="alf_int" value="'.$vform->alfanumerico_interior.'" placeholder="Alfanumérico interior">
                    </div>

                    <div class="col-md-3 m-b-10">
                        <select class="chosen-select" id="tipo_cruz1" name="tipo_cruz1" data-placeholder="Tipo de cruzamiento 1*" required>
                            <option value=""></option>';
                            foreach ($vial as $vtvial) {
                                if($vtvial->tipovialidadid==$vform->tipo_cruzamiento1)
                                    echo '<option value="'.$vtvial->tipovialidadid.'" selected>'.$vtvial->tipovialidad.'</option>';
                                else
                                    echo '<option value="'.$vtvial->tipovialidadid.'">'.$vtvial->tipovialidad.'</option>';
                            }
                        echo '</select>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_cruz1" name="nombre_cruz1" value="'.$vform->nombre_cruzamiento1.'" placeholder="Nombre del cruzamiento 1*" required>
                    </div>  
                    <div class="clearfix"></div>
                    <div class="col-md-3 m-b-10">
                        <select class="chosen-select" id="tipo_cruz2" name="tipo_cruz2" data-placeholder="Tipo de cruzamiento 2*">
                            <option value=""></option>';
                            foreach ($vial as $vtvial) {
                                if($vtvial->tipovialidadid==$vform->tipo_cruzamiento2)
                                    echo '<option value="'.$vtvial->tipovialidadid.'" selected>'.$vtvial->tipovialidad.'</option>';
                                else
                                    echo '<option value="'.$vtvial->tipovialidadid.'">'.$vtvial->tipovialidad.'</option>';
                            }
                        echo '</select>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_cruz2" name="nombre_cruz2" value="'.$vform->nombre_cruzamiento2.'" placeholder="Nombre del cruzamiento 2">
                    </div>  
                    <div class="col-md-3 m-b-10">
                        <select class="chosen-select" id="tipo_asent" name="tipo_asent" data-placeholder="Tipo de asentamiento*" required>
                            <option value=""></option>';
                            foreach ($asent as $vasent) {
                                if($vasent->tipoasentamientoid==$vform->tipo_asentamiento)
                                    echo '<option value="'.$vasent->tipoasentamientoid.'" selected>'.$vasent->tipoasentamiento.'</option>';
                                else
                                    echo '<option value="'.$vasent->tipoasentamientoid.'">'.$vasent->tipoasentamiento.'</option>';
                            }
                        echo '</select>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control input-sm m-b-10"  id="nombre_asent" name="nombre_asent" value="'.$vform->tipo_asentamiento.'" placeholder="Nombre del asentamiento" required>
                    </div>                                    
                    <div class="clearfix"></div>
                    <div class="col-md-10">
                        <button type="submit" id="btn_modinst" name="btn_modinst" class="btn btn-sm">Guardar</button>
                    </div>
                </form>';
            break;

        case 2:
                $validacion = "$(function () {
                  $('#form_modtit').parsley().on('field:validated', function() {
                    var ok = $('.parsley-error').length === 0;
                    $('.bs-callout-info').toggleClass('hidden', !ok);
                    $('.bs-callout-warning').toggleClass('hidden', ok);
                  })
                  .on('form:submit', function() {
                    form_modtit();
                    return false; // Don't submit form for this demo
                  });
                });";

                echo '<form class="row form-columned" data-parsley-validate id="form_modtit" role="form"> 
                        <input type="hidden" name="midtit" id="midtit" value="'.$vform->titularid.'">                                               
                        <div class="col-md-3">
                            <input type="text" class="form-control input-sm m-b-10" id="nombre" name="nombre" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" placeholder="Nombre"  value="'.$vform->nombres.'" required>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <input class="form-control input-sm m-b-10" id="pape" name="pape" type="text" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" placeholder="Primer Apellido" value="'.$vform->pape.'" required>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control input-sm m-b-10" id="sape" name="sape" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" value="'.$vform->sape.'" placeholder="Segundo Apellido">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control input-sm m-b-10" id="cargo" name="cargo" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" value="'.$vform->cargo.'" placeholder="Cargo" required>
                        </div>
                        <div class="clearfix"></div>
                                                                        
                        <div class="col-md-3">
                            <input type="email" class="form-control input-sm m-b-10" id="correoinst" data-parsley-trigger="change"  name="correoinst" placeholder="Correo institucional" value="'.$vform->correoins.'" required>
                        </div>
                        <div class="col-md-3">
                            <input type="email" class="form-control input-sm m-b-10" id="correoper"  data-parsley-trigger="change" name="correoper" value="'.$vform->correoper.'" placeholder="Correo personal">
                        </div>
                        <div class="col-md-3 m-b-10">
                            <select class="chosen-select" id="mod_idinst" name="mod_idinst" data-placeholder="Institución*" required>
                                <option value=""></option>';
                                foreach ($deps as $vdep) {
                                    if($vdep->institucionid==$vform->institucionid)
                                        echo '<option value="'.$vdep->institucionid.'" selected>'.$vdep->institucion.'</option>';
                                    else
                                        echo '<option value="'.$vdep->institucionid.'">'.$vdep->institucion.'</option>';
                                }
                        echo '</select>
                        </div>                                              
                        <div class="col-md-3 m-b-10">
                            <select class="chosen-select" id="nacces" name="nacces" data-placeholder="Nivel de acceso*" required>';?>
                                <option value=""></option>
                                <option value="1" <?php if($vform->acceso==1) echo 'selected'; ?>>Nivel 1</option>
                                <option value="2" <?php if($vform->acceso==2) echo 'selected'; ?>>Nivel 2</option>
                                <option value="3" <?php if($vform->acceso==3) echo 'selected'; ?>>Nivel 3</option>
                        <?php echo'</select>
                        </div>                                  
                        <div class="clearfix"></div>
                        <!-- Only Letter/Number -->                        
                        <div class="col-md-3">
                            <div class="form-group">
                                <input class="form-control input-sm" id="ladatel" name="ladatel" type="text" placeholder="Lada" value="'.$vform->lada.'" data-parsley-type="number" required>
                            </div>
                        </div>
                        <div class="col-md-3">                                             
                            <div class="form-group">                                                        
                                <input class="form-control input-sm" id="telefono" name="telefono" type="text" placeholder="Teléfono" value="'.$vform->telefono.'" data-parsley-type="number" required>
                            </div>
                        </div>
                        <div class="col-md-3">                                                  
                            <div class="form-group">                                                        
                                <input class="form-control input-sm" id="extension" name="extension" type="text" placeholder="Extensión" value="'.$vform->extension.'" data-parsley-type="number">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">                                                        
                                <input class="form-control input-sm" id="celular" name="celular" type="text" placeholder="Celular" value="'.$vform->celular.'" data-parsley-type="number">
                            </div>
                        </div>                                  
                        <div class="clearfix"></div>
                        <div class="col-md-12" id="categorias">
                            
                        </div> 
                        <div class="clearfix"></div>
                        <!-- Integer -->                                                
                        <div class="col-md-10">
                            <button type="submit" id="btn_tit" class="btn btn-sm" title="Importante">Guardar</button>
                            
                        </div>                                              
                    </form>';
            break;

        case 3:
            $validacion = "$(function () {
                  $('#form_modenlace').parsley().on('field:validated', function() {
                    var ok = $('.parsley-error').length === 0;
                    $('.bs-callout-info').toggleClass('hidden', !ok);
                    $('.bs-callout-warning').toggleClass('hidden', ok);
                  })
                  .on('form:submit', function() {
                    form_modasist();
                    return false; // Don't submit form for this demo
                  });
                });";
            echo ' <form class="row form-columned" data-parsley-validate id="form_modenlace" role="form">
                        <input type="hidden" name="midenlace" id="midenlace" value="'.$vform->asistenteid.'">
                        <div class="col-md-3">
                            <input type="text" class="form-control input-sm m-b-10" id="nombre" name="nombre" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" placeholder="Nombre"  value="'.$vform->nombres.'" required>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <input class="form-control input-sm m-b-10" id="pape" name="pape" type="text" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" placeholder="Primer Apellido" value="'.$vform->pape.'" required>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control input-sm m-b-10" id="sape" name="sape" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" value="'.$vform->sape.'" placeholder="Segundo Apellido">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control input-sm m-b-10" id="cargo" name="cargo" data-parsley-pattern="/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]+$/i" value="'.$vform->cargo.'" placeholder="Cargo" required>
                        </div>
                        <div class="clearfix"></div>
                                                                        
                        <div class="col-md-3">
                            <input type="email" class="form-control input-sm m-b-10" id="correoinst" data-parsley-trigger="change"  name="correoinst" placeholder="Correo institucional" value="'.$vform->correoins.'" required>
                        </div>
                        <div class="col-md-3">
                            <input type="email" class="form-control input-sm m-b-10" id="correoper"  data-parsley-trigger="change" name="correoper" value="'.$vform->correoper.'" placeholder="Correo personal">
                        </div>              
                        <div class="col-md-3 m-b-10">
                            <select class="chosen-select" id="tipo_usuario" name="tipo_usuario" data-placeholder="Tipo de usuario*" required>
                                <option value=""></option>';?>
                                <option value="1" <?php if($vform->tipo==1) echo 'selected'; ?>>Titular</option>
                                <option value="2" <?php if($vform->tipo==2) echo 'selected'; ?>>Asistente</option>
                                <option value="3" <?php if($vform->tipo==3) echo 'selected'; ?>>Enlace</option>
                            <?php echo '</select>
                        </div>                                
                        <div class="col-md-3 m-b-10">
                            <select class="chosen-select" id="nacces" name="nacces" data-placeholder="Nivel de acceso*" required>';?>
                                <option value=""></option>
                                <option value="1" <?php if($vform->acceso==1) echo 'selected'; ?>>Nivel 1</option>
                                <option value="2" <?php if($vform->acceso==2) echo 'selected'; ?>>Nivel 2</option>
                                <option value="3" <?php if($vform->acceso==3) echo 'selected'; ?>>Nivel 3</option>
                        <?php echo'</select>
                        </div>                                  
                        <div class="clearfix"></div>
                        <!-- Only Letter/Number -->                        
                        <div class="col-md-3">
                            <div class="form-group">
                                <input class="form-control input-sm" id="ladatel" name="ladatel" type="text" placeholder="Lada" value="'.$vform->lada.'" data-parsley-type="number" required>
                            </div>
                        </div>
                        <div class="col-md-3">                                             
                            <div class="form-group">                                                        
                                <input class="form-control input-sm" id="telefono" name="telefono" type="text" placeholder="Teléfono" value="'.$vform->telefono.'" data-parsley-type="number" required>
                            </div>
                        </div>
                        <div class="col-md-3">                                                  
                            <div class="form-group">                                                        
                                <input class="form-control input-sm" id="extension" name="extension" type="text" placeholder="Extensión" value="'.$vform->extension.'" data-parsley-type="number">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">                                                        
                                <input class="form-control input-sm" id="celular" name="celular" type="text" placeholder="Celular" value="'.$vform->celular.'" data-parsley-type="number">
                            </div>
                        </div>                                  
                        <div class="clearfix"></div>
                        <div class="col-md-12" id="categorias">
                            
                        </div> 
                        <div class="clearfix"></div>
                        <!-- Integer -->                                                
                        <div class="col-md-10">
                            <button type="submit" id="btn_modenl" class="btn btn-sm" title="Importante">Guardar</button>
                            
                        </div>                                              
                    </form>';
            break;
        
        
    }
}
?>

<script type="text/javascript">
    $('.chosen-select').chosen({'width':'100%','white-space':'nowrap'});
    <?php echo $validacion; ?>

    function form_modinst(tipo,id)
    {      
        $.post('<?=base_url();?>index.php/control_usuarios/form_modinst', $('#form_mdir').serialize(), function(resp){
            switch(resp) {
                case "error1":
                    alerta = '<div class="alert alert-warning alert-icon">Advertencia! Debe llenar todos los campos requeridos.<i class="icon">&#61730;</i></div>';
                    break;
                case "error2":
                    alerta = '<div class="alert alert-danger alert-icon">Hubo un error al actualizar la información.<i class="icon">&#61907;</i></div>';
                    break;                
                default:
                    alerta = '<div class="alert alert-success alert-icon">Inserción correcta!<i class="icon">&#61845;</i></div>';
                    $('input').removeClass('parsley-success');
                    break;                      
            }

            alertas('alertas_mod');
            busca_datos();
        });
    }

    function form_modtit(tipo,id)
    {      
        $.post('<?=base_url();?>index.php/control_usuarios/form_modtit', $('#form_modtit').serialize(), function(resp){
            switch(resp) {
                case "error1":
                    alerta = '<div class="alert alert-warning alert-icon">Advertencia! Debe llenar todos los campos requeridos.<i class="icon">&#61730;</i></div>';
                    break;
                case "error2":
                    alerta = '<div class="alert alert-danger alert-icon">Hubo un error al actualizar la información.<i class="icon">&#61907;</i></div>';
                    break;                
                default:
                    alerta = '<div class="alert alert-success alert-icon">Inserción correcta!<i class="icon">&#61845;</i></div>';
                    $('input').removeClass('parsley-success');
                    break;                      
            }

            alertas('alertas_mod');
            busca_datos();
        });
    }

    function form_modasist(tipo,id)
    {      
        $.post('<?=base_url();?>index.php/control_usuarios/form_modasist', $('#form_modenlace').serialize(), function(resp){
            switch(resp) {
                case "error1":
                    alerta = '<div class="alert alert-warning alert-icon">Advertencia! Debe llenar todos los campos requeridos.<i class="icon">&#61730;</i></div>';
                    break;
                case "error2":
                    alerta = '<div class="alert alert-danger alert-icon">Hubo un error al actualizar la información.<i class="icon">&#61907;</i></div>';
                    break;                
                default:
                    alerta = '<div class="alert alert-success alert-icon">Inserción correcta!<i class="icon">&#61845;</i></div>';
                    $('input').removeClass('parsley-success');
                    break;                      
            }

            alertas('alertas_mod');
            busca_datos();
        });
    }
    
    
    
</script>
                                            
                                        <!--***********************************************************************************************************                                                                           -->
                                       