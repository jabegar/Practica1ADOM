// Modificando el ejercicio anterior. Tendremos dos Arrays: ciudades_gratis (Sevilla, Madrid,
// Valencia, Barcelona) y ciudades_gastos(Cantabria, Pontevedra, Toledo, Segovia).
// Se añade las siguientes condiciones:
// - Si la ciudad que indica el usuario está en el array ciudades_gastos se preguntará por los gastos de envío, y se añade a la etiqueta junto a la fecha.
// - Si la ciudad que indica el usuario está en el array ciudades_gratis se añadirá a la etiqueta un mensaje diciendo que los gastos son gratuitos y se añade la fecha.
// - Si la ciudad no se encuentra en ninguno de los arrays, se añadirá un mensaje a la etiqueta diciendo que no se pueden realizar envíos y se oculta la etiqueta de la fecha de envío

document.addEventListener('DOMContentLoaded', init);

var ciudades_gratis = ['Sevilla', 'Madrid', 'Valencia', 'Barcelona'];
var ciudades_gastos = ['Cantabria', 'Pontevedra', 'Toledo', 'Segovia'];

function init() {
    var ciudad = document.getElementById('ciudad');
    var textCiudad = prompt('Escribe tu ciudad');
    ciudad.innerHTML = textCiudad;

    
    var gastos = document.getElementById('gastos');
    var fecha = document.getElementById('fecha');

    if (ciudades_gratis.includes(textCiudad)) {
        gastos.innerHTML = 'Los gastos son gratuitos';
        fecha.innerHTML = new Date()
    }
    else if (ciudades_gastos.includes(textCiudad)) {
        var textGastos = prompt('Escribe los gastos de envío');
        gastos.innerHTML = textGastos + '€';
        fecha.innerHTML = new Date()
    }
    else {
        gastos.innerHTML = 'No se pueden realizar envíos a esta ciudad';
        fecha = document.getElementsByTagName('h1')[0];
        fecha.style.display = 'none';
    }

}