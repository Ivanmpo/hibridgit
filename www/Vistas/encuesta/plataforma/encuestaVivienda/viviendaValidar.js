var esCorrecto = true;
var esCorrecto2 = true;
var esCorrecto3 = true;
var esCorrecto4 = true;
var numero = /^[0-9]+$/;

$(function () {

    $('#viv_libreta_anio').keyup(function () {
        esCorrecto = true;
        var _this = $('#viv_libreta_anio');
        var _user = $('#viv_libreta_anio').val();
        _this.attr('style', 'background:white');

        if (_user.length > 4) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto = false;
        }
        if (_user.length < 4) {
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
}); //validar libreta año

$(function () {

    $('#viv_monto_ahorro').keyup(function () {
        esCorrecto2 = true;
        var _this = $('#viv_monto_ahorro');
        var _user = $('#viv_monto_ahorro').val();
        _this.attr('style', 'background:white');

        if (_user.length > 11) {
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
});

$(function () {

    $('#viv_num_personas').keyup(function () {
        esCorrecto3 = true;
        var _this = $('#viv_num_personas');
        var _user = $('#viv_num_personas').val();
        _this.attr('style', 'background:white');

        if (_user.length > 2) {
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
}); //validar numero habitantes

$(function () {

    $('#viv_num_dormitorios').keyup(function () {
        esCorrecto4 = true;
        var _this = $('#viv_num_dormitorios');
        var _user = $('#viv_num_dormitorios').val();
        _this.attr('style', 'background:white');

        if (_user.length > 2) {
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
}); //validar numero habitaciones

function esValido() {
    if (esCorrecto & esCorrecto2 & esCorrecto3 & esCorrecto4) {
        return true;
    } else {
        return false;
    }
}