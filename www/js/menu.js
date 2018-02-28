

$(document).ready(main);


function main() {


    /*===============================================================*/
    /* Funcionalidad basica del menu */
    $('.menu_bar #dropmenu').click(function () {

        if ($('#dropmenu').attr('class') === 'oi oi-menu') {
            $('#dropmenu').removeClass('oi oi-menu').addClass('oi oi-x');
            $('nav').animate({
                left: '0%'
            });



        } else {
            $('#dropmenu').removeClass('oi oi-x').addClass('oi oi-menu');
            $('nav').animate({
                left: '-100%'
            });

        }

    });

    /*===============================================================*/
    /* Funcionalidad propia del menu de navegacion */
    $("#pag1").click(function (event) {

        $('nav').animate({

            left: '-100%'

        }, 'fast', function () {
            window.location.href = "../inicio/inicio.html";
        });
    });

    $("#pag2").click(function (event) {


        $("body div#contenido").fadeOut('fast');
        $('nav').animate({
            left: '-100%'
        }, 'fast', function () {

            window.location.href = "../empresas/empresas.html";

        });
    });

    /*===============================================================*/
    /* Funcion que, al hacer click fuera del menu, este desaparezcla*/
    $("html").click(function () {
        if ($('#dropmenu').attr('class') === 'oi oi-x') {
            $('#dropmenu').removeClass('oi oi-x').addClass('oi oi-menu');
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    $('header').click(function (e) {
        e.stopPropagation();
    });

    /*===============================================================*/
    /* LOGOUT */
    $("#mLogout").click(function (event) {

        try {
            if (sessionStorage.getItem('tipo') === "1") {
                
                localStorage.removeItem("Nombre");
                localStorage.removeItem("Apellido");
                localStorage.removeItem('Pass');
                
                localStorage.removeItem("user_id");
                sessionStorage.removeItem("tipo");

            } else {
                localStorage.removeItem("remember");
                localStorage.removeItem("Usuario");
                sessionStorage.clear();
            }
            alert("Has sido desconectado satisfactoriamente.");
        } catch (err) {
            alert(err.message);
        }
        window.location.href = "../../index.html";
    });
    /*===============================================================*/
}



