/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */
const buttonElement = document.getElementById("playButton");

const selectElement = document.getElementById("difficulty");

const containerElement = document.querySelector('.container')

let numbOfCells

let bombsArray = []

function generateField(cellContainer, numbOfCells,) {
    cellContainer.innerHTML = '';
    // questo affare svuota la tabella prima che succeda altro


    // devo generare una cella x 100 volte
    for (let i = 1; i < numbOfCells + 1; i++) {
        const thisCell = numbOfCells[i];
        // ☝ questo prende via via le singole celle

        const cellMKCreator = `<div class="cell">${i}</div>`;
        // creo una variabile con dentro una stringa che ha proprio il markUp giusto
        // ci scrivo giá il numero con TL che é lo stesso di i
        containerElement.innerHTML += cellMKCreator
        // scrivodentro a container il markup
        // ------------------------
        // qua sotto modifico le celle 👇
        thisCell.style.width = `calc(100% / ${Math.sqrt(numbOfCells)})`
        // questo gli da le dimensione corretta

        //💣 ad ogni cella aggiungo gli eventi al click

        thisCell.addEventListener("click", function () {

            thisCell.classList.toggle("activeCell")
            // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
        })
    }


}

function genBombsArray(maxBombs, numbOfCells) {

    function rndNumb(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let y = 0; y < maxBombs - 1; y++) {
        // const thisBomb = array[y];

        let randNumb = rndNumb(1, numbOfCells);

        if (!bombsArray.includes(randNumb)) {
            // questo verifica se bombsArray NON include giá il numero, nel caso lo aggiunge all'array
            bombsArray.push(randNumb)
        }

    }
}


// qua sotto si scatena l'evento play ⬇️ 🕹️

buttonElement.addEventListener('click', function () {
    console.log("play");

    numbOfCells = Number(selectElement.value);
    // qua leggo il valore scelto dall'utente di difficoltá

    generateField(containerElement, numbOfCells);
    // questa funzione genera il campo

    const cellElementArray = document.querySelectorAll('.cell')
    // ora posso selezionare la singola cella

    genBombsArray(16, numbOfCells);
    // genero le dannatissime bombe

    console.log(bombsArray);



    // selezionare tutte le celle cosí creo un Array con dentro tutte le singole celle


    for (let i = 0; i < cellElementArray.length; i++) {
        const thisCell = cellElementArray[i];

        // ----
        thisCell.addEventListener("click", function () {
            thisCell.classList.toggle("activeCell")
            // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        })

        // ho aggiunto ad ogni cella (ciclando dentro l'array di tutte le celle) un event listener che toggla la classe "activeCell"

        thisCell.style.width = `calc(100% / ${Math.sqrt(numbOfCells)})`
        // prendo ogni cella e gli aggiungo la proprietá css width calc etc. per fare tornare le dimensioni

        const cellNumb = Number(thisCell.textContent);
        console.log(cellNumb);

        if (bombsArray.includes(cellNumb)) {

            console.log('bomba');
            thisCell.classList.add('bomb')
        }





    }



})












