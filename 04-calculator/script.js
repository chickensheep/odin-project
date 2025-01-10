const equation=document.querySelector(".equation")
const answer=document.querySelector(".answer")


const deletee=document.querySelector(".delete")
const reset=document.querySelector(".reset")
const seven=document.querySelector(".seven")
const eight=document.querySelector(".eight")
const nine=document.querySelector(".nine")
const divide=document.querySelector(".divide")
const four=document.querySelector(".four")
const five=document.querySelector(".five")
const six=document.querySelector(".six")
const multiply=document.querySelector(".multiply")
const one=document.querySelector(".one")
const two=document.querySelector(".two")
const three=document.querySelector(".three")
const minus=document.querySelector(".minus")
const zero=document.querySelector(".zero")
const point=document.querySelector(".point")
const equal=document.querySelector(".equal")
const plus=document.querySelector(".plus")

const operators = ["÷","x","+","-"];
const OPERATORS=/[÷x+-]/

let operator
let number1
let number2

function addToEquation(apple){
    equation.textContent+=apple
}

function getNumbers(){
    abc=equation.textContent
    split=abc.split(OPERATORS)
    number1=split[0]
    number2=split[1]
}

function calculate(){
        if (operator=="÷"){
            if (number2=="0"){
                answer.textContent="u tink u funny ah"
                number1=0
            } else {
                let daan=number1/number2
                let DAAN=Math.round(daan*100000000)/100000000
                answer.textContent=`= ${DAAN}`
                number1=DAAN
            }
        } else if(operator=="x"){
            let daan=number1*number2
            let DAAN=Math.round(daan*100000000)/100000000
            answer.textContent=`= ${DAAN}`
            number1=DAAN
        } else if(operator=="+"){
            let daan=Number(number1)+Number(number2)
            let DAAN=Math.round(daan*100000000)/100000000
            answer.textContent=`= ${DAAN}`
            number1=DAAN
        } else if (operator=="-"){
            let daan=number1-number2
            let DAAN=Math.round(daan*100000000)/100000000
            answer.textContent=`= ${DAAN}`
            number1=DAAN
        } else {
            answer.textContent="= "+equation.textContent
        }
}

function deleted(){
    let abc=equation.textContent
    let xyz=abc.slice(0,-1)
    equation.textContent=xyz
    
}

deletee.addEventListener("click",()=>{
    if (answer.textContent=="") {
        deleted()
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="Backspace"){
        console.log("gay")
        if (answer.textContent=="") {
            deleted()
        }
    }
})

reset.addEventListener("click",()=>{
    equation.textContent=""
    answer.textContent=""
})

seven.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(7)
    } else {
        answer.textContent=""
        equation.textContext=""
        addToEquation(7)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="7"){
        console.log("aa")
        if (answer.textContent==""){
            addToEquation(7)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(7)
        }
    }
})

eight.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(8)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(8)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="8"){
        if (answer.textContent==""){
            addToEquation(8)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(8)
        }
    }
})

nine.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(9)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(9)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="9"){
        if (answer.textContent==""){
            addToEquation(9)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(9)
        }
    }
})

divide.addEventListener("click",()=>{
    let abc=equation.textContent
    if (answer.textContent==""){
        if(abc==""){        
            } else if (!operators.some(operator => abc.includes(operator))){
                addToEquation("÷")
                operator="÷"
            }
    } else {
        answer.textContent=""
        equation.textContent=`${number1}÷`
        operator="÷"
    }
   
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="÷" || event.key==="/"){
    let abc=equation.textContent
    if (answer.textContent==""){
        if(abc==""){        
            } else if (!operators.some(operator => abc.includes(operator))){
                addToEquation("÷")
                operator="÷"
            }
    } else {
        answer.textContent=""
        equation.textContent=`${number1}÷`
        operator="÷"
    }}
})

four.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(4)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(4)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="4"){
        if (answer.textContent==""){
            addToEquation(4)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(4)
        }
    }
})

five.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(5)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(5)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="5"){
        if (answer.textContent==""){
            addToEquation(5)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(5)
        }
    }
})

