
 var encuesta_id = getp('encuesta_id');
    var filemp_id = getp('filemp_id');


$(document).ready(function () {

   $("#gotoplataforma").click(function () {
        window.location.href = "../plataforma.html?filemp_id="+ filemp_id +"&encuesta_id=" + encuesta_id;
    }); 

   
    var db = window.openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM encuesta_familia WHERE encuesta_id='+encuesta_id+ ';', [], function (tx, results) {
            if (results.rows.length > 0) {
                for (i = 0; i < results.rows.length; i++) {
                    $("#listaFamiliares").append("<tr>");
                    $("#listaFamiliares").append("<th scope='row'>" + results.rows.item(i).fam_run + "-" + results.rows.item(i).fam_dv + "</th>");
                    $("#listaFamiliares").append("<td> " + results.rows.item(i).fam_nombres + " </td>");
                    $("#listaFamiliares").append("<td>" + results.rows.item(i).fam_apellido_p + " " + results.rows.item(i).fam_apellido_m + "</td>");
                    /* BOTON ACCION */

                    //$("#listaEncuestas").append("<td><button type='button' class='btn btn-success' >Continuar</button></td>");
                    $("#listaFamiliares").append("<td><a class='btn btn-secondary' href='familiar/encuestaFamiliar.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id + "&encuesta_familia_id=" + results.rows.item(i).encuesta_familia_id + " ' >Continuar</a></td>");

                    /* FIN BOTON ACCION*/
                    //$("#listaEncuestas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Ver Encuestas'>    </td>");
                    //$("#listaEmpresas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Agregar Encuesta'>    </td>");
                    $("#listaFamiliares").append("</tr>");
                }

            } 
        }, null);
    });




    $('#asd').click(function () {

        location.href = "familiar/agregarFamiliar.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
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


