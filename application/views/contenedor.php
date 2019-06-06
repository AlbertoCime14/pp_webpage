
<?php 
if($nivel==0) {
  if($op==1) {
      echo '<div class="col-md-5" id="cont_buttons">
        <div class="services-alt">
          <h2></h2>        
            <ul class="servives-alt-list">
              <li onclick="carga_opciones(1,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Marco Legal y Normativo</li>
              <li onclick="carga_opciones(2,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Información financiera, Presupuestal, Programática y de Postura Fiscal</li>
              <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/Relacion_de_bienes_de_la_SEPLAN.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Inventario de Bienes Muebles e Inmuebles</li></a>
              <li onclick="carga_opciones(4,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Información relativa al Título V de la LGCG</li>
              <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/Indicadores_Desempeño_SEPLAN.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Indicadores de Desempeño</li></a>
              <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/Cuenta_Publica_SEPLAN.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Cuentas Públicas</li></a>
              <li onclick="carga_opciones(7,1)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Disciplina Financiera</li>
            </ul>
        </div>
      </div>
      <div class="col-md-7 pt-10" id="cont_einfo">
        <div>  
          <p style="font-size: 15px;">En seguimiento a la estrategia de transparencia y modernización del Sistema de Contabilidad Gubernamental, implantada por la Secretaría Técnica de Planeación y Evaluación (SEPLAN), en cumplimiento de la Ley General de Contabilidad Gubernamental (LGCG) y las disposiciones normativas emitidas por el Consejo Nacional de Armonización Contable (CONAC), le damos la cordial bienvenida a este apartado de armonización contable gubernamental.

          <br><br>Este apartado, difundirá en forma permanente los avances de la SEPLAN en la adopción e implementación de las Normas y Lineamientos emitidos por el CONAC y el cumplimiento de la LGCG.

          <br><br>Por lo anterior, esta herramienta tecnológica permitirá mantener informado a la ciudadanía y organismos gubernamentales sobre la instrumentación de la armonización contable en el Ente Público. 

          <br><br>Asimismo, seguiremos trabajando atendiendo las mejores prácticas de transparencia, rendición de cuentas e implementación de las disposiciones normativas vigentes y de esta manera garantizar el proceso de armonización contable en la SEPLAN.


          <br><br><br><b>Atentamente.</b>


          <br><b>C. Rafael Hernández Kotasek.</b>
          </p>
        </div>  
      </div>';
  }
}elseif($nivel==1) {
  if($op==1){
      echo '<div class="col-md-5" id="cont_buttons">
        <div class="services-alt">
          <h2></h2>        
            <ul class="servives-alt-list">
              <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Marco Legal y Normativo</li>
            </ul>
        </div>
      </div>
      <div class="col-md-7 pt-10" id="cont_einfo">
        <div class="services-alt">
            <ul class="servives-alt-list">
              <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/LGCG.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Ley General de Contabilidad Gubernamental</li></a>
              <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/LDFEFM.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Ley de Disciplina Financiera de las Entidades Federativas y Municipios</li></a>
              <a target="_blank" href="http://www.conac.gob.mx/es/CONAC/Normatividad_Vigente"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Normas y Lineamientos emitidos por el CONAC</li><a/>
              <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/Manual_de_Contabilidad_Gubernamental_SEPLAN.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Manual de Contabilidad Gubernamental de la SEPLAN</li></a>
                <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificadores Presupuestarios de la SEPLAN</li>
            </ul>
        </div> 
      </div>';
  }elseif($op==2) {
      echo '<div class="col-md-5" id="cont_buttons">
              <div class="services-alt">
                <h2></h2>        
                  <ul class="servives-alt-list">
                    <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Información Financiera, Presupuestal, Programática y de Postura Fiscal</li>
                  </ul>
              </div>
            </div>
            <div class="col-md-7 pt-10" id="cont_einfo">
              <div class="services-alt">
                  <ul class="servives-alt-list">
                    <li onclick="carga_opciones(1,2)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estados e Información Contable</li>
                    <li onclick="carga_opciones(2,2)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estados e Informes Presupuestarios</li>
                    <li onclick="carga_opciones(3,2)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estados e Informes Programáticos</li>
                    <a href="javascript::" onmouseover="modal_descarga(16);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Indicadores de Postura Fiscal</li></a>
                  </ul>
              </div> 
            </div>';
  }elseif($op==4) {
    echo '<div class="col-md-5" id="cont_buttons">
              <div class="services-alt">
                <h2></h2>        
                  <ul class="servives-alt-list">
                    <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Información relativa al Título V de la LGCG</li>
                  </ul>
              </div>
            </div>
            <div class="col-md-7 pt-10" id="cont_einfo">
              <div>
                  <ol>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/Ley_de_Ingresos.pdf" ><li>Norma para armonizar la presentación de la información adicional a la iniciativa de la Ley de Ingresos. </li></a>
                    <hr style="border: solid 1px #bbbaba;">
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/Presupuesto_de_Egresos.pdf" ><li>Norma para armonizar la presentación de la información adicional del Proyecto del Presupuesto de Egresos. </li></a>
                    <hr style="border: solid 1px #bbbaba;">
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/Presupuesto_Ciudadano.pdf" ><li>Norma para la difusión a la ciudadanía de la Ley de Ingresos y del Presupuesto de Egresos. </li></a>
                    <hr style="border: solid 1px #bbbaba;">
                    <a href="javascript::" onmouseover="modal_descarga(21);"><li>Montos pagados por ayudas y subsidios. </li></a>
                    <hr style="border: solid 1px #bbbaba;">                  
                  </ol>
              </div> 
            </div>';
  }elseif($op==7) {
    echo '<div class="col-md-5" id="cont_buttons">
              <div class="services-alt">
                <h2></h2>        
                  <ul class="servives-alt-list">
                    <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Disciplina financiera</li>
                  </ul>
              </div>
            </div>
            <div class="col-md-7 pt-10" id="cont_einfo">
              <div class="services-alt">
                  <ul class="servives-alt-list">
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/ESTADO_DE_SITUACION_FINANCIERA_DETALLADO.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado de Situación Financiera detallado</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/INFORME_ANALITICO_DE_LA_DEUDA_PUBLICA_Y_OTROS_PASIVOS.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Informe Analítico de la Deuda Pública y otros pasivos</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/BALANCE_PRESUPUESTARIO.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Balance Presupuestario</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/ESTADO_ANALITICO_INGRESOS_DETALLADO.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado Analítico Ingresos detallado</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/CLASIFICACION_POR_OBJETO_DEL_GASTO(CAPITULO_Y_CONCEPTO).pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación por Objeto del Gasto (Capítulo y Concepto)</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/CLASIFICACION_ADMINISTRATIVA.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación Administrativa</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/CLASIFICACION_FUNCIONAL(FINALIDAD_Y_FUNCION).pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación Funcional (Finalidad y Función)</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/CLASIFICACION_DE_SERVICIOS_PERSONALES_POR_CATEGORIA.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación de Servicios Personales por Categoría</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/RESULTADOS_DE_INGRESOS.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Resultados de Ingresos</li>
                    <a target="_blank" href="'.base_url().'archivos/armonizacion_contable/RESULTADOS_DE_EGRESOS.pdf"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Resultados de Egresos</li>
                  </ul>
              </div> 
            </div>';
  }

} elseif($nivel==2) {
    if($op==1) {
      echo '<div class="col-md-5" id="cont_buttons">
              <div class="services-alt">
                <h2></h2>        
                  <ul class="servives-alt-list">
                    <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estados e Información Contable</li>
                  </ul>
              </div>
            </div>
            <div class="col-md-7 pt-10" id="cont_einfo">
              <div class="services-alt">
                  <ul class="servives-alt-list">
                    <a href="javascript::" onmouseover="modal_descarga(1);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado de Situación financiera</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(2);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado de Actividades</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(3);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado de variaciones en la Hacienda Pública / Patrimonio</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(4);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado de Cambios en la Situación Financiera</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(5);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado de flujos de Efectivos</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(6);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado Analítico del Activo</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(7);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado Analítico de la Deuda y Otros Pasivos</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(8);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Notas a los Estados Financieros</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(9);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Informe sobre Pasivos Contingentes</li></a>
                  </ul>
              </div> 
            </div>';
    }elseif ($op==2) {
      echo '<div class="col-md-5" id="cont_buttons">
              <div class="services-alt">
                <h2></h2>        
                  <ul class="servives-alt-list">
                    <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estados e Informes Presupuestarios</li>
                  </ul>
              </div>
            </div>
            <div class="col-md-7 pt-10" id="cont_einfo">
              <div class="services-alt">
                  <ul class="servives-alt-list">
                    <a href="javascript::" onmouseover="modal_descarga(10);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado analítico de ingresos</li></a>
                    <li onclick="carga_opciones(1,3)" style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado analítico del ejercicio del Presupuesto de Egresos</li>
                  </ul>
              </div> 
            </div>';
      
    }elseif($op==3) {
      echo '<div class="col-md-5" id="cont_buttons">
              <div class="services-alt">
                <h2></h2>        
                  <ul class="servives-alt-list">
                    <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estados e Informes Programáticos</li>
                  </ul>
              </div>
            </div>
            <div class="col-md-7 pt-10" id="cont_einfo">
              <div class="services-alt">
                  <ul class="servives-alt-list">

                    <a href="javascript::" onmouseover="modal_descarga(15);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Gasto por Categoría Programática</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(19);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Programas y Proyectos de Inversión</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(20);"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Indicadores de resultado</li></a>
                  </ul>
              </div> 
            </div>';
    }

}elseif($nivel==3) {
    if($op==1) {
      echo '<div class="col-md-5" id="cont_buttons">
              <div class="services-alt">
                <h2></h2>        
                  <ul class="servives-alt-list">
                    <li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Estado analítico del ejercicio del Presupuesto de Egresos</li>
                  </ul>
              </div>
            </div>
            <div class="col-md-7 pt-10" id="cont_einfo">
              <div class="services-alt">
                  <ul class="servives-alt-list">
                    <a href="javascript::" onmouseover="modal_descarga(11)"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación por Objeto del Gasto (Capítulo y Concepto)</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(12)"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación Económica (por Tipo de Gasto)</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(13)"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación Administrativa</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(14)"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Clasificación Funcional (Finalidad y Función)</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(17)"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Endeudamiento neto</li></a>
                    <a href="javascript::" onmouseover="modal_descarga(18)"><li style="cursor: pointer;"><i class="xc icon-right-angle"></i> Intereses de la deuda</li></a>
                  </ul>
              </div> 
            </div>';
    }

}
?>

<!-- Modal -->
<div class="modal fade" id="modal_descargas" tabindex="-1" role="dialog" aria-labelledby="modal_titulo">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="modal_titulo">Descargas</h4>
      </div>
      <div class="modal-body" id="cmodal_desc">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

