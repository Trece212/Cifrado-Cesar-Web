import { listaCaracteres, cifrarDecifrar } from './cifrado_cesar_ss.js';

// Elementos del DOM
const cifrarBtn = document.querySelector('#cifrar');
const descifrarBtn = document.querySelector('#descifrar');
const cambioInput = document.querySelector('#cambio');
const entradaTextarea = document.querySelector('#entrada');
const salidaDiv = document.querySelector('#salida');
const limpiarBtn = document.querySelector('#limpiar');

// Validar elementos del DOM
const elementosValidos = [cifrarBtn, descifrarBtn, cambioInput, entradaTextarea, salidaDiv, limpiarBtn];
if (elementosValidos.some(el => !el)) {
    console.error('No se encontraron todos los elementos del DOM necesarios.');
}

// Event listeners
cifrarBtn?.addEventListener('click', () => procesar(true));
descifrarBtn?.addEventListener('click', () => procesar(false));
limpiarBtn?.addEventListener('click', limpiarAreas);

/**
 * Procesa el cifrado o descifrado del texto ingresado
 * @param {boolean} esCifrado - true para cifrar, false para descifrar
 */
function procesar(esCifrado) {
    const textoOriginal = entradaTextarea.value.trim();
    
    if (!textoOriginal) {
        mostrarAlerta('El campo de entrada está vacío.');
        return;
    }

    const desplazamiento = parseInt(cambioInput.value);
    const maxDesplazamiento = listaCaracteres.length - 1;

    if (isNaN(desplazamiento) || desplazamiento < 0 || desplazamiento > maxDesplazamiento) {
        mostrarAlerta(`El desplazamiento debe ser un número entre 0 y ${maxDesplazamiento}.`);
        return;
    }

    const resultado = cifrarDecifrar(listaCaracteres, textoOriginal, desplazamiento, esCifrado);
    salidaDiv.textContent = resultado;
}

/**
 * Muestra un mensaje de alerta al usuario
 * @param {string} mensaje 
 */
function mostrarAlerta(mensaje) {
    alert(`¡Error! ${mensaje}`);
}

/**
 * Limpia los campos de entrada y salida
 */
function limpiarAreas() {
    entradaTextarea.value = '';
    salidaDiv.textContent = '';
    entradaTextarea.focus(); // Mejora UX: coloca el foco en el campo de entrada
}