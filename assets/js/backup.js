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
    // 🔻 bugs right side: 10 nums
    || bombsArray.includes(cellNumb - (gridLength * 2) + 1)
    // ↗ Nord-est blue cell 36
    || bombsArray.includes(cellNumb + (gridLength * 2) + 1)
    // ➡ Est blue cell 76
    // 🔻 bugs left side: 10+1 nums
    || bombsArray.includes(cellNumb - (gridLength * 2) - 1)
    //  ↖ Nord-west blue cell 34
    || bombsArray.includes(cellNumb + (gridLength * 2) - 1)
    // ⬅ West blue cell 74
    // -----------

    || !twoRightSide && bombsArray.includes(cellNumb - (gridLength * 2) + 2)
    // ↗↗ Nord-est-est blue cell 37
    || !twoRightSide && bombsArray.includes(cellNumb - gridLength + 2)
    // ➡ West blue cell 47
    || !twoRightSide && bombsArray.includes(cellNumb + gridLength + 2)
    // ↘ South-est blue cell 67
    || !twoRightSide && bombsArray.includes(cellNumb + (gridLength * 2) + 2)
    // ↘↘ South-est-est blue cell 77
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