const pessoas = ['Luciano', 'Lynkos', 'Miluda'];
console.log(...pessoas);

// como fazia antigamente para concatenar 2 arrays

let pessoas1 = ['Luciano', 'Lynkos', 'Miluda'];
let pessoas2 = ['Pedro', 'Joao', 'Paulo'];

//pessoas1 = pessoas1.concat(pessoas2);

// agora com spread

pessoas1 = [ ...pessoas1, ...pessoas2]
console.log(pessoas1);

// outro exemplo: para clonar o objeto

const pessoa1 = { nome: 'Luciano', idade: 31 }

const objClonado = { ...pessoa1}
console.log(objClonado);

