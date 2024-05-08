function validarFormulario() {
    var gamertag = document.getElementById('gamertag').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var motivo = document.getElementById('motivo').value;
    var mensaje = document.getElementById('mensaje').value;

    if (gamertag === '' || email === '' || telefono === '' || motivo === '' || mensaje === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    return true;
}