'use strict'
/* console.log(this); */
/* console.log(window);

// this no escopo local
this.name = 'Luciano'

function saudar() {
    console.log('this no contexto da funcao', this)
    console.log('Olá', this.name);
}

saudar(); */

/* let usuarios = {
    name: 'Luciano',
    saudar: function() {
        console.log('this no contexto do método', this)

        //como o diz é o usuario, conseguimos acessar o nome (isso porque o this ta no escopo do objeto)
        console.log('this no contexto do método', this.name)
    }
}

usuarios.saudar(); */


let comida = {
    name: 'brócolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento) {
    console.log('This no contexto comida', this)
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida);

comida.cozinhar(100);

comida.cozinhar(comida);