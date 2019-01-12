let container = document.getElementById('container');

function createGrid() {
    let i = 0;
    //Default grid size
    let j = 64;

    function addDiv(){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid');
        container.appendChild(newDiv);
    }
    //create 64 div elements
    for (i = 0; i < j; i++) {
        addDiv();
    }

    //Create variable for grid class
    let grid = document.getElementsByClassName('grid');

    //Apply event listener to all grid elements after they have been created
    for (let i = 0; i < 64; i++) {
        grid[i].addEventListener('mouseover', drawColor)
        }

    function drawColor(e) {
        //Was getting error with grid.style.backgroundColor being undefined
        e.toElement.style.backgroundColor = "grey";
    }

    //Button instructions
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetGrid);
}
createGrid();

function resetGrid() {
    let newGrid = prompt('What size should the new grid be? (10-64)');
    
    function removeElements() {
        //Taken from here: https://stackoverflow.com/questions/3387427/remove-element-by-id
        Element.prototype.remove = function() {
            this.parentElement.removeChild(this);
        }
        NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
            for(var i = this.length - 1; i >= 0; i--) {
                if(this[i] && this[i].parentElement) {
                    this[i].parentElement.removeChild(this[i]);
                }
            }
        }
        document.getElementsByClassName('grid').remove();
    }
    
    if (newGrid < 10 || newGrid > 64) {
        newGrid = prompt("Please enter a value between 10 and 64");
    } else if (newGrid >= 10 || newGrid <= 64) {
        console.log(newGrid);
        let j = newGrid;
        removeElements(); 
        createGrid();   
    }
}
