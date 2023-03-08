//METODOS DE STRINGS

//21 Método matchAll

const regexp = RegExp('foo[a-z]*','g');
const cadena = 'mesa football, football';
const ocurrencias = cadena.matchAll(regexp);
console.log(Array.from(cadena.matchAll(regexp), m => m[0]));