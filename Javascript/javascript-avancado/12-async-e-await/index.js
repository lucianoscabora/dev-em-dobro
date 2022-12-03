let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: A água foi fervida');
            resolve(true)
        } else {
            console.log('é necessário colocar a chaleira com água e ligar o fogao senao teu cafezinho não vai ficar pronto nunca');
            reject()
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado');
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise ((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café');
        resolve(true)
    })
}

let lavarXicara = (cafeTomado => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a louça');
    })
})

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

/* ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() => {
        return passarOCafe();
    })
    .then(() => {
        return tomarCafe();
    })
    .then(() => {
        return lavarXicara();
    })
    .then(() => {
        console.log('Finalizado o ritual do café, vamos ao trabalho');
    }); */

    async function iniciarProcessoDeFazerCafe() {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
        if(xicaraLavada) console.log('Tomemo o café, agora vamos trabalhar');
    }

    iniciarProcessoDeFazerCafe()

