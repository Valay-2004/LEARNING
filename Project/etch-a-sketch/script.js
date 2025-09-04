let giveNum;
let isDrawing = false;
let isEraser = false;
const container = document.querySelector(".container");

function toggleEraser(){
    isEraser = !isEraser;
    document.querySelector("#eraserBtn").textContent = isEraser ? "Eraser ON" : "Eraser OFF";
}

function giveCount() {
  giveNum = parseInt(prompt("Enter a Number (less than 100)", "16"));
  if (isNaN(giveNum) || giveNum <= 0 || giveNum > 100) {
    alert("You cannot create box of more than 100 in here");
    return;
  }
  manyDivs(giveNum);
}

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function manyDivs(size) {
  //clear old grid
  container.innerHTML = "";

  // calculate dynamic square size
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const manyDiv = document.createElement("div");
    manyDiv.classList.add("grid-square"); // for styling

    // set dynamic size
    manyDiv.style.width = `${squareSize}px`;
    manyDiv.style.height = `${squareSize}px`;
    container.appendChild(manyDiv);
  }

  const grids = document.querySelectorAll(".grid-square");
  grids.forEach((square) => {
    square.addEventListener("click", () => {
      isDrawing = !isDrawing;
              if(isEraser){
            square.style.backgroundColor = "white";
        } else {
            square.style.backgroundColor = getRandomRgbColor();
        }
    });

    square.addEventListener("mouseover", () => {
      if (isDrawing) {
        square.style.backgroundColor = getRandomRgbColor()
      }
    });

    // square.addEventListener("mouseout", () => {
    //   square.style.backgroundColor = getRandomRgbColor();
    // });
  });
}

// default grid for starting
document.addEventListener("DOMContentLoaded", () => {
  manyDivs(16);
});
