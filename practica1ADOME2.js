// Crea una lista de 3 elementos, cuando se clique sobre ellos (onclick=) se mostrará la dirección de la web (href) en un input.
var inputText;
document.addEventListener("DOMContentLoaded", init);

function init() {
    inputText = document.getElementById("enlace");
}

function escribeEnlace(elemento) {
    inputText.value = elemento.getAttribute("href");
}