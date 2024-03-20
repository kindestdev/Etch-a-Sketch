// Big Container
const container = document.querySelector('.container');

for (let i = 0 ; i < 16 ; i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');

    for ( let l = 0 ; l < 16 ; l++){
        const cells = document.createElement('div');
        cells.classList.add('cells');
        rows.appendChild(cells)

        cells.addEventListener('mousedown', () => {
            cells.classList.add('clicked');
        })
    }
    container.appendChild(rows);
}

const resetButton = document.createElement('button')
resetButton.classList.add('btn')
resetButton.textContent = ('Reset')
resetButton.addEventListener('click', () => {
    location.reload();
})
document.body.appendChild(resetButton)


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

