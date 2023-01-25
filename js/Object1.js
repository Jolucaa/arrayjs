// Objetos
// 1. Crearemos un objeto coche que tendra las siguientes propiedades: marca (String), modelo (String), año de fabricación (Number), velocidad (Number), arrancado(Boolean)
// Para este objeto deberemos definir los siguientes métodos: alecerar(incrementa en 10 la velocidad), parar(pone a 0 la velocidad), arrancarApagar(arranca o apaga el motor)
"use Strict";

function Coche(_marca, _model, _builded) {
    return {
        marca: _marca,
        modelo: _model,
        fabricacion: Number(_builded).valueOf(),
        velocidad: Number(0).valueOf(),
        isArrancado: Boolean(false),
        acelerar() {
            this.velocidad += Number(10).valueOf();
            console.log(this.velocidad);
        },
        parar() {
            this.velocidad = Number(0).valueOf();
            console.log(this.velocidad);
        },
        arrancarApagar() {
            this.isArrancado = !this.isArrancado;
            console.log(this.isArrancado);
        }
    };
}

let ford = new Coche('Ford', '12C', 95);

ford.arrancarApagar();
ford.acelerar();
ford.acelerar();
ford.parar();
ford.acelerar();
ford.acelerar();
ford.acelerar();
ford.arrancarApagar();