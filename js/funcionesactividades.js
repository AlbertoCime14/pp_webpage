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

function busquedapp(ideje){
    document.getElementById('cboPP').disabled=false;
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
function busquedaobjetivo(){
     document.getElementById('cboObjetivo').disabled=false;
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
