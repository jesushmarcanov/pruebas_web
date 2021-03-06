//Peticiones AJAX
$(document).ready(function () {
    $('#formulario').bind("submit",function(){
        //Capturamos el boton de envío
        var btnEnviar = $("#btnEnviar");
        $.ajax({
            type: $(this).attr("method"),
            url:  $(this).attr("action"),
            data: $(this).serialize(),
            beforeSend: function(){
                /**
                 * Esta funcion se ejecuta durante el envío de la petición al servidor
                 */
                btnEnviar.text("Enviando") //Para button
                //btnEnviar.val("Enviando");/Para input tipo button
                btnEnviar.attr("disabled", "disabled");
            },
            complete: function(data){
                /**
                 * SE ejecuta el término de la petición
                 */
                btnEnviar.val("Enviar formulario");
                btnEnviar.removeAttr("disabled");
            },
            success: function(data){
                /**
                 * Se ejecuta cuando termina la petición y esta ha sido correcta
                 */
                $(".respuesta").html(data);
            },
            error: function(data){
                /**
                 * Se ejecuta si la petición ha sido erronea
                 */
                alert("Problemas al tratar de enviar el formulario");
            }
        });
        //Nos permite cancelar el envío del formulario
        return false;
    });
});