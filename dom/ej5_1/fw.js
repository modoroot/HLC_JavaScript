// Definimos un objeto que contiene las expresiones regulares para cada tipo de campo
const PATRONES = {
    date: /^\d{4}-\d{2}-\d{2}$/, // AAAA-MM-DD
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/,
    month: /^\d{4}-\d{2}$/, // AAAA-MM
    number: /^\d+$/,
    password: /^.{8,}$/, // 8 caracteres mínimo
    tel: /^\d{3} \d{3} \d{3}$/, // 555 555 555
    text: /^[a-zA-Z ]+$/, //Solamente texto
    time: /^\d{2}:\d{2}$/ // HH:MM
};

// Obtenemos los elementos del formulario
const form = document.getElementById('form');
const inputCampos = form.querySelectorAll('input');
const submitBtn = form.querySelector('button[type="submit"]');
const resetBtn = form.querySelector('button[type="reset"]');

// Añadimos manejadores de eventos a cada campo del formulario
inputCampos.forEach(inputCampo => {
    inputCampo.addEventListener('input', e => {
        // Obtenemos el valor del campo y el tipo
        const value = e.target.value;
        const type = e.target.type;

        // Verificamos si cumple con la expresión regular correspondiente
        const patron = PATRONES[type];
        const valido = patron.test(value);

        // Si el campo es válido, quitamos la clase error y mostramos un mensaje de éxito
        if (valido) {
            inputCampo.classList.remove('error');
            inputCampo.nextElementSibling.innerHTML = 'Válido';
        }
        // Si el campo es inválido, añadimos la clase error y mostramos un mensaje de error
        else {
            inputCampo.classList.add('error');
            inputCampo.nextElementSibling.innerHTML = 'Error: revisa lo introducido';
        }
        // Verificamos si todos los campos del formulario son válidos
        const formValido = inputCampos.every(inputCampo => !inputCampo.classList.contains('error'));

        // Si el formulario es válido, habilitamos el botón de enviar
        if (formValido) {
            submitBtn.disabled = false;
        }
        // Si el formulario no es válido, deshabilitamos el botón de enviar
        else {
            submitBtn.disabled = true;
        }
    });
});

// Añadimos un manejador de evento al botón de resetear para vaciar todos los campos del formulario y deshabilitar el botón de enviar
resetBtn.addEventListener('click', () => {
    inputCampos.forEach(inputCampo => {
        inputCampo.classList.remove('error');
        inputCampo.nextElementSibling.innerHTML = '';
    });
    submitBtn.disabled = true;
});