// Crea una función que cuando la página esté cargada (puede hacer uso de window.onload):
// - Cambie el valor de la ciudad a Sevilla.
// - Los gastos de envío cambien su valor a 3€.
// - La fecha de envío sea el día actual (haz uso de las funciones de fecha).
// Modifícalo para que la información a cambiar sea solicitada al usuario (haciendo uso de prompts)

document.addEventListener('DOMContentLoaded', init);

function init() {
    var ciudad = document.getElementById('ciudad');
    var textCiudad = prompt('Escribe tu ciudad');
    ciudad.innerHTML = textCiudad;
    
    var gastos = document.getElementById('gastos');
    var textGastos = prompt('Escribe los gastos de envío');
    gastos.innerHTML = textGastos + '€';

    var fecha = document.getElementById('fecha');
    fecha.innerHTML = new Date()
}