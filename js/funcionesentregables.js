
    
       
    function add_entregable() {
        var nombre=document.getElementById("txtEntregable").value.trim();
         //document.getElementById("txtEntregable").disabled = true;
          //document.getElementById("btnAdd").disabled = true;
          var id_actividad=document.getElementById("id_Actividad").value;
          //var id_act=parseInt(id_actividad);
          /*Url estatica*/
           var url=document.getElementById("url").value;
    
           if (nombre !="") {
              
               $.ajax({
                            
                            type: "POST",
                            url: url+"index.php/Control_entregable/agregar_entregable",
                            data: {nombre:nombre,id_Actividad:id_actividad,numEntregables:numEntregables},
                            
                            success: function(data) {
                                notie.alert({ type: 1, text: 'Correcto!', time: 2 });
                                numEntregables++;
                                $("#tablacontenidos").append(data);                                
                                document.getElementById("txtEntregable").disabled = false;
                                document.getElementById("btnAdd").disabled = false;
                                document.getElementById("txtEntregable").value = "";                           
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown) {
                                alert("Status: " + textStatus);
                                alert("Error: " + errorThrown);
    
                            }
                });
           }else{
               alert("Asegurate de poner un nombre al entregable");
               document.getElementById("txtEntregable").disabled = false;
               document.getElementById("btnAdd").disabled = false;
               document.getElementById("txtEntregable").value = "";
           }
     
         
     
     }
     function actualizar_Entregable(id) {
        
        /*var nombre=document.getElementById("nombre_"+id).value;
        var cbo_unidad=document.getElementById("cbo_unidad_"+id).value;
        var periodicidad=document.getElementById("cbo_periodicidad_"+id).value;
        var beneficiario=document.getElementById("beneficiario_"+id).value;
        var munizipable=document.getElementById("munizipable_"+id).value;
        var alineacion=document.getElementById("alineacion_"+id).value;
        var meta=document.getElementById("meta_"+id).value;
        var avance=document.getElementById("avance_"+id).value;
        var monto=document.getElementById("monto_"+id).value;*/
          //var id_act=parseInt(id_actividad);
          /*Url estatica*/
          var formulario = $('#formulario_'+id).serialize();
           var url=document.getElementById("url").value;
    
           if (nombre !="") {
              
               $.ajax({
                            
                            type: "POST",
                            url: url+"index.php/Control_entregable/agregar_entregable",
                            data: formulario,
                            
                            success: function(data) {
                                $("#tablacontenidos").append(data);
                                document.getElementById("txtEntregable").disabled = false;
                                document.getElementById("btnAdd").disabled = false;
                                document.getElementById("txtEntregable").value = "";                           
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown) {
                                alert("Status: " + textStatus);
                                alert("Error: " + errorThrown);
    
                            }
                });
           }else{
               alert("Asegurate de poner un nombre al entregable");
               document.getElementById("txtEntregable").disabled = false;
               document.getElementById("btnAdd").disabled = false;
               document.getElementById("txtEntregable").value = "";
           }
     
         
     
     }
     function onChange(id){
      var key = $("#compromiso"+id).val();
          $('#numero'+id).text(key);
          getComponente(id);
     }
     $(document).ready(function () {
      onload($("#array").val());
  });
  function onload(array){
    var keys = array.split('.');
    $.each(keys, function(key, value) {
        var valor = $("#comp"+value).val();
        getComponente(value, valor);
        $("#numero"+value).text($("#compromiso"+value).val());
        //onload('1.2',1)
    });
  }
      
      
  function getComponente(id, find){
    var url=document.getElementById("url").value;
    var formData = new FormData();
    formData.append('key', $("#compromiso"+id).val());
    //formData.append('componente', $("#compromiso"+id).val());
    $.ajax({
      url: url+'componente/query',
      data: formData,
      type: 'post',
      processData: false,
      contentType: false,
      dataType: 'JSON',
      success: function(json){
        $("#componente"+id).empty();
        $("#componente"+id).append('<option value="">Seleccionar</option>');
        $.each(json,function(key, registro) {
          var selected = null;
          if(registro.id_componente == find){
            selected = 'selected';
          }
          $("#componente"+id).append('<option value="'+registro.id_componente+'" '+selected+'>'+registro.nombre_componente+'</option>');
        });
      }
    });
  }
         function alinear_entregable(array){
          
            var keys = array.split('.');
            $.each( keys, function( key, value ) {
                //alert( key + ": " + value );
                dataEntry(value);
            });
            updateActividad();
          }
        
      
      
        function dataEntry(id){
          var url=document.getElementById("url").value;
          var formData = new FormData();
          formData.append('key', $("#entregable"+id).val());
          var compromiso = $("#compromiso"+id).val();
          var componente=$("#componente"+id).val();
          formData.append('compromiso', compromiso);
          formData.append('componente', componente);
          if(compromiso >0 && componente >0){
            $.ajax({
              url: url+'alineacion/guardar',
              data: formData,
              type: 'post',
              processData: false,
              contentType: false,
              dataType: 'json',
              success: function(json){
                if(json > 0){
                  notie.alert({ type: 1, text: 'Correcto!', time: 2 });
                }
                else{
                  notie.alert({ type: 1, text: 'Correcto!', time: 2 });
                  //alert("sin cambios en el compromiso y en el componente");
                }
                
              }
              
            });
          }
          else{
            //alert ("error");
          }
          
        }
        function updateActividad(){
          var url=document.getElementById("url").value;
          var formData = new FormData();
          formData.append('key', $("#key").val());
          var autorizo=$("#autorizo").val().trim();
          var elaboro=$("#elaboro").val().trim();
          formData.append('elaboro', elaboro);
          formData.append('autorizo',autorizo );

          if(autorizo != "" && elaboro !=""){
            $.ajax({
              url: url+'alineacion/autorizo',
              data: formData,
              type: 'post',
              processData: false,
              contentType: false,
              dataType: 'json',
              success: function(json){
                if(json > 0){
                  notie.alert({ type: 1, text: 'Correcto!', time: 2 });
                }else{
                  console.log('sin cambios en el elaboro y autorizo');
                }
                
              }
            });
          }else{
            alert("Los campos ELABORO Y AUTORIZO no pueden quedar vacios ");
          }

         
        }
        function cargarAlineacion(){
          var url=document.getElementById("url").value;
          $.get(url+'alineacion/consulta?key='+$("#key").val(), function( data ) {
          $( "#panel" ).html( data );
          });
          
        }

        function desactivar_entregable(id_entregables){
                  var url=document.getElementById("url").value;
              var r = confirm("¿Seguro desea eliminar el entregable?");
              if (r == true) {
                  $.ajax({
                  type: "POST",
                  url: url+"Control_entregable/eliminar_entregable",
                  data: "id_entregables="+id_entregables,
                  success: function() {
                    notie.alert({ type: 1, text: 'Correcto!', time: 2 });
                        $("#tablacontenidos").load(" #tablacontenidos");
                  },
                  error: function(XMLHttpRequest, textStatus, errorThrown) {
                      alert("Status: " + textStatus);
                      alert("Error: " + errorThrown);
                  }
              });
        
      } else {
      
    }
     
      
     }




        //===============//