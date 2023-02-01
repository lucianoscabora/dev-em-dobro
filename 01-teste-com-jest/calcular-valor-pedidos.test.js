const calcularValorPedido = require('./calcular-valor-pedidos');

it ('Não deve cobrar valor de frete quando o valor dos produtos for superior a 500', () => {

    // AAA - 3 passos de criação de um teste

    // ARRANGE - ARRUMAR - O OBJETO DE TESTE
    const meuPedido = {
        itens: [
            {nome: 'Arco', valor: 2000},
            {nome: 'Taxa de entrega', valor: 40, entrega: true}
        ]
    }

    // ACTION -  AÇÃO - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);

    // ASSERTION - ASSERÇÃO - QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(2000);
});


it('deve cobrar o valor de frete caso o pedido seja menor de 500', () => {

    const meuPedido = {
        itens: [
            {nome: 'Sandwich', valor: 50},
            {nome: 'Taxa de entrega', valor: 40, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(90);
});

it('deve cobrar valor de frete caso o valor seja EXATAMENTE igual a 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'Sandwich', valor: 500},
            {nome: 'Taxa de entrega', valor: 40, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(540);

});

// CASO OS ESTADOS DA ENTREG SEJAM SC OU RS DEVE ACRESCENTAR 30% NO VALOR DA ENTREGA DO PEDIDO

    it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso seja o estado RS', () => {
        const pedidoComEstadoRS = {
            estado: 'RS',
            itens: [
                {nome: 'Sandwich', valor: 500},
                {nome: 'Taxa de entrega', valor: 100, entrega: true}
            ]
        }
        const resultado = calcularValorPedido(pedidoComEstadoRS);
    
        expect(resultado).toBe(620);
    })


    it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso seja o estado RS', () => {
        const pedidoComEstadoSC = {
            estado: 'SC',
            itens: [
                {nome: 'Sandwich', valor: 500},
                {nome: 'Taxa de entrega', valor: 100, entrega: true}
            ]
        }
        const resultado = calcularValorPedido(pedidoComEstadoSC);
    
        expect(resultado).toBe(620);
    })

    it('Não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso seja o estado SP', () => {
        const pedidoComEstadoSP = {
            estado: 'SP',
            itens: [
                {nome: 'Sandwich', valor: 500},
                {nome: 'Taxa de entrega', valor: 100, entrega: true}
            ]
        }
        const resultado = calcularValorPedido(pedidoComEstadoSP);
    
        expect(resultado).toBe(600);
    })