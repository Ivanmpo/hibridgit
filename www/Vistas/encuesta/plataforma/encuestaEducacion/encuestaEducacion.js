

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');
var existe = 0;

function crearTablas() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_educacion(encuesta_educacion_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL,edu_nivel_esc INTEGER NOT NULL, edu_tipo_est INTEGER NULL, edu_ult_curso INTEGER NULL, edu_anio_egreso INTEGER NULL, edu_estudiando INTEGER NOT NULL, edu_becas TEXT NULL)');

    });

}


function guardar_encuesta_educacion() {
    //id_ultimo('SELECT * FROM encuesta;',function (id){
    db.transaction(function (tx) {
        var edu_nivel_esc = capturar("educacion");  //document.getElementById('edu_nivel_esc').value;
        var edu_tipo_est = capturar("edu_tipo_est");  //document.getElementById('edu_tipo_est').value;
        var edu_ult_curso = capturar("edu_ult_curso"); //document.getElementById('edu_ult_curso').value;
        var edu_anio_egreso = document.getElementById('edu_anio_egreso').value;
        var edu_estudiando = capturar("edu_estudiando"); //document.getElementById('edu_estudiando').value;
        var edu_becas = capturar_checkbox("edu_becas");  //document.getElementById('edu_becas').value;
        if (existe === 0) {
            tx.executeSql('INSERT INTO encuesta_educacion(encuesta_id,edu_nivel_esc,edu_tipo_est,edu_ult_curso,edu_anio_egreso,edu_estudiando,edu_becas) VALUES(?,?,?,?,?,?,?)'
                    , [encuesta_id, edu_nivel_esc, edu_tipo_est, edu_ult_curso, edu_anio_egreso, edu_estudiando, edu_becas]);
        } else {
            alerta("Se actualizara");
            tx.executeSql('UPDATE encuesta_educacion SET edu_nivel_esc=?,edu_tipo_est=?,edu_ult_curso=?,edu_anio_egreso=?,edu_estudiando=?,edu_becas=? WHERE encuesta_id=?'
                    , [edu_nivel_esc, edu_tipo_est, edu_ult_curso, edu_anio_egreso, edu_estudiando, edu_becas, encuesta_id]);
        }


    });
    //}); 

    window.location.href = "../plataforma.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;

}


function llenar_encuesta_educacion() {

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM encuesta_educacion WHERE encuesta_id=?', [encuesta_id], function (tx, results) {
            if (results.rows.length < 1) {
                existe = 0;

            } else {

                existe = 1;
                $('input[name=educacion][value=' + results.rows.item(0).edu_nivel_esc + ']').prop("checked", true);
                $('input[name=edu_tipo_est][value=' + results.rows.item(0).edu_tipo_est + ']').prop("checked", true);
                $('input[name=edu_ult_curso][value=' + results.rows.item(0).edu_ult_curso + ']').prop("checked", true);
                document.getElementById('edu_anio_egreso').value = results.rows.item(0).edu_anio_egreso;
                $('input[name=edu_estudiando][value=' + results.rows.item(0).edu_estudiando + ']').prop("checked", true);

                setear_checkbox('edu_becas', results.rows.item(0).edu_becas);

            }
        }, null);
    });
}



function capturar(nombre)
{
    var resultado = "0";

    var porNombre = document.getElementsByName(nombre);
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    for (var i = 0; i < porNombre.length; i++)
    {
        if (porNombre[i].checked)
            resultado = porNombre[i].value;
    }
    return resultado;
}

function getp(sParametroNombre) {
    var sPaginaURL = window.location.search.substring(1);
    var sURLVariables = sPaginaURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParametro = sURLVariables[i].split('=');
        if (sParametro[0] === sParametroNombre) {
            return sParametro[1];
        }
    }
    return null;
}


function capturar_checkbox(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [], cadena = "";
    Array.prototype.forEach.call(checkboxes, function (el) {
        values.push(el.value);
    });
    for (var i = 0; i < values.length; i++)
    {
        cadena = cadena + values[i] + "/";
    }
    cadena = cadena.substr(0, cadena.length - 1);
    return cadena;
}

function setear_checkbox(checkboxName, array) {
    for (var i = 0; i < array.length; i++)
    {
        var valido = true, valor = '';
        for (i; i < array.length && valido === true; i++)
        {
            if (array[i] !== '/')
                valor = valor + array[i].toString();
            else {
                valido = false;
                i--;
            }
        }
        document.getElementsByName(checkboxName).item(parseInt(valor) - 1).checked = true;
    }  
}