oculto = true;

function mostrar() {
    var ocultaList = document.getElementsByClassName('ocultar');
    var mostrarMas = document.getElementsByTagName('span')[0];
    if (oculto) {
        Array.from(ocultaList).forEach(element => {
            element.style.display = '';
        });
        mostrarMas.innerText = 'Mostrar menos';
    }
    else {
        Array.from(ocultaList).forEach(element => {
            element.style.display = 'none';
        });
        mostrarMas.innerText = 'Mostrar más...';
    }
    oculto = !oculto;
}

function aumentarTamanio() {
    var cambioTamanio = document.getElementById('cambioTamanio');
    var tamanioActual = parseInt(window.getComputedStyle(cambioTamanio).fontSize);

    cambioTamanio.style.fontSize = tamanioActual + 1 + 'px';
}

function reducirTamanio() {
    var cambioTamanio = document.getElementById('cambioTamanio');
    var tamanioActual = parseInt(window.getComputedStyle(cambioTamanio).fontSize);

    cambioTamanio.style.fontSize = tamanioActual - 1 + 'px';
}