// Get grid container and initialise grid as a 16*16 drawing area
const etchASketch = document.querySelector("#etch-a-sketch");
CreateNewGrid(16);

// Set up user control of new grid creation
const newGridButton = document.querySelector("#set-grid-size");
newGridButton.addEventListener('click', function() {
    const newGridSize = Number.parseInt(prompt("Enter new grid size:", 16));

    CreateNewGrid(newGridSize);
});

// Set up switching between greyscale drawings and randomise colour drawings
const bwToggleButton = document.querySelector("#toggle-bw")
let bwToggleOn = 0;

bwToggleButton.addEventListener('click', function() {
    bwToggleOn = 1 - bwToggleOn;
})

/* 
Function which creates an n*n grid of divs - first n columns are created, then n rows are added 
to each collumn. The grid can be drawn on by dragging the mouse over the screen.
The grid size is clamped to between 1 and 100.
*/
function CreateNewGrid(gridSizeRequested) {

    // Remove any previous existing grid
    etchASketch.innerHTML = "";

    let gridSize;

    // Ensure the requested grid size is an integer
    if (!Number.isInteger(gridSizeRequested)) { alert("Error, value must be integer"); return; }

    // Clamp grid size to between 1 and 100 (inclusive)
    if (gridSizeRequested > 100) { gridSize = 100; } 
    else if (gridSizeRequested < 1) { gridSize = 1; }
    else { gridSize = gridSizeRequested; }

    // Create columns
    for (i=0; i<gridSize; i++) {

        // Create a new div element to act as the collumn
        let newX = document.createElement("div");
        newX.classList = "etch-a-sketch-x-item";

        etchASketch.appendChild(newX);

        // Create cells in the current collumn
        for (j=0; j<gridSize; j++) {
        
            // Create a new div item to act as the cell
            let newY = document.createElement("div");
            newY.classList = "etch-a-sketch-y-item";

            // Change colour on mouseover, allowing the user to draw
            newY.addEventListener('mouseover', function() { 
                // Increase opacity of colour
                let oldOpacity = getComputedStyle(newY).getPropertyValue('opacity');
                let opacity = parseFloat(oldOpacity) + 0.1;
                newY.style.opacity = `${opacity}`;

                // Randomly apply new colour
                if (!bwToggleOn){
                    newY.style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
                }
            })

            newX.appendChild(newY);

        }
    }

}