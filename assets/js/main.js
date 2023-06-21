
const buttonElement = document.getElementById("play_button");
const selectElement = document.getElementById("difficulty");

const containerElement = document.getElementById('cell_container')

let numbOfCells

buttonElement.addEventListener('click', function () {
    containerElement.innerHTML = ''
    // questo affare svuota la tabella prima che succeda altro

    cellCreator(numbOfCells);

})

/*
FUNCTIONS-------------------------------
*/

function cellCreator(numbOfCells) {
    numbOfCells = selectElement.value
    //prendo il numero delle celle selezionate
    let gridLength = Math.sqrt(numbOfCells);

    for (let i = 1; i <= numbOfCells; i++) {
        console.log('creato cella');
        containerElement.innerHTML += `<div style="width:calc(100% / ${gridLength});" class="cell x${i}">${i}</div>
        </div>`;
        // add clickable
        let singleCellEl = document.querySelector(`.x${i}`);

        singleCellEl.addEventListener('click', function () {
            console.log('cliccato cella');
            singleCellEl.classList.toggle('.active');
        })

    }

}


