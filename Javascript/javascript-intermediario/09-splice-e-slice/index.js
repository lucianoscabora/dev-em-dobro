// anatomia

let frutas = ['banana', 'laranja', 'uva', 'maca'];

/* let frutasExtraidas = frutas.slice(1,3);

console.log(frutasExtraidas);
console.log(frutas); */

/* let frutasExtraidas = frutas.splice(1, 1);
console.log(frutasExtraidas);
console.log(frutas); */

//removendo e adicionando frutas ao mesmo tempo
let removeEAdiciona = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pera');
console.log(frutas);
console.log(removeEAdiciona);
