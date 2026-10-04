// Tarea 6.1 - Práctica de JavaScript
// Variables, tipos de datos y salida de información

let nombre = "Ernie";
let edad = 31;
let estudiante = true;

console.log("Mi nombre es:", nombre);
console.log("Mi edad es:", edad);
console.log("Soy estudiante:", estudiante);

// Arreglo
let tecnologias = ["HTML", "CSS", "Bootstrap", "JavaScript"];

console.log("Tecnologías aprendidas:", tecnologias);

// Objeto
let proyecto = {
    nombre: "Mi Portafolio",
    lenguaje: "JavaScript",
    completado: true
};

console.log("Información del proyecto:", proyecto);

// Estructura condicional
let calificacion = 95;

if (calificacion >= 90) {
    console.log("Resultado: Excelente");
} else if (calificacion >= 70) {
    console.log("Resultado: Aprobado");
} else {
    console.log("Resultado: Necesita mejorar");
}

// Bucles o loops

// Bucle for - recorre el arreglo de tecnologías
for (let i = 0; i < tecnologias.length; i++) {
    console.log("Tecnología:", tecnologias[i]);
}

// Bucle while
let numero = 1;

while (numero <= 3) {
    console.log("While número:", numero);
    numero++;
}

// Bucle do...while
let contador = 1;

do {
    console.log("Do While número:", contador);
    contador++;
} while (contador <= 3);

// Función
function saludar(nombrePersona) {
    return "Hola " + nombrePersona + ", bienvenido a Mi Portafolio";
}

// Prueba de la función
console.log(saludar("Ernie"));

// Alcance de variables (Scope)
let mensajeGlobal = "Esta es una variable global";

function mostrarAlcance() {
    let mensajeLocal = "Esta es una variable local";

    console.log(mensajeGlobal);
    console.log(mensajeLocal);
}

// Prueba del alcance
mostrarAlcance();

// Clausura (Closure)
function crearContador() {
    let cuenta = 0;

    return function () {
        cuenta++;
        return cuenta;
    };
}

// Prueba de la clausura
let miContador = crearContador();

console.log("Contador:", miContador());
console.log("Contador:", miContador());
console.log("Contador:", miContador());