function add_actividad() {
   var nombre=document.getElementById("txtActividad").value;
    document.getElementById("txtActividad").disabled = true;
     document.getElementById("btnAdd").disabled = true;
     /*Url estatica*/
      var url=document.getElementById("url").value;
      alert(url+"actividades/add");

    $.ajax({
                
                type: "POST",
                url: url+"actividades/add",
                data: "nombre="+nombre,
                success: function() {
                    $("#tablacontenidos").load(" #tablacontenidos");
                     document.getElementById("txtActividad").disabled = true;
                     document.getElementById("btnAdd").disabled = false;
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);

                }
}); 

}
/*
      

*/