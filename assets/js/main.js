/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */
const buttonElement = document.getElementById("playButton");

const selectElement = document.getElementById("difficulty");

let numbOfCells



buttonElement.addEventListener('click', function () {
    const containerElement = document.querySelector('.container')

    containerElement.innerHTML = ''
    // questo affare svuota la tabella prima che succeda altro

    // -parte bonus
    numbOfCells = Number(selectElement.value);
    console.log(numbOfCells);

    // devo generare una cella x 100 volte
    for (let i = 1; i < numbOfCells + 1; i++) {
        const cellCreator = `<div class="cell">${i}</div>`;

        // creo una variabile con dentro una stringa che ha proprio il markUp giusto
        // ci scrivo giá il numero con TL che é lo stesso di i
        containerElement.innerHTML += cellCreator
        // scrivodentro a container il markup


    }

    // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

    const cellElementArray = document.querySelectorAll('.cell')
    // ---------------------------------------------------------
    // devo generare 16 bombe
    let bombsArray = []
    // il mio array di numeri bomba
    function randNumb(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let y = 1
    while (y <= 16) {

        let rndNumb = randNumb(1, numbOfCells);

        if (!bombsArray.includes(rndNumb)) {
            // questo verifica se bombsArray NON include giá il numero, nel caso lo aggiunge all'array
            bombsArray.push(rndNumb)

        } else {

            continue;
        }

        y++
    }

    console.log(bombsArray);
    // ---------------------------------------------------------------


    // selezionare tutte le celle cosí creo un Array con dentro tutte le singole celle


    for (let i = 0; i < cellElementArray.length; i++) {
        const thisCell = cellElementArray[i];
        // console.log(thisCell);
        // ----
        thisCell.addEventListener("click", function () {
            thisCell.classList.toggle("activeCell")
        })

        // ho aggiunto ad ogni cella (ciclando dentro l'array di tutte le celle) un event listener che toggla la classe "activeCell"

        thisCell.style.width = `calc(100% / ${Math.sqrt(numbOfCells)})`
        // prendo ogni cella e gli aggiungo la proprietá css width calc etc. per fare tornare le dimensioni


        if (i == bombsArray[i]) {
            console.log('bomba');
            thisCell.classList.add('bomb')
        }





    }



})