six.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(6)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(6)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="6"){
        if (answer.textContent==""){
            addToEquation(6)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(6)
        }
    }
})

multiply.addEventListener("click",()=>{
    let abc=equation.textContent
    if (answer.textContent==""){
        if(abc==""){
            
        } else if (!operators.some(operator => abc.includes(operator))){
            addToEquation("x")
            operator="x"
        }
    } else {
        answer.textContent=""
        equation.textContent=`${number1}x`
        operator="x"
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="x" || event.key==="*"){
        let abc=equation.textContent
        if (answer.textContent==""){
            if(abc==""){
                
            } else if (!operators.some(operator => abc.includes(operator))){
                addToEquation("x")
                operator="x"
            }
        } else {
            answer.textContent=""
            equation.textContent=`${number1}x`
            operator="x"
        }
    }
})

one.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(1)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(1)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="1"){
        if (answer.textContent==""){
            addToEquation(1)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(1)
        }
    }
})

two.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(2)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(2)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="2"){
        if (answer.textContent==""){
            addToEquation(2)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(2)
        }
    }
})

three.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(3)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(3)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="3"){
        if (answer.textContent==""){
            addToEquation(3)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(3)
        }
    }
})

minus.addEventListener("click",()=>{
    let abc=equation.textContent
    if (answer.textContent==""){
        if(abc==""){
        } else if (!operators.some(operator => abc.includes(operator))){
            addToEquation("-")
            operator="-"
        }
    } else {
        answer.textContent=""
        equation.textContent=`${number1}-`
        operator="-"
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="-"){
        let abc=equation.textContent
        if (answer.textContent==""){
            if(abc==""){
            } else if (!operators.some(operator => abc.includes(operator))){
                addToEquation("-")
                operator="-"
            }
        } else {
            answer.textContent=""
            equation.textContent=`${number1}-`
            operator="-"
        }
    }
})

zero.addEventListener("click",()=>{
    if (answer.textContent==""){
        addToEquation(0)
    } else {
        answer.textContent=""
        equation.textContent=""
        addToEquation(0)
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="0"){
        if (answer.textContent==""){
            addToEquation(0)
        } else {
            answer.textContent=""
            equation.textContent=""
            addToEquation(0)
        }
    }
})

point.addEventListener("click",()=>{
    let abc=equation.textContent
    if (abc.slice(-1)!=="."){
        addToEquation(".")
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="."){
        let abc=equation.textContent
        if (abc.slice(-1)!=="."){
            addToEquation(".")
        }
    }
})

equal.addEventListener("click",()=>{
    getNumbers()
    let xyz = equation.textContent
    if (xyz.slice(-1)=="+" || xyz.slice(-1)=="-" || xyz.slice(-1)=="x" || xyz.slice(-1)=="÷") {
        answer.textContent="ERROR"
        operator=""
    } else if (abc.slice(-1)!=="."){
        calculate()
        operator=""
    } else {
        equation.textContent=xyz.slice(0,-1)
        getNumbers()
        calculate()
        operator=""   
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="Enter"){
        getNumbers()
        let xyz = equation.textContent
        if (xyz.slice(-1)=="+" || xyz.slice(-1)=="-" || xyz.slice(-1)=="x" || xyz.slice(-1)=="÷") {
            answer.textContent="ERROR"
            operator=""
        } else if (abc.slice(-1)!=="."){
            calculate()
            operator=""
        } else {
            equation.textContent=xyz.slice(0,-1)
            getNumbers()
            calculate()
            operator=""   
        }
    }
})

plus.addEventListener("click",()=>{
    let abc=equation.textContent
    if (answer.textContent==""){
        if(abc==""){
        } else if (!operators.some(operator => abc.includes(operator))){
            addToEquation("+")
            operator="+"
        }
    } else {
        answer.textContent=""
        equation.textContent=`${number1}+`
        operator="+"
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.key==="+"){
        let abc=equation.textContent
        if (answer.textContent==""){
            if(abc==""){
            } else if (!operators.some(operator => abc.includes(operator))){
                addToEquation("+")
                operator="+"
            }
        } else {
            answer.textContent=""
            equation.textContent=`${number1}+`
            operator="+"
        }
    }
})
