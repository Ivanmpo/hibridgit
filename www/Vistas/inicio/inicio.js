$(document).ready(function () {

    if (sessionStorage.getItem('tipo')) {
        if (sessionStorage.getItem('tipo') === "1") {
            $('#saludar').append("<strong>" + localStorage.getItem('Nombre') + " " + localStorage.getItem('Apellido') + "</strong>");
        } else {
            $('#saludar').append("<strong>" + sessionStorage.getItem('Nombre') + " " + sessionStorage.getItem('Apellido') + "</strong>");

        }
    }


    /* MUESTA MENSAJE SI ESTA OFFLINE */
    if (!navigator.onLine) {
  
        avisar("Se encuentra sin conexión");
    }
    window.addEventListener('online', function (e) {
        avisar("Se ha contectado");
    });
    window.addEventListener('offline', function (e) {
        avisar("Se ha quedado sin conexión");
    });
    /* FIN MUESTA MENSAJE SI ESTA OFFLINE */




});

//MUESTRA MENSAJES EN PANTALLA
function avisar(mensaje) {
    msg = "<div class='alert alert-danger alert-dismissable fade show'>\n\
        <button type='button' class='close' data-dismiss='alert'>&times;</button>\n\
        <strong>Atención! </strong>" + mensaje + "</div>";


    $("#aviso").html(msg);
}