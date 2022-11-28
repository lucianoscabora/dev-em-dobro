 let pessoas = [
    { nome: 'Luciano', idade: 31},
    { nome: 'Lynkos', idade: 31},
    { nome: 'Miluda', idade: 35}
]

/*
let pessoasComIdadeDe31Anos = []

for(let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].idade === 31) {
        pessoasComIdadeDe31Anos.push(pessoas[i]);
    }
}

console.log(pessoasComIdadeDe31Anos); */


// agora usando o FILTER

let pessoasComIdadeDe31Anos = pessoas.filter((pessoa) =>  pessoa.idade === 31)

console.log(pessoasComIdadeDe31Anos);