let giveNum;
function giveCount() {
  giveNum = parseInt(prompt("Enter a Number (less than 100)", "16"));
  if (isNaN(giveNum) || giveNum <= 0 || giveNum > 100) {
    alert("You cannot create box of more than 100 in here");
    return;
  }
  manyDivs(giveNum);
}

function manyDivs(size) {
  const container = document.querySelector(".container");
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
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "lightblue";
    });

    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "lightcoral";
    });
  });
}

// default grid for starting
document.addEventListener('DOMContentLoaded', () => {
    manyDivs(16);
});
