for(let i=0; i<100; i++){
    const square = document.createElement("div");
    document.querySelector(".grid").appendChild(square);
}

const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const scoreDisplay = document.querySelector("#score");
const width = 10;

let snake = 0;
let interval;
let intervalTime = 1000;
let dir = 1;

function start(){
    squares[snake].classList.add("snake");
    interval = setInterval(runGame,intervalTime);
}
function runGame(){
    squares[snake].classList.remove("snake");
    snake = snake + dir;
    squares[snake].classList.add("snake");
}
function move(e){
    if(e.keyCode == 37){dir = -1}
    else if(e.keyCode === 39){dir = 1}
    else if(e.keyCode === 38){dir = -width}
    else if(e.keyCode === 40){dir = width}
}
document.addEventListener("keyup",move)
startBtn.addEventListener("click",start);