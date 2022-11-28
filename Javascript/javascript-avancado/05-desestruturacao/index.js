/* let pessoa = {nome: 'Luciano', sobrenome: 'Scabora', idade: 31}
let nome = pessoa.nome;
let idade = pessoa.idade;

console.log(nome);
console.log(idade); */

let pessoa = {nome: 'Luciano', sobrenome: 'Scabora', idade: 31}

//mapeamos a propriedade do objeto para ser atribuido na variável
let {nome: nome, idade: idade} = pessoa;
console.log(pessoa);

//podemos também remover a propriedade e fazer assim (caso sejam iguais ao objeto)
// let {nome, idade} = pessoa;

// agora a desestruturação de um array

const numeros = [1, 2, 3];

// o mapeamento é baseado no indice, então não precisa fazer igual ao do objeto
const [um, dois, tres] = numeros; 

