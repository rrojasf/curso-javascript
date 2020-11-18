console.log('Hola a todos!');

/*
 Esta es una manera de hacer un comentario en bloque
 */

 /**
  * Este es un bloque comentario mas bonito
  */

// Este es un comentario en linea

// Tipos de datos
/*
String: Una cadena encerrada en comilla '' o comilla doble "" -> 'Hola', "Hola"
Number: 24 33
Boolean: true or false
Array: []
Object: {}
Null:  null
Undefined: undefined
*/

var variableGlobal;
var variableGlobal2 = 'Este es un valor para mi variable';

let variableLocal = 123;

const estaConstante = 1;

/**
 * 
 */
let operacion = 1 + 3;
operacion = 1 - 3;
operacion = 1 * 1;
operacion = 10 / 5;
operacion = 5 % 2;

let number = 9;
number++;
number--;

number = number + 5; // igual a number += 5;
number-=5;
number*=2;
number/=3;

/***
 * 
 * AND, OR, NOT
 * 
 * AND -> toda comparacion sea true
 * OR -> exista un verdadero
 * NOT -> niega o invierte el valor actual
 * 
 */

console.log(true || false);
console.log(true || true);
console.log(false || false);

console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(false && true);

let trueOrFalse = false;
console.log(!trueOrFalse);

/**
 * Functions
 */

// code guidelines
// camel case > iniciar en minuscula y alternar letra inicial mayuscula 

// camel case
 function estaEsUnaFuncion (arg1, arg2) {

 }

 // snake notation
 function esta_es_una_funcion (arg1, arg2) {

}


let arreglo = ['1', 23, 're', 78, 9856, 14];


for(let idx = 0; idx < arreglo.length; idx++) {
    console.log(arreglo[idx]);
}

let arreglo2 = ['a', 'b', 'c'];

for(let idx = 0; idx < arreglo2.length; idx++) {
    console.log(arreglo2[idx]);
}

function imprimirArreglo(arreglo) {
    for(let idx = 0; idx < arreglo.length; idx++) {
        console.log(arreglo[idx]);
    }
}

console.log('imprimir con la funcion');
imprimirArreglo(arreglo);
imprimirArreglo(arreglo2);

// arrow functions => fat arrow functions

const imprimirArregloArrow = (arreglo) => {
    console.log('Recorrer Arreglo!', arreglo);
    for(let idx = 0; idx < arreglo.length; idx++) {
        console.log(arreglo[idx]);
    }
}

imprimirArregloArrow(arreglo);
imprimirArregloArrow(arreglo2);

function sumar(op1, op2, fCb) {
    let resultado = op1 + op2;
    callback(resultado);
}

function callback (resultado) {
    console.log(resultado);
    return true;
}

sumar(9, 5, callback);


//

let color = 'azul';

switch (color) {
    case 'rojo':
        console.log('color ROJO');
        break;
    case 'azul':
        console.log('color AZUL');
        break;        
    default:
        console.log('color no identificado');
        break;
}

let edad = 18;
// entrar a un bar
if(edad >= 18) {
    console.log('entra');
} else {
    console.log('no entra');
}