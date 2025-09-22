const etchASketch = document.querySelector("#etch-a-sketch");

CreateNewGrid(16);
CreateNewGrid(32);

function CreateNewGrid(gridSizeRequested) {

    etchASketch.innerHTML = "";

    let gridSize;

    if (!Number.isInteger(gridSizeRequested)) { alert("Error, value must be integer"); return; }

    if (gridSizeRequested > 100) { gridSize = 100; } 
    else if (gridSizeRequested < 1) { gridSize = 1; }
    else { gridSize = gridSizeRequested; }

    for (i=0; i<gridSize; i++) {

        let newX = document.createElement("div");
        newX.classList = "etch-a-sketch-x-item";

        etchASketch.appendChild(newX);

        for (j=0; j<gridSize; j++) {
        
            let newY = document.createElement("div");
            newY.classList = "etch-a-sketch-y-item";

            newY.addEventListener('mouseover', () => newY.style = "background: grey")

            newX.appendChild(newY);

        }
    }

}