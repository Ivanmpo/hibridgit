

$(document).ready(main);
var contador = 1;


function main() {
    
    $("#contenido").load("principal/principal.html");
    /*===============================================================*/
    /* Funcionalidad basica del menu */
    $('.menu_bar #dropmenu').click(function () {

        if (contador === 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });

        }

    });

    /*===============================================================*/
    /* Funcionalidad propia del menu de navegacion */
    $("#pag1").click(function (event) {
        $("#contenido").fadeOut('fast');
        $("#contenido").load("principal/principal.html");
        $("#contenido").fadeIn('fast');
        
        $('nav').animate({

            left: '-100%'
        });
        contador = 1;
    });

    $("#pag2").click(function (event) {
        
        
        $("#contenido").fadeOut('fast');
        $("#contenido").load("empresas/empresas.html");
        $("#contenido").fadeIn('fast');

       
        $('nav').animate({
            left: '-100%'
        });

        contador = 1;
    });

    /*===============================================================*/
    /* Funcion que, al hacer click fuera del menu, este desaparezcla*/
    $("html").click(function () {
        if (contador === 0) {
            $('nav').animate({
                left: '-100%'
            });
        }
        contador = 1;
    });
    $('header').click(function (e) {
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
        window.location.href = "../index.html";
    });
    /*===============================================================*/
}