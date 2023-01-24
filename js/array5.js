// 1. Dado el array = [1,2,3,4,5,6]
//  Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
//     Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
//     Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
//     Generar una copia de un array pero con todos los elementos incrementado en 1.
//  Calcular la media de la suma total de sus elementos
//media
let collection = [1,2,3,4,5,6];
let sumaTotal = 0;
collection.forEach( (colE) => sumaTotal+=colE );
console.log(`Media:  ${sumaTotal / collection.length}`);