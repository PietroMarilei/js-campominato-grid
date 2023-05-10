// le bombe sono 12, ma si potrebbe poterle impostare!

const buttonElement = document.getElementById("playButton");

const selectElement = document.getElementById("difficulty");

const bombsElement = document.getElementById('bombs')

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

        // 🔽 questo crea le celle via via

        const singleCell = document.createElement('div');

        cellContainer.appendChild(singleCell);
        // ci serve un elemento della DOM, lo creo e li aggiungo uno dietro l'altro

        singleCell.className = 'cell'
        // questo aggiunge il contenuto
        singleCell.textContent = `${i}`


        singleCell.classList.add('hidden')

        singleCell.style.width = `calc(100% / ${Math.sqrt(numbOfCells)})`

        // gli assegno le prorietá che ci servono



        // 🔽 💣💣💣 questo aggiunge le bombe

        const cellNumb = Number(singleCell.textContent);
        // leggo in contenuto della cella

        if (bombsArray.includes(cellNumb)) {
            // se sta nell'bombsArray ci aaggiungo la bomba
            singleCell.classList.add('bomb')

            //❤ idea:  basta leggere il numero delle caselle. Quella con la bomba é x. Quella alla sua destra é x+1, x-1 a sinistra. Quella sopra é x-lafila, quella sotto é x+lafila.



        } else if (bombsArray.includes(cellNumb - 1)) {
            singleCell.classList.add('green');


        } else if (bombsArray.includes(cellNumb + 1)) {
            singleCell.classList.add('green')

        } else if (bombsArray.includes(cellNumb - Math.sqrt(numbOfCells))) {
            singleCell.classList.add('green')

        } else if (bombsArray.includes(cellNumb + Math.sqrt(numbOfCells))) {
            singleCell.classList.add('green')

        } else if (bombsArray.includes(cellNumb - Math.sqrt(numbOfCells) - 1)) {
            singleCell.classList.add('green')

        } else if (bombsArray.includes(cellNumb - Math.sqrt(numbOfCells) + 1)) {
            singleCell.classList.add('green')

        } else if (bombsArray.includes(cellNumb + Math.sqrt(numbOfCells) - 1)) {
            singleCell.classList.add('green')

        } else if (bombsArray.includes(cellNumb + Math.sqrt(numbOfCells) + 1)) {
            singleCell.classList.add('green')

        }


        //📢 ad ogni cella aggiungo gli eventi al click

        singleCell.addEventListener("click", function () {
            console.log('premuto cella');
            singleCell.classList.remove("hidden")

        })









    }






}

function genBombsArray(numbofBombs, numbOfCells) {

    bombsArray = []
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







