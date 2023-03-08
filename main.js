//METODOS DE STRINGS

//25. Método localCompare
console.log('10'.localeCompare('2', undefined, { numeric: true }));
console.log('2'.localeCompare('10', undefined, { numeric: true }));
console.log('10'.localeCompare('10', undefined, { numeric: true }));
console.log('2'.localeCompare('2', undefined, { numeric: true }));