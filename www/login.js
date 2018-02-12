

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
        $('#user').val(localStorage.getItem("user"));
    }
    
    if (localStorage.getItem("remember") ==="1") {
        $('#remember').prop('checked',true);
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

                } else {
                    alert(dataa['mensaje']);
                    if($('#remember').prop('checked')){
                        localStorage.setItem("user", dataa['usrlogin']);
                        localStorage.setItem("remember", '1');
                        
                    }else{
                        if(localStorage.getItem("user")!==null){
                            localStorage.removeItem("user");
                        }
                        sessionStorage.setItem("user", dataa['usrlogin']);
                        localStorage.removeItem("remember");
                    }
                    sessionStorage.setItem("user_id", dataa['usrid']);
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
            
            

        }).fail(function(){
            alert("Fallo en la conexión");
        });
    });
});