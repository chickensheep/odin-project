const board=document.querySelector(".board")
let isMouseDown= false;
let yanshe="black"
let numberSide=16

function generateGrid(xyz,color){
    board.innerHTML=""
    for (let i = 1; i <= xyz*xyz; i++) {
        let square=document.createElement("div")
        board.appendChild(square)
        square.className="square"
        let length=640/xyz
        square.style.width=`${length}px`
        square.style.height=`${length}px`
        
        square.addEventListener("mousedown", ()=>{
            isMouseDown=true
        })
        square.addEventListener("mouseup",()=>{
            isMouseDown=false
        })
        
        square.addEventListener("mouseover", ()=>{
            if (isMouseDown){
                square.style.backgroundColor=color
            } 
        })
            
        square.addEventListener("mousedown",()=>{
            square.style.backgroundColor=color
        })
    }
}

generateGrid(numberSide,yanshe)

const size=document.querySelector("#gridNumber")
size.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        if (size.value>100){
            numberSide=100
            size.value=""
            generateGrid(numberSide,yanshe)
        } else if (size.value<2){
            numberSide=2
            size.value=""
            generateGrid(numberSide,yanshe)
        } else if (size.value>=2 && size.value<=100){
            numberSide=size.value
            size.value=""
            generateGrid(numberSide,yanshe)
        } else {
            alert("Please enter only number.")
            size.value=""
        }
    }
})

const grid=document.querySelector(".grid")
const gridButton=document.createElement("button")
gridButton.textContent="Get grid"
grid.appendChild(gridButton)
gridButton.addEventListener("click",()=>{
    if (size.value>100){
        numberSide=100
        size.value=""
        generateGrid(numberSide,yanshe)
    } else if (size.value<2){
        numberSide=2
        size.value=""
        generateGrid(numberSide,yanshe)
    } else if (size.value>=2 && size.value<=100){
        numberSide=size.value
        size.value=""
        generateGrid(numberSide,yanshe)
    } else {
        alert("Please enter only number.")
        size.value=""
    }
})

const color=document.createElement("p")
const option=document.querySelector(".option")
option.appendChild(color)
color.textContent="Colour:"
color.style.fontSize="20px"

const black=document.createElement("button")
const red=document.createElement("button")
const blue=document.createElement("button")
const yellow=document.createElement("button")
const green=document.createElement("button")
const orange=document.createElement("button")

black.className="black"
red.className="red"
blue.className="blue"
yellow.className="yellow"
green.className="green"
orange.className="orange"

black.textContent="Black"
red.textContent="Red"
blue.textContent="Blue"
yellow.textContent="Yellow"
green.textContent="Green"
orange.textContent="Orange"

color.appendChild(black)
color.appendChild(red)
color.appendChild(blue)
color.appendChild(yellow)
color.appendChild(green)
color.appendChild(orange)

black.addEventListener("click",()=>{
    yanshe="black"
    generateGrid(numberSide,yanshe)
})

red.addEventListener("click",()=>{
    yanshe="red"
    generateGrid(numberSide,yanshe)
})

blue.addEventListener("click",()=>{
    yanshe="blue"
    generateGrid(numberSide,yanshe)
})

yellow.addEventListener("click",()=>{
    yanshe="yellow"
    generateGrid(numberSide,yanshe)
})

green.addEventListener("click",()=>{
    yanshe="green"
    generateGrid(numberSide,yanshe)
})

orange.addEventListener("click",()=>{
    yanshe="orange"
    generateGrid(numberSide,yanshe)
})