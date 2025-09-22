const etchASketch = document.querySelector("#etch-a-sketch");

for (i=0; i<16; i++) {

    let newX = document.createElement("div");
    newX.classList = "etch-a-sketch-x-item";

    etchASketch.appendChild(newX);

    for (j=0; j<16; j++) {
        
        let newY = document.createElement("div");
        newY.classList = "etch-a-sketch-y-item";

        newX.appendChild(newY);

    }
}