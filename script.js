// Click even including action function
const btn = document.querySelector('button');
btn.addEventListener('click', askUserInput);

function askUserInput () {
   let x = 0;
   let userInput = prompt ("How many squares per side for the new grid? (Less than 100)");
   x = Number(userInput);
   if (x<=100) {
   createGrid(x);
   btn.removeEventListener('click', askUserInput);
   } else alert ('Please enter a number lower than 100');
}
// Grill functions
function createGrid (x) {
    const container = document.querySelector('.container');
    for (let i=0; i<x; i++) {
        const rowDiv = document.createElement('div');
        for (let j=0; j<x; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('column');
            rowDiv.appendChild(colDiv);
        }
        rowDiv.classList.add('row');
        container.appendChild(rowDiv);
    }
    paintEffect ();
}
// Mousehover event including action function
function paintEffect () {
    const divs = document.querySelectorAll('.column');
    divs.forEach((div) => {
        div.addEventListener('mouseover', hoverEffect);
    });
    function hoverEffect (e) {
        e.target.classList.add('over');
    } 
}