/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var db = openDatabase('mydb', '1.0', 'Test DB', 20 * 1024 * 1024);
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');
var existe = 0;

$(document).ready(function () {
    $("#gotoplataforma").click(function () {
        window.location.href = "../plataforma.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
});

/*
 function crearTablas() {
 db.transaction(function (tx) {
 
 tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_trabajador (encuesta_trabajador_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL, trab_dir_calle TEXT NOT NULL, trab_dir_numero INTEGER NOT NULL, trab_dir_sector TEXT NULL, trab_tel_fijo TEXT NULL, trab_tel_movil TEXT NOT NULL, trab_fec_nacimiento INTEGER NOT NULL, trab_genero INTEGER NOT NULL, trab_jefe_familia INTEGER NOT NULL, trab_ant_indigenas INTEGER NOT NULL, trab_est_civil INTEGER NOT NULL, trab_nacionalidad INTEGER NOT NULL, trab_prev_salud INTEGER NOT NULL, trab_prev_salud_d TEXT NOT NULL, trab_prev_social TEXT NOT NULL)');
 
 });
 
 }
 
 
 */
function guardar_encuesta_trabajador() {
    if (esValido()) {
        db.transaction(function (tx) {
            var trab_dir_calle = document.getElementById('trab_dir_calle').value;
            var trab_dir_numero = document.getElementById('trab_dir_numero').value;
            var trab_dir_sector = document.getElementById('trab_dir_sector').value;
            var trab_tel_fijo = document.getElementById('trab_tel_fijo').value;
            var trab_tel_movil = document.getElementById('trab_tel_movil').value;
            var trab_fec_nacimiento = document.getElementById('trab_fec_nacimiento').value;

            var trab_genero = capturar("genero"); //document.getElementById('trab_genero').value;
            var trab_jefe_familia = capturar("jefe"); //document.getElementById('trab_jefe_familia').value;
            var trab_ant_indigenas = capturar("indigena"); //document.getElementById('trab_ant_indigenas').value;
            var trab_est_civil = capturar("e_civil"); //document.getElementById('trab_est_civil').value;
            var trab_nacionalidad = capturar("nacionalidad"); //document.getElementById('trab_nacionalidad').value;
            var trab_prev_salud = capturar("p_salud"); //document.getElementById('trab_prev_salud').value;
            var trab_prev_salud_d = document.getElementById('trab_prev_salud_d').value;
            var trab_prev_social = document.getElementById('trab_prev_social').value;


            if (existe === 0) {
                tx.executeSql('INSERT INTO encuesta_trabajador(encuesta_id,trab_dir_calle,trab_dir_numero,trab_dir_sector,trab_tel_fijo,trab_tel_movil,trab_fec_nacimiento,trab_genero,trab_jefe_familia,trab_ant_indigenas,trab_est_civil,trab_nacionalidad,trab_prev_salud,trab_prev_salud_d,trab_prev_social) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
                        , [encuesta_id, trab_dir_calle, trab_dir_numero, trab_dir_sector, trab_tel_fijo, trab_tel_movil, trab_fec_nacimiento, trab_genero, trab_jefe_familia, trab_ant_indigenas, trab_est_civil, trab_nacionalidad, trab_prev_salud, trab_prev_salud_d, trab_prev_social]);
            } else {
                alert("Se actualizara");
                tx.executeSql('UPDATE encuesta_trabajador SET trab_dir_calle=?,trab_dir_numero=?,trab_dir_sector=?,trab_tel_fijo=?,trab_tel_movil=?,trab_fec_nacimiento=?,trab_genero=?,trab_jefe_familia=?,trab_ant_indigenas=?,trab_est_civil=?,trab_nacionalidad=?,trab_prev_salud=?,trab_prev_salud_d=?,trab_prev_social=? WHERE encuesta_id=?'
                        , [trab_dir_calle, trab_dir_numero, trab_dir_sector, trab_tel_fijo, trab_tel_movil, trab_fec_nacimiento, trab_genero, trab_jefe_familia, trab_ant_indigenas, trab_est_civil, trab_nacionalidad, trab_prev_salud, trab_prev_salud_d, trab_prev_social, encuesta_id]);
            }
            location.href = "../plataforma.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;

        });

    } else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function llenar_encuesta_trabajador() {
    //localStorage.setItem('actual', 1);

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM encuesta_trabajador WHERE encuesta_id=?', [encuesta_id], function (tx, results) {
            if (results.rows.length > 0) {

                existe = 1;
                document.getElementById('trab_dir_calle').value = results.rows.item(0).trab_dir_calle;
                document.getElementById('trab_dir_numero').value = results.rows.item(0).trab_dir_numero;
                document.getElementById('trab_dir_sector').value = results.rows.item(0).trab_dir_sector;
                document.getElementById('trab_tel_fijo').value = results.rows.item(0).trab_tel_fijo;
                document.getElementById('trab_tel_movil').value = results.rows.item(0).trab_tel_movil;
                document.getElementById('trab_fec_nacimiento').value = results.rows.item(0).trab_fec_nacimiento;
                $('input[name=genero][value=' + results.rows.item(0).trab_genero + ']').prop("checked", true);
                $('input[name=jefe][value=' + results.rows.item(0).trab_jefe_familia + ']').prop("checked", true);
                $('input[name=indigena][value=' + results.rows.item(0).trab_ant_indigenas + ']').prop("checked", true);
                $('input[name=e_civil][value=' + results.rows.item(0).trab_est_civil + ']').prop("checked", true);
                $('input[name=nacionalidad][value=' + results.rows.item(0).trab_nacionalidad + ']').prop("checked", true);
                $('input[name=p_salud][value=' + results.rows.item(0).trab_prev_salud + ']').prop("checked", true);
                document.getElementById('trab_prev_salud_d').value = results.rows.item(0).trab_prev_salud_d;
                document.getElementById('trab_prev_social').value = results.rows.item(0).trab_prev_social;
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
