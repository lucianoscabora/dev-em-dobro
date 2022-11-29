/* ESTADOS DA PROMISE

1. Pendente - foi criada mas não executada - estado inicial
2. Realizada(Resolve) - quando deu certo a promise
3. Recusada(Reject) - quando deu problema
4. Estabelecida - quando foi realizada ou recusada

*/

/* new Promise((resolve, reject) => {
    
}) */



let ferverAgua = function() {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver a água...');
            resolve()
        }else {
            console.log('é necessário ligar o fogão e colocar a água para ferver');
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log('fazendo um café');