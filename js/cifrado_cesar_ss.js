// Lista de caracteres soportados para cifrado/descifrado
export const listaCaracteres = [
    ".", ":", ",", ";", "¿", "?", "¡", "!", "'", "@", 
    "#", "$", "%", "^", "(", ")", "-", "_", "=", "+",
    "/", "|", "<", ">", "{", "}", "[", "]", "~", "`",
    "°", "&", '"', " ",
    "A", "Á", "a", "á", "B", "b", "C", "c", "D", "d",
    "E", "É", "e", "é", "F", "f", "G", "g", "H", "h",
    "I", "Í", "i", "í", "J", "j", "K", "k", "L", "l",
    "M", "m", "N", "n", "Ñ", "ñ", "O", "Ó", "o", "ó",
    "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t",
    "U", "Ú", "u", "ú", "V", "v", "W", "w", "X", "x",
    "Y", "Ý", "y", "ý", "Z", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const TOTAL_CARACTERES = listaCaracteres.length;
const ULTIMO_INDICE = TOTAL_CARACTERES - 1;

/**
 * Calcula la nueva posición de un carácter después de aplicar el desplazamiento
 * @param {Array} lista - Lista de caracteres disponible
 * @param {string} caracter - Carácter a procesar
 * @param {number} cambio - Cantidad de desplazamiento
 * @param {boolean} direccion - true: avance, false: retroceso
 * @returns {number} - Nueva posición en el array
 */
function calcularPosicion(lista, caracter, cambio, direccion) {
    const indiceActual = lista.indexOf(caracter);
    
    // Si el carácter no existe en la lista, retornamos su mismo índice (no se modifica)
    if (indiceActual === -1) return 0;
    
    if (direccion) {
        // Cifrado: avanzar
        let nuevaPosicion = indiceActual + cambio;
        
        if (nuevaPosicion > ULTIMO_INDICE) {
            // Ajuste circular: si se pasa del final, vuelve al principio
            nuevaPosicion = nuevaPosicion - TOTAL_CARACTERES;
        }
        return nuevaPosicion;
    } else {
        // Descifrado: retroceder
        let nuevaPosicion = indiceActual - cambio;
        
        if (nuevaPosicion < 0) {
            // Ajuste circular: si se pasa del inicio, vuelve al final
            nuevaPosicion = nuevaPosicion + TOTAL_CARACTERES;
        }
        return nuevaPosicion;
    }
}

/**
 * Aplica cifrado o descifrado alternado a una cadena de texto
 * @param {Array} listaCC - Lista de caracteres base
 * @param {string} caracteresCC - Texto a procesar
 * @param {number} cambioCC - Número de desplazamiento
 * @param {boolean} cifrar - true: cifrar, false: descifrar
 * @returns {string} - Texto procesado
 */
export function cifrarDecifrar(listaCC, caracteresCC, cambioCC, cifrar) {
    const longitud = caracteresCC.length;
    let posicionAlterna = longitud % 2 !== 0 ? 1 : 0; // Inicia en 0 para longitud par, 1 para impar
    let resultado = '';
    
    // Determinar direcciones según modo (cifrar/descifrar)
    // En lugar de duplicar el bucle, usamos esta lógica condicional
    for (let i = 0; i < longitud; i++) {
        const caracter = caracteresCC[i];
        let direccion;
        
        // La dirección alterna según posicionAlterna y el modo
        if (cifrar) {
            // En cifrado: posición 0 avanza (true), posición 1 retrocede (false)
            direccion = posicionAlterna === 0;
        } else {
            // En descifrado: inverso al cifrado
            direccion = posicionAlterna !== 0;
        }
        
        // Calcular nueva posición y obtener el carácter cifrado/descifrado
        const nuevaPosicion = calcularPosicion(listaCC, caracter, cambioCC, direccion);
        resultado += listaCC[nuevaPosicion];
        
        // Alternar entre 0 y 1
        posicionAlterna = posicionAlterna === 0 ? 1 : 0;
    }
    
    return resultado;
}