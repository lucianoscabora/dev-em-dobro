/* ANATOMIA 

function(a, b, ...args) {
    .....
}

*/


// sem parametro rest
/* function incentivarQuester(mensagem, nomeQuester) {
    console.log(`${mensagem} ${nomeQuester}`)
}

incentivarQuester('Parabéns por ter chegado ao módulo de JS avançado', 'Joao'); */

function incentivarQuester(mensagem, ...nomeQuesters) {
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por ter chegado ao módulo de JS avançado', 'Joao', 'Pedro', 'Paulo');