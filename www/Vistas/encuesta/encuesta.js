

$(document).ready(function () {



    /* SELECTOR DE COMUNA */
    var lista = JSON.parse(localStorage.getItem('listaRegiones'));
    for (var region of lista) {
        $('#sel_region').append('<option value="' + region['region_id'] + '">' + region['codigo_region'] + " - " + region['nombre_region'] + '</option>');
    }



    /* SELECTOR DE REGION */
    $('#sel_region').change(function () {
        var region = $(this).val();
        // AJAX request
        // 
        // 
        var lista = JSON.parse(localStorage.getItem('listaComunas'));
        //// ACA QUEDE
        $('#sel_comuna').find('option').not(':first').remove();

        // Add options

        for (var comuna of lista) {
            if (comuna['region_id'] === region) {
                $('#sel_comuna').append('<option value="' + comuna['comuna_id'] + '">' + comuna['nombre_comuna'] + '</option>');
            }
        }
    });

    var listaEmp = JSON.parse(localStorage.getItem('empresas'));

    for (var filemp of listaEmp) {
        if(filemp['filial_empresa_id'] === getp('filemp_id')){
            $('#filial_rut').val(filemp['fil_rut']);
            $('#filial_nombre').val(filemp['fil_nombre']);
            $('#empresa_rut').val(filemp['emp_rut']);
            $('#empresa_nombre').val(filemp['emp_nombre']);
        }
    }


});
var db = openDatabase('mydb', '1.0', 'Test DB',  1024 * 1024);
var id_encuesta;

//alert(obtenerValorParametro('filemp_id'));



function baseDeDatos() {

    var msg, msg2;

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM encuesta', [], function (tx, results) {
            var len = results.rows.length, i;
            // msg = "<p>Found rows: " + len + "</p>";
            //document.querySelector('#status').innerHTML +=  msg;

            for (i = 0; i < len; i++) {
                //msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
                msg2 = "<p><b>" + results.rows.item(i).encuesta_id + "</b></p>";
                //alert(results.rows.item(i).log);
                //document.querySelector('#status').innerHTML +=  msg;
                document.querySelector('#status').innerHTML += msg2;
            }
        }, null);
    });
}
function crearTablas() {



    db.transaction(function (tx) {
       
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta (encuesta_id INTEGER PRIMARY KEY AUTOINCREMENT, filial_empresa_id INTEGER NOT NULL, enc_codigo TEXT NULL, enc_run INTEGER NOT NULL, enc_dv TEXT NOT NULL, enc_nombres TEXT NOT NULL, enc_apellido_p TEXT NOT NULL, enc_apellido_m TEXT NULL, comuna_id INTEGER NOT NULL, usuario_id INTEGER NOT NULL, enc_fecha INTEGER NOT NULL, enc_estado INTEGER NOT NULL )');
        /*tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_educacion(encuesta_educacion_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL,edu_nivel_esc INTEGER NOT NULL, edu_tipo_est INTEGER NULL, edu_ult_curso INTEGER NULL, edu_anio_egreso INTEGER NULL, edu_estudiando INTEGER NOT NULL, edu_becas TEXT NULL)');
         tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_salud(encuesta_salud_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, sad_cont_menores INTEGER NOT NULL, sad_cons_drogas INTEGER NOT NULL, sad_cons_drogas_d TEXT NULL, sad_pat_ges TEXT NULL, sad_usa_prevision INTEGER NOT NULL, sad_cond_permanente TEXT NULL)');
         tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_trabajador(encuesta_trabajador_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL, trab_dir_calle TEXT NOT NULL, trab_dir_numero INTEGER NOT NULL, trab_dir_sector TEXT NULL, trab_tel_fijo TEXT NULL, trab_tel_movil TEXT NOT NULL, trab_fec_nacimiento INTEGER NOT NULL, trab_genero INTEGER NOT NULL, trab_jefe_familia INTEGER NOT NULL, trab_ant_indigenas INTEGER NOT NULL, trab_est_civil INTEGER NOT NULL, trab_nacionalidad INTEGER NOT NULL, trab_prev_salud INTEGER NOT NULL, trab_prev_salud_d TEXT NOT NULL, trab_prev_social TEXT NOT NULL)');
         tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_vivienda(encuesta_vivienda_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, viv_tenencia INTEGER NOT NULL, viv_sitio INTEGER NOT NULL, viv_post_subsidio INTEGER NOT NULL, viv_libreta INTEGER NOT NULL, viv_libreta_anio INTEGER NOT NULL, viv_monto_ahorro INTEGER NOT NULL, viv_fam_ocupante INTEGER NOT NULL, viv_num_personas INTEGER NOT NULL, viv_num_dormitorios INTEGER NOT NULL, viv_prov_agua INTEGER NOT NULL, viv_sub_agua INTEGER NOT NULL, viv_ener_electrica INTEGER NOT NULL, viv_elim_excretas INTEGER NOT NULL, viv_reg_hogares INTEGER NOT NULL, viv_tramo_grupo INTEGER NOT NULL, viv_ben_subsidio TEXT NOT NULL, viv_otro_subsidio TEXT NOT NULL)');
         tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_familia(encuesta_familia_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, fam_run INTEGER NOT NULL, fam_dv TEXT NOT NULL, fam_nombres TEXT NOT NULL, fam_apellido_p TEXT NOT NULL,fam_apellido_m TEXT NOT NULL, fam_fec_nacimiento INTEGER NOT NULL, fam_genero INTEGER NOT NULL, fam_nac_chilena INTEGER NOT NULL)');
         tx.executeSql('CREATE TABLE IF NOT EXISTS familia_datos(famiia_datos_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_familia_id INTEGER NOT NULL, fam_jefe_familia INTEGER NOT NULL, fam_es_carga INTEGER NOT NULL, fam_parentezco INTEGER NOT NULL, fam_ant_indigena INTEGER NOT NULL, fam_padre_profesor INTEGER NOT NULL, fam_cond_perm TEXT NULL, fam_ges TEXT NULL, fam_usa_prevsalud INTEGER NOT NULL, fam_trabajando INTEGER NOT NULL, fam_sit_contrato INTEGER NULL, fam_sit_nolaboral INTEGER NULL, fam_det_pension TEXT NULL, fam_meses_cesante INTEGER NULL, fam_inicio_activ INTEGER NOT NULL, fam_matriculado INTEGER NOT NULL, fam_nivel_educ INTEGER NOT NULL, fam_tipo_est INTEGER NULL, fam_ult_curso INTEGER NULL, fam_fin_estudios INTEGER NULL, fam_rindio_psu INTEGER NULL, fam_anio_psu INTEGER NULL, fam_puntaje_psu INTEGER NULL, fam_ult_promedio INTEGER NULL, fam_fin_educsup INTEGER NULL, fam_ibruto_mes1 INTEGER NULL, fam_ibruto_mes2 INTEGER NULL, fam_ibruto_mes3 INTEGER NULL, fam_iliquido_mes1 INTEGER NULL, fam_iliquido_mes2 INTEGER NULL, fam_iliquido_mes3 INTEGER NULL, fam_rec_pension INTEGER NOT NULL, fam_pension_mes1 INTEGER NULL, fam_pension_mes2 INTEGER NULL, fam_pension_mes3 INTEGER NULL, fam_rec_otros INTEGER NOT NULL, fam_otros_mes1 INTEGER NULL, fam_otros_mes2 INTEGER NULL, fam_otros_mes3 INTEGER NULL)');
         */
    });

}


function crear_encuesta() {
    var filemp_id = getp('filemp_id');

    db.transaction(function (tx) {

        var filial_empresa_id = getp("filemp_id");
        var enc_codigo = "";
        var enc_run = document.getElementById('enc_run').value;
        var enc_dv = document.getElementById('enc_dv').value;
        var enc_nombres = document.getElementById('enc_nombres').value;
        var enc_apellido_p = document.getElementById('enc_apellido_p').value;
        var enc_apellido_m = document.getElementById('enc_apellido_m').value;
        var comuna_id = document.getElementById('sel_comuna').value;

        //var usuario_id = document.getElementById('usuario_id').value;
        var usuario_id = sessionStorage.getItem('user_id');
        var enc_fecha = "0";
        var enc_estado = "1";

        tx.executeSql('INSERT INTO encuesta(filial_empresa_id,enc_codigo,enc_run,enc_dv,enc_nombres,enc_apellido_p,enc_apellido_m,comuna_id,usuario_id,enc_fecha,enc_estado) VALUES(?,?,?,?,?,?,?,?,?,?,?)'
                , [filial_empresa_id, enc_codigo, enc_run, enc_dv, enc_nombres, enc_apellido_p, enc_apellido_m, comuna_id, usuario_id, enc_fecha, enc_estado]);
    });
    alert("Encuesta creada");
    window.location.href = "../listaencuestas/listaencuestas.html?filemp_id=" + filemp_id;
}



function guardar_encuesta() {

    db.transaction(function (tx) {
        var filial_empresa_id = document.getElementById('filial_empresa_id').value;
        var enc_codigo = document.getElementById('enc_codigo').value;
        var enc_run = document.getElementById('enc_run').value;
        var enc_dv = document.getElementById('enc_dv').value;
        var enc_nombres = document.getElementById('enc_nombres').value;
        var enc_apellido_p = document.getElementById('enc_apellido_p').value;
        var enc_apellido_m = document.getElementById('enc_apellido_m').value;
        var comuna_id = document.getElementById('comuna_id').value;
        var usuario_id = document.getElementById('usuario_id').value;
        var enc_fecha = document.getElementById('enc_fecha').value;
        var enc_estado = document.getElementById('enc_estado').value;
        //alert(id);
        tx.executeSql('UPDATE encuesta SET filial_empresa_id=?,enc_codigo=?,enc_run=?,enc_dv=?,enc_nombres=?,enc_apellido_p=?,enc_apellido_m=?,comuna_id=?,usuario_id=?,enc_fecha=?,enc_estado=? WHERE encuesta_id=?',
                [filial_empresa_id, enc_codigo, enc_run, enc_dv, enc_nombres, enc_apellido_p, enc_apellido_m, comuna_id, usuario_id, enc_fecha, enc_estado, id]);
    });

    //location.href="../Pages/pagina2.html";
    alert("GUARDO");
}



//$("#filial_empresa_id").val(getp("filemp_id"));


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








