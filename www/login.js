const baseURL = "http://192.168.0.5/";


if (!localStorage.getItem("listaRegiones")) {
    $.ajax({
        url: baseURL + 'codexgit/encuestaM/getRegiones',
        method: 'post',
        data: {},
        dataType: 'json',
        success: function (response) {
            localStorage.setItem("listaRegiones", JSON.stringify(response['lstregiones']));
        }
    });
}

if (!localStorage.getItem("listaComunas")) {
    $.ajax({
        url: baseURL + 'codexgit/encuestaM/getComunas',
        method: 'post',
        data: {},
        dataType: 'json',
        success: function (response) {

            localStorage.setItem("listaComunas", JSON.stringify(response['lstcomunas']));

        }
    });
}
if (localStorage.getItem("Pass")) {
    if (localStorage.getItem("Pass") === "true") {
        sessionStorage.setItem("tipo", '1');
        location.href = "Vistas/inicio/inicio.html";

    }
}

$(document).ready(function () {

    $('#login').attr('disabled', 'disabled');


    $('#user').keyup(function () {
        if ($('#pass').val() !== "" && $('#user').val() !== "") {
            $('#login').removeAttr('disabled');
        } else {
            $('#login').attr('disabled', 'disabled');
        }

    });


    $('#pass').keyup(function () {
        if ($('#pass').val() !== "" && $('#user').val() !== "") {
            $('#login').removeAttr('disabled');
        } else {
            $('#login').attr('disabled', 'disabled');
        }

    });


    if (localStorage.getItem("user") !== "") {
        $('#user').val(localStorage.getItem("Usuario"));
    }

    if (localStorage.getItem("remember") === "1") {
        $('#recordar').prop('checked', true);
    }




    $("#enter").on("submit", function (e) {
        var user = $('#user').val();
        var pass = $('#pass').val();
        e.preventDefault();

        $.ajax({

            url: baseURL + 'codexgit/loginM/validar',
            method: 'POST',
            data: {user: user, pass: pass},
            timeout: 5000,
            dataType: 'json',
            success: function (dataa) {

                if (dataa['col'] === 0) {
                    alert(dataa['mensaje']);
                    avisar(dataa['mensaje']);

                } else {
                    alert(dataa['mensaje']);
                    if ($('#recordar').prop('checked')) {
                        localStorage.setItem("Usuario", dataa['usrlogin']);
                        localStorage.setItem("Nombre", dataa['usrnombre']);
                        localStorage.setItem("Apellido", dataa['usrapellido']);
                        localStorage.setItem('Pass', true);
                        localStorage.setItem("remember", '1');
                        localStorage.setItem("user_id", dataa['usrid']);
                        sessionStorage.setItem("tipo", '1');

                    } else {
                        if (localStorage.getItem("Usuario")) {
                            localStorage.removeItem("Usuario");
                        }
                        sessionStorage.setItem("Usuario", dataa['usrlogin']);
                        sessionStorage.setItem("Nombre", dataa['usrnombre']);
                        sessionStorage.setItem("Apellido", dataa['usrapellido']);
                        sessionStorage.setItem("user_id", dataa['usrid']);
                        sessionStorage.setItem("tipo", '2');    //el tipo ayuda a posteriores js a diferenciar a la persona si guarda datos. 1->local 2->sessiion
                    }
                    window.location.href = "Vistas/inicio/inicio.html";
                }
            }



        }).fail(function () {
            alert("Fallo en la conexión");
        });
    });
});


function avisar(mensaje) {
    msg = "<div class='alert alert-danger alert-dismissable fade show'>\n\
        <button type='button' class='close' data-dismiss='alert'>&times;</button>\n\
        <strong>Atencion! </strong>" + mensaje + "</div>";


    $("#aviso").html(msg);
}