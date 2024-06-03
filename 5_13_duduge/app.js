const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const grid = document.querySelector(".grid");

const mole = document.querySelector(".mole");

for (let i=0; i<9; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

const squares = document.querySelectorAll(".square");
squares[0].classList.add("mole");

randomSquare();

function randomSquare(){
    squares.forEach(function(square){
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
}