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
        // ☝ questo prende via via le singole celle (inutile?)

        const singleCell = document.createElement('div');

        cellContainer.appendChild(singleCell);
        // ci serve un elemento della DOM, lo creo e li aggiungo uno dietro l'altro

        singleCell.className = 'cell'
        singleCell.textContent = `${i}`

        singleCell.classList.add('hidden')
        // questo aggiunge il contenuto
        singleCell.style.width = `calc(100% / ${Math.sqrt(numbOfCells)})`

        // gli assegno le prorietá che ci servono

        //📢 ad ogni cella aggiungo gli eventi al click

        singleCell.addEventListener("click", function () {
            console.log('premuto cella');
            singleCell.classList.remove("hidden")

        })


        // 🔽🔽 💣💣💣 questo aggiunge le bombe

        const cellNumb = Number(singleCell.textContent);
        // leggo in contenuto della cella

        if (bombsArray.includes(cellNumb)) {
            // se sta nell'bombsArray ci aaggiungo la bomba
            singleCell.classList.add('bomb')


        }


        // coordinate 👇

        let firstRow = []

        singleCell.addEventListener('click', function () {

            if (singleCell.textContent <= Math.sqrt(numbOfCells)) {
                console.log('questo numero é nella prima riga');

            }
        })

    }



}

function genBombsArray(maxBombs, numbOfCells) {

    bombsArray = []
    // svuoto l'array 

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
    console.log("premuto il tasto play");

    numbOfCells = Number(selectElement.value);
    // qua leggo il valore scelto dall'utente di difficoltá

    genBombsArray(16, numbOfCells);
    // genero le dannatissime bombe
    console.log(bombsArray);


    generateField(containerElement, numbOfCells);
    // questa funzione genera il campo




})










