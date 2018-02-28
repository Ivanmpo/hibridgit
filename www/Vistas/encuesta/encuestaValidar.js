var esCorrecto=true;
var esCorrecto1=true;
var esCorrecto2=true;
var esCorrecto3=true;
var esCorrecto4=true;
var regexp = /^\d{7,8}$/;


$(function () {
    $('#enc_run').keyup(function () {
        esCorrecto3=true;
        var _this = $('#enc_run');
        var _user = $('#enc_run').val();
        _this.attr('style', 'background:white');

        
        if (!regexp.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto3=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto3=true;
        }
    });
}); //validar run

$(function () {
    $('#enc_dv').keyup(function () {
        esCorrecto4=true;
        var _this = $('#enc_dv');
        var _user = $('#enc_dv').val();
        var dv =/^[k|K|\d]{1}$/;
        _this.attr('style', 'background:white');

        
        if (!dv.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto4=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto4=true;
        }
    });
}); //validar run
$(function () {
    $('#enc_nombres').keyup(function () {
        esCorrecto=true;
        var _this = $('#enc_nombres');
        var _user = $('#enc_nombres').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 100) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto=true;
        }
    });
}); //validar nombres

$(function () {
    $('#enc_apellido_p').keyup(function () {
        esCorrecto1=true;
        var _this = $('#enc_apellido_p');
        var _user = $('#enc_apellido_p').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto1=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto1=true;
        }
    });
}); //validar apellido paterno

$(function () {
    
    $('#enc_apellido_m').keyup(function () {
        esCorrecto2=true;
        var _this = $('#enc_apellido_m');
        var _user = $('#enc_apellido_m').val();
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
}); //validar apellido materno


function validarut(ruti,dvi){
 var rut = ruti+"-"+dvi;
 
 if (rut.length<9)
     return(false);
  i1=rut.indexOf("-");
  dv=rut.substr(i1+1);
  dv=dv.toUpperCase();
  nu=rut.substr(0,i1);
 
  cnt=0;
  suma=0;
  for (i=nu.length-1; i>=0; i--)
  {
    dig=nu.substr(i,1);
    fc=cnt+2;
    suma += parseInt(dig)*fc;
    cnt=(cnt+1) % 6;
   }
  dvok=11-(suma%11);
  if (dvok===11) dvokstr="0";
  if (dvok===10) dvokstr="K";
  if ((dvok!==11) && (dvok!==10)) dvokstr=""+dvok;
 
  if (dvokstr===dv){
     return(true);}
  else{
      $('#enc_run').attr('style', 'background:#FF4A4A');
      $('#enc_dv').attr('style', 'background:#FF4A4A');
     return(false);
 }
}

function esValido(){
    if(esCorrecto&esCorrecto2&esCorrecto1&validarut($('#enc_run').val(),$('#enc_dv').val()))    
            return true;      
    else 
        return false; 
}  