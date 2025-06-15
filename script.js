let rockBtn = document.querySelector("#rock")
let paperBtn = document.querySelector("#paper")
let scissorBtn = document.querySelector("#scissors")

let screenYou = document.querySelector("#screen-you")
let screenCmp = document.querySelector("#screen-cmp")

let scoreYou = document.querySelector(".you-score")
let scoreCmp = document.querySelector(".cmp-score")

let score1 = 0;
let score2 = 0;

let message = document.querySelector("#message")

let winnerMessage = document.querySelector("#popup-heading")

rockBtn.addEventListener("click",()=>{
    screenYou.innerHTML = "<img src=\"./images/Rock.png\" >"
    compare("Rock",generateComputer())
})

paperBtn.addEventListener("click",()=>{
    screenYou.innerHTML = "<img src=\"./images/Paper.png\">"
    compare("Paper",generateComputer())
})

scissorBtn.addEventListener("click",()=>{
    screenYou.innerHTML = "<img src=\"./images/Scissors.png\">"
    compare("Scissors",generateComputer())
})

let r=["Rock","Paper","Scissor"]

function generateComputer(){
    let index = Math.floor(Math.random()*3)
    // switch(r[index]){
    //     case "Rock" : screenCmp.innerHTML = "<img src=\"./images/Rock.png\" >"
    //     case "Paper" : screenCmp.innerHTML = "<img src=\"./images/Paper.png\">"
    //     case "Scissor" : screenCmp.innerHTML = "<img src=\"./images/Scissors.png\">"
    //     default: null;
    // }
    if(r[index]==="Rock"){screenCmp.innerHTML = "<img src=\"./images/Rock.png\" >"; return "Rock"}
    else if(r[index]==="Paper"){screenCmp.innerHTML = "<img src=\"./images/Paper.png\">"; return "Paper"}
    else if(r[index]==="Scissor"){screenCmp.innerHTML = "<img src=\"./images/Scissors.png\">"; return "Scissors"}
}

function compare(x,y){
    if(x===y){message.textContent="It is a tie"}
    else if((x==="Rock" && y==="Paper") || (x==="Paper" && y==="Scissors") || (x==="Scissors" && y==="Rock")){score2++; message.textContent="Computer win this round"}
    else if((x==="Scissors" && y==="Paper") || (x==="Rock" && y==="Scissors") || (x==="Paper" && y==="Rock")){score1++; message.textContent="You win this round"}

    scoreYou.textContent = score1;
    scoreCmp.textContent = score2;

    if(score1 === 3){
        popup.classList.add("open")
        winnerMessage.textContent = "Congratulation You Won"
    }
    else if(score2 === 3){
        popup.classList.add("open")
        winnerMessage.textContent = "Computer Won "
    }
}

const resetBtn = document.getElementById("reset")
const popup =document.querySelector(".popup")

resetBtn.addEventListener("click",()=>{
    score1 = 0;
    score2 = 0;
    message.textContent="Let's Start"
    popup.classList.remove("open")
    scoreYou.textContent = 0;
    scoreCmp.textContent = 0;
    screenCmp.innerHTML = ""
    screenYou.innerHTML = ""
})
