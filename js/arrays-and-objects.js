// // 1. Dado el array = [1,2,3,4,5,6]
// // Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
// //     Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
// //     Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// //     Generar una copia de un array pero con todos los elementos incrementado en 1.
// // Calcular la media de la suma total de sus elementos
//
// let collection = [1,2,3,4,5,6];
// let collectionIndex = collection[Symbol.iterator]();
// let collectionValue = 0;
// while (collectionValue = collectionIndex.next().value) {
//     console.log(collectionValue);
// }
//
// for (let forCollectionIndex = Number(0);forCollectionIndex.valueOf() === collection.length;forCollectionIndex++) {
//
//     console.log(collection[forCollectionIndex]);
// }
// let array = [...1];
// let caaall = (e) => {+1};
// let arrays(array, caaall) = (function(array,call){
// 'use strict';
//     let collection = array;
//     let callback = call;
//     let collectionIndex = collection[Symbol.iterator]();
//     let collectionValue = 0;
//     function showArray() {
//         while (collectionValue = collectionIndex.next().value) {
//             console.log(collectionValue);
//         }
//     }
//     return {
//     useCallBack: function test(){
//         callback();
//         showArray(collection);
//         return collection;
//     }
// }
// })();
//
// let sumOne = new arrays([1,2,3,4,5,6], () =>  +1 );
// sumOne.useCallBack();
//
// let copyOne = new arrays([1,2,3,4,5,6], () =>  +1 );
// let copy = copyOne.useCallBack();
//
// let media = arrays( [1,2,3,4,5,6], (array) =>  {
//     let media = 0;
//     let sumaTotal = 0;
//     sumaTotal = array.forEach( (number) => {number += number});
//     media =  sumaTotal / array.length;
//     return media;
// })
// media.useCallBack();
// // 2. Pediremos a través de un bluce 6 números al usuario que almacenaremos en un array
// // Imprimeros por pantalla la longitud del array, el número más alto y el número más bajo
//
// // Objetos
// // 1. Crearemos un objeto coche que tendra las siguientes propiedades: marca (String), modelo (String), año de fabricación (Number), velocidad (Number), arrancado(Boolean)
// // Para este objeto deberemos definir los siguientes métodos: alecerar(incrementa en 10 la velocidad), parar(pone a 0 la velocidad), arrancarApagar(arranca o apaga el motor)
// // 2. Crearemos un objeto persona que tendra las siguientes propiedades: nombre (String), 2 apellidos (Array), edad (Number), direccion (String) añadiremos un método que
// // imprima el siguiesnte mensaje por pantalla ('¡Hola! Me llamo David Lopez Hernandez, tengo 22 años y vivo en C/Ave del Paraíso Nº7')
//
// // 1. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
// // 2. Existen dos arrays, cada uno con 5 elementos, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4])
// // 3. Crear una función que reciba un array y devuelva otro ordenado. La función tendrá dos parámetros el array que recibe y otro parámetro para determinar orden del array devuelto.
// // 4. Dado el array [1,2,3,4,5,6,7,8,9] volcar los 3 últimos elementos en otro array.
// // 5. Pedimos al usuario 5 valores que guardaremos en un array, después extraeremos el primer elemento y lo mostraremos al usuario.
// // 6. El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.
// // 7. El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])
// // 8. Existen dos arrays, cada uno con 5 elementos, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2])