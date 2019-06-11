
    function add_entregable() {
        var nombre=document.getElementById("txtEntregable").value;
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
                            data: {nombre:nombre,id_Actividad:id_actividad},
                            
                            success: function() {
                                $("#tablacontenidos").load(" #tablacontenidos");
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
     (function(){
        busqueda_periodicidad();   
       })();
    function  busqueda_periodicidad(id_entregable){
        //document.getElementById('cbo_periodicidad').disabled=false;
        $('#cbo_periodicidad').empty();
        var id;
        var periodicidad=document.getElementById('cbo_periodicidad').value;
             /*Url estatica*/
          var url=document.getElementById("url").value;
                $.ajax({         
                    type: "GET",
                    url: url+"index.php/Control_entregable/recuperar_periodicidad",  //vamos a poner provicional esto, luego hacemos referencia de esto a la ruta
                    data: "ok=ok",
                    success: function(data) {         
                    value=0;
                    JSON.parse(data, function (k, v) {
                        if(isNaN(v)===true){
                            if(typeof v === 'object'){}else{
                                //texto
                                 var o = new Option("option text", value);
                                 $("#cbo_periodicidad").append(o);
                                 $(o).html(v);
                            }
                        }else{
                        //numero
                         value=v;
                        }
                         
                    
                });     
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus);
                        alert("Error: " + errorThrown);
    
                    }
                    }); 
        
    }
    (function(){
        busqueda_unidad();   
       })();
    function  busqueda_unidad(){
        //document.getElementById('cbo_unidad').disabled=false;
        $('cbo_unidad').empty();
        var periodicidad=document.getElementById('cbo_unidad').value;
             /*Url estatica*/
          var url=document.getElementById("url").value;
                $.ajax({         
                    type: "GET",
                    url: url+"index.php/Control_entregable/recuperar_unidad",  //vamos a poner provicional esto, luego hacemos referencia de esto a la ruta original
                    data: "ok=ok",
                    success: function(data) {         
                    value=0;
                    JSON.parse(data, function (k, v) {
                        if(isNaN(v)===true){
                            if(typeof v === 'object'){}else{
                                //texto
                                 var o = new Option("option text", value);
                                 $("#cbo_unidad").append(o);
                                 $(o).html(v);
                            }
                        }else{
                        //numero
                         value=v;
                        }
                         
                    
                });     
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus);
                        alert("Error: " + errorThrown);
    
                    }
                    }); 
        
    }
