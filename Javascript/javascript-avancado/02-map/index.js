let pessoas = [
  { nome: "Luciano", idade: 31 },
  { nome: "Lynkos", idade: 33 },
  { nome: "Miluda", idade: 36 },
];

/* let nomeDasPessoas = [];

for (let i = 0; i < pessoas.length; i++) {
  nomeDasPessoas.push(pessoas[i].nome);
}

console.log(nomeDasPessoas); */

// AGORA COM MAP

/* let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome + " tem " + pessoa.idade + " anos de idade ";
})

console.log(nomeDasPessoas); */


// AGORA COM ARROW FUNCTION

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos de idade ")

console.log(nomeDasPessoas);