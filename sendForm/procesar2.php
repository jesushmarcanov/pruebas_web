<?php 
    //Procesamos los datos que vienen dentro del $_POST
    $datos = json_decode(file_get_contents("php://input"));
    // Aquí podemos procesar los datos
    $email = $datos->correo;
    $nombre = $datos->nombre;
    $apellido = $datos->apellido;
    $fnac = $datos->fnac;
    $tratamiento = $datos->tratamiento;
    $clave = $datos->clave;
    $telefono = $datos->telefono;
    file_put_contents("datos.txt", 
                        "Email: $email,
                         Nombre: $nombre, 
                         Apellido: $apellido, 
                         Fecha de Nacimiento: $fnac,
                         Tratamiento: $tratamiento, 
                         Clave: $clave, 
                         Teléfono: $telefono\n", FILE_APPEND);
    echo json_encode("Formulario enviado");


?>