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


let person
let apple=1;

// function getHumanChoice(){
//     let Person = prompt(`Round ${apple} \nPlease enter \"rock\", \"paper\" or \"scissors\":`)
//     person=Person.toLowerCase()
// }

let humanScore=0
let computerScore=0

function playRound(){
    getComputerChoice()
    // getHumanChoice()
    if (person===Robot){
        result.textContent=`Round ${apple} \nComputer and you both choose "${person}" so we draw. :o`
        score.textContent=` Round ${apple} \n\nYour score: ${humanScore}\nComputer score: ${computerScore}`
        apple++
    } else if ((person=="scissors" && Robot=="paper")||(person=="paper" && Robot=="rock")||(person=="rock" && Robot=="scissors")) {
        humanScore=humanScore+1
        result.textContent=`Round ${apple} \nYou choose "${person}". Computer choose "${Robot}". You win!! :D`
        score.textContent=`Round ${apple} \n\nYour score: ${humanScore}\nComputer score: ${computerScore}`
        apple++
    } else if ((person=="paper" && Robot=="scissors")||(person=="rock" && Robot=="paper")||(person=="scissors" && Robot=="rock")) {
        computerScore=computerScore+1        
        result.textContent=`Round ${apple} \nYou choose "${person}". Computer choose "${Robot}". You lose. D:`
        score.textContent=`Round ${apple} \n\nYour score: ${humanScore}\nComputer score: ${computerScore}`
        apple++
    } 
    // else {
    //     alert ("Please only enter \"rock\", \"paper\" or \"scissors\":")
    //     playRound()
    // }
}

// alert ("You will be playing 5 games of Rock Paper Scissors with the computer. GOOD LUCK!!!")

// for (let i=1; i<=5;i++) {
//     playRound()
//     apple++
// }

function abc(){
    if (humanScore<computerScore) {
        finalResult.textContent=`Final result: \n\nYour score: ${humanScore}\nComputer score: ${computerScore} \n\n You lose. D:`
    } else if (humanScore>computerScore) {
        finalResult.textContent=`Final result: \n\nYour score: ${humanScore}\nComputer score: ${computerScore} \n\n You win!! :D`
    } else {
        finalResult.textContent= `Final result: \n\nYour score: ${humanScore}\nComputer score: ${computerScore} \n\n It's a draw. :o`
    }
}


const content=document.querySelector("div")
const title=document.querySelector("h1")
const choice=document.querySelector(".choice")
const result=document.querySelector(".result")
const score=document.querySelector(".score")
const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")

rock.className="rock"
paper.className="paper"
scissors.className="scissors"

choice.appendChild(rock)
choice.appendChild(paper)
choice.appendChild(scissors)

rock.textContent="Rock"
paper.textContent="Paper"
scissors.textContent="Scissors"


rock.addEventListener('click', ()=>{
    if (apple<=4){
        person="rock"
        playRound(); 
    } else if (apple==5) {
        person="rock"
        playRound(); 
        const button=document.createElement("button")
        const line=document.createElement("hr")
        content.appendChild(line)
        content.appendChild(button)
        button.textContent="Result"
        button.addEventListener("click",()=>{
            const finalResult=document.createElement("p");
            content.appendChild(finalResult);
            if (humanScore<computerScore) {
                finalResult.textContent=`Final result: You lose. D:`
            } else if (humanScore>computerScore) {
                finalResult.textContent=`Final result: You win!! :D`
            } else {
                finalResult.textContent= `Final result: It's a draw. :o`
            }
            const returnMain=document.createElement("a");
            content.appendChild(returnMain);
            let link=document.createTextNode("Return to Main Project Page")
            returnMain.appendChild(link)
            returnMain.href="../index.html"
            button.remove();
            
        })
        
    } else {
        alert("GAME OVER!!! stop pressing me (ò_ó)")
    }
    
})

paper.addEventListener('click', ()=>{
    if (apple<=4){
        person="paper"
        playRound(); 
    } else if (apple==5) {
        person="rock"
        playRound(); 
        const button=document.createElement("button")
        const line=document.createElement("hr")
        content.appendChild(line)
        content.appendChild(button)
        button.textContent="Result"
        button.addEventListener("click",()=>{
            const finalResult=document.createElement("p");
            content.appendChild(finalResult);
            if (humanScore<computerScore) {
                finalResult.textContent=`Final result: You lose. D:`
            } else if (humanScore>computerScore) {
                finalResult.textContent=`Final result: You win!! :D`
            } else {
                finalResult.textContent= `Final result: It's a draw. :o`
            }
            const returnMain=document.createElement("a");
            content.appendChild(returnMain);
            let link=document.createTextNode("Return to Main Project Page")
            returnMain.appendChild(link)
            returnMain.href="../index.html"
            button.remove();
            
        })
        
    } else {
        alert("GAME OVER!!! stop pressing me (ò_ó)")
    }
    
})

scissors.addEventListener('click', ()=>{
    if (apple<=4){
        person="scissors"
        playRound(); 
    } else if (apple==5) {
        person="rock"
        playRound(); 
        const button=document.createElement("button")
        const line=document.createElement("hr")
        content.appendChild(line)
        content.appendChild(button)
        button.textContent="Result"
        button.addEventListener("click",()=>{
            const finalResult=document.createElement("p");
            content.appendChild(finalResult);
            if (humanScore<computerScore) {
                finalResult.textContent=`Final result: You lose. D:`
            } else if (humanScore>computerScore) {
                finalResult.textContent=`Final result: You win!! :D`
            } else {
                finalResult.textContent= `Final result: It's a draw. :o`
            }
            const returnMain=document.createElement("a");
            content.appendChild(returnMain);
            let link=document.createTextNode("Return to Main Project Page")
            returnMain.appendChild(link)
            returnMain.href="../index.html"
            button.remove();
        })
        
    } else {
        alert("GAME OVER!!! stop pressing me (ò_ó)")
    }
    
})





















