let Robot

function getComputerChoice(){
    let ComputerNumber=(Math.floor(Math.random()*3))
    if (ComputerNumber==0){
        Robot="rock"

    } else if (ComputerNumber==1) {
        Robot="paper"

    } else if (ComputerNumber==2) {
        Robot="scissors"
    }
}

let Person
let person
let apple=1;

function getHumanChoice(){
    let Person = prompt(`Round ${apple} \nPlease enter \"rock\", \"paper\" or \"scissors\":`)
    person=Person.toLowerCase()
}

let humanScore=0
let computerScore=0

function playRound(){
    getComputerChoice()
    getHumanChoice()
    if (person===Robot){
        alert(`Round ${apple} \nComputer and you both choose "${person}" so we draw.`)
        alert(`Round ${apple} \n\nYour score: ${humanScore}\nComputer score: ${computerScore}`)
    } else if ((person=="scissors" && Robot=="paper")||(person=="paper" && Robot=="rock")||(person=="rock" && Robot=="scissors")) {
        alert(`Round ${apple} \nYou choose "${person}. Computer choose "${Robot}". You win!!`)
        humanScore=humanScore+1
        alert(`Round ${apple} \n\nYour score: ${humanScore}\nComputer score: ${computerScore}`)
    } else if ((person=="paper" && Robot=="scissors")||(person=="rock" && Robot=="paper")||(person=="scissors" && Robot=="rock")) {
        alert(`Round ${apple} \nYou choose "${person}. Computer choose "${Robot}". You lose.`)
        computerScore=computerScore+1
        alert(`Round ${apple} \n\nYour score: ${humanScore}\nComputer score: ${computerScore}`)
    } else {
        alert ("Please only enter \"rock\", \"paper\" or \"scissors\":")
        playRound()
    }
}

alert ("You will be playing 5 games of Rock Paper Scissors with the computer. GOOD LUCK!!!")

for (let i=1; i<=5;i++) {
    playRound()
    apple++
}

if (humanScore<computerScore) {
    alert (`Final round: \n\nYour score: ${humanScore}\nComputer score: ${computerScore} \n\n You lose.`)
} else if (humanScore>computerScore) {
    alert (`Final round: \n\nYour score: ${humanScore}\nComputer score: ${computerScore} \n\n You win!!`)
} else {
    alert (`Final round: \n\nYour score: ${humanScore}\nComputer score: ${computerScore} \n\n It's a draw.`)
}




