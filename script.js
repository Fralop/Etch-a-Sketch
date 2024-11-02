const container = document.querySelector('.container');
let x = 3;
let y = 5;
for (let i=0; i<x; i++) {
    const rowDiv = document.createElement('div');
    for (let j=0; j<y; j++) {
        const colDiv = document.createElement('div');
        rowDiv.appendChild(colDiv);
        colDiv.classList.add('column');
    }
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);
}