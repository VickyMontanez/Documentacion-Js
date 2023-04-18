/* INFIERNO DE CALLBACKS */

/* Función Callback

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. */

/* PRIMER EJEMPLO: */

let fa = function(){
    return `Hola soy la función A`;
};

/* Se inicia con una función expresiva {fa}: la
que retorna un string;*/

let fb = callback =>{
    console.log("Hola soy la función B");
    return callback();
};

/* Se relaciona con otra función expresiva {fb}: la que retorna un nuevo string y luego hace un CALLBACK a la función anterior que retorna el primer string;*/

console.log(fb(fa));

/* SEGUNDO EJEMPLO: */

function saludar(nombre) {
    alert('Hola ' + nombre);
    alert("Ahora mira consola :)")
    console.log('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);
  
  /* Se inicia con una función {saludar}:
  en la que se toma un parametro "nombre" y coloca la dat en la alerta y la consola;

  Esto se relaciona con la función {procesarEntradaUsuario}:
  en la que me dan un prompt para entrar data y luego hace un CALLBACK a la función anterior para que se ejecute, DESPUÉS de esta*/