let usuario = {
    nome: 'Luciano',
    idade: 31,
    excluir: function () {
        console.log('O usuário ' + this.nome + ' foi excluído')
    }
}

usuario.excluir();