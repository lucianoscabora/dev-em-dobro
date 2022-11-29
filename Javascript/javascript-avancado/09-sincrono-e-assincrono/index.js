function colocarAguaParaFerver() {
    console.log('Colocar água para ferver');

    setTimeout(() => {
        console.log('Agua ferveu');
        passarOCafe();
    }, 5000);
}

function prepararParaPassarOCafe() {
    console.log('pegar o pó de café');
    console.log('pegar o filtro do café');
    console.log('colocar o pó no filtro');
    console.log('colocar o filtro em cima da xícara');
}

function passarOCafe() {
    console.log('passando o café');
}

colocarAguaParaFerver();
prepararParaPassarOCafe();
