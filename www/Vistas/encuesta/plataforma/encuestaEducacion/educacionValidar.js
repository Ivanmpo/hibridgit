var esCorrecto = true;

$(function () {


    $('#edu_anio_egreso').keyup(function () {
        esCorrecto = true;
        var _this = $('#edu_anio_egreso');
        var _user = $('#edu_anio_egreso').val();
        var numero = /^[0-9]+$/;
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
}); //validar nombres

function esValido() {
    if (esCorrecto) {
        return true;
    } else {
        return false;
    }
}