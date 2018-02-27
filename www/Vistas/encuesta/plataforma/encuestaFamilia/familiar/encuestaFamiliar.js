

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');
var encuesta_familia_id = getp('encuesta_familia_id');
var existe = 0;

$(document).ready(function(){
    
   $("#gotoplataforma").click(function () {
        window.location.href = "../../plataforma.html?filemp_id="+ filemp_id +"&encuesta_id=" + encuesta_id;
    }); 
});


function crearTablas() {
    db.transaction(function (tx) {

        tx.executeSql('CREATE TABLE IF NOT EXISTS familia_datos(famiia_datos_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_familia_id INTEGER NOT NULL, fam_jefe_familia INTEGER NOT NULL, fam_es_carga INTEGER NOT NULL, fam_parentezco INTEGER NOT NULL, fam_ant_indigena INTEGER NOT NULL, fam_padre_profesor INTEGER NOT NULL, fam_cond_perm TEXT NULL, fam_ges TEXT NULL, fam_usa_prevsalud INTEGER NOT NULL, fam_trabajando INTEGER NOT NULL, fam_sit_contrato INTEGER NULL, fam_sit_nolaboral INTEGER NULL, fam_det_pension TEXT NULL, fam_meses_cesante INTEGER NULL, fam_inicio_activ INTEGER NOT NULL, fam_matriculado INTEGER NOT NULL, fam_nivel_educ INTEGER NOT NULL, fam_tipo_est INTEGER NULL, fam_ult_curso INTEGER NULL, fam_fin_estudios INTEGER NULL, fam_rindio_psu INTEGER NULL, fam_anio_psu INTEGER NULL, fam_puntaje_psu INTEGER NULL, fam_ult_promedio INTEGER NULL, fam_fin_educsup INTEGER NULL, fam_ibruto_mes1 INTEGER NULL, fam_ibruto_mes2 INTEGER NULL, fam_ibruto_mes3 INTEGER NULL, fam_iliquido_mes1 INTEGER NULL, fam_iliquido_mes2 INTEGER NULL, fam_iliquido_mes3 INTEGER NULL, fam_rec_pension INTEGER NOT NULL, fam_pension_mes1 INTEGER NULL, fam_pension_mes2 INTEGER NULL, fam_pension_mes3 INTEGER NULL, fam_rec_otros INTEGER NOT NULL, fam_otros_mes1 INTEGER NULL, fam_otros_mes2 INTEGER NULL, fam_otros_mes3 INTEGER NULL)');

    });
}

