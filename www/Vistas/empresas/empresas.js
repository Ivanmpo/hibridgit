


$(document).ready(function () {


//ACA QUEDE
    if (!window.navigator.onLine) {
        
        avisar("Se encuentra sin conexion");
        var lista = JSON.parse(localStorage.getItem('empresas'));
        //for (var filemp of dataa['lstfilusuario']) {
        for (var filemp of lista) {
            $("#listaEmpresas").append("<tr>");
            $("#listaEmpresas").append("<th scope='row'>" + filemp['fil_rut'] + "-" + filemp['fil_dv'] +"</th>");
            $("#listaEmpresas").append("<td>" + filemp['fil_nombre'] + "</td>");
            $("#listaEmpresas").append("<td>" + filemp['emp_rut'] + "-" + filemp['emp_dv'] + " </td>");
            $("#listaEmpresas").append("<td>" + filemp['emp_nombre'] + "</td>");
            $("#listaEmpresas").append("<td> <input type='button' class='btn btn-outline-info' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Ver Encuestas'>    </td>");
            //$("#listaEmpresas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Agregar Encuesta'>    </td>");
            $("#listaEmpresas").append("</tr>");
        }

    } else {


        var user_id = sessionStorage.getItem('user_id');
        $.ajax({

            url: 'http://192.168.0.5/codexgit/empresaM/getEmpresas',
            method: 'POST',
            data: {user_id: user_id},
            timeout: 5000,
            dataType: 'json',
            success: function (dataa) {


                localStorage.setItem("empresas", JSON.stringify(dataa['lstfilusuario']));
                var lista = JSON.parse(localStorage.getItem('empresas'));



                //for (var filemp of dataa['lstfilusuario']) {
                for (var filemp of lista) {
                    $("#listaEmpresas").append("<tr>");
                    $("#listaEmpresas").append("<th scope='row'>" + filemp['fil_rut'] + "-" + filemp['fil_dv'] + "</th>");
                    $("#listaEmpresas").append("<td>" + filemp['fil_nombre'] + "</td>");
                    $("#listaEmpresas").append("<td>" + filemp['emp_rut'] + "-" + filemp['emp_dv'] +  "</td>");
                    $("#listaEmpresas").append("<td>" + filemp['emp_nombre'] + "</td>");
                    $("#listaEmpresas").append("<td> <input type='button' class='btn btn-outline-info' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Ver Encuestas'>    </td>");
                    //$("#listaEmpresas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Agregar Encuesta'>    </td>");
                    $("#listaEmpresas").append("</tr>");
                }

            }

        }).fail(function () {
            alert("Fallo en la conexión");
        });



    }
});




//MUESTRA MENSAJES EN PANTALLA
function avisar(mensaje) {
    msg = "<div class='alert alert-danger alert-dismissable fade show'>\n\
        <button type='button' class='close' data-dismiss='alert'>&times;</button>\n\
        <strong>Atencion! </strong>" + mensaje + "</div>";


    $("#aviso").html(msg);
}

function chevar(filemp_id) {
    window.location.href = "../listaencuestas/listaencuestas.html?filemp_id=" + filemp_id;

    //$("#contenido").load("encuesta/encuesta.html?filemp_id="+filemp_id);

}