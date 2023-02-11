// create a grid 1x4 grid of divs

const gridHolder = document.querySelector(".gridHolder");
const resetButton = document.querySelector(".reset");

function createCanvas(gridSize) {
  for (let i = 1; i < gridSize + 1; i++) {
    const layer = document.createElement("div");
    layer.classList.add("layer");
    layer.setAttribute("style", "display:flex;flex:0");

    for (let j = 1; j < gridSize + 1; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add(`square${i * j}`);
      square.setAttribute(
        "style",
        `height:${960 / gridSize}px;width:${
          960 / gridSize
        }px;background-color:red; border: 1px solid black`
      );
      layer.appendChild(square);
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    }
    gridHolder.appendChild(layer);
  }
}

function resetCanvas() {
  while (gridHolder.firstChild) gridHolder.removeChild(gridHolder.firstChild);
  let gridSize;
  while (gridSize > 100 || gridSize < 1 || isNaN(gridSize)) {
    gridSize = parseInt(prompt("What size grid"));
  }
  createCanvas(gridSize);
}

function logFunc() {
  console.log("button works");
}

createCanvas(16);
resetButton.onclick = function () {
  resetCanvas();
};
