$(document).ready(function () {

    if (sessionStorage.getItem('tipo') === '1') {
        $('#saludar').append("<strong>" + localStorage.getItem('Nombre') + " " + localStorage.getItem('Apellido') + "</strong>");
    } else {
        $('#saludar').append("<strong>" + sessionStorage.getItem('Nombre') + " " + sessionStorage.getItem('Apellido') + "</strong>");

    }
    
    
    /* SI ESTA OFFLINE */
    if (!window.navigator.onLine) {

        avisar("Se encuentra sin conexion");


    } 
    
    
    

}); 

//MUESTRA MENSAJES EN PANTALLA
function avisar(mensaje) {
    msg = "<div class='alert alert-danger alert-dismissable fade show'>\n\
        <button type='button' class='close' data-dismiss='alert'>&times;</button>\n\
        <strong>Atencion! </strong>" + mensaje + "</div>";


    $("#aviso").html(msg);
}