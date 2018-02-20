
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');

$(document).ready(function () {

    $("#crear_et").click(function (event) {


        window.location.href = "encuestaTrabajador/encuestaTrabajador.html?filemp_id="+ filemp_id +"&encuesta_id="+ encuesta_id;

    });



});



function getp(sParametroNombre) {
    var sPaginaURL = window.location.search.substring(1);
    var sURLVariables = sPaginaURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParametro = sURLVariables[i].split('=');
        if (sParametro[0] === sParametroNombre) {
            return sParametro[1];
        }
    }
    return null;
}