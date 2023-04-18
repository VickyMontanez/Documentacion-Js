/* INFIERNO DE CALLBACKS */

/* Callback VS Promises */

/* 1. Una Función puede ser tomada como parametro*/
/* EXAMPLES */

const operation = (num1, num2, callback)=>{
    return callback(num1, num2)
};
/* Se pasa por parametro la operación que se va hacer*/
/* EL return es un CALLBACK porque vuelve a llamr el mismo parametro */

console.log(operation(5,9,(a,b)=>a+b));
console.log(operation(5,9,(a,b)=>a*b));
console.log(operation(5,9,(a,b)=>a-b));

/* Se pasa la función */

let suma= (num1, num2, num3, add)=>{
    return add(num1, num2, num3)
}

console.log(suma(5,9,3,(a,b,c)=>a+b+c));
console.log(suma(7,7,1,(a,b,c)=>a*b*c));
console.log(suma(9,4,3,(a,b,c)=>a-b-c));

