

var db = openDatabase('mydb', '1.0', 'Test DB', 20 * 1024 * 1024);
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');
var existe;


$(document).ready(function () {
    $("#gotoplataforma").click(function () {
        window.location.href = "../plataforma.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
});

/*
 function crearTablas() {
 db.transaction(function (tx) {
 
 tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_salud(encuesta_salud_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, sad_cont_menores INTEGER NOT NULL, sad_cons_drogas INTEGER NOT NULL, sad_cons_drogas_d TEXT NULL, sad_pat_ges TEXT NULL, sad_usa_prevision INTEGER NOT NULL, sad_cond_permanente TEXT NULL)');
 
 });
 }
 
 */
function guardar_encuesta_salud() {
    if (esValido()) {
        db.transaction(function (tx) {
            var sad_cont_menores = capturar("n_control"); //document.getElementById('sad_cont_menores').value;
            var sad_cons_drogas = capturar("drogas"); //document.getElementById('sad_cons_drogas').value;
            var sad_cons_drogas_d = document.getElementById('sad_cons_drogas_d').value;
            var sad_pat_ges = document.getElementById('sad_pat_ges').value;
            var sad_usa_prevision = capturar("usa_prev"); //document.getElementById('sad_usa_prevision').value;
            var sad_cond_permanente = capturar_checkbox("cronico"); //document.getElementById('sad_cond_permanente').value;

            if (existe === 0) {
                tx.executeSql('INSERT INTO encuesta_salud(encuesta_id,sad_cont_menores,sad_cons_drogas,sad_cons_drogas_d,sad_pat_ges,sad_usa_prevision,sad_cond_permanente) VALUES(?,?,?,?,?,?,?)'
                        , [encuesta_id, sad_cont_menores, sad_cons_drogas, sad_cons_drogas_d, sad_pat_ges, sad_usa_prevision, sad_cond_permanente]);
            } else {
                tx.executeSql('UPDATE encuesta_salud SET sad_cont_menores=?,sad_cons_drogas=?,sad_cons_drogas_d=?,sad_pat_ges=?,sad_usa_prevision=?,sad_cond_permanente=? WHERE encuesta_id=?'
                        , [sad_cont_menores, sad_cons_drogas, sad_cons_drogas_d, sad_pat_ges, sad_usa_prevision, sad_cond_permanente, encuesta_id]);
            }
            location.href = "../plataforma.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
        });
        //});
    } else {
        alert("Ingrese los campos correctamente para continuar");
    }

}


function llenar_encuesta_salud() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM encuesta_salud WHERE encuesta_id=?', [encuesta_id], function (tx, results) {
            if (results.rows.length < 1) {
                existe = 0;

            } else {
                existe = 1;
                $('input[name=n_control][value=' + results.rows.item(0).sad_cont_menores + ']').prop("checked", true);
                $('input[name=drogas][value=' + results.rows.item(0).sad_cons_drogas + ']').prop("checked", true);


                document.getElementById('sad_cons_drogas_d').value = results.rows.item(0).sad_cons_drogas_d;
                document.getElementById('sad_pat_ges').value = results.rows.item(0).sad_pat_ges;
                $('input[name=usa_prev][value=' + results.rows.item(0).sad_usa_prevision + ']').prop("checked", true);
                setear_checkbox('cronico', results.rows.item(0).sad_cond_permanente);
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