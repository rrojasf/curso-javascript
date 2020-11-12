// console.log('Hola a todos!');

const arreglo1 = ['1', 2, '***Hola', 69];

// console.log(arreglo1);

// loop, bucle, ciclo -> control de flujo
/*// 
for(let indice = 0; indice < arreglo1.length; indice++) {
    console.log(arreglo1[indice]);
}

for(indice = 0; indice < arreglo2.length; indice++) {
    console.log(arreglo2[indice]);
}
*/
const arreglo2 = [9, 4, 13, 78, 'p'];
const arreglo3 = [9, 4, 13, 78, 'p', '1', 2, '***Hola', 69];

function printArray (arreglo) {
    console.log('imprimiendo arreglo recibido...');
    for(let indice = 0; indice < arreglo.length; indice++) {
        console.log(arreglo[indice]);
    }

    return true;
}

// printArray(arreglo1);
// printArray(arreglo2);
// const printValue = printArray(arreglo1);
/*
function suma (ar1, ar2) {
    return ar1 + ar2;
}

const resultado = suma(1, 3);

console.log(resultado);*/
function callback (resultado) {
    console.log(resultado);

    return resultado;
}
// funcion callback
function suma_callback (ar1, ar2, cb) {
    const result = ar1 + ar2;
    cb(result);
}

suma_callback(5, 8, callback);

const suma_callback_arrow = (ar1, ar2, cb) => {
    const result = ar1 + ar2;
    cb(result);
};

suma_callback_arrow(7, 65, (r) => {
    console.log('este es el resultado '+r);
});

//suma_callback(9, 3, callback);

// funcion anonima
/*suma_callback(19, 3, function (resultado) {
    console.log(resultado);

    return resultado;
});*/


// arrow functions, fat arrow functions
const sumaArrow = (arg1, arg2) => arg1 + arg2

const resultado = sumaArrow(7, 1);
// //console.log(resultado);

const printArrayArrow = (arreglo) => {
    console.log('=> imprimiendo arreglo recibido...');
    for(let indice = 0; indice < arreglo.length; indice++) {
        console.log(arreglo[indice]);
    }

    return true;    
}

// const valorPrint = printArrayArrow(arreglo3);

// console.log(valorPrint);