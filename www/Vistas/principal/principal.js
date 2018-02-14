$(document).ready(function () {

    if (sessionStorage.getItem('tipo') === '1') {
        $('#saludar').append("<strong>" + localStorage.getItem('Nombre') + " " + localStorage.getItem('Apellido') + "</strong>");
    } else {
        $('#saludar').append("<strong>" + sessionStorage.getItem('Nombre') + " " + sessionStorage.getItem('Apellido') + "</strong>");

    }

}); 