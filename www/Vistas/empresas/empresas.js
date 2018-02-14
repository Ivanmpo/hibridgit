$(document).ready(function () {


    var user_id = sessionStorage.getItem('user_id');
    $.ajax({

        url: 'http://192.168.0.5/codexgit/empresaM/getEmpresas',
        method: 'POST',
        data: {user_id: user_id},
        timeout: 5000,
        dataType: 'json',
        success: function (dataa) {


            sessionStorage.setItem("empresasculias", JSON.stringify(dataa['lstfilusuario']));
            var lista = JSON.parse(sessionStorage.getItem('empresasculias'));



            //for (var filemp of dataa['lstfilusuario']) {
            for (var filemp of lista) {
                $("#listaEmpresas").append("<tr>");
                $("#listaEmpresas").append("<th scope='row'>" + filemp['fil_rut'] + "</th>");
                $("#listaEmpresas").append("<td>" + filemp['fil_nombre'] + "</td>");
                $("#listaEmpresas").append("<td>" + filemp['emp_rut'] + "</td>");
                $("#listaEmpresas").append("<td>" + filemp['emp_nombre'] + "</td>");
                $("#listaEmpresas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar()' value='Agregar Encuesta'>    </td>");
                $("#listaEmpresas").append("</tr>");
            }

        }

    }).fail(function () {
        alert("Fallo en la conexión");
    });


    

});

function chevar(){
        alert("miau");
    }