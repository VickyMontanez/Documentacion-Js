//METODOS DE STRINGS
let parrafo="A Cuesta le cuesta subir la cuesta, y en medio de la cuesta, va y se acuesta";
document.querySelector('body').textContent=parrafo;
console.log(parrafo);
let index="Hola";
console.log(index)
//11.Método charCodetAt
console.log(`Este es el largo de mi string `+ parrafo.length)
console.log(`Este es el unicode de la letra'C' `+ parrafo.charCodeAt(3));
console.log(`Este es el unicode de la letra'H' `+ index.charCodeAt(0));
console.log(`Este es el unicode de la letra'a' `+ index.charCodeAt(3));


