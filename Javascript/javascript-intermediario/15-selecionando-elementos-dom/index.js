//Selecionando um elemento pelo ID

let resultado = document.getElementById('paragrafo1')
console.log(resultado);

//Selecionando um elemento pela classe

let inputsPorClasse = document.getElementsByClassName('tag-de-input');
console.log(inputsPorClasse[0]);

//Selecionando um elemento pela tag

let inputPorTag = document.getElementsByTagName('input');
console.log(inputPorTag);

//Selecionando elementos por um atributo 

let inputPorName = document.querySelectorAll("input[name='email'");
console.log(inputPorName);

