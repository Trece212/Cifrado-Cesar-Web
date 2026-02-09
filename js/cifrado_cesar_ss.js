// Lista de caracteres
const listaCaracteres = [
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
function calcularposicion (listaCal, caracterCal, cambioCal, direccionCal) {
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