function guardar_familia_datos() {
    //id_ultimo('SELECT * FROM encuesta_familia;',function (id_familiar){
    db.transaction(function (tx) {
        var fam_jefe_familia = capturar("fam_jefe_familia"); //document.getElementById('fam_jefe_familia').value;
        var fam_es_carga = capturar("fam_es_carga"); //document.getElementById('fam_es_carga').value;
        var fam_parentezco = capturar("fam_parentezco"); //((document.getElementById('fam_parentezco').value;
        var fam_ant_indigena = capturar("fam_ant_indigena");  //document.getElementById('fam_ant_indigena').value;
        var fam_padre_profesor = capturar("fam_padre_profesor"); //document.getElementById('fam_padre_profesor').value;
        var fam_cond_perm = capturar_checkbox("fam_cond_perm");  //document.getElementById('fam_cond_perm').value;
        var fam_ges = document.getElementById('fam_ges').value;
        var fam_usa_prevsalud = capturar("fam_usa_prevsalud"); //document.getElementById('fam_usa_prevsalud').value;
        var fam_trabajando = capturar("fam_trabajando"); //document.getElementById('fam_trabajando').value;
        var fam_sit_contrato = capturar("fam_sit_contrato"); //document.getElementById('fam_sit_contrato').value;
        var fam_sit_nolaboral = capturar("fam_sit_nolaboral"); //document.getElementById('fam_sit_nolaboral').value;
        var fam_det_pension = capturar("fam_det_pension"); //document.getElementById('fam_det_pension').value;
        var fam_meses_cesante = document.getElementById('fam_meses_cesante').value;
        var fam_inicio_activ = capturar("fam_inicio_activ"); //document.getElementById('fam_inicio_activ').value;
        var fam_matriculado = capturar("fam_matriculado"); //document.getElementById('fam_matriculado').value;
        var fam_nivel_educ = capturar("fam_nivel_educ");  //document.getElementById('fam_nivel_educ').value;
        var fam_tipo_est = capturar("fam_tipo_est");  //document.getElementById('fam_tipo_est').value;
        var fam_ult_curso = capturar("fam_ult_curso"); //document.getElementById('fam_ult_curso').value;
        var fam_fin_estudios = document.getElementById('fam_fin_estudios').value;
        var fam_rindio_psu = document.getElementById('fam_rindio_psu').value;
        var fam_anio_psu = document.getElementById('fam_anio_psu').value;
        var fam_puntaje_psu = document.getElementById('fam_puntaje_psu').value;
        var fam_ult_promedio = document.getElementById('fam_ult_promedio').value;
        var fam_fin_educsup = capturar("fam_fin_educsup"); //   document.getElementById('fam_fin_educsup').value;
        var fam_ibruto_mes1 = document.getElementById('fam_ibruto_mes1').value;
        var fam_ibruto_mes2 = document.getElementById('fam_ibruto_mes2').value;
        var fam_ibruto_mes3 = document.getElementById('fam_ibruto_mes3').value;
        var fam_iliquido_mes1 = document.getElementById('fam_iliquido_mes1').value;
        var fam_iliquido_mes2 = document.getElementById('fam_iliquido_mes2').value;
        var fam_iliquido_mes3 = document.getElementById('fam_iliquido_mes3').value;
        var fam_rec_pension = capturar("fam_rec_pension"); //document.getElementById('fam_rec_pension').value;
        var fam_pension_mes1 = document.getElementById('fam_pension_mes1').value;
        var fam_pension_mes2 = document.getElementById('fam_pension_mes2').value;
        var fam_pension_mes3 = document.getElementById('fam_pension_mes3').value;
        var fam_rec_otros = capturar("fam_rec_otros"); //document.getElementById('fam_rec_otros').value;
        var fam_otros_mes1 = document.getElementById('fam_otros_mes1').value;
        var fam_otros_mes2 = document.getElementById('fam_otros_mes2').value;
        var fam_otros_mes3 = document.getElementById('fam_otros_mes3').value;

        if (existe === 0) {
            tx.executeSql('INSERT INTO familia_datos(encuesta_familia_id,fam_jefe_familia,fam_es_carga,fam_parentezco,fam_ant_indigena,fam_padre_profesor,fam_cond_perm,fam_ges,fam_usa_prevsalud,fam_trabajando,fam_sit_contrato,fam_sit_nolaboral,fam_det_pension,fam_meses_cesante,fam_inicio_activ,fam_matriculado,fam_nivel_educ,fam_tipo_est,fam_ult_curso,fam_fin_estudios,fam_rindio_psu,fam_anio_psu,fam_puntaje_psu,fam_ult_promedio,fam_fin_educsup,fam_ibruto_mes1,fam_ibruto_mes2,fam_ibruto_mes3,fam_iliquido_mes1,fam_iliquido_mes2,fam_iliquido_mes3,fam_rec_pension,fam_pension_mes1,fam_pension_mes2,fam_pension_mes3,fam_rec_otros,fam_otros_mes1,fam_otros_mes2,fam_otros_mes3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
                    , [encuesta_familia_id, fam_jefe_familia, fam_es_carga, fam_parentezco, fam_ant_indigena, fam_padre_profesor, fam_cond_perm, fam_ges, fam_usa_prevsalud, fam_trabajando, fam_sit_contrato, fam_sit_nolaboral, fam_det_pension, fam_meses_cesante, fam_inicio_activ, fam_matriculado, fam_nivel_educ, fam_tipo_est, fam_ult_curso, fam_fin_estudios, fam_rindio_psu, fam_anio_psu, fam_puntaje_psu, fam_ult_promedio, fam_fin_educsup, fam_ibruto_mes1, fam_ibruto_mes2, fam_ibruto_mes3, fam_iliquido_mes1, fam_iliquido_mes2, fam_iliquido_mes3, fam_rec_pension, fam_pension_mes1, fam_pension_mes2, fam_pension_mes3, fam_rec_otros, fam_otros_mes1, fam_otros_mes2, fam_otros_mes3]);
        } else {


            tx.executeSql('UPDATE familia_datos SET fam_jefe_familia=?,fam_es_carga=?,fam_parentezco=?,fam_ant_indigena=?,fam_padre_profesor=?,fam_cond_perm=?,fam_ges=?,fam_usa_prevsalud=?,fam_trabajando=?,fam_sit_contrato=?,fam_sit_nolaboral=?,fam_det_pension=?,fam_meses_cesante=?,fam_inicio_activ=?,fam_matriculado=?,fam_nivel_educ=?,fam_tipo_est=?,fam_ult_curso=?,fam_fin_estudios=?,fam_rindio_psu=?,fam_anio_psu=?,fam_puntaje_psu=?,fam_ult_promedio=?,fam_fin_educsup=?,fam_ibruto_mes1=?,fam_ibruto_mes2=?,fam_ibruto_mes3=?,fam_iliquido_mes1=?,fam_iliquido_mes2=?,fam_iliquido_mes3=?,fam_rec_pension=?,fam_pension_mes1=?,fam_pension_mes2=?,fam_pension_mes3=?,fam_rec_otros=?,fam_otros_mes1=?,fam_otros_mes2=?,fam_otros_mes3=? WHERE encuesta_familia_id=?'
                    , [fam_jefe_familia, fam_es_carga, fam_parentezco, fam_ant_indigena, fam_padre_profesor, fam_cond_perm, fam_ges, fam_usa_prevsalud, fam_trabajando, fam_sit_contrato, fam_sit_nolaboral, fam_det_pension, fam_meses_cesante, fam_inicio_activ, fam_matriculado, fam_nivel_educ, fam_tipo_est, fam_ult_curso, fam_fin_estudios, fam_rindio_psu, fam_anio_psu, fam_puntaje_psu, fam_ult_promedio, fam_fin_educsup, fam_ibruto_mes1, fam_ibruto_mes2, fam_ibruto_mes3, fam_iliquido_mes1, fam_iliquido_mes2, fam_iliquido_mes3, fam_rec_pension, fam_pension_mes1, fam_pension_mes2, fam_pension_mes3, fam_rec_otros, fam_otros_mes1, fam_otros_mes2, fam_otros_mes3, encuesta_familia_id]);
        }
    });
    window.location.href = "../encuestaFamilia.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
}


