
$(document).ready(main);

var open = 0;
function main() {
    $('#button-menu').click(function () {

        if ($('#button-menu').attr('class') === 'oi oi-menu') {

            $('#button-menu').removeClass('oi oi-menu').addClass('oi oi-x');
//            $('.navegacion .menu').css({'left': '0px'});
            $('.navegacion .menu').animate({
                left: '0px'
            });
            open = 1;

        } else {
            $('#button-menu').removeClass('oi oi-x').addClass('oi oi-menu');
//            $('.navegacion .menu').css({'left': '-100%'});
            $('.navegacion .menu').animate({
                left: '-100%'
            });
        }
    });

    /*===============================================================*/
    /* Funcionalidad propia del menu de navegacion */
    $("#pag1").click(function (event) {

        $("#contenido").fadeOut();
        $('nav').animate({

            left: '-320px'

        }, '400', function () {
            window.location.href = "../inicio/inicio.html";
        });
    });

    $("#pag2").click(function (event) {



        $('nav').animate({
            left: '-100%'
        }, 'fast', function () {

            window.location.href = "../empresas/empresas.html";

        });

    });

    /*===============================================================*/
    /* Funcion que, al hacer click fuera del menu, este desaparezcla*/

    $(document).click(function (e) {
        var container = $("header nav ul");
        if ($('#button-menu').attr('class') === 'oi oi-x') {

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('#button-menu').removeClass('oi oi-x').addClass('oi oi-menu');
                $('.navegacion .menu').css({'left': '-320px'});


            }
        }
    });
    $('#button-menu').click(function (e) {
        e.stopPropagation();
    });


    /*===============================================================*/
    /* LOGOUT */
    $("#mLogout").click(function (event) {

        try {
            sessionStorage.clear();
            if (localStorage.getItem("remember") !== "1") {
                localStorage.removeItem("user");
            }
            alert("Has sido desconectado satisfactoriamente :)");
        } catch (err) {
            alert(err.message);
        }
        window.location.href = "../../index.html";
    });
    /*===============================================================*/










}