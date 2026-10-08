document.addEventListener('DOMContentLoaded', init);

var listaCompra;

function init () {
    listaCompra = document.getElementById('listaCompra');
}

function anadir() {
    var producto = prompt('¿Qué producto quiere añadir?');

    var ul = document.createElement('ul');
    ul.innerText = producto;
    var button = document.createElement('button');
    button.innerText = 'Sí';
    button.onclick = comprar;
    ul.appendChild(button);

    var button2 = document.createElement('button');
    button2.innerText = 'No';
    button2.onclick = noComprar;
    ul.appendChild(button2);

    listaCompra.appendChild(ul);
}

function comprar() {
    var parent = this.parentElement;
    parent.style.color = 'green';
    parent.style.fontStyle = 'italic';
    parent.style.fontWeight = '';
}

function noComprar() {
    var parent = this.parentElement;
    parent.style.color = 'red';
    parent.style.fontStyle = '';
    parent.style.fontWeight = 'bold'
}