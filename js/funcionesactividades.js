/**
Sirve para agregar una nueva actividad 
**/
function add_actividad() {
   var nombre=document.getElementById("txtActividad").value;
    document.getElementById("txtActividad").disabled = true;
     document.getElementById("btnAdd").disabled = true;
     /*Url estatica*/
      var url=document.getElementById("url").value;

    $.ajax({
                
                type: "POST",
                url: url+"actividades/add",
                data: "nombre="+nombre,
                success: function() {
                    $("#tablacontenidos").load(" #tablacontenidos");
                     document.getElementById("txtActividad").disabled = false;
                     document.getElementById("btnAdd").disabled = false;
                      document.getElementById("txtActividad").value = "";
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);

                }
}); 

}
/*
      Aqui empieza a cambiar todos los input cuando cargan

*/

/**
Busqueda de los temas mediante el id eje
**/

function busquedapp(ideje){
    document.getElementById('cboPP').disabled=false;
    $('#cboPP').empty();
    var eje=document.getElementById('cboEje').value;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/pp/"+eje,
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                             var o = new Option("option text", value);
                             $("#cboPP").append(o);
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
/**
Busqueda de los objetivos mediante el id tema
**/

function busquedaobjetivo(){
     document.getElementById('cboObjetivo').disabled=false;
     $('#cboObjetivo').empty();
    var tema=document.getElementById('cboPP').value;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/obj/"+tema,
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                             var o = new Option("option text", value);
                             $("#cboObjetivo").append(o);
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
/**
Busqueda de las estrategias mediante el id objetivo
**/

function busquedaestrategias(){
     document.getElementById('cboEstrategia').disabled=false;
     $('#cboEstrategia').empty();
    var objetivo=document.getElementById('cboObjetivo').value;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/cat/"+objetivo,
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                             var o = new Option("option text", value);
                             $("#cboEstrategia").append(o);
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

/**
Busqueda del las alineacciones mediante el id estrategias
**/

function busquedalineaaccion(){
     document.getElementById('cboLineaacion').disabled=false;
     $('#cboLineaacion').empty();
    var estrategia=document.getElementById('cboEstrategia').value;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/cat_linea/"+estrategia,
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                             var o = new Option("option text", value);
                             $("#cboLineaacion").append(o);
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


