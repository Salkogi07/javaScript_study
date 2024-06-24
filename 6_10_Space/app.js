const stageSize = 15;

for(let i=0; i < stageSize*stageSize; i++){
    const box = document.createElement("div");
    document.querySelector(".grid").appendChild(box);
}

const grid = document.querySelector(".grid");
const stage = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const display = document.querySelector("#display");

let playerLoc = stageSize*(stageSize-2)+7;
let invadersLoc = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];
let gameInterval;

function makePlayer(){
    stage[playerLoc].classList.add("player");
}

function movePlayer(e){
    stage[playerLoc].classList.remove("player");
    switch(e.keyCode){
        case 37: //왼쪽 화살표
            if(playerLoc % stageSize !== 0){
                playerLoc--;
            }
            break;
        case 39: //오른쪽 화살표
            if(playerLoc % stageSize < stageSize-1){
                playerLoc++;
            }
            break;
        case 40: // 아래쪽 화살표
            if (playerLoc + stageSize < stageSize * stageSize) {
                playerLoc += 15;
            }
            break;
        case 38: // 위쪽 화살표
            if (playerLoc - stageSize >= 0) {
                playerLoc -= 15;
            }
            break;
    }
    stage[playerLoc].classList.add("player");
}

function makeInvader(){
    invadersLoc.forEach(function(invader){
        stage[invader].classList.add("invader");
    })
}

function moveInvader(){
    invadersLoc.forEach(function(invader){
        stage[invader].classList.remove("invader");
    })
    for(let i=0; i < invadersLoc.length; i++){
        invadersLoc[i]++;
        stage[invadersLoc[i]].classList.add("invader");
    }
}

function gameStart(){
    stage[playerLoc].classList.remove("player");
    invadersLoc.forEach(function(invader){
        stage[invader].classList.remove("invader");
    });
    playerLoc = stageSize*(stageSize-2)+7;
    let invadersLoc = [
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
    ]
    makePlayer();
    makeInvader();
    displayStatus();
    gameInterval = setInterval(moveInvader,1000);
    document.addEventListener("keyup",movePlayer);
    gameRun();
}

function gameStop(){
    clearInterval(gameInterval);
    document.removeEventListener("keyup",movePlayer);
}

function gameRun(){
    moveInvader();
}

function displayStatus(){
    display.innerText = invadersLoc.length + "/" + invadersLoc.length;
}

startBtn.addEventListener("click",gameStart);
stopBtn.addEventListener("click",gameStop);