function llenar_familia_datos() {
    //localStorage.setItem('actual', 1);

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM familia_datos WHERE encuesta_familia_id=?', [encuesta_familia_id], function (tx, results) {

            if (results.rows.length <1) {
                existe = 0;

            } else {

                existe = 1;


                $('input[name=fam_jefe_familia][value=' + results.rows.item(0).fam_jefe_familia + ']').prop("checked", true);
                $('input[name=fam_es_carga][value=' + results.rows.item(0).fam_es_carga + ']').prop("checked", true);
                $('input[name=fam_parentezco][value=' + results.rows.item(0).fam_parentezco + ']').prop("checked", true);
                $('input[name=fam_ant_indigena][value=' + results.rows.item(0).fam_ant_indigena + ']').prop("checked", true);
                $('input[name=fam_padre_profesor][value=' + results.rows.item(0).fam_padre_profesor + ']').prop("checked", true);

                /*
                 document.f_jefe.fam_jefe_familia.value = results.rows.item(0).fam_jefe_familia;
                 document.f_carga.fam_es_carga.value = results.rows.item(0).fam_es_carga;
                 document.f_paren.fam_parentezco.value = results.rows.item(0).fam_parentezco;
                 document.f_indige.fam_ant_indigena.value = results.rows.item(0).fam_ant_indigena;
                 document.f_prof.fam_padre_profesor.value = results.rows.item(0).fam_padre_profesor;
                 
                 */
                setear_checkbox('fam_cond_perm', results.rows.item(0).fam_cond_perm);
                document.getElementById('fam_ges').value = results.rows.item(0).fam_ges;
                $('input[name=fam_usa_prevsalud][value=' + results.rows.item(0).fam_usa_prevsalud + ']').prop("checked", true);
                $('input[name=fam_trabajando][value=' + results.rows.item(0).fam_trabajando + ']').prop("checked", true);
                $('input[name=fam_sit_contrato][value=' + results.rows.item(0).fam_sit_contrato + ']').prop("checked", true);
                $('input[name=fam_sit_nolaboral][value=' + results.rows.item(0).fam_sit_nolaboral + ']').prop("checked", true);
                $('input[name=fam_det_pension][value=' + results.rows.item(0).fam_det_pension + ']').prop("checked", true);

                /*
                 document.f_pre.fam_usa_prevsalud.value = results.rows.item(0).fam_usa_prevsalud;
                 document.f_mayor.fam_trabajando.value = results.rows.item(0).fam_trabajando;
                 document.f_contra.fam_sit_contrato.value = results.rows.item(0).fam_sit_contrato;
                 document.f_lab.fam_sit_nolaboral.value = results.rows.item(0).fam_sit_nolaboral;
                 document.f_nlab.fam_det_pension.value = results.rows.item(0).fam_det_pension;
                 
                 */
                document.getElementById('fam_meses_cesante').value = results.rows.item(0).fam_meses_cesante;

                $('input[name=fam_inicio_activ][value=' + results.rows.item(0).fam_inicio_activ + ']').prop("checked", true);
                $('input[name=fam_matriculado][value=' + results.rows.item(0).fam_matriculado + ']').prop("checked", true);
                $('input[name=fam_nivel_educ][value=' + results.rows.item(0).fam_nivel_educ + ']').prop("checked", true);
                $('input[name=fam_tipo_est][value=' + results.rows.item(0).fam_tipo_est + ']').prop("checked", true);
                $('input[name=fam_ult_curso][value=' + results.rows.item(0).fam_ult_curso + ']').prop("checked", true);

                /*
                 document.f_sii.fam_inicio_activ.value = results.rows.item(0).fam_inicio_activ;
                 document.f_matri.fam_matriculado.value = results.rows.item(0).fam_matriculado;
                 document.f_nivel.fam_nivel_educ.value = results.rows.item(0).fam_nivel_educ;
                 document.f_est.fam_tipo_est.value = results.rows.item(0).fam_tipo_est;
                 document.f_ult.fam_ult_curso.value = results.rows.item(0).fam_ult_curso;
                 */
                document.getElementById('fam_fin_estudios').value = results.rows.item(0).fam_fin_estudios;
                document.getElementById('fam_rindio_psu').value = results.rows.item(0).fam_rindio_psu;
                document.getElementById('fam_anio_psu').value = results.rows.item(0).fam_anio_psu;
                document.getElementById('fam_puntaje_psu').value = results.rows.item(0).fam_puntaje_psu;
                document.getElementById('fam_ult_promedio').value = results.rows.item(0).fam_ult_promedio;
                $('input[name=fam_fin_educsup][value=' + results.rows.item(0).fam_fin_educsup + ']').prop("checked", true);
                //document.f_fincar.fam_fin_educsup.value = results.rows.item(0).fam_fin_educsup;

                document.getElementById('fam_ibruto_mes1').value = results.rows.item(0).fam_ibruto_mes1;
                document.getElementById('fam_ibruto_mes2').value = results.rows.item(0).fam_ibruto_mes2;
                document.getElementById('fam_ibruto_mes3').value = results.rows.item(0).fam_ibruto_mes3;
                document.getElementById('fam_iliquido_mes1').value = results.rows.item(0).fam_iliquido_mes1;
                document.getElementById('fam_iliquido_mes2').value = results.rows.item(0).fam_iliquido_mes2;
                document.getElementById('fam_iliquido_mes3').value = results.rows.item(0).fam_iliquido_mes3;
                $('input[name=fam_rec_pension][value=' + results.rows.item(0).fam_rec_pension + ']').prop("checked", true);
                //document.f_recibe_pen.fam_rec_pension.value = results.rows.item(0).fam_rec_pension;
                document.getElementById('fam_pension_mes1').value = results.rows.item(0).fam_pension_mes1;
                document.getElementById('fam_pension_mes2').value = results.rows.item(0).fam_pension_mes2;
                document.getElementById('fam_pension_mes3').value = results.rows.item(0).fam_pension_mes3;
                $('input[name=fam_rec_otros][value=' + results.rows.item(0).fam_rec_otros + ']').prop("checked", true);
                //document.f_rec_otro.fam_rec_otros.value = results.rows.item(0).fam_rec_otros;
                document.getElementById('fam_otros_mes1').value = results.rows.item(0).fam_otros_mes1;
                document.getElementById('fam_otros_mes2').value = results.rows.item(0).fam_otros_mes2;
                document.getElementById('fam_otros_mes3').value = results.rows.item(0).fam_otros_mes3;
            }
        }, null);
    });
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