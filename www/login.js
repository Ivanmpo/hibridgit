

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



    $("#enter").on("submit", function (e) {
        var user = $('#user').val();
        var pass = $('#pass').val();
        //Code: Action (like ajax...)
        e.preventDefault();


        $.ajax({

            url: 'http://192.168.0.5/codexgit/loginM/validar',
            method: 'post',
            data: {user: user, pass: pass},

            dataType: 'json',

            success: function (dataa) {

                if (dataa['col'] === 0) {
                    alert(dataa['mensaje']);

                } else {
                    alert(dataa['mensaje']);
                    window.location.href = "inicio.html";
                }



                /*
                 if (data == "1") {
                 $(location).attr('href', 'index.php');
                 
                 } else {
                 $("#result").html("<p>QUEDO LA FOX</p>");
                 }
                 */
            }
        });
    });
});