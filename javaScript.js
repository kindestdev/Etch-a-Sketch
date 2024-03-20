// Big Container
const container = document.querySelector('.container');
const btnContainer = document.createElement('div')
btnContainer.classList.add('btnContainer');
document.body.appendChild(btnContainer)

let gridNum = 16;
 

//buttons
//resetButton
const resetButton = document.createElement('button')
resetButton.classList.add('btn')
resetButton.textContent = 'Erase'
resetButton.addEventListener('click', () => {
    resetColors();
});
function resetColors(){
    const cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.classList.remove('clicked')
    })
}
btnContainer.appendChild(resetButton)


//GridButton
const gridButton = document.createElement('button');
gridButton.classList.add('gridBtn')
gridButton.textContent = 'Grid';
btnContainer.appendChild(gridButton)

//bychatgpt
gridButton.addEventListener('click', ()=> {
    const inputValue = prompt('Enter the desired grid size (0-100)');
    const newSize = parseInt(inputValue);
    if(newSize >= 1 && newSize <= 100){
        gridNum = newSize;
        resetGrid();
    }else {
        alert('Please enter a number between 1 and 100.');
    }
})

function resetGrid(){
    container.innerHTML = '';

    for(let i = 0; i < gridNum; i++){
        const rows = document.createElement ('div');
        rows.classList.add('rows');

        for(let l = 0 ; l < gridNum ; l++){
            const cells = document.createElement('div');
            cells.classList.add('cells');
            rows.appendChild(cells);

            cells.addEventListener('mousedown', ()=> {
                cells.classList.add('clicked');
            });
        }
        container.appendChild(rows)
    }
};



for (let i = 0 ; i < gridNum ; i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');

    for ( let l = 0 ; l < gridNum ; l++){
        const cells = document.createElement('div');
        cells.classList.add('cells');
        rows.appendChild(cells)

        cells.addEventListener('mousedown', () => {
            cells.classList.add('clicked');
        })
    }
    container.appendChild(rows);
}









//colorear cuando dejo el click presionado.
let isMouseDown = false;

// Function to handle mouse down event
function handleMouseDown() {
    isMouseDown = true;
}

// Function to handle mouse up event
function handleMouseUp() {
    isMouseDown = false;
}

// Function to handle mouse over event
function handleMouseOver(e) {
    if (isMouseDown) {
        e.target.classList.add('clicked');
    }
}

// Add event listeners to container
container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseup', handleMouseUp);
container.addEventListener('mouseover', handleMouseOver);










// const row1 = document.createElement('div');
// row1.style.height = '30px'
// row1.style.width = '30px'
// row1.style.backgroundColor = 'black'
// row1.style.border = '1px grey solid'
// bigDiv.appendChild(row1);

