const Gameboard=(()=>{
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const show=()=>{
        let boardHTML=""
        gameboard.forEach((square,index)=>{
            boardHTML+=`<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector(".gameboard").innerHTML=boardHTML

        const squares=document.querySelectorAll(".square")
        squares.forEach((square)=>{
            square.addEventListener("click",Game.handleClick)
        })
    }

    const update=(index,value)=>{
        gameboard[index]=value;
        show();
    }

    const getGameboard= ()=>{
        return gameboard
    }

    const resetBoard =()=>{
        gameboard = ["", "", "", "", "", "", "", "", ""]
        show()
        Game.resetGame()
        message.textContent=""
    }

    return {
        show,
        update,
        getGameboard,
        resetBoard,
    }
})();

const createPlayer = function(name,mark){
    return {
        name, mark
    }

}

const Game = (()=>{
    let players
    let currentPlayerIndex
    let gameOver 

    const start = ()=>{
        players=[
            createPlayer(document.querySelector("#firstPlayer").value,"X"),
            createPlayer(document.querySelector("#secondPlayer").value,"o")
        ];
        currentPlayerIndex=0;
        gameOver=false;
        Gameboard.show();

    }

    const handleClick=(event)=>{
        if (gameOver) {
            return;
        }
        
        let index = event.target.id.split("-")[1];
        if (Gameboard.getGameboard()[index]!==""){
            return;
        }
        
        Gameboard.update(index,players[currentPlayerIndex].mark);

        if (checkForWin()){
            gameOver=true
            message.textContent=`${players[currentPlayerIndex].name} win!!!`
        } else if (checkForDraw()){
            gameOver=true
            message.textContent=("Its a draw!!!")
        } else {
            currentPlayerIndex=(currentPlayerIndex===0?1:0);
        }

    }

    const checkForWin=()=>{
        const winCombi=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (let winArray of winCombi) {
            if (
                Gameboard.getGameboard()[winArray[0]] === players[currentPlayerIndex].mark &&
                Gameboard.getGameboard()[winArray[1]] === players[currentPlayerIndex].mark &&
                Gameboard.getGameboard()[winArray[2]] === players[currentPlayerIndex].mark
            ) {
                return true; 
            }
        }
    
        return false;

    }

    const checkForDraw =()=>{
        return Gameboard.getGameboard().every((box)=>box!=="");
    }

    const resetGame = ()=>{
        gameOver=false
        currentPlayerIndex=0
    }

    return {
        start,
        handleClick,
        checkForWin,
        checkForDraw,
        resetGame
    }
})();

const startButton=document.querySelector(".startButton")
startButton.addEventListener("click",()=>{
    if(document.querySelector("#firstPlayer").value==""||document.querySelector("#secondPlayer").value==""){
        alert("Please enter players' name")
        return
    }
    Game.start()
    
    startButton.remove()
    document.querySelector("#firstPlayer").remove()
    document.querySelector("#secondPlayer").remove()
    
    const resetButton=document.createElement("button")
    const input=document.querySelector(".input")
    input.appendChild(resetButton)
    resetButton.textContent="Reset board"
    resetButton.addEventListener("click",()=>{
        Gameboard.resetBoard();
    })
})



const message=document.querySelector(".message")