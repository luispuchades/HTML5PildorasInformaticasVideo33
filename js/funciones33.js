/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS VIII
 * Origin: Video33.html ==> Transformaciones
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var lienzo,
        texto,
        alturaTexto,
        alturaTextoPx;

    texto = "Hola alumnos";
    alturaTexto = 20;
    alturaTextoPx = alturaTexto + "px";

    //INSERCION DE TEXTO
    //1. Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Definimos el tipo de fuente
    lienzo.font = "bold" + " " + alturaTextoPx + " " + "verdana";
    //3. Definimos texto y posición dentro del canvas
    lienzo.fillText(texto, 50, 20);
    //4. Trasladamos el origen de coordenadas del canvas al posición (x,y)=(100,100)
    lienzo.translate(100,100);
    //5. Cambiamos la escala
    lienzo.scale(3,3);
    //6. Rotamos el texto
    lienzo.rotate(Math.PI);
    //7. Volvemos a cambiar las coordenadas del lienzo porque acaba de desaparecer en pantalla
    lienzo.translate(-200, -150);
    //6 Reescribimos el texto con las mismas coordenadas para ver el cambio.
    lienzo.fillText(texto,50,20);
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded',cargarDocumento,false);
