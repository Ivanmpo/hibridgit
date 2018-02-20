$.ajax({
    url: 'http://192.168.0.5/codexgit/encuestaM/getRegiones',
    method: 'post',
    data: {},
    dataType: 'json',
    success: function (response) {
        localStorage.setItem("listaRegiones", JSON.stringify(response['lstregiones']));
    }
});

$.ajax({
    url: 'http://192.168.0.5/codexgit/encuestaM/getComunas',
    method: 'post',
    data: {},
    dataType: 'json',
    success: function (response) {

        localStorage.setItem("listaComunas", JSON.stringify(response['lstcomunas']));

    }
});

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
        $('#remember').prop('checked', true);
    }



    $("#enter").on("submit", function (e) {
        var user = $('#user').val();
        var pass = $('#pass').val();
        //Code: Action (like ajax...)
        e.preventDefault();


        $.ajax({

            url: 'http://192.168.0.5/codexgit/loginM/validar',
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
                    if ($('#remember').prop('checked')) {
                        localStorage.setItem("Usuario", dataa['usrlogin']);
                        localStorage.setItem("Nombre", dataa['usrnombre']);
                        localStorage.setItem("Apellido", dataa['usrapellido']);

                        localStorage.setItem("remember", '1');

                        sessionStorage.setItem("tipo", '1');

                    } else {
                        if (localStorage.getItem("Usuario") !== null) {
                            localStorage.removeItem("Usuario");
                            localStorage.removeItem("Nombre");
                            localStorage.removeItem("Apellido");
                        }
                        sessionStorage.setItem("Usuario", dataa['usrlogin']);
                        sessionStorage.setItem("Nombre", dataa['usrnombre']);
                        sessionStorage.setItem("Apellido", dataa['usrapellido']);

                        localStorage.removeItem("remember");

                        sessionStorage.setItem("tipo", '2');    //el tipo ayuda a posteriores js a diferenciar a la persona si guarda datos. 1->local 2->sessiion
                    }
                    sessionStorage.setItem("user_id", dataa['usrid']);
                    window.location.href = "Vistas/inicio/inicio.html";
                }



                /*
                 if (data == "1") {
                 $(location).attr('href', 'index.php');
                 
                 } else {
                 $("#result").html("<p>QUEDO LA FOX</p>");
                 }
                 */
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