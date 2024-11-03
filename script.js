const body = document.querySelector('body');
const btn = document.querySelector('button');

// Click even including action function
btn.addEventListener('mousedown', clearGrid);
btn.addEventListener('mouseup', createDiv);

//ClearGrid
function clearGrid() {
    const div = document.querySelector('div');
    body.removeChild(div);
}

function createDiv() {
   const div = document.createElement ('div');
   div.classList.add('container');
   body.appendChild(div);
   askUserInput(); 
}

function askUserInput() {
   let x = 0;
   let userInput = prompt ("How many squares per side for the new grid? (Less than 100)");
   x = Number(userInput);
   if (x<=100) {
        createGrid(x);
   } else alert ('Please enter a number lower than 100');
}

// Grill functions
function createGrid (x) {
    for (let i=0; i<x; i++) {
        const rowDiv = document.createElement('div');
        for (let j=0; j<x; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('column');
            rowDiv.appendChild(colDiv);
        }
        rowDiv.classList.add('row');
        const container = document.querySelector('.container');
        container.appendChild(rowDiv);
    }
    paintEffect();
}
// Mousehover event including action function
function paintEffect() {
    const divs = document.querySelectorAll('.column');
    divs.forEach((div) => {
        div.addEventListener('mouseover', hoverColorEffect);
    });
}

//Over effect using one color defined in CSS file.
//function hoverEffect(e) {
//    e.target.classList.add('over');
//} 

// Function with opacity 10% increments
let o = 0;
function hoverColorEffect(e) {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    if (o<0.9) {
    o += 0.1; 
    } else o = 0;
    e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${o})`;
} 