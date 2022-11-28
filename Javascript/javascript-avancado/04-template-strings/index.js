// Concatenando

/* const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return "Primeiro Nome: " + primeiroNome + " Último Nome: " + ultimoNome + ". Idade: " + idade;
}

console.log(imprimirInformacoesPessoa ("Luciano", "Scabora", 31)); */


// Agora com template strings

/* const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return `Primeiro Nome: ${primeiroNome} Último Nome: ${ultimoNome} e idade: ${idade}`;
}

console.log(imprimirInformacoesPessoa ("Luciano", "Scabora", 31)); */

// Também é possível usar em funções

  const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return `Primeiro Nome: ${primeiroNome} Último Nome: ${ultimoNome} e idade: ${idade}`;
}

  console.log(`${imprimirInformacoesPessoa("Luciano", "Scabora", 31)}, ele é um dev`)



