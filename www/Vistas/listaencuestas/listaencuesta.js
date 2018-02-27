$(document).ready(function () {


    var filemp_id = getp('filemp_id');


    var db = window.openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM encuesta WHERE filial_empresa_id=' + filemp_id + ';', [], function (tx, results) {
            var len = results.rows.length;
            for (i = 0; i < len; i++) {
                $("#listaEncuestas").append("<tr>");
                $("#listaEncuestas").append("<th scope='row'>" + i + "</th>");
                $("#listaEncuestas").append("<td> " + results.rows.item(i).enc_nombres + " </td>");
                $("#listaEncuestas").append("<td>" + results.rows.item(i).enc_apellido_p + " " + results.rows.item(i).enc_apellido_m + "</td>");
                /* BOTON ACCION */
                
                //$("#listaEncuestas").append("<td><button type='button' class='btn btn-success' >Continuar</button></td>");
                $("#listaEncuestas").append("<td><a class='btn btn-success' href='../encuesta/plataforma/plataforma.html?filemp_id="+ filemp_id +"&encuesta_id=" + results.rows.item(i).encuesta_id + " ' >Continuar</a></td>");
                
                /* FIN BOTON ACCION*/
                //$("#listaEncuestas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Ver Encuestas'>    </td>");
                //$("#listaEmpresas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Agregar Encuesta'>    </td>");
                $("#listaEncuestas").append("</tr>");
            }


        }, null);
    });




    var user_id = sessionStorage.getItem('user_id');

    /* SI ESTA OFFLINE */
    if (!window.navigator.onLine) {

        avisar("Se encuentra sin conexion");


    }

    $("#encuestar").click(function () {

        window.location.href = "../encuesta/encuesta.html?filemp_id=" + filemp_id;

    });

});

function chevar(filemp_id) {
    window.location.href = "../listaencuestas/listaencuestas.html?filemp_id=" + filemp_id;

    //$("#contenido").load("encuesta/encuesta.html?filemp_id="+filemp_id);

}


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


//MUESTRA MENSAJES EN PANTALLA
function avisar(mensaje) {
    msg = "<div class='alert alert-danger alert-dismissable fade show'>\n\
        <button type='button' class='close' data-dismiss='alert'>&times;</button>\n\
        <strong>Atencion! </strong>" + mensaje + "</div>";


    $("#aviso").html(msg);
}

//BASE DE DATOS


