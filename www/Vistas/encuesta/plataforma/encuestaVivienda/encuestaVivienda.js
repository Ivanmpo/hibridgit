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
 
 tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_vivienda(encuesta_vivienda_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, viv_tenencia INTEGER NOT NULL, viv_sitio INTEGER NOT NULL, viv_post_subsidio INTEGER NOT NULL, viv_libreta INTEGER NOT NULL, viv_libreta_anio INTEGER NOT NULL, viv_monto_ahorro INTEGER NOT NULL, viv_fam_ocupante INTEGER NOT NULL, viv_num_personas INTEGER NOT NULL, viv_num_dormitorios INTEGER NOT NULL, viv_prov_agua INTEGER NOT NULL, viv_sub_agua INTEGER NOT NULL, viv_ener_electrica INTEGER NOT NULL, viv_elim_excretas INTEGER NOT NULL, viv_reg_hogares INTEGER NOT NULL, viv_tramo_grupo INTEGER NOT NULL, viv_ben_subsidio TEXT NOT NULL, viv_otro_subsidio TEXT NOT NULL)');
 });
 }
 */

function guardar_encuesta_vivienda() {
    if (esValido()) {
        db.transaction(function (tx) {
            var viv_tenencia = capturar("viv_tenencia"); //document.getElementById('viv_tenencia').value;
            var viv_sitio = capturar("sit_tenencia"); //document.getElementById('viv_sitio').value;
            var viv_post_subsidio = capturar("p_subsidio"); //document.getElementById('viv_post_subsidio').value;
            var viv_libreta = capturar("libreta"); //document.getElementById('viv_libreta').value;
            var viv_libreta_anio = document.getElementById('viv_libreta_anio').value;
            var viv_monto_ahorro = document.getElementById('viv_monto_ahorro').value;
            var viv_fam_ocupante = capturar("ocupante"); // document.getElementById('viv_fam_ocupante').value;
            var viv_num_personas = document.getElementById('viv_num_personas').value;
            var viv_num_dormitorios = document.getElementById('viv_num_dormitorios').value;
            var viv_prov_agua = capturar("agua"); //document.getElementById('viv_prov_agua').value;
            var viv_sub_agua = capturar("s_agua"); //document.getElementById('viv_sub_agua').value;
            var viv_ener_electrica = capturar("energia"); //document.getElementById('viv_ener_electrica').value;
            var viv_elim_excretas = capturar("excretas"); //document.getElementById('viv_elim_excretas').value;
            var viv_reg_hogares = capturar("registro_hogares"); //document.getElementById('viv_reg_hogares').value;
            var viv_tramo_grupo = capturar("e_encuesta"); //document.getElementById('viv_tramo_grupo').value;
            var viv_ben_subsidio = capturar("benef_sub"); //document.getElementById('viv_ben_subsidio').value;
            var viv_otro_subsidio = capturar_checkbox("bonos"); //document.getElementById('viv_otro_subsidio').value;

            if (existe === 0) {
                tx.executeSql('INSERT INTO encuesta_vivienda (encuesta_id,viv_tenencia,viv_sitio,viv_post_subsidio,viv_libreta,viv_libreta_anio,viv_monto_ahorro,viv_fam_ocupante,viv_num_personas,viv_num_dormitorios,viv_prov_agua,viv_sub_agua,viv_ener_electrica,viv_elim_excretas,viv_reg_hogares,viv_tramo_grupo,viv_ben_subsidio,viv_otro_subsidio) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [encuesta_id, viv_tenencia, viv_sitio, viv_post_subsidio, viv_libreta, viv_libreta_anio, viv_monto_ahorro, viv_fam_ocupante, viv_num_personas, viv_num_dormitorios, viv_prov_agua, viv_sub_agua, viv_ener_electrica, viv_elim_excretas, viv_reg_hogares, viv_tramo_grupo, viv_ben_subsidio, viv_otro_subsidio]);

            } else {
                alert("Se actualizara");
                tx.executeSql('UPDATE encuesta_vivienda SET viv_tenencia=?,viv_sitio=?,viv_post_subsidio=?,viv_libreta=?,viv_libreta_anio=?,viv_monto_ahorro=?,viv_fam_ocupante=?,viv_num_personas=?,viv_num_dormitorios=?,viv_prov_agua=?,viv_sub_agua=?,viv_ener_electrica=?,viv_elim_excretas=?,viv_reg_hogares=?,viv_tramo_grupo=?,viv_ben_subsidio=?,viv_otro_subsidio=? WHERE encuesta_id=?'
                        , [viv_tenencia, viv_sitio, viv_post_subsidio, viv_libreta, viv_libreta_anio, viv_monto_ahorro, viv_fam_ocupante, viv_num_personas, viv_num_dormitorios, viv_prov_agua, viv_sub_agua, viv_ener_electrica, viv_elim_excretas, viv_reg_hogares, viv_tramo_grupo, viv_ben_subsidio, viv_otro_subsidio, encuesta_id]);
            }
            location.href = "../plataforma.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;

        });
    } else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function llenar_encuesta_vivienda() {
    //localStorage.setItem('actual', 1);

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM encuesta_vivienda WHERE encuesta_id=?', [encuesta_id], function (tx, results) {
            if (results.rows.length < 1) {
                existe = 0;

            } else {
                existe = 1;

                $('input[name=viv_tenencia][value=' + results.rows.item(0).viv_tenencia + ']').prop("checked", true);
                $('input[name=sit_tenencia][value=' + results.rows.item(0).viv_sitio + ']').prop("checked", true);
                $('input[name=p_subsidio][value=' + results.rows.item(0).viv_post_subsidio + ']').prop("checked", true);
                $('input[name=libreta][value=' + results.rows.item(0).viv_libreta + ']').prop("checked", true);
                /*
                 document.v_ten.viv_tenencia.value = results.rows.item(0).viv_tenencia;
                 document.s_ten.sit_tenencia.value = results.rows.item(0).viv_sitio;
                 document.p_sub.p_subsidio.value = results.rows.item(0).viv_post_subsidio;
                 document.t_lib.libreta.value = results.rows.item(0).viv_libreta;
                 */
                document.getElementById('viv_libreta_anio').value = results.rows.item(0).viv_libreta_anio;
                document.getElementById('viv_monto_ahorro').value = results.rows.item(0).viv_monto_ahorro;
                $('input[name=ocupante][value=' + results.rows.item(0).viv_fam_ocupante + ']').prop("checked", true);
//            document.f_ocu.ocupante.value = results.rows.item(0).viv_fam_ocupante;
                document.getElementById('viv_num_personas').value = results.rows.item(0).viv_num_personas;
                document.getElementById('viv_num_dormitorios').value = results.rows.item(0).viv_num_dormitorios;
                $('input[name=agua][value=' + results.rows.item(0).viv_prov_agua + ']').prop("checked", true);
                $('input[name=s_agua][value=' + results.rows.item(0).viv_sub_agua + ']').prop("checked", true);
                $('input[name=energia][value=' + results.rows.item(0).viv_ener_electrica + ']').prop("checked", true);
                $('input[name=excretas][value=' + results.rows.item(0).viv_elim_excretas + ']').prop("checked", true);
                $('input[name=registro_hogares][value=' + results.rows.item(0).viv_reg_hogares + ']').prop("checked", true);
                $('input[name=e_encuesta][value=' + results.rows.item(0).viv_tramo_grupo + ']').prop("checked", true);
                $('input[name=benef_sub][value=' + results.rows.item(0).viv_ben_subsidio + ']').prop("checked", true);

//            document.v_agua.agua.value = results.rows.item(0).viv_prov_agua;
//            document.s_agu.s_agua.value = results.rows.item(0).viv_sub_agua;
//            document.v_ene.energia.value = results.rows.item(0).viv_ener_electrica;
//            document.v_exc.excretas.value = results.rows.item(0).viv_elim_excretas;
//            document.r_hog.registro_hogares.value = results.rows.item(0).viv_reg_hogares;
//            document.e_enc.e_encuesta.value = results.rows.item(0).viv_tramo_grupo;
//            document.v_ben.benef_sub.value = results.rows.item(0).viv_ben_subsidio;
                setear_checkbox("bonos", results.rows.item(0).viv_otro_subsidio);
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