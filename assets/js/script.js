// #2 Single Images
Fancybox.bind('[data-fancybox="single"]', {
    groupAttr: false,
});

//Validación formulario

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('name').value;
    if (usuario.length == 0) {
        alert('Falta tu nombre');
        return;
    }

    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('Falta tu email');
        return;
    }

    else if (email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) == null) {
        alert("Formato de email incorrecto");
        return;
    }

    var usuario = document.getElementById('message').value;
    if (usuario.length == 0) {
        alert('Falta tu mensaje');
        return;
    }

    alert('¡Gracias por contactarnos. Pronto nos comunicaremos!');

    this.submit();
}