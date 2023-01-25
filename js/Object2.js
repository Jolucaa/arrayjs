// 2. Crearemos un objeto persona que tendra las siguientes propiedades: nombre (String), 2 apellidos (Array), edad (Number), direccion (String) añadiremos un método que
// imprima el siguiente mensaje por pantalla ('¡Hola! Me llamo David Lopez Hernandez, tengo 22 años y vivo en C/Ave del Paraíso Nº7')
"use Strict";

function Person(_nombre, _apellidos, _edad, _direccion) {
    function Apellidos(__apellidos){
        return {
            _apellidos: __apellidos,
            imprimeApellidos() {
                return this._apellidos.toString().replaceAll(',', ' ');
            },
        };
    }

    return {
        nombre: _nombre,
        apellidos: new Apellidos(_apellidos),
        edad: Number(_edad).valueOf(),
        direccion: _direccion,
        imprimeDireccion() {
            return `¡Hola! Me llamo ${this.nombre} ${this.apellidos.imprimeApellidos()}, tengo ${this.edad} años y vivo en ${this.direccion}`;
        },
    };
}

let david = new Person('David', ['Lopez', 'Hernandez'], 22, "C/Ave del Paraiso Nº7");
let ana = new Person('Ana', ['Lopez', 'Hernandez', 'Guimenez'], 32, "C/Ave del Paraiso Nº7");

window.addEventListener('load', function (event) {
    document.getElementById("result").innerText = david.imprimeDireccion() + " \n" + ana.imprimeDireccion();
});