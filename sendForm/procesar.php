<?php 
    //Procesamos los datos que vienen dentro del $_POST
    $email = $_POST["email"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $fnac = $_POST["fnac"];
    $tratamiento = $_POST["tratamiento"];
    $clave = $_POST["clave"];
    $telefono = $_POST["telefono"];
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