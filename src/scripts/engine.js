//a const state pode receber funções diretas, mas em alguns casos
//pode prejudicar a legibilidade, inclusive não é possível chamar uma 
//função que recebe parâmetros do mesmo state
const state = {
    view: {
        squares:document.querySelectorAll(".square"),
        enemy:document.querySelector(".enemy"),
        timeLeft:document.querySelector("#time-left"),
        score:document.querySelector("#score"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        
    },
    actions: {
        countdownTimerId: setInterval(countdown,1000),
        timerId: setInterval(randomSquare, 1000),
    }
};

function playSound(audioName){
    let audio = new Audio(`src/audios/${audioName}.m4a`);
    audio.volume = 0.4;
    audio.play;
}

function countdown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime; 
    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countdownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game over! O seu resultado foi: " + state.values.result);
        
    }
}


function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    })
    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy() {
    state.actions.timerId;
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=> {
        square.addEventListener("mousedown", ()=> {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        });
    });

}
function init(){
    moveEnemy();
    addListenerHitBox();
}

init();