/* setTimeout(() => {
    console.log('console dentro do setTimeout');
}, 4000); */


/* setInterval(() => {
    console.log('Executando a cada 3 segundos');
}, 3000); */



/* console.log('console depois do set timeout') */

// como limpar o interval/timeout

const idDoIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos');
}, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);