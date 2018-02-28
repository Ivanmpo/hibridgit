var esCorrecto=true;
var esCorrecto2=true;
var esCorrecto3=true;
var esCorrecto4=true;
var esCorrecto5=true;
var esCorrecto6=true;
var esCorrecto7=true;


var numero=/^[0-9]+$/;

$(function () {
    
    
    $('#trab_dir_calle').keyup(function () {
        esCorrecto=true;
        var _this = $('#trab_dir_calle');
        var _user = $('#trab_dir_calle').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 100) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
            alert(esCorrecto);
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto=true;
        }
    });
}); //validar calle

$(function () {
     
    $('#trab_dir_numero').keyup(function () {
        esCorrecto2=true;
        var _this = $('#trab_dir_numero');
        var _user = $('#trab_dir_numero').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto2=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto2=true;
        }
    });
}); //validar numero

$(function () {
    
    $('#trab_dir_sector').keyup(function () {
        esCorrecto3=true;
        var _this = $('#trab_dir_sector');
        var _user = $('#trab_dir_sector').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto3=false;
        }
        
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto3=true;
        }
    });
}); //validar sector

$(function () {
    
    $('#trab_tel_fijo').keyup(function () {
        esCorrecto4=true;
        
        var _this = $('#trab_tel_fijo');
        var _user = $('#trab_tel_fijo').val();
        
        _this.attr('style', 'background:white');

        
        if (_user.length > 7) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4=false;
            
        }
        if (_user.length < 6) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4=false;
        }
        
        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrect4=false;
        }
        
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto4=true;
        }
    });
}); //validar telefono

$(function () {
    
    $('#trab_tel_movil').keyup(function () {
        esCorrecto5=true;
        var _this = $('#trab_tel_movil');
        var _user = $('#trab_tel_movil').val();
        _this.attr('style', 'background:white'); 
        if (_user.length > 9) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto5=false;
        }
        if (_user.length < 8) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto5=false;
        }
        
        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto5=false;
        }
        
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto5=true;
        }
    });
}); //validar celular

$(function () {
    
    $('#trab_prev_salud_d').keyup(function () {
        esCorrecto6=true;
        var _this = $('#trab_prev_salud_d');
        var _user = $('#trab_prev_salud_d').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto6=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto6=true;
        }
    });
}); //validar prevision
$(function () {
 
    $('#trab_prev_social').keyup(function () {
         esCorrecto7=true;
        var _this = $('#trab_prev_social');
        var _user = $('#trab_prev_social').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto7=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto7=true;
        }
    });
}); //validar prevision sosial

function esValido(){
    if(esCorrecto&esCorrecto2&esCorrecto3&esCorrecto4&esCorrecto5&esCorrecto6&esCorrecto7){
        return true;
    }
    
    else {
        return false;
    }
}