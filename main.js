// FUNCIONES JS
//TIPOS DE FUNCIONES JS

/* Función Declarativa */
/* Consiste en declarar la función con un nombre y sus parámetros de entrada entre paréntesis. */

function add(a, b){
    return a+b;
};

let resultado1 = add(34445,6777000)
console.log(resultado1);
    

function multiplicar(c,d){
    return (c*d);
};

let resultado2 = multiplicar(35,67)
console.log(resultado2);

/* Función Expresivas */
/* Consiste básicamente en guardar una función en una variable, para así ejecutar la variable como si fuera una función.*/

let plus = function (a, b){
    return a+b
};
console.log(plus(78899,6121));

let multi = function (a, b){
    return (a*b)
};
console.log(multi(99,21));

/* Función Constructora de Objeto */

/* Las funciones constructoras son una técnica para crear objetos personalizados con valores predeterminados y métodos específicos. 
Al contrario de la notación de objetos literales, las funciones constructoras deben ser llamadas con la palabra clave "new" para asegurar que se está creando un nuevo objeto. */

const greetings = new Function("return 'Hola Mundoo';");
console.log(greetings ());


/* Cree una función constructora llamada "Car", que toma tres argumentos: make, model y year. */

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
};

/* Dentro de la función, estamos asignando cada uno de estos argumentos a las propiedades del objeto "this". "this" hace referencia al objeto que se está construyendo. */

/* Se crea una nueva variable "myCar" que es una instancia de la función constructora "Car". */

let myCar = new Car("Toyota", "Camry", 2023)
console.log(myCar);
/* Se pasan los valores "Toyota", "Camry" y 2020 como argumentos a la función constructora, que a su vez se asignarán a las propiedades "make", "model" y "year" del objeto "myCar" */

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
/* Para acceder a la propiedades, SE UTILIZA EL PUNTO */