//alert("Hola este es mi Javascript");
// let nombre = "marta" ;//se usa cuando la vRIABLE SE va ha modificar
// nombre = "Maria"; //reasignarle con otro nombre

// var nombre1 = "marta" ;

// const nombre2 = "marta" ;
// //nombre2 = "Maria";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

//-----PASO 23 SELECCIONAR ELMENTOS------ //
//EJEMPLO 1
// let titulo = document.querySelector(".fuente-acento");
// console.log(titulo);

// titulo.innerHTML = "Hola" ;

//EJEMPLO 2
let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".fuente-acento");
console.log(titulo);

titulo.innerHTML = contenidoTitulo;

//-----PASO 24 CONDICIONALES------ /

let textoTitulo = titulo.innerText;
console.log(textoTitulo); //te muestre el titulo en la consola

if (textoTitulo = "Nombre") {
    titulo.innerHTML = "otro";
} else {
    console.log("No se cumple")
}
//-----PASO 24 FUNCIONES------ /
//Funciones
let negocio1 = "Fiesta";
let dedicacion1 = "Crear";
let espacio1 = "Casas";

let parrafo = document.querySelector(".parrafo-2")

function cambiarTexto(negocio, dedicacion, espacio) {

    let contenido = `G&Hidrosistemas es una ${negocio} que se dedica a :${dedicacion}, Equipamiento, Remodelacion, Instalacion, Puesta en Marcha y Mantenimiento de ${espacio}.`; //se usa comillas invertidas

    return contenido;
}
//al texto del parafo lo que le voy a asignar cambiar de las palabras
parrafo.innerText = cambiarTexto(negocio1, dedicacion1, espacio1);