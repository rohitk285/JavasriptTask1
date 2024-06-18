const gameboard = document.querySelector('.gameboard');
const timer = document.querySelector('.timer_text');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const resume = document.querySelector('.resume');
const playerTurn = document.querySelector('.playerTurn');
const winBoxText = document.querySelector('.winBox p');
const replay = document.querySelector('.replay');
const black_screen1 = document.querySelector('.blacken1');
const black_screen2 = document.querySelector('.blacken2');
const forfeit = document.querySelector('.ricbox button');

let sec;
let gamePaused = false;
let game_Over = false;
let isWin = false;
playerTurn.innerText = 'Player 1';
forfeit.addEventListener('click',()=>{
    if(playerTurn.innerText === 'Player 1')
        handleGameOver('Player 2');
    else
        handleGameOver('Player 1');
});

function createCells() {  // creates cells
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.x = j;
            cell.dataset.y = i;
            gameboard.appendChild(cell);
        }
    }
}

function selectCell(){
    cells.forEach((cell)=>{
        cell.addEventListener('click',()=>{
            if(playerTurn.innerText === 'Player 1' && cell.innerText !=='X' &&
                cell.innerText !=='O'){
                 cell.innerText = 'X';
                 cell.style.color = 'blue';
                 playerTurn.innerText = 'Player 2';
                 gameOver('X');
                 checkDraw();
                 sec = 11;
            }
            else if(playerTurn.innerText === 'Player 2' && cell.innerText !=='X' &&
                cell.innerText !=='O'){
                 cell.innerText = 'O';
                 cell.style.color = 'red';
                 playerTurn.innerText = 'Player 1';
                 gameOver('O');
                 checkDraw();
                 sec = 11;
            }
        })
    })
}

function timer_func() {
    sec = 11;
    var timerId = setInterval(function () {
        if (!gamePaused && !game_Over) {
            sec--;
        }
        if(sec===10)
            timer.style.color='rgb(240, 3, 3)';
        else
            timer.style.color='black';
        if (sec < 10)
            timer.innerHTML = "00:0" + sec+"s";
        else {
            timer.innerHTML = "00:" + sec+"s";
        }
        if (sec < 1) {
            clearInterval(timerId);
            if(playerTurn.innerText==='Player 1'){
                handleGameOver('Player 2');  }
            if(playerTurn.innerText==='Player 2'){
                handleGameOver('Player 1');   }
        }
    }, 1000);
}

function handlePause(){
    pause.addEventListener('click',()=>{
        gamePaused = true;
        pause.disabled = true;
        black_screen2.style.visibility = 'visible';
    })
}

function handleResume(){
    resume.addEventListener('click',()=>{
        gamePaused = false;
        pause.disabled=false;
        black_screen2.style.visibility='hidden';
    })
}

function handleReset(){
    reset.addEventListener('click',()=>{
        window.location.reload();
    })
}

function handleGameOver(player){
    game_Over = true;
    isWin = true;
    setTimeout(()=>{
    black_screen1.style.visibility = 'visible';

    if(player==='Player 2'){
        winBoxText.style.color="rgb(233, 111, 81)";
        winBoxText.innerText=`${player} Wins`;
    }
    else if(player === 'Player 1'){
        winBoxText.style.color="rgb(156, 156, 248)";
        winBoxText.innerText=`${player} Wins`;
    }
    else{
        winBoxText.style.color="black";
        winBoxText.innerText=`${player}`;
    }
},1200);
    replay.addEventListener('click',()=>{
        window.location.reload();
    })
}

function gameOver(n){
    if((cells[0].innerText === n && cells[3].innerText === n && cells[6].innerText === n)||
       (cells[1].innerText === n && cells[4].innerText === n && cells[7].innerText === n)||
       (cells[2].innerText === n && cells[5].innerText === n && cells[8].innerText === n)||
       (cells[0].innerText === n && cells[1].innerText === n && cells[2].innerText === n)||
       (cells[3].innerText === n && cells[4].innerText === n && cells[5].innerText === n)||
       (cells[6].innerText === n && cells[7].innerText === n && cells[8].innerText === n)||
       (cells[0].innerText === n && cells[4].innerText === n && cells[8].innerText === n)||
       (cells[2].innerText === n && cells[4].innerText === n && cells[6].innerText === n)){
        if(cells[0].innerText === n && cells[3].innerText === n && cells[6].innerText === n){
            cells[0].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[3].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[6].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        else if(cells[1].innerText === n && cells[4].innerText === n && cells[7].innerText === n){
            cells[1].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[4].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[7].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        else if(cells[2].innerText === n && cells[5].innerText === n && cells[8].innerText === n){
            cells[2].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[5].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[8].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        else if(cells[0].innerText === n && cells[1].innerText === n && cells[2].innerText === n){
            cells[0].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[1].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[2].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        else if(cells[3].innerText === n && cells[4].innerText === n && cells[5].innerText === n){
            cells[3].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[4].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[5].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        else if(cells[6].innerText === n && cells[7].innerText === n && cells[8].innerText === n){
            cells[6].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[7].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[8].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        else if(cells[0].innerText === n && cells[4].innerText === n && cells[8].innerText === n){
            cells[0].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[4].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[8].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        else if(cells[2].innerText === n && cells[4].innerText === n && cells[6].innerText === n){
            cells[2].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[4].style.backgroundColor = 'rgb(54, 197, 54)';
            cells[6].style.backgroundColor = 'rgb(54, 197, 54)';
        }
        if(n === 'X')
            handleGameOver('Player 1');
        else
            handleGameOver('Player 2');
       }
}

function checkDraw(){
    let check = true;
    for(let i=0;i<cells.length;i++){
        if(cells[i].innerText === ""){
            check = false;
            break;
        }
    }
    if(check && !isWin)
        handleGameOver('Draw');
}

createCells();
const cells= Array.from(document.querySelectorAll('.cell'));
selectCell();
timer_func();
handlePause();
handleResume();
handleReset();

//sound effects
//undo button