// Simulador interactivo mejorado con funciones, objetos, arrays y funciones de orden superior

// Objeto que contiene la información del usuario
let usuario = {
    nombre: prompt("¡Bienvenido! Por favor, ingresa tu nombre:"),
    edad: parseInt(prompt("¿Cuál es tu edad?")),
    puntuacion: 0
};

// Array con posibles consejos que se le dará al usuario
let consejos = [
    "Nunca dejes de aprender.",
    "La práctica hace al maestro.",
    "Confía en ti mismo.",
    "La constancia es clave para el éxito."
];

// Función para dar la bienvenida al usuario
function saludarUsuario(usuario) {
    alert("Hola " + usuario.nombre + ", bienvenido al simulador interactivo.");
}

// Función para jugar a adivinar un número
function jugar() {
    alert("¡Vamos a jugar! Adivina el número entre 1 y 5.");
    let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    let intento = parseInt(prompt("Ingresa tu número:"));

    if (intento === numeroAleatorio) {
        alert("¡Felicidades! Adivinaste el número " + numeroAleatorio);
        usuario.puntuacion += 10;
    } else {
        alert("Lo siento, el número era " + numeroAleatorio);
    }
}

// Función para obtener un consejo al azar utilizando una función de orden superior
function obtenerConsejo(consejos) {
    let consejoAleatorio = consejos[Math.floor(Math.random() * consejos.length)];
    alert("Consejo del día: " + consejoAleatorio);
}

// Función para mostrar la puntuación actual
function mostrarPuntuacion() {
    alert("Tu puntuación actual es: " + usuario.puntuacion);
}

// Función principal que controla el ciclo del simulador
function iniciarSimulador() {
    saludarUsuario(usuario); 
    let continuar = true; 

    // Ciclo principal del simulador
    while (continuar) {
        let opcion = prompt(
            "¿Qué te gustaría hacer? Ingresa el número correspondiente:\n1. Jugar\n2. Recibir un consejo\n3. Ver puntuación\n4. Salir"
        );

        // Condicionales que controlan las opciones
        if (opcion == "1") {
            jugar(); 
        } else if (opcion == "2") {
            obtenerConsejo(consejos); 
        } else if (opcion == "3") {
            mostrarPuntuacion(); 
        } else if (opcion == "4") {
            alert("Gracias por participar, " + usuario.nombre + ". ¡Hasta la próxima!");
            continuar = false; 
        } else {
            alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
        }
    }
}

// Llamada a la función que inicia el simulador
iniciarSimulador();