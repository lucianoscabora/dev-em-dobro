let frutas = ['maca', 'banana', 'laranja', 'pera']

// exemplo de como pegar o tamanho do array
//let frutasTamanho = frutas.length;

/* for(let i = 0; i<frutas.length; i++) {
    console.log('Fruta: ' + frutas[i]);
} */

frutas.forEach(function(item, indice, array){
    console.log('Fruta: ' + item);
})
