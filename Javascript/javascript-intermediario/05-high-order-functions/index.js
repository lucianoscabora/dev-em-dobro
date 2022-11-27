/* const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
    const mesAtual = 2;
    let anoDeNascimento = 2021 - idade;
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento);
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log("Seu ano de nascimento é: " + anoDeNascimento);
}

calcularAnoDeNascimento(33, 4, imprimirAnoDeNascimento); */


// uma função que retorna uma função

/* function dobrar(numero) {
    return numero * 2;
}

console.log(dobrar(2)); */


function multiplicar(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    }
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(quadruplicar(2));