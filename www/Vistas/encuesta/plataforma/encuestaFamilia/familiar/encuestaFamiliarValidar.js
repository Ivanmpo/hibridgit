var esCorrecto = true;
var esCorrecto1 = true;
var esCorrecto2 = true;
var esCorrecto3 = true;
var esCorrecto4 = true;
var esCorrecto5 = true;
var esCorrecto6 = true;
var esCorrecto7 = true;
var esCorrecto8 = true;
var esCorrecto9 = true;
var esCorrecto10 = true;
var esCorrecto11 = true;
var esCorrecto12 = true;
var esCorrecto13 = true;
var esCorrecto14 = true;
var esCorrecto15 = true;
var esCorrecto16 = true;
var esCorrecto17 = true;

var numero = /^[0-9]+$/;

$(function () {
    $('#fam_ges').keyup(function () {
        esCorrecto = true;
        var _this = $('#fam_ges');
        var _user = $('#fam_ges').val();
        _this.attr('style', 'background:white');


        if (_user.length > 100) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto = false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto = true;
        }
    });
}); //validar ges

$(function () {

    $('#fam_meses_cesante').keyup(function () {
        esCorrecto1 = true;
        var _this = $('#fam_meses_cesante');
        var _user = $('#fam_meses_cesante').val();
        _this.attr('style', 'background:white');

        if (_user.length > 2) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto1 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto1 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto1 = true;
        }
    });
}); //validar meses cesante

$(function () {
    $('#fam_fin_estudios').keyup(function () {
        esCorrecto2 = true;
        var _this = $('#fam_fin_estudios');
        var _user = $('#fam_fin_estudios').val();
        _this.attr('style', 'background:white');

        if (_user.length > 4) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto2 = false;
        }
        if (_user.length < 4) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto2 = false;
        }
        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto2 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto2 = true;
        }
    });
});//ultimo año estudiado


$(function () {

    $('#fam_anio_psu').keyup(function () {
        esCorrecto3 = true;
        var _this = $('#fam_anio_psu');
        var _user = $('#fam_anio_psu').val();
        _this.attr('style', 'background:white');

        if (_user.length > 4) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto3 = false;
        }
        if (_user.length < 4) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto3 = false;
        }
        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto3 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto3 = true;
        }
    });
});//ultimo año estudiado

$(function () {

    $('#fam_puntaje_psu').keyup(function () {
        esCorrecto4 = true;
        var _this = $('#fam_puntaje_psu');
        var _user = $('#fam_puntaje_psu').val();
        _this.attr('style', 'background:white');

        if (_user.length !== 3) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4 = false;
        }

        if (_user < 150) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4 = false;
        }

        if (_user > 850) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto4 = true;
        }
    });
});//ultimo puntaje psu

$(function () {

    $('#fam_ult_promedio').keyup(function () {
        esCorrecto5 = true;
        var _this = $('#fam_ult_promedio');
        var _user = $('#fam_ult_promedio').val();
        _this.attr('style', 'background:white');

        if (_user.length !== 2) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto5 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto5 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto5 = true;
        }
    });
});//ultimo promedio

$(function () {
    $('#fam_ibruto_mes1').keyup(function () {
        esCorrecto6 = true;
        var _this = $('#fam_ibruto_mes1');
        var _user = $('#fam_ibruto_mes1').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto6 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto6 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto6 = true;
        }
    });
});

$(function () {
    $('#fam_ibruto_mes2').keyup(function () {
        esCorrecto7 = true;
        var _this = $('#fam_ibruto_mes2');
        var _user = $('#fam_ibruto_mes2').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto7 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto7 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto7 = true;
        }
    });
});

$(function () {

    $('#fam_ibruto_mes3').keyup(function () {
        esCorrecto8 = true;
        var _this = $('#fam_ibruto_mes3');
        var _user = $('#fam_ibruto_mes3').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto8 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto8 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto8 = true;
        }
    });
});

$(function () {
    $('#fam_iliquido_mes1').keyup(function () {
        esCorrecto9 = true;
        var _this = $('#fam_iliquido_mes1');
        var _user = $('#fam_iliquido_mes1').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto9 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto9 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto9 = true;
        }
    });
});

$(function () {
    $('#fam_iliquido_mes2').keyup(function () {
        esCorrecto10 = true;
        var _this = $('#fam_iliquido_mes2');
        var _user = $('#fam_iliquido_mes2').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto10 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto10 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto10 = true;
        }
    });
});

$(function () {
    $('#fam_iliquido_mes3').keyup(function () {
        esCorrecto11 = true;
        var _this = $('#fam_iliquido_mes3');
        var _user = $('#fam_iliquido_mes3').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto11 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto11 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto11 = true;
        }
    });
});

$(function () {
    $('#fam_pension_mes1').keyup(function () {
        esCorrecto12 = true;
        var _this = $('#fam_pension_mes1');
        var _user = $('#fam_pension_mes1').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto12 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto12 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto12 = true;
        }
    });
});

$(function () {
    $('#fam_pension_mes2').keyup(function () {
        esCorrecto13 = true;
        var _this = $('#fam_pension_mes2');
        var _user = $('#fam_pension_mes2').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto13 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto13 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto13 = true;
        }
    });
});

$(function () {
    $('#fam_pension_mes3').keyup(function () {
        esCorrecto14 = true;
        var _this = $('#fam_pension_mes3');
        var _user = $('#fam_pension_mes3').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto14 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto14 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto14 = true;
        }
    });
});

$(function () {
    $('#fam_otros_mes1').keyup(function () {
        esCorrecto15 = true;
        var _this = $('#fam_otros_mes1');
        var _user = $('#fam_otros_mes1').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto15 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto15 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto15 = true;
        }
    });
});

$(function () {
    $('#fam_otros_mes2').keyup(function () {
        esCorrecto16 = true;
        var _this = $('#fam_otros_mes2');
        var _user = $('#fam_otros_mes2').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto16 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto16 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto16 = true;
        }
    });
});

$(function () {
    $('#fam_otros_mes3').keyup(function () {
        esCorrecto17 = true;
        var _this = $('#fam_otros_mes3');
        var _user = $('#fam_otros_mes3').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto17 = false;
        }

        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto17 = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto17 = true;
        }
    });
});

function esValido() {
    if (esCorrecto & esCorrecto1 & esCorrecto2 & esCorrecto3 & esCorrecto4 & esCorrecto5 & esCorrecto6 & esCorrecto7 & esCorrecto8 & esCorrecto9 & esCorrecto10 & esCorrecto11 & esCorrecto12 & esCorrecto13 & esCorrecto14 & esCorrecto15 & esCorrecto16 & esCorrecto17) {
        return true;
    } else {
        return false;
    }
}