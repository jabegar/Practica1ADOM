productos = [
    { id: 1, nombre: 'Patata', precio: 1, imagen: 'patata.jpg'},
    { id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla.jpg' },
    { id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin.jpg' },
    { id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas.jpg' }
];

document.addEventListener('DOMContentLoaded', init);
var lista;

function init() {
    lista = document.getElementById('lista');

    productos.forEach(p => {
        var ul = document.createElement('ul');
        var img = document.createElement('img');
        var btn = document.createElement('button');

        ul.innerText = `${p.nombre}: ${p.precio}€`;
        ul.className = 'disabled';

        img.src = p.imagen;
        img.style.width = '10rem';
        ul.appendChild(img);

        btn.innerText = 'Habilitar';
        btn.onclick = disponible;
        ul.appendChild(btn);
        
        lista.appendChild(ul);
    });
}

function disponible() {
    var parent = this.parentElement;

    if (parent.className == 'disabled') {
        parent.className = 'enabled';
        this.innerText = 'Deshabilitar';
    }
    else {
    parent.className = 'disabled';
        this.innerText = 'Habilitar';
    }
}