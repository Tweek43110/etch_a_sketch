let container = document.getElementById('container');

function addDiv(){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid');
    newDiv.textContent= "Hello";
    container.appendChild(newDiv);
}

//creates 16 div elements
var i;
for (i = 0; i < 16; i++) {
    addDiv(i);
}







