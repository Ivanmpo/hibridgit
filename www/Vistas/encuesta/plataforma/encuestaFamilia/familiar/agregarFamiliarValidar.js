var esCorrecto = true;
var esCorrecto1 = true;
var esCorrecto2 = true;
var regexp = /^\d{7,8}$/;


$(function () {
    $('#fam_run').keyup(function () {
        esCorrecto3 = true;
        var _this = $('#fam_run');
        var _user = $('#fam_run').val();
        _this.attr('style', 'background:white');

        if (!regexp.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto3 = false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto3 = true;
        }
    });
}); //validar run

$(function () {
    $('#fam_dv').keyup(function () {
        esCorrecto4 = true;
        var _this = $('#fam_dv');
        var _user = $('#fam_dv').val();
        var dv = /^[k|K|\d]{1}$/;
        _this.attr('style', 'background:white');

        if (!dv.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4 = false;
        }


        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto4 = true;
        }
    });
}); //validar run

$(function () {

    $('#fam_nombres').keyup(function () {
        esCorrecto = true;
        var _this = $('#fam_nombres');
        var _user = $('#fam_nombres').val();
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
}); //validar nombres

$(function () {

    $('#fam_apellido_p').keyup(function () {
        esCorrecto1 = true;
        var _this = $('#fam_apellido_p');
        var _user = $('#fam_apellido_p').val();
        _this.attr('style', 'background:white');


        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto1 = false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto1 = false;
        }
    });
}); //validar apellido paterno

$(function () {

    $('#fam_apellido_m').keyup(function () {
        esCorrecto2 = true;
        var _this = $('#fam_apellido_m');
        var _user = $('#fam_apellido_m').val();
        _this.attr('style', 'background:white');


        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto2 = false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto2 = true;
        }
    });
}); //validar apellido materno

function validarut(ruti, dvi) {
    var rut = ruti + "-" + dvi;

    if (rut.length < 9)
        return(false);
    i1 = rut.indexOf("-");
    dv = rut.substr(i1 + 1);
    dv = dv.toUpperCase();
    nu = rut.substr(0, i1);

    cnt = 0;
    suma = 0;
    for (i = nu.length - 1; i >= 0; i--)
    {
        dig = nu.substr(i, 1);
        fc = cnt + 2;
        suma += parseInt(dig) * fc;
        cnt = (cnt + 1) % 6;
    }
    dvok = 11 - (suma % 11);
    if (dvok === 11)
        dvokstr = "0";
    if (dvok === 10)
        dvokstr = "K";
    if ((dvok !== 11) && (dvok !== 10))
        dvokstr = "" + dvok;

    if (dvokstr === dv) {
        return(true);
    } else {
        $('#fam_run').attr('style', 'background:#FF4A4A');
        $('#fam_dv').attr('style', 'background:#FF4A4A');
        return(false);
    }
}
function esValido() {
    if (esCorrecto & esCorrecto2 & esCorrecto1 & validarut($('#fam_run').val(), $('#fam_dv').val())) {
        return true;
    } else {
        return false;
    }
}