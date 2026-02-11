import {listaCaracteres, calcularPosicion, cifrarDecifrar} from './cifrado_cesar_ss.js';

const cifrar = document.querySelector('#cifrar');
const descifrar = document.querySelector('#descifrar');
const cambio = document.querySelector('#cambio');
const entrada = document.querySelector('#entrada');
const salida = document.querySelector('#salida');

console.log(cifrar, descifrar, cambio, entrada, salida);

cifrar.addEventListener('click', validarValores);
descifrar.addEventListener('click', validarValores);

function validarValores () {
    console.log('Click');
}