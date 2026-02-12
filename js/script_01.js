import {listaCaracteres, cifrarDecifrar} from './cifrado_cesar_ss.js';

const cifrar = document.querySelector('#cifrar');
const descifrar = document.querySelector('#descifrar');
const cambio = document.querySelector('#cambio');
const entrada = document.querySelector('#entrada');
const salida = document.querySelector('#salida');

console.log(cifrar, descifrar, cambio, entrada, salida);

cifrar.addEventListener('click', cifrarCaracteres);
descifrar.addEventListener('click', descifrarCaracteres);

function cifrarCaracteres () {
    const cadenaCaracteres = extraerCaracteres();
    let cantidadCarateres = cadenaCaracteres.length;
    let numeroCambio = parseInt(cambio.value);
    let numeroCaracteresLista = listaCaracteres.length - 1;

    if (numeroCambio >= 0 && numeroCambio <= numeroCaracteresLista && cantidadCarateres > 0) {
        const cifrado = cifrarDecifrar(listaCaracteres, cadenaCaracteres, numeroCambio, true);
        salida.textContent=`${cifrado}`;
    }
    else {
        alert('¡Uno de los campos está vacío o no es válido!');
    }
}

function descifrarCaracteres () {
    const cadenaCaracteres = extraerCaracteres();
    let cantidadCarateres = cadenaCaracteres.length;
    let numeroCambio = parseInt(cambio.value);
    let numeroCaracteresLista = listaCaracteres.length - 1;

    if (numeroCambio >= 0 && numeroCambio <= numeroCaracteresLista && cantidadCarateres > 0) {
        const cifrado = cifrarDecifrar(listaCaracteres, cadenaCaracteres, numeroCambio, false);
        salida.textContent=`${cifrado}`;
    }
    else {
        alert('¡Uno de los campos está vacío o no es válido!');
    }
}

function extraerCaracteres () {
    let valor = entrada.value;
    let contenido = entrada.textContent=`${valor}`;
    return contenido;
}

