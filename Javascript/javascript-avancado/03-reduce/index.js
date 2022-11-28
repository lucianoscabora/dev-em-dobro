let ordens = [
  {cliente: 'Luciano', tipo: 'compra', quantidade: 56, ativo: 'XYZ235'},
  {cliente: 'Lynkos', tipo: 'compra', quantidade: 20, ativo: 'ABC437'},
  {cliente: 'Miluda', tipo: 'venda', quantidade: 30, ativo: 'PLQ134'}
]

/* let quantidadeDeOrdens = 0
for(let i = 0; i < ordens.length; i++){
  quantidadeDeOrdens += ordens[i].quantidade
}

console.log(quantidadeDeOrdens); */

// AGORA COM REDUCE

/* let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem)  {
    return somaOrdens + ordem.quantidade;
}, 0)

console.log(quantidadeDeOrdens); */


// COM ARROW FUNCTION

let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)

console.log(quantidadeDeOrdens);
