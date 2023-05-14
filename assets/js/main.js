// le bombe sono 12, ma si potrebbe poterle impostare!

const buttonElement = document.getElementById("playButton");

const selectElement = document.getElementById("difficulty");

const bombsElement = document.getElementById('bombs')

const containerElement = document.querySelector('.container')

let numbOfCells

let bombsArray = new Set([])
// a set can't have duplicates

let playerScore = 0


function addGreenPoints() {
    playerScore += 3
    console.log("Il punteggio del giocatore è ora di " + playerScore);

}

function addBluePoints() {
    playerScore +=
        console.log("Il punteggio del giocatore è ora di " + playerScore);

}



function generateField(cellContainer, numbOfCells,) {
    cellContainer.innerHTML = '';
    // questo affare svuota la tabella prima che succeda altro

    // devo generare una cella x 100 volte
    for (let i = 1; i < numbOfCells + 1; i++) {
        const thisCell = numbOfCells[i];
        // ☝ questo prende via via le singole celle (inutile?)

        // 🔽 questo crea le celle via via

        const singleCell = document.createElement('div');

        cellContainer.appendChild(singleCell);
        // ci serve un elemento della DOM, lo creo e li aggiungo uno dietro l'altro

        singleCell.className = 'cell'
        // questo aggiunge il contenuto
        singleCell.textContent = `${i}`


        // singleCell.classList.add('hidden')

        singleCell.style.width = `calc(100% / ${Math.sqrt(numbOfCells)})`

        // gli assegno le prorietá che ci servono


        //📢 ad ogni cella aggiungo gli eventi al click

        singleCell.addEventListener("click", function () {
            console.log('premuto cella');
            singleCell.classList.remove("hidden")

        })

        // 🔽 💣💣💣 this part adds bombs

        let gridLength = Math.sqrt(numbOfCells);
        const cellNumb = Number(singleCell.textContent);

        const atRightSide = cellNumb % gridLength === 0;
        const atLeftSide = (cellNumb - 1) % gridLength === 0;

        const twoRightSide = cellNumb % gridLength === 0 || (cellNumb + 1) % gridLength === 0;
        //check 9+10 nums and 10 multiplies
        const twoLeftSide = (cellNumb - 1) % gridLength === 0 || (cellNumb) % gridLength === 2;
        // check 1+10 nums and 2+10 nums

        if (bombsArray.includes(cellNumb)) {
            singleCell.classList.add('bomb')

            // 🔽🔽💚 this create green cells

        } else if (!atLeftSide && bombsArray.includes(cellNumb - 1)
            || !atRightSide && bombsArray.includes(cellNumb + 1)
            || bombsArray.includes(cellNumb - gridLength)
            || bombsArray.includes(cellNumb + gridLength)
            || !atLeftSide && bombsArray.includes(cellNumb - gridLength - 1)
            || !atRightSide && bombsArray.includes(cellNumb - gridLength + 1)
            || !atLeftSide && bombsArray.includes(cellNumb + gridLength - 1)
            || !atRightSide && bombsArray.includes(cellNumb + gridLength + 1)
        ) {

            singleCell.classList.add('green');
            singleCell.addEventListener('click', function () {
                addGreenPoints()
            })

            // 🔽🔽💙 this create blue cells (example 55)

        } else if (
            !twoLeftSide && bombsArray.includes(cellNumb - 2)
            // 53
            || !twoRightSide && bombsArray.includes(cellNumb + 2)
            // 57
            //left and right blue cell

            || bombsArray.includes(cellNumb - (gridLength * 2))
            || bombsArray.includes(cellNumb + (gridLength * 2))
            // these are the top/bottom blue cells

            || !twoLeftSide && bombsArray.includes(cellNumb - (gridLength * 2) - 2)
            // ↖↖ Nord-west-west blue cell (33)

            // -----------
            || bombsArray.includes(cellNumb - (gridLength * 2) - 1) && bombsArray.includes(cellNumb - 1) % gridLength === 1
            //  ↖ Nord-west blue cell 34
            || bombsArray.includes(cellNumb - (gridLength * 2) + 1) && bombsArray.includes(cellNumb - 1) % gridLength === 1
            // ↗ Nord-est blue cell 36
            || bombsArray.includes(cellNumb + (gridLength * 2) + 1) && bombsArray.includes(cellNumb - 1) % gridLength === 1
            // ➡ Est blue cell 76
            // -----------

            || !twoRightSide && bombsArray.includes(cellNumb - (gridLength * 2) + 2)
            // ↗↗ Nord-est-est blue cell 37
            || !twoRightSide && bombsArray.includes(cellNumb - gridLength + 2)
            // ➡ West blue cell 47
            || !twoRightSide && bombsArray.includes(cellNumb + gridLength + 2)
            // ↘ South-est blue cell 67
            || !twoRightSide && bombsArray.includes(cellNumb + (gridLength * 2) + 2)
            // ↘↘ South-est-est blue cell 77
            || bombsArray.includes(cellNumb + (gridLength * 2) - 1)
            // ⬅ West blue cell 74
            || !twoLeftSide && bombsArray.includes(cellNumb + (gridLength * 2) - 2)
            // ↙↙ South-west-west blue cell 73
            || !twoLeftSide && bombsArray.includes(cellNumb + gridLength - 2)
            // ⬅ Est blue cell 63
            || !twoLeftSide && bombsArray.includes(cellNumb - gridLength - 2)
            // ⬅ Est blue cell 43

        ) {

            singleCell.classList.add('blue');
            singleCell.addEventListener('click', function () {
                addBluePoints()
            })

        }

        // if ((cellNumb % gridLength === 1) && (bombsArray.includes(cellNumb) % gridLength === 0) && cellNumb === bombsArray) {
        //     singleCell.classList.remove('blue')

        //     console.log('ciao');

        // }

    }
}





function genBombsArray(numbofBombs, numbOfCells) {
    let gridLength = Math.sqrt(numbOfCells);

    bombsArray = []
    // svuoto l'array 

    function rndNumb(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    for (let y = 0; y < numbofBombs; y++) {

        let randNumb = rndNumb(1, numbOfCells);

        // 🧀 this exludes border numbers

        // const atRightSide = randNumb % gridLength === 0 || (randNumb + 1) % gridLength === 0;
        // const atLeftSide = (randNumb - 1) % gridLength === 0 || (randNumb) % gridLength === 2;

        // if (!atLeftSide & !atRightSide && !bombsArray.includes(randNumb)) {
        //     bombsArray.push(randNumb)

        // }

        bombsArray.push(randNumb)

    }

}







// qua sotto si scatena l'evento play ⬇️ 🕹️

buttonElement.addEventListener('click', function () {
    console.log("premuto il tasto play");

    numbOfCells = Number(selectElement.value);
    // qua leggo il valore scelto dall'utente di difficoltá

    numbofBombs = Number(bombsElement.value)

    genBombsArray(numbofBombs, numbOfCells);
    // genero le dannatissime bombe
    console.log(bombsArray);


    generateField(containerElement, numbOfCells);
    // questa funzione genera il campo



})







