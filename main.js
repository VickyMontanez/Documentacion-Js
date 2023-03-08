//METODOS DE STRINGS
let str1="ABCDEJGHIabcdefghji";
let str2="Edificio Zona franca";
let str3="GATICOS EN aDOPCIÓN";

//20. Método match
let regexp=/[A-C]/gi;
let match = str1.match(regexp);
let regexp2=/[A-Z]/g;
let match2= str2.match(regexp2);
let regexp3=/([a-z])/g;
let match3= str3.match(regexp3);

console.log(match);
console.log(match2);
console.log(match3);