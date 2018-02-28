

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');

$(document).ready(function () {

    $("#gotoplataforma").click(function () {
        window.location.href = "../../plataforma.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
});

/*
function crearTablas() {

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_familia(encuesta_familia_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, fam_run INTEGER NOT NULL, fam_dv TEXT NOT NULL, fam_nombres TEXT NOT NULL, fam_apellido_p TEXT NOT NULL,fam_apellido_m TEXT NOT NULL, fam_fec_nacimiento INTEGER NOT NULL, fam_genero INTEGER NOT NULL, fam_nac_chilena INTEGER NOT NULL)');

    });
}
*/

function guardar_encuesta_familia() {
    db.transaction(function (tx) {
        var fam_run = document.getElementById('fam_run').value;
        var fam_dv = document.getElementById('fam_dv').value;
        var fam_nombres = document.getElementById('fam_nombres').value;
        var fam_apellido_p = document.getElementById('fam_apellido_p').value;
        var fam_apellido_m = document.getElementById('fam_apellido_m').value;
        var fam_fec_nacimiento = document.getElementById('fam_fec_nacimiento').value;
        var fam_genero = capturar("fam_genero"); //document.getElementById('fam_genero').value;
        var fam_nac_chilena = capturar("nacionalidad_fam"); //document.getElementById('fam_nac_chilena').value;
        tx.executeSql('SELECT * FROM encuesta_familia WHERE fam_run=' + fam_run + ';', [], function (tx, results) {

            if (results.rows.length > 0) {
                alert("Persona ya existe");

            } else {


                tx.executeSql('INSERT INTO encuesta_familia(encuesta_id,fam_run,fam_dv,fam_nombres,fam_apellido_p,fam_apellido_m,fam_fec_nacimiento,fam_genero,fam_nac_chilena) VALUES(?,?,?,?,?,?,?,?,?)'
                        , [encuesta_id, fam_run, fam_dv, fam_nombres, fam_apellido_p, fam_apellido_m, fam_fec_nacimiento, fam_genero, fam_nac_chilena]);
                alert("Encuesta creada");
                window.location.href = "../encuestaFamilia.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
            }
        });
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
