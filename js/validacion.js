(() => {
    "use strict";

    const formulario = document.getElementById("formularioRecomendacion");
    const mensaje = document.getElementById("mensajeFormulario");

    formulario.addEventListener("submit", (evento) => {
        // Todavía no tenemos un servidor que reciba los datos.
        evento.preventDefault();

        // Activar los estilos de validación de Bootstrap.
        formulario.classList.add("was-validated");

        // Limpiar el mensaje anterior.
        mensaje.hidden = true;
        mensaje.classList.remove("exito", "error");

        // Si algún campo no cumple las reglas, detener el proceso.
        if (!formulario.checkValidity()) {
            evento.stopPropagation();
            return;
        }

        // Los campos son válidos, pero aún no se guardan los datos.
        mensaje.textContent =
            "¡Recomendación válida! El envío real todavía no está implementado.";

        mensaje.classList.add("exito");
        mensaje.hidden = false;
    });
})();