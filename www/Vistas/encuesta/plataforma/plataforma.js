
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');

$(document).ready(function () {


    /* Boton crear encuesta Trabajador */
    $("#crear_et").click(function () {
        window.location.href = "encuestaTrabajador/encuestaTrabajador.html?filemp_id="+ filemp_id +"&encuesta_id="+ encuesta_id;
    });
    /* Fin boton Crear encuesta Trabajador */
    /*---------------------------------------------------*/
    /* Boton crear encuesta Educacion */
    $("#crear_ee").click(function () {
        window.location.href = "encuestaEducacion/encuestaEducacion.html?filemp_id="+ filemp_id +"&encuesta_id="+ encuesta_id;
    });
    /* Fin boton Crear encuesta Educacion */
    /*---------------------------------------------------*/
    /* Boton crear encuesta Salud */
    $("#crear_es").click(function () {
        window.location.href = "encuestaSalud/encuestaSalud.html?filemp_id="+ filemp_id +"&encuesta_id="+ encuesta_id;
    });
    /* Fin boton Crear encuesta Salud */
    
    /*---------------------------------------------------*/
    /* Boton crear encuesta Vivienda */
    $("#crear_ev").click(function () {
        window.location.href = "encuestaVivienda/encuestaVivienda.html?filemp_id="+ filemp_id +"&encuesta_id="+ encuesta_id;
    });
    /* Fin boton Crear encuesta Vivienda */
    
    /*---------------------------------------------------*/
    /* Boton crear encuesta Vivienda */
    $("#crear_ef").click(function () {
        window.location.href = "encuestaFamilia/encuestaFamilia.html?filemp_id="+ filemp_id +"&encuesta_id="+ encuesta_id;
    });
    /* Fin boton Crear encuesta Vivienda */




    

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