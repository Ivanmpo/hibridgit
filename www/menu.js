

$(document).ready(main);
var contador = 1;

function main() {
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

    $("html").click(function () {
        if (contador === 0) {
            $('nav').animate({
                left: '-100%'
            });
        }
        contador=1;
    });
    $('header').click(function (e) {
        e.stopPropagation();
    });

}