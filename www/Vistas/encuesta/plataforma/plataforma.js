
var encuesta_id = getp('encuesta_id');
var filemp_id = getp('filemp_id');

$(document).ready(function () {


    /* Boton crear encuesta Trabajador */
    $("#crear_et").click(function () {
        window.location.href = "encuestaTrabajador/encuestaTrabajador.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
    /* Fin boton Crear encuesta Trabajador */
    /*---------------------------------------------------*/
    /* Boton crear encuesta Educacion */
    $("#crear_ee").click(function () {
        window.location.href = "encuestaEducacion/encuestaEducacion.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
    /* Fin boton Crear encuesta Educacion */
    /*---------------------------------------------------*/
    /* Boton crear encuesta Salud */
    $("#crear_es").click(function () {
        window.location.href = "encuestaSalud/encuestaSalud.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
    /* Fin boton Crear encuesta Salud */

    /*---------------------------------------------------*/
    /* Boton crear encuesta Vivienda */
    $("#crear_ev").click(function () {
        window.location.href = "encuestaVivienda/encuestaVivienda.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
    /* Fin boton Crear encuesta Vivienda */

    /*---------------------------------------------------*/
    /* Boton crear encuesta Vivienda */
    $("#crear_ef").click(function () {
        window.location.href = "encuestaFamilia/encuestaFamilia.html?filemp_id=" + filemp_id + "&encuesta_id=" + encuesta_id;
    });
    /* Fin boton Crear encuesta Vivienda */






});

function crearTablas() {
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    db.transaction(function (tx) {

        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_trabajador (encuesta_trabajador_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL, trab_dir_calle TEXT NOT NULL, trab_dir_numero INTEGER NOT NULL, trab_dir_sector TEXT NULL, trab_tel_fijo TEXT NULL, trab_tel_movil TEXT NOT NULL, trab_fec_nacimiento INTEGER NOT NULL, trab_genero INTEGER NOT NULL, trab_jefe_familia INTEGER NOT NULL, trab_ant_indigenas INTEGER NOT NULL, trab_est_civil INTEGER NOT NULL, trab_nacionalidad INTEGER NOT NULL, trab_prev_salud INTEGER NOT NULL, trab_prev_salud_d TEXT NOT NULL, trab_prev_social TEXT NOT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_educacion(encuesta_educacion_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL,edu_nivel_esc INTEGER NOT NULL, edu_tipo_est INTEGER NULL, edu_ult_curso INTEGER NULL, edu_anio_egreso INTEGER NULL, edu_estudiando INTEGER NOT NULL, edu_becas TEXT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_salud(encuesta_salud_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, sad_cont_menores INTEGER NOT NULL, sad_cons_drogas INTEGER NOT NULL, sad_cons_drogas_d TEXT NULL, sad_pat_ges TEXT NULL, sad_usa_prevision INTEGER NOT NULL, sad_cond_permanente TEXT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_vivienda (encuesta_vivienda_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, viv_tenencia INTEGER NOT NULL, viv_sitio INTEGER NOT NULL, viv_post_subsidio INTEGER NOT NULL, viv_libreta INTEGER NOT NULL, viv_libreta_anio INTEGER NOT NULL, viv_monto_ahorro INTEGER NOT NULL, viv_fam_ocupante INTEGER NOT NULL, viv_num_personas INTEGER NOT NULL, viv_num_dormitorios INTEGER NOT NULL, viv_prov_agua INTEGER NOT NULL, viv_sub_agua INTEGER NOT NULL, viv_ener_electrica INTEGER NOT NULL, viv_elim_excretas INTEGER NOT NULL, viv_reg_hogares INTEGER NOT NULL, viv_tramo_grupo INTEGER NOT NULL, viv_ben_subsidio TEXT NOT NULL, viv_otro_subsidio TEXT NOT NULL)');
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_familia(encuesta_familia_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, fam_run INTEGER NOT NULL, fam_dv TEXT NOT NULL, fam_nombres TEXT NOT NULL, fam_apellido_p TEXT NOT NULL,fam_apellido_m TEXT NOT NULL, fam_fec_nacimiento INTEGER NOT NULL, fam_genero INTEGER NOT NULL, fam_nac_chilena INTEGER NOT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS familia_datos(famiia_datos_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_familia_id INTEGER NOT NULL, fam_jefe_familia INTEGER NOT NULL, fam_es_carga INTEGER NOT NULL, fam_parentezco INTEGER NOT NULL, fam_ant_indigena INTEGER NOT NULL, fam_padre_profesor INTEGER NOT NULL, fam_cond_perm TEXT NULL, fam_ges TEXT NULL, fam_usa_prevsalud INTEGER NOT NULL, fam_trabajando INTEGER NOT NULL, fam_sit_contrato INTEGER NULL, fam_sit_nolaboral INTEGER NULL, fam_det_pension TEXT NULL, fam_meses_cesante INTEGER NULL, fam_inicio_activ INTEGER NOT NULL, fam_matriculado INTEGER NOT NULL, fam_nivel_educ INTEGER NOT NULL, fam_tipo_est INTEGER NULL, fam_ult_curso INTEGER NULL, fam_fin_estudios INTEGER NULL, fam_rindio_psu INTEGER NULL, fam_anio_psu INTEGER NULL, fam_puntaje_psu INTEGER NULL, fam_ult_promedio INTEGER NULL, fam_fin_educsup INTEGER NULL, fam_ibruto_mes1 INTEGER NULL, fam_ibruto_mes2 INTEGER NULL, fam_ibruto_mes3 INTEGER NULL, fam_iliquido_mes1 INTEGER NULL, fam_iliquido_mes2 INTEGER NULL, fam_iliquido_mes3 INTEGER NULL, fam_rec_pension INTEGER NOT NULL, fam_pension_mes1 INTEGER NULL, fam_pension_mes2 INTEGER NULL, fam_pension_mes3 INTEGER NULL, fam_rec_otros INTEGER NOT NULL, fam_otros_mes1 INTEGER NULL, fam_otros_mes2 INTEGER NULL, fam_otros_mes3 INTEGER NULL)');
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