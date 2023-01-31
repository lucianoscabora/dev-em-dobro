document.getElementById('tirar-carta').addEventListener('click', () => {
    tirarUmaCartaAleatoriaDoBaralho();
})

async function criarBaralhoEmbaralhado() {
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const response = await fetch(url)
    // .json para transformar o retorno da API para o objeto que queremos
    return await response.json();
}

 // criarBaralhoEmbaralhado();

async function tirarUmaCarta(deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const response = await fetch(url);
    return await response.json();

}

async function tirarUmaCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado();
    const carta = await tirarUmaCarta(baralho.deck_id);
    const imageCarta = carta.cards[0].image
    document.getElementById('carta').src = imageCarta; 
}

tirarUmaCartaAleatoriaDoBaralho();