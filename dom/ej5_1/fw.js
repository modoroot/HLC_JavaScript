// Crea una función de validación para cada tipo de campo
function validarFecha(input) {
    // Obtiene el valor del campo
    const FECHA = input.value;
    // Valida que el valor sea una fecha válida
    if (!FECHA.match(/^\d{4}-\d{2}-\d{2}$/)) {
        // Si no es válido, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'Por favor ingresa una fecha válida';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }

    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

function validarEmail(input) {
    // Obtiene el valor del campo
    const EMAIL = input.value;
    // Valida que el valor sea una dirección de correo electrónico válida
    if (!EMAIL.match
    (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
        // Si no es válido, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'Por favor ingresa una dirección de correo electrónico válida';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }

    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

function validarMes(input) {
    // Obtiene el valor del campo
    const MES = input.value;
    // Valida que el valor sea un mes válido (FORMATO: aaaa-mm)
    if (!MES.match(/^\d{4}-\d{2}$/)) {
        // Si no es válido, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'Por favor ingresa un mes válido';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }
    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

function validarNumero(input) {
    // Obtiene el valor del campo
    const NUMERO = input.value;
    // Valida que el valor sea un número
    if (!NUMERO.match(/^\d+$/)) {
        // Si no es válido, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'Por favor ingresa un número válido';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }

    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

function validarPassword(input) {
    // Obtiene el valor del campo
    const PASSWORD = input.value;

    // Valida que el valor tenga al menos 8 caracteres
    if (PASSWORD.length < 8) {
        // Si no cumple con la longitud mínima, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }

    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

function validarTelefono(input) {
    // Obtiene el valor del campo
    const TELEFONO = input.value;
    // Valida que el valor sea un número de teléfono válido (FORMATO: 555 555 555)
    if (!TELEFONO.match(/^\d{3} \d{3} \d{3}$/)) {
        // Si no es válido, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'Por favor ingresa un número de teléfono válido';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }
    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

function validarTexto(input) {
    // Obtiene el valor del campo
    const TEXTO = input.value;
    // Valida que el valor no esté vacío
    if (TEXTO.trim() === '') {
        // Si está vacío, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'Este campo es obligatorio';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }
    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

function validarHora(input) {
    // Obtiene el valor del campo
    const HORA = input.value;
    // Valida que el valor sea una hora válida (en el formato hh:mm)
    if (!HORA.match(/^\d{2}:\d{2}$/)) {
        // Si no es válido, muestra un mensaje de error y cambia el color de fondo
        input.nextElementSibling.innerHTML = 'Por favor ingresa una hora válida';
        input.style.backgroundColor = '#ffcccc';
        return false;
    }
    // Si el valor es válido, oculta el mensaje de error y restaura el color de fondo
    input.nextElementSibling.innerHTML = '';
    input.style.backgroundColor = '#ffffff';
    return true;
}

// Obtiene todos los campos del formulario
const C_FECHA = document.getElementById('date-field');
const C_EMAIL = document.getElementById('email-field');
const C_MES = document.getElementById('month-field');
const C_NUMERO = document.getElementById('number-field');
const C_PASSWORD = document.getElementById('password-field');
const C_TELEFONO = document.getElementById('tel-field');
const C_TEXTO = document.getElementById('text-field');
const C_TIEMPO = document.getElementById('time-field');
// Obtiene los botones del formulario
const C_BOTON_CONFIRMAR = document.getElementById('submit-btn');
const C_REINICIAR = document.getElementById('reset-btn');

// Crea una función que valida todos los campos del formulario
function validarForm() {
    // Inicialmente, asume que el formulario está completamente válido
    let isValid = true;
    // Valida cada campo del formulario
    if (!validarFecha(C_FECHA)) isValid = false;
    if (!validarEmail(C_EMAIL)) isValid = false;
    if (!validarMes(C_MES)) isValid = false;
    if (!validarNumero(C_NUMERO)) isValid = false;
    if (!validarPassword(C_PASSWORD)) isValid = false;
    if (!validarTelefono(C_TELEFONO)) isValid = false;
    if (!validarTexto(C_TEXTO)) isValid = false;
    if (!validarHora(C_TIEMPO)) isValid = false;
    // Si el formulario es válido, habilita el botón de enviar
    if (isValid) {
        C_BOTON_CONFIRMAR.disabled = false;
    } else {
        C_BOTON_CONFIRMAR.disabled = true;
    }
    // Devuelve el estado de validación del formulario
    return isValid;
}

// Valida el formulario cuando se carga la página
validarForm();
// Valida el formulario cada vez que se cambia el valor de un campo
C_FECHA.addEventListener('input', validarForm);
C_EMAIL.addEventListener('input', validarForm);
C_MES.addEventListener('input', validarForm);
C_NUMERO.addEventListener('input', validarForm);
C_PASSWORD.addEventListener('input', validarForm);
C_TELEFONO.addEventListener('input', validarForm);
C_TEXTO.addEventListener('input', validarForm);
C_TIEMPO.addEventListener('input', validarForm);
// Reinicia el formulario cuando se hace clic en el botón de reiniciar
C_REINICIAR.addEventListener('click', () => {
    C_FECHA.value = '';
    C_EMAIL.value = '';
    C_MES.value = '';
    C_NUMERO.value = '';
    C_PASSWORD.value = '';
    C_TELEFONO.value = '';
    C_TEXTO.value = '';
    C_TIEMPO.value = '';
    validarForm();
});