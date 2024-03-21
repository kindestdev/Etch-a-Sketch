// Big Container
const container = document.querySelector('.container');

let gridNum = 16;

//buttons

//colors btn
let penColor = 'black';
let colorRandom = document.querySelector('.randomColor')
colorRandom.addEventListener('click', ()=>{
    penColor = 'random';
})
let colorBlack = document.querySelector('.blackColor')
colorBlack.addEventListener('click', ()=>{
    penColor ='black'
})
let colorWhite = document.querySelector('.whiteColor')
colorWhite.addEventListener('click', ()=>{
    penColor ='white'
})



//resetButton
const resetButton = document.querySelector('#eraseBtn')
resetButton.addEventListener('click', () => {
    resetColors();
});
function resetColors(){
    const cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'
    })
}


//Grid size Button
const gridButton = document.querySelector('#gridBtn');

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

    for(let i = 0; i < gridNum; i++){
        const rows = document.createElement ('div');
        rows.classList.add('rows');

        for(let l = 0 ; l < gridNum ; l++){
            const cells = document.createElement('div');
            cells.classList.add('cells');
            rows.appendChild(cells);

            cells.addEventListener('mouseover', () => {
                if( penColor === 'black'){
                 cells.style.backgroundColor = 'black';
             }else if (penColor === 'white'){
                 cells.style.backgroundColor = 'white';
             }else if ( penColor === 'random'){
                 cells.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
             }
             })
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

        cells.addEventListener('mouseover', () => {
           if( penColor === 'black'){
            cells.style.backgroundColor = 'black';
        }else if (penColor === 'white'){
            cells.style.backgroundColor = 'white';
        }else if ( penColor === 'random'){
            cells.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        })
    }
    container.appendChild(rows);
}

