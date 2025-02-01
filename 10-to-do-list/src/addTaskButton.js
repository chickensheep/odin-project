import { taskButtonFunciton } from "./taskButtonFunction"

const addTaskButton = ()=>{
    const taskButton=document.createElement("button")
    const buttonDiv=document.querySelector(".buttonDiv")
    buttonDiv.appendChild(taskButton)
    taskButton.textContent="Add task"
    taskButton.addEventListener("click",()=>{
        taskButtonFunciton()
    })
    
}

export {addTaskButton}