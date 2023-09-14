const button = document.getElementById("btn");
const colorContainer = document.getElementById("caja");

function changeColor() {
    let hexadecimalDigits = "0123456789ABCDEF"; // Cadena de caracters que contiene todos los caracteres hexadecimales
    let color = "#"; // "#" se utiliza para inicializar un codigo de color hexadecimal
    for (let i = 0; i < 6; i++) {
        color += hexadecimalDigits[Math.floor(Math.random() * 16)]; // Forma un codigo de color de 16 digitos hexadecimales
    }
    caja.style.backgroundColor = color; // Establece la variable "color" como color de fondo de "colorContainer"
}

button.addEventListener("click", changeColor); // Al presionar el boton, se ejecuta la funcion "changeColor"
