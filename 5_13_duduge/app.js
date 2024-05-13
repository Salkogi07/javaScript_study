const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const grid = document.querySelector(".grid");

for (let i=0; i<9; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}