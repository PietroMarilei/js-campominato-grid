// le bombe sono 12, ma si potrebbe poterle impostare!

const buttonElement = document.getElementById("playButton");

const selectElement = document.getElementById("difficulty");

const bombsElement = document.getElementById('bombs')

const containerElement = document.querySelector('.container')

let numbOfCells

let bombsArray = []

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

        // 🔽 💣💣💣 questo aggiunge le bombe

        let gridLength = Math.sqrt(numbOfCells);
        const cellNumb = Number(singleCell.textContent);

        const atRightSide = cellNumb % gridLength === 0;
        const atLeftSide = (cellNumb - 1) % gridLength === 0;

        const twoLeftSide = (cellNumb - 2) % gridLength === 0;
        const twoRightSide = (cellNumb + 2) % gridLength === 0;




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

            // 🔽🔽💙 this create blue cells

        } else if (
            bombsArray.includes(cellNumb - 2)
            || !twoRightSide && bombsArray.includes(cellNumb + 2)
            || bombsArray.includes(cellNumb - (gridLength * 2))
            || bombsArray.includes(cellNumb + (gridLength * 2))

        ) {

            singleCell.classList.add('blue');
            singleCell.addEventListener('click', function () {
                addBluePoints()
            })

        }
        // } else if (
        //     !twoLeftSide && bombsArray.includes(cellNumb - 2)
        //     || !twoRightSide && bombsArray.includes(cellNumb + 2)

        //     || bombsArray.includes(cellNumb - (gridLength * 2))
        //     || bombsArray.includes(cellNumb + (gridLength * 2))
        //     // these are the top/bottom cells

        //     || !twoLeftSide && bombsArray.includes(cellNumb - gridLength - 2)
        //     || !twoLeftSide && bombsArray.includes(cellNumb - gridLength - 1)
        //     || !twoLeftSide && bombsArray.includes(cellNumb - (gridLength * 2) - 2)
        //     || !twoLeftSide && bombsArray.includes(cellNumb - (gridLength * 2) - 1)
        //     || !twoLeftSide && bombsArray.includes(cellNumb + gridLength - 2)
        //     || !twoLeftSide && bombsArray.includes(cellNumb + gridLength - 1)
        //     || !twoLeftSide && bombsArray.includes(cellNumb + (gridLength * 2) - 2)
        //     || !twoLeftSide && bombsArray.includes(cellNumb + (gridLength * 2) - 1)

        //     || !twoLeftSide && bombsArray.includes(cellNumb - (gridLength * 2) + 1)
        //     || !twoLeftSide && bombsArray.includes(cellNumb + (gridLength * 2) + 1)

        //     || !twoRightSide && bombsArray.includes(cellNumb - gridLength + 2)
        //     || !twoRightSide && bombsArray.includes(cellNumb - (gridLength * 2) + 2)
        //     || !twoRightSide && bombsArray.includes(cellNumb - (gridLength * 2) + 1)
        //     || !twoRightSide && bombsArray.includes(cellNumb + gridLength + 2)
        //     || !twoRightSide && bombsArray.includes(cellNumb + (gridLength * 2) + 2)
        //     || !twoRightSide && bombsArray.includes(cellNumb + (gridLength * 2) + 1)

        //     || !twoRightSide && bombsArray.includes(cellNumb + (gridLength * 2) - 1)
        //     || !twoRightSide && bombsArray.includes(cellNumb - (gridLength * 2) - 1)
        // ) {

        //     singleCell.classList.add('blue');
        //     singleCell.addEventListener('click', function () {
        //         addBluePoints()
        //     })


    }

}




function genBombsArray(numbofBombs, numbOfCells) {

    bombsArray = [41]
    // svuoto l'array 

    function rndNumb(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let y = 0; y < numbofBombs; y++) {
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

    numbofBombs = Number(bombsElement.value)

    genBombsArray(numbofBombs, numbOfCells);
    // genero le dannatissime bombe
    console.log(bombsArray);


    generateField(containerElement, numbOfCells);
    // questa funzione genera il campo



})







