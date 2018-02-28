var esCorrecto = true;
var esCorrecto2 = true;
var numero = /^[0-9]+$/;

$(function () {

    $('#sad_cons_drogas_d').keyup(function () {
        esCorrecto = true;
        var _this = $('#sad_cons_drogas_d');
        var _user = $('#sad_cons_drogas_d').val();
        _this.attr('style', 'background:white');

        if (_user.length > 3) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto = false;
        }
        if (parseInt(_user) > 150) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto = false;
        }
        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto = false;
        }
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto = true;
        }
    });
}); //validar nombres}

$(function () {
    $('#sad_pat_ges').keyup(function () {
        esCorrecto2 = true;
        var _this = $('#sad_pat_ges');
        var _user = $('#sad_pat_ges').val();
        _this.attr('style', 'background:white');


        if (_user.length > 100) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto2 = false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto2 = true;
        }
    });
}); //validar ges

function esValido() {
    if (esCorrecto & esCorrecto2) {
        return true;
    } else {
        return false;
    }
}