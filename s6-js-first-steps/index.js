console.log('Hola Mundo, Hola a todos!')

/* 
    Este es un comentario en bloque
 */

// Este es un comentario en línea

/**
 * Tipos de datos.
 * String: 'a', 'hola', 'como estan?' / "a", "hola", "como estan?"
 * Number: 0, 12, 555, 965, 9685555556
 * Boolean: false, true (0, 1)
 * Array: ['a', 1, [], true]
 * Object: {}
 * Null: null
 * Undefined: undefined
 */

var variable = 'un valor determinado';
// console.log(variable)

let otraVariable = 'otro valor definido';
// console.log(otraVariable)

const constante = 'un valor constante';
//console.log(variable, otraVariable, constante)

variable = 'cambiar valor';
otraVariable = 'un nuevo valor';

otraVariable = 123;

// console.log(variable, otraVariable, constante)

const arr = [];

arr[0] = 1;
arr[1] = 2;
arr.push(5, '8', 'mas a fondo', []);

const obj = {
    propiedad1: 'valor1',
    propiedad2: 36
};

const objPersona = {
    nombre: 'Robert',
    apellido: 'Rojas',
    edad: 15,
    email: 'robert.rojas@veanos.com'
};

const objCarro = {
    marca: 'Ferrari',
    modelo: 'Enzo',
    year: 2010,
    color: 'red',
    motor: 'v8'
};

objCarro.height = 150;

const objVacio = {};

objVacio.propiedad1 = 'abc';

// console.log(objCarro);

const boolVar = true;
let boolVar2 = false;
let undefinedVar;
let nullVar = null;
// null, undefined, boolean
// console.log(boolVar, boolVar2, undefinedVar, nullVar);

/**
 * Operadores Matematicos
 */
let number = 5;

number = 5 + 1;
number = 5 - 3;
number = 5 * 5;
number = 5 / 1;
number = 5 % 1;

number++;
number--;

number += 3;
number = number + 3;
number -= 5;
number *= 2;
number /= 3;

console.log(number);

/**
 * Operadores Comparacion
 */
console.log(95 == '95'); // dual
console.log(95 === '95'); // ternario // validación estricta
console.log(95 != '95');
console.log(95 !== '95');
console.log(95 < 99);
console.log(95 > 945);
console.log(95 <= 95);
console.log(95 >= 95);

/**
 * Operadores Lógicos
 * or -> ||
 * and -> &&
 * not -> !
 */
console.log('or', true || false); // true
console.log('or', false || false); // false
console.log('and', true && false); // false
console.log('and', true && true); // true
console.log('and', false && true); // false
console.log('and', false && false); // false

/**
 * Control de Flujo
 */
let edadMinimaDeIngreso = 18;
let edadActual = 15;

if (edadActual >= edadMinimaDeIngreso) {
    console.log('puede pasar');
} else {
    console.log('no pasa');
}

let color = 'amarillo';

switch (color) {
    case 'rojo': console.log('El color es ROJO');
        break;
    case 'azul': console.log('El color es AZUL');
        break;        
    case 'amarillo': console.log('El color es AMARILLO');
        break;    
    default: console.log('El color no ha sido definido!');
        break;

}

const arr2 = [5, 85, 96, 25, 36, 18, 9];
let index = 0;

while (index < arr2.length) {
    console.log('while',arr2[index]);
    if(arr2[index] > 35) break;
    index++;
}

for (let idx = 0; idx < arr2.length; idx++) {
    console.log('for', arr2[idx]);
}
