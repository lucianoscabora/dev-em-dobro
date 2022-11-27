// Anatomia do switch

/* 
 switch(parametro) {
    case valor1:
    <bloco de declaracao>
    case valor2:
    <bloco de declaracao>
 }
*/
/* 
let nomeFilme = "Homem Aranha";

switch(nomeFilme) {
    case "Vingadores": 
    console.log("É o filme dos Vingadores");
    break;
    case "Batoma":
    console.log("É o filme do Batman");
    break;
    default:
    console.log("Não é nem um nem outro");
    break;
} */

let avaliacao = 5;

switch(avaliacao) {
    case 1:
    case 2:
        console.log("Filme ruim");
        break;

    case 3:
    case 4:
        console.log("Filme mediano");
        break;
        
    case 5:
        console.log("Que filme bom");
        break;
        
    default:
        console.log("Nota invalida.");
        break;   
}