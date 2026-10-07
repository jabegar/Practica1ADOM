// Crea una lista de 3 elementos, cuando se clique sobre ellos (onclick=) se mostrará la dirección de la web (href) en un input.
var labels;
document.addEventListener("DOMContentLoaded", init);

function init() {
    labels = document.getElementsByClassName("cambiaColor");
}

function cambiaColor(color) {
    for (let i = 0; i < labels.length; i++) {
        const e = labels[i];
        e.style.color = color;
    }
}