//Peticiones AJAX
$(document).ready(function() {
    const $email = $("#email"),
          $nombre = $("#nombre"),
          $apellido = $("#apellido"),
          $fnac = $("#fnac"),
          $tratamiento = $("#tratamiento"),
          $clave = $("#clave"),
          $telefono = $("#telefono"),
          $btnEnviar = $("#btnEnviar"),
          $respuesta = $("#respuesta");
    
    $btnEnviar.click(function() {
        //Poner estado de "cargando"
        $respuesta.html("Cargando...");
        $.post("./procesar.php", {
            email: $email.val(),
            nombre: $nombre.val(),
            apellido: $apellido.val(),
            fnac: $fnac.val(),
            tratamiento: $tratamiento.val(),
            clave: $clave.val(),
            telefono: $telefono.val(),
        }, function(respuestacomoJson) {
            //La decodificamos
            let respuesta = JSON.parse(respuestacomoJson);
            $respuesta.html(respuesta);
        })
    });
});