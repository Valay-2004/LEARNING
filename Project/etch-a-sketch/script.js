document.addEventListener("DOMContentLoaded", function manyDivs() {
  const container = document.querySelector(".container");
  for (let i = 0; i < 256; i++) {
    const manyDiv = document.createElement("div");
    manyDiv.classList.add("grid-square"); // for styling
    container.appendChild(manyDiv);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const grids = document.querySelectorAll(".grid-square");

  grids.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "lightblue";
    });

    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "lightcoral";
    });
  });
});
