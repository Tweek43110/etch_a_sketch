let container = document.getElementById('container');

function addDiv(){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid');
    container.appendChild(newDiv);
}

//creates 16 div elements
var i;
for (i = 0; i < 16; i++) {
    addDiv(i);
}

/* Hold to figure out why this doesnt work
let grid = document.getElementsByClassName('grid').addEventListener('mouseenter', drawColor);
function drawColor() {
    console.log(e);
}
*/




