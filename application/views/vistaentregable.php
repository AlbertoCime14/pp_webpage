<div class="panel panel-default">
    <div class="panel-heading">
      <!--Buscador-->
         Alineación del entregable 
    </div>
    <div class="panel-body">
      <!--Tabla de contenidos-->
       <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre del entregable</th>
      <th scope="col" width="300px">Nombre del compromiso</th>
      <th scope="col">Número de compromiso</th>
      <th scope="col" width="300px">Componente</th>
    </tr>
  </thead>
  <tbody>
    <?php
      $pk = null;
      $selected = null;
      
        foreach ($entregables as $key) {
          //echo "<option value='$key->id_entregables'>$key->nombre</option>";
          $pk .= $key->id_entregables.'.';
      ?>
    <tr>


      <?php
        if(isset($alineacion) && !empty($alineacion) && !empty($alineacion[0])){
          foreach ($alineacion as $a) {
          if($a->entregables_id_entregables === $key->id_entregables){
          echo "<input type='hidden' id='comp$key->id_entregables' value='$a->componente_id_componente'>";
        }
        }
        }
      ?>

      <td>
        <input type="hidden" id="entregable<?php echo $key->id_entregables; ?>" value="<?php echo $key->id_entregables; ?>">
     <input type="text"  id="nombre_entregable" value="<?php echo $key->nombre; ?>" class="form-control" disabled>
    <!--<select id="entregable" class="form-control">
    </select>-->
</td>
<td>            
    <select id="compromiso<?php echo $key->id_entregables; ?>" onchange="onChange(<?php echo $key->id_entregables; ?>)" class="form-control">
      <option>Seleccionar compromiso</option>
      <?php
      
        foreach($compromiso as $r){
          foreach ($alineacion as $a) {
            if($a->compromisos_id_compromiso === $r->id_compromiso && $a->entregables_id_entregables === $key->id_entregables){
              $selected = 'selected';
              break;
            }else{
              $selected = null;
            }
          }
          echo "<option value='$r->id_compromiso' $selected>$r->nombre_compromiso</option>"; 
        }
      ?>
    </select>
</td>
<td>
 <label id="numero<?php echo $key->id_entregables; ?>" class="col-form-label text-md-center"></label>
</td>
<td>
  <select id="componente<?php echo $key->id_entregables; ?>" class="form-control">
    <option>Seleccionar</option>
  </select>
</td>
</form>
    </tr>
    <?php } ?>
  </tbody>
</table>
<div class="container-fluid" style="padding-bottom: 20px">
  <div class="col-md-6">
    <label>Elaboro: </label>
    <input type="text" id="elaboro" class="form-control" value="<?php if(isset($actividad->elaboro)) { echo $actividad->elaboro;}?>">
  </div>
<div class="col-md-6">
  <label>Autorizo: </label>
  <input type="text" id="autorizo" class="form-control" value="<?php if(isset($actividad->autorizo)) { echo $actividad->autorizo;}?>">

</div>
</div>
<input type="hidden" id="array" value="<?php echo trim($pk, '.');?>">
<section>
    <input type="button" onclick="alinear_entregable('<?php echo trim($pk, '.');?>')" class="btn btn-dark" value="Guardar" >
</section>
   </div>
    </div>
    <script type="text/javascript">
      $(document).ready(function () {
      onload($("#array").val());
  });
    </script>