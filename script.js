let container = document.getElementById('container');

function addDiv(){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid');
    container.appendChild(newDiv);
}

//create 70 div elements
for (let i = 0; i < 70; i++) {
    addDiv();
}

//Create variable for grid class
let grid = document.getElementsByClassName('grid');

//Apply event listener to all grid elements after they have been created
for (let i = 0; i<70; i++) {
    console.log(grid[i]);
    grid[i].addEventListener('mouseover', drawColor)
    }

let color = document.getElementsByClassName('grid');

function drawColor(e) {
    console.log(e);
    e.toElement.style.backgroundColor = "grey";
}