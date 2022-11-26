/*
    == -> verifica se duas variáveis são iguais
    === -> verdadeiro se a for identico a b
    !== -> verifica se não são iguais
    != -> não testa a tipagem
    < -> verifica se é menor
    > -> verifica se é maior
    <= -> verifica se é menor ou igual
    >= -> verifica se é maior ou igual
    && -> verifica condições pelo operador E
    || -> verifica condições pelo operador OU
*/

/* const a = "3";
const b = "3";

console.log(a!==b) */

const a = 2
const b = 2

console.log(a === b && a <= b);
// V e V = V

console.log(a === b && a < b);
// V e F = F

console.log(a > b && a === b);
// F e V = F

console.log(a > b && a < b);
// F e F = F


// OU ||
 
console.log(a === b || a <= b);
// V ou V = V

console.log(a === b || a < b);
// V ou F = V

console.log(a > b || a === b);
// F ou V = V

console.log(a > b || a < b);
// F ou F = F

// NOT !

console.log(!(a === b)); // F

console.log(!(a < b)); // T
