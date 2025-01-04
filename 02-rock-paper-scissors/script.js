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

getComputerChoice()
alert(Robot)

