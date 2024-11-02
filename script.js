const container = document.querySelector('.container');
let x = 16;
let y = 16;
for (let i=0; i<x; i++) {
    const rowDiv = document.createElement('div');
    for (let j=0; j<y; j++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('column');
        rowDiv.appendChild(colDiv);
    }
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);
}

const divs = document.querySelectorAll('.column');
divs.forEach((div) => {
    div.addEventListener('mouseover', hoverEffect);
});

function hoverEffect (e) {
    e.target.classList.add('over');
} 
