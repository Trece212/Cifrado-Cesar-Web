# Cifrado Cesar SS

Esta es una versión un poco más compleja del mítico cifrado cesar o también llamado desplazamiento de Cesar. Este consiste en reemplazar una letra por otra que se encuentra en una posición en el alfabeto, por ejemplo:

| Posición original | Desplazamineto | Nueva posición |
|:-----------------:|:--------------:|:--------------:|
| 0 - A             | 3              | 3 - D          |
| 1 - B             | 3              | 4 - E          |
| 2 - C             | 3              | 5 - F          |
| 3 - D             | 3              | 6 - F          |
| 4 - E             | 3              | 0 - A          |
| 5 - F             | 3              | 1 - B          |
| 6 - G             | 3              | 2 - C          |

Para este ejemplo tenesmos 7 letras del alfabeto y el desplazamiento es de 3, cabe destacar en esta versión el 0 es tomado como una posición dado que en los arreglos este es tomado como la primera posición. Entonces si tenemos la letra A que está en la posición 0 y asemos la sustitución 3 posiciones a la derecha obtendríamos como resultado la letra D.

Nuestra nueva versión sustituye tanto hacia la derecha como a la izquierda. Entonces las posiciones quedarían de la siguiente manera.

| Posición original | Desplazamiento | Desp. Derecha | Desp. Izquierda |
|:-----------------:|:--------------:|:-------------:|:---------------:|
| 0 - A             | 3              | 3 - D         | 4 - E           |
| 1 - B             | 3              | 4 - E         | 5 - F           |
| 2 - C             | 3              | 5 - F         | 6 - G           |
| 3 - D             | 3              | 6 - G         | 0 - A           |
| 4 - E             | 3              | 0 - A         | 1 - B           |
| 5 - F             | 3              | 1 - B         | 2 - C           |
| 6 - G             | 3              | 2 -C          | 3 - D           |

Además, el orden de derecha a izquierda cambia si el número total de caracteres es par o impar, entonces se comienza a sustituir de derecha a izquierda, Por ejemplo:

Cadena de caracteres: ABCD

Total de caracteres: 4

Desplazamiento: 3 tomando en cuenta la tabla de arriba

Sustitución: DFFA



Ahora un ejemplo de Izquierda a derecha.

Cadena de caracteres: ABCDE

Total de caracteres: 5

Desplazamiento: 3 tomando en cuenta la tabla de arriba

Sustitución: EEGGA



En esta versión todos los caracteres ocupan una posición en el arreglo, ya sea, letras, números y signos de puntuación incluso el espacio “ ” es considerado un carácter.

Por ejemplo: 7 de Mayo del 2023 a las 3:34 pm.

Desplazamiento: 7

Sustitución: 0Cah{Ó]3mCahiCÝ7Ý.{d{O]V{.4.ýCÑo3
