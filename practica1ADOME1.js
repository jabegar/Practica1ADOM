document.addEventListener("DOMContentLoaded", init)

function init() {
    // 1. Dado el siguiente HTML, realiza un script JS con lo siguiente:
    // 1.1. Muestra por consola el título, tal y como está y todo en mayúsculas.
    var title = document.title;
    console.log(title);
    console.log(title.toUpperCase());
    // 1.2. Cambia el nombre a los input, indicando tu nombre y tu primer apellido.
    var nombre = document.getElementById("nombre");
    nombre.value = "Jesús";
    var apellido = document.getElementById("apellido");
    apellido.value = "Abellán";
    // 1.3. Añade un texto a la etiqueta <p> saludando. Por ejemplo: Hola Francisco Alarcón.
    var saludo = document.getElementById('saludo');
    saludo.innerText = `Hola ${nombre.value} ${apellido.value}`;
    // 1.4. Añade una etiqueta <p> justo debajo de la etiqueta de id saludo con el texto ¿Qué
    // tal estás?
    var pregunta = document.createElement('p');
    pregunta.innerText = '¿Qué tal estás?'
    document.body.appendChild(pregunta)
    // 1.5. Cambia el texto del label apellido a ‘Apellidos:’ (haciendo uso de querySelector())
    var labelApellido = document.querySelector('label[for="apellido"]')
    labelApellido.innerText = "Apellidos:"
}