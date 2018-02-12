

$(document).ready(main);
var contador = 1;


function main() {

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
        $("#contenido").load("opciones.html");
        $('nav').animate({
            
            left: '-100%'
        });
        contador = 1;
    });
  
    $("#pag2").click(function (event) {
        $("#contenido").load("saludar.html");
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
         
        sessionStorage.clear();
        if(localStorage.getItem("remember")!=="1"){
            localStorage.removeItem("user");    
        }
        alert("Hasta luego JO LA PERRA");
        window.location.href = "index.html";
    });
    /*===============================================================*/
}