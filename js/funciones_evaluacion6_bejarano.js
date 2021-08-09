'use strict';

/*
Abrir el archivo evaluacion6.html y guardarlo como evaluacion6_apellido.html (ej. evaluacion6_fernandez.html)
Crear un archivo funciones_evaluacion6_apellido.js y asociarlo al archivo .html
En el archivo .js
Declarar una función que le pida al usuario ingresar un número (pueden utilizar prompt).
Calcular el iva (21%) del número ingresado. 
Luego mostrar en pantalla el valor total con y sin el iva.
La función debe ejecutarse desde el botón "Calcular IVA" en el archivo .html
*/

window.onload=()=>{

addElement();    
}


function addElement() {

  const boton = document.createElement("button");
  const nombreBoton = document.createTextNode("Calcular IVA");
  boton.appendChild(nombreBoton);

  boton.onclick=()=>{
    const numeroIngresado = prompt("ingrese un numero")
    const calculado= numeroIngresado * 0.21;
    alert (`El monto total ingresado es: ${numeroIngresado} \n El iva (21%)del número ingresado:  ${calculado}`)
  }
  

  // añade el botón
  document.body.appendChild(boton);
}

