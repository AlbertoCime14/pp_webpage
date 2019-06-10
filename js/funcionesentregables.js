function add_entregable() {
    var nombre=document.getElementById("txtEntregable").value;
     document.getElementById("txtEntregable").disabled = true;
      document.getElementById("btnAdd").disabled = true;
      /*Url estatica*/
       var url=document.getElementById("url").value;

       if (nombre !="") {
            $.ajax({
                            
                        type: "POST",
                        url: url+"entregables/add",
                        data: "nombre="+nombre,
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