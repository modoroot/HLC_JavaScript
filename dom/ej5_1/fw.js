// Crea una función de validación para cada tipo de campo
function validateDate(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor sea una fecha válida
    if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
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

function validateEmail(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor sea una dirección de correo electrónico válida
    if (!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
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

function validateMonth(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor sea un mes válido (en el formato aaaa-mm)
    if (!value.match(/^\d{4}-\d{2}$/)) {
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

function validateNumber(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor sea un número
    if (!value.match(/^\d+$/)) {
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

function validatePassword(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor tenga al menos 8 caracteres
    if (value.length < 8) {
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

function validateTel(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor sea un número de teléfono válido (en el formato 555-555-5555)
    if (!value.match(/^\d{3}-\d{3}-\d{4}$/)) {
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

function validateText(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor no esté vacío
    if (value.trim() === '') {
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

function validateTime(input) {
    // Obtiene el valor del campo
    const value = input.value;

    // Valida que el valor sea una hora válida (en el formato hh:mm)
    if (!value.match(/^\d{2}:\d{2}$/)) {
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
const dateField = document.getElementById('date-field');
const emailField = document.getElementById('email-field');
const monthField = document.getElementById('month-field');
const numberField = document.getElementById('number-field');
const passwordField = document.getElementById('password-field');
const telField = document.getElementById('tel-field');
const textField = document.getElementById('text-field');
const timeField = document.getElementById('time-field');

// Obtiene los botones del formulario
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');

// Crea una función que valida todos los campos del formulario
function validateForm() {
    // Inicialmente, asume que el formulario está completamente válido
    let isValid = true;

    // Valida cada campo del formulario
    if (!validateDate(dateField)) isValid = false;
    if (!validateEmail(emailField)) isValid = false;
    if (!validateMonth(monthField)) isValid = false;
    if (!validateNumber(numberField)) isValid = false;
    if (!validatePassword(passwordField)) isValid = false;

    if (!validateTel(telField)) isValid = false;
    if (!validateText(textField)) isValid = false;
    if (!validateTime(timeField)) isValid = false;

    // Si el formulario es válido, habilita el botón de enviar
    if (isValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }

    // Devuelve el estado de validación del formulario
    return isValid;
}

// Valida el formulario cuando se carga la página
validateForm();

// Valida el formulario cada vez que se cambia el valor de un campo
dateField.addEventListener('input', validateForm);
emailField.addEventListener('input', validateForm);
monthField.addEventListener('input', validateForm);
numberField.addEventListener('input', validateForm);
passwordField.addEventListener('input', validateForm);
telField.addEventListener('input', validateForm);
textField.addEventListener('input', validateForm);
timeField.addEventListener('input', validateForm);

// Reinicia el formulario cuando se hace clic en el botón de reiniciar
resetBtn.addEventListener('click', () => {
    dateField.value = '';
    emailField.value = '';
    monthField.value = '';
    numberField.value = '';
    passwordField.value = '';
    telField.value = '';
    textField.value = '';
    timeField.value = '';

    validateForm();
});