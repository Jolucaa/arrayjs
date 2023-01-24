// 2. Pediremos a través de un bluce 6 números al usuario que almacenaremos en un array
// Imprimeros por pantalla la longitud del array, el número más alto y el número más bajo
const NUMBER_LIMIT = 6;
let inputtedNumber = [];
do{

    let input = NaN;
    do{
        input = Number(prompt('Introduce un numero'));
    }while (Number.isNaN(input))

    inputtedNumber.push(Number(input));
}while (NUMBER_LIMIT!==inputtedNumber.length)
let collectionLength = inputtedNumber.length;
let minNumber = inputtedNumber.sort().at(0);
let lastItem = collectionLength === 0 ? 0 : collectionLength - 1 ;
let maxNumber = inputtedNumber.sort().at(lastItem);
let cadena = `Su longitud es de ${collectionLength} más alto: ${maxNumber} más bajo: ${minNumber}`;
console.log(cadena);
window.addEventListener('load', function (event) {
    document.getElementById("result").innerText = cadena;
});
