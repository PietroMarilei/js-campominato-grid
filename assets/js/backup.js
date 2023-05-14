// 🔽 💣💣💣 this part adds bombs

let gridLength = Math.sqrt(numbOfCells);
const cellNumb = Number(singleCell.textContent);

const atRightSide = cellNumb % gridLength === 0;
const atLeftSide = (cellNumb - 1) % gridLength === 0;

// const twoLeftSide = (cellNumb - 2) % gridLength === 0;
// const twoRightSide = (cellNumb + 2) % gridLength === 0;

const twoRightSide = cellNumb % gridLength === 0 || (cellNumb + 1) % gridLength === 0;
const twoLeftSide = (cellNumb - 1) % gridLength === 0 || (cellNumb) % gridLength === 2;

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
    !twoLeftSide && bombsArray.includes(cellNumb - 2)
    // 53
    || !twoRightSide && bombsArray.includes(cellNumb + 2)
    //57

    || bombsArray.includes(cellNumb - (gridLength * 2))
    // 35
    || bombsArray.includes(cellNumb + (gridLength * 2))
    // 75
    // these are the top/bottom cells

    || !twoLeftSide && bombsArray.includes(cellNumb - (gridLength * 2) - 2)
    || !twoLeftSide && bombsArray.includes(cellNumb - (gridLength * 2) - 1)
    // 33 34
    || !twoLeftSide && bombsArray.includes(cellNumb - (gridLength * 2) + 1)
    || !twoRightSide && bombsArray.includes(cellNumb - (gridLength * 2) + 2)
    // 36 37
    || !twoRightSide && bombsArray.includes(cellNumb - gridLength + 2)
    // 47
    || !twoLeftSide && bombsArray.includes(cellNumb - gridLength - 2)
    // 43
    || !twoRightSide && bombsArray.includes(cellNumb + gridLength + 2)
    // 67
    || !twoRightSide && bombsArray.includes(cellNumb + (gridLength * 2) + 2)
    //77
    || !twoRightSide && bombsArray.includes(cellNumb + (gridLength * 2) + 1)
    // 76
    || !twoLeftSide && bombsArray.includes(cellNumb + (gridLength * 2) - 1)
    // 74
    || !twoLeftSide && bombsArray.includes(cellNumb + (gridLength * 2) - 2)
    // 73
    || !twoLeftSide && bombsArray.includes(cellNumb + gridLength - 2)
    // 63

) {

    singleCell.classList.add('blue');
    singleCell.addEventListener('click', function () {
        addBluePoints()
    })


}