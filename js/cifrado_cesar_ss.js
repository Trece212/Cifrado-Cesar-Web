// Lista de caracteres
export const listaCaracteres = [
    ".", ":", ",", ";", "¿", "?", "¡", "!", "'", "@", 
    "#", "$", "%", "^", "(", ")", "-", "-", "=", "+",
    "/", "|", "<", ">", "{", "}", "[", "]", "~", "`",
    "°", " ",
    "A", "Á", "a", "á", "B", "b", "C", "c", "D", "d",
    "E", "É", "e", "é", "F", "f", "G", "g", "H", "h",
    "I", "Í", "i", "í", "J", "j", "K", "k", "L", "l",
    "M", "m", "N", "n", "Ñ", "ñ", "O", "Ó", "o", "ó",
    "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t",
    "U", "Ú", "u", "ú", "V", "v", "W", "w", "X", "x",
    "Y", "Ý", "y", "ý", "Z", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// Calcula la posición positiva y negativa del
// caracter que se esta buscando en el arreglo
// y retorna su posición
export function calcularPosicion (listaCal, caracterCal, cambioCal, direccionCal) {
    const cantidadCaracetresCal = listaCal.length - 1;

    if (direccionCal == true) {
        let posicion = listaCal.indexOf(caracterCal) + cambioCal;

        if (posicion > cantidadCaracetresCal) {
            let convercion = posicion - cantidadCaracetresCal;
            posicion = convercion - 1;
            return posicion;
        }
        else {
            return posicion;
        }
    }

    if (direccionCal == false) {
        let posicion = listaCal.indexOf(caracterCal) - cambioCal;
        
        if (posicion < 0) {
            let convercion = Math.abs(posicion);
            posicion = (cantidadCaracetresCal - convercion) + 1;
            return posicion;
        }
        else {
            return posicion;
        }
    }
}

// Calcula el temaño del string y cifra la
// cadena de texto retornado el resultado
// tambien funciona a la inversa.
export function cifrarDecifrar (listaCC, caracteresCC, cambioCC, cifrar) {
    const totalCaracteres = caracteresCC.length;
    let parImpar = totalCaracteres % 2 == 0;
    let numero = 0;
    let salida = '';

    if (parImpar == false) {
        numero = 1;
    }

    if (cifrar == true) {
        for (let i = 0; i < totalCaracteres; i++) {
            let caracter = caracteresCC[i];
            
            if (numero == 0) {
                salida = salida + listaCC[calcularPosicion(listaCaracteres, caracter, cambioCC, true)];
                numero++;
            }
            else {
                salida = salida + listaCC[calcularPosicion(listaCaracteres, caracter, cambioCC, false)];
                numero--;
            }
        }
    }

    if (cifrar == false) {
        for (let i = 0; i < totalCaracteres; i++) {
            let caracter = caracteresCC[i];
            
            if (numero == 0) {
                salida = salida + listaCC[calcularPosicion(listaCaracteres, caracter, cambioCC, false)];
                numero++;
            }
            else {
                salida = salida + listaCC[calcularPosicion(listaCaracteres, caracter, cambioCC, true)];
                numero--;
            }
        }
    }

    return salida;
}