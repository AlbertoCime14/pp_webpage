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
                url: url+"actividades/cat_temas/"+eje,
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
        $('#busquedapoblacion').empty();
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

/***
Busqueda de ods mediante el id estrategia
*/

function busquedaods(){
    // document.getElementById('cboLineaacion').disabled=false;
     //$('#ods').empty();
    var estrategia=document.getElementById('cboEstrategia').value;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/ods/"+estrategia,
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                         //    var o = new Option("option text", value);
                         //    $("#cboLineaacion").append(o);
                         //    $(o).html(v);
                       
                        }
                    }else{
                    //numero
                     value=v;
                     if(v==""){

                     }else{
                         //document.getElementById("lblods").value = "Johnny Bravo";
                           //$("#lblods").show();
                           $('#lblods').text('ODS: '+v);
                           $("#lblods").css('visibility','');
                     }
                    
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
Funcion para llamar a otra funcion de llenado del combobox de la poblacion
**/
(function(){
 busquedapoblacion();   
})();
/**
Busqueda de la poblacion especifica**/
function busquedapoblacion(){
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/poblacionobj",
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                             var o = new Option("option text", value);
                             $("#cobPoblacion").append(o);
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
Funcion para llamar a otra funcion de llenado del combobox de la poblacion
**/

/***
================================Llenado de actividad monetaria=====================
***/


/**Busqueda de la fuente**/
(function(){
 busquedafuente();   
})();
function busquedafuente(){
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/fuente",
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                             var o = new Option("option text", value);
                             $("#cbofuente").append(o);
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

/***Busqueda del nombre de la fuente**/
(function(){
 busquedanombrefuente();   
})();
function busquedanombrefuente(){
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/nombrefuente",
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                             var o = new Option("option text", value);
                             $("#nombrefuente").append(o);
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

/**Actualizacion del valor monetario**/
function actualizar_monto(){
    var MontoPropio=document.getElementById("txtMontoPropio").value;
    var MontoOtras=document.getElementById("txtMontoOtras").value;
    if(MontoPropio==""  || MontoOtras==""){

    }else{
           var montototal=parseFloat(MontoPropio)+parseFloat(MontoOtras);
       // document.getElementById("txtMontototal").value; 
          var txtMontototal = document.getElementById("txtMontototal");
             txtMontototal.value = "$"+montototal+" MXN";
    }
 
  //  document.getElementById('txtMontototal').innerHTML = MontoPropio+MontoOtras;
 //document.getElementById("txtMontototal").value=MontoPropio+MontoOtras;
  

}

/***Busqueda de las ubp mediante la institucion**/
(function(){
 busquedaubp();   
})();



function busquedaubp(){
    //El boleano valida un numero en los input y mantener los values dinamicamente
 var validador = true;
 var optionvalue=0;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/ubp",
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){

                        if(typeof v === 'object'){}else{                          
                        }
                    }else{
                    //numero
                     value=v;     
                    if (validador=== true) {          
                        optionvalue=value;
                        validador=false;
                        } else {
                     //este guarda el nombre del option
                           $('#cboUbp').prepend("<option value="+optionvalue+">"+value+"</option>");
                            validador=true;
                        }                   
                    }                
                
            });     
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);

                }
                }); 
}


/** Sirve para actulizar los nombres del los ubp y traer las relaciones con el id del ubp**/

function busquedanombreubpypp(){
    var ubp=document.getElementById('cboUbp').value;
         /*Url estatica*/
      var url=document.getElementById("url").value;
            $.ajax({         
                type: "GET",
                url: url+"actividades/nombreubp/"+ubp,
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){

                        }else{
                            //texto
                              $('#nombreUbp').text(v);
                             var datos=busquedaplan();
                      
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

/**Busqueda de la fuente**/

function busquedaplan(){
    var ubp=document.getElementById('cboUbp').value;
      var url=document.getElementById("url").value;
    var datos;
            $.ajax({         
                type: "GET",
                url: url+"actividades/pp/"+ubp,
                data: "ok=ok",
                success: function(data) {         
                value=0;
                JSON.parse(data, function (k, v) {
                    if(isNaN(v)===true){
                        if(typeof v === 'object'){}else{
                            //texto
                       datos=value;
                        $('#txtNombrepp').text('Nombre de PP: '+v);
                        $('#txtNumeropp').text('Numero PP: '+value);    
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
            return datos;
          
}


function actualizaractividad(){
    //=============================================Mandar datos para actualizar la actividad====================//
/** url del sitio**/
  var url=document.getElementById("url").value;
/** id de la actividad modificando**/
var txtActividadId=document.getElementById('txtActividadId').value;
/** id Lineas de accion**/
var cboLineaacion=document.getElementById('cboLineaacion').value;
/** id UBP**/
var cboUbp=document.getElementById('cboUbp').value;
/** id poblacion objetivo**/
var cobPoblacion=document.getElementById('cobPoblacion').value;
/** id origen de la fuente de financiamiento**/
var cbofuente=document.getElementById('cbofuente').value;
/** id de la fuente de financiamiento**/
var nombrefuente=document.getElementById('nombrefuente').value;
/** Sacar el monto propio**/
var txtMontoPropio=document.getElementById('txtMontoPropio').value;
/** Sacarl el monto de otras fuentes**/
var txtMontoOtras=document.getElementById('txtMontoOtras').value;
/** Para sacar la fecha de inicio**/
var txtFechaInicio=document.getElementById('txtFechaInicio').value;
/** Para sacar la fecha de fin**/
var txtFechafin=document.getElementById('txtFechafin').value;

//===============================Campos utilizables cuando se requieran===================//
var Nombre="example";
var objetivo_general="example";
var descripcion="example";
var elaboro="example";
var autorizo="example";

//===========================llamada  de ajax paara actualizar los datos===============//
/******** Datos de la actualizacion  *********/
var datos="id_actividad_estrategica="+txtActividadId+"&Nombre="+Nombre+"&objetivo_general="+objetivo_general+"&descripcion="+descripcion+"&monto_propio="+txtMontoPropio+"&monto_otro="+txtMontoOtras+"&fecha_inicio="+txtFechaInicio+"&fecha_fin="+txtFechafin+"&elaboro="+elaboro+"&autorizo="+autorizo+"&cat_lineaaccion_ped_lineaaccionid="+cboLineaacion+"&ubp_id_ubp="+cboUbp+"&poblacion_objetivo_id_poblacion="+cobPoblacion+"&origen_fuente_id_origen="+cbofuente+"&fuente_financiamiento_id_ff="+nombrefuente;
              $.ajax({         
                type: "POST",
                url: url+"actividades/editar/"+txtActividadId,
                data: datos,
                success: function(data) {         
                //=========================================//
                notie.alert({ type: 1, text: 'Correcto!', time: 2 });
                setTimeout(function(){ location.href = url+"actividades"; }, 1000);



                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);

                }
                });
}
