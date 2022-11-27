/* let jogo1 = {
    nome: 'Final Fantasy'
}

let jogo2 = {
    nome: 'Fifa'
}

let videoGame = {
    nome: 'playstation',
    valor: 3000,
    //adicionando uma lista(array)
    jogos: [jogo1, jogo2]
}

let jogo3 = {
    nome: 'God of War'
}

//adicionando mais um jogo no objeto videoGame
videoGame.jogos.push(jogo3);

console.log(videoGame); */

// outra forma

let cliente = {
    nome: 'Luciano',
    ultimoPedido: {
        produto: 'xbox',
        valor: '3000',
        jogos: [
            {
                nome: 'Fifa',
                ano: 2022,
                valorJogo: 200
            }
        ]
    }
}

//navegando para consultar o jogo do ultimo pedido do cliente, usando o . quando for objeto e indice quando for array
console.log(cliente.ultimoPedido.jogos[0].nome)