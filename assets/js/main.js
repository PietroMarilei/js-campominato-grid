/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */



// devo generare una cella x 100 volte
const containerElement = document.querySelector('.container')
// seleziono il container dalla DOM
// perché se usavo getElementByClassName non va ? perché InnerHTML non gli piace 



const numbOfCells = 100

for (let i = 0; i < numbOfCells; i++) {
    const cellCreator = `<div class="cell t">${i}</div>`;
    // creo una variabile con dentro una stringa che ha proprio il markUp giusto
    // ci scrivo giá il numero con TL che é lo stesso di i
    containerElement.innerHTML += cellCreator
    // scrivodentro a container il markup
}


// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// il bottone richiede un event listener che attiva tutto il codice, lo facciamo per ultimo