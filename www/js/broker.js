/*===============================================================*/
/* ROMPE SESSIONES*/
if (!sessionStorage.getItem('tipo')) {
    if (sessionStorage.getItem('user_id') === null) {
        window.location.href = "../../index.html";
    }
}else{
    if (sessionStorage.getItem('tipo')!=="1" && sessionStorage.getItem('tipo')!=="2") {
        window.location.href = "../../index.html";
    }
}
/******************/
/*===============================================================*/