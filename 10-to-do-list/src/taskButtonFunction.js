import { confirmButtonFunction } from "./confirmButtonFunction"

const taskButtonFunciton = ()=>{
    const dialog=document.querySelector("dialog")
    dialog.innerHTML=""

    const form=document.createElement("form")
    const taskDiv=document.createElement("div")
    const taskLabel=document.createElement("label")
    taskLabel.textContent="Task: "
    const taskInput=document.createElement("input")
    taskInput.id="taskInput"
    taskLabel.htmlFor="taskInput"
    taskInput.setAttribute("required","")

    taskDiv.appendChild(taskLabel)
    taskDiv.appendChild(taskInput)

    const dueDateDiv=document.createElement("div")
    const dueDateLabel=document.createElement("label")
    dueDateLabel.textContent="Due date: "
    const dueDateInput=document.createElement("input")
    dueDateInput.id="dueDateInput"
    dueDateLabel.htmlFor="dueDateInput"
    dueDateInput.type="date"
    dueDateInput.setAttribute("required","")
    dueDateDiv.appendChild(dueDateLabel)
    dueDateDiv.appendChild(dueDateInput)

    const priorityDiv=document.createElement("div")
    const priorityLabel=document.createElement("label")
    priorityLabel.textContent="Priority: "
    const prioritySelect=document.createElement("select")
    prioritySelect.id="prioritySelect"
    priorityLabel.htmlFor="prioritySelect"
    const optionOne=document.createElement("option")
    optionOne.textContent="Not urgent"
    prioritySelect.appendChild(optionOne)
    const optionTwo=document.createElement("option")
    optionTwo.textContent="Quite urgent"
    prioritySelect.appendChild(optionTwo)
    const optionThree=document.createElement("option")
    optionThree.textContent="Very urgent"
    prioritySelect.appendChild(optionThree)
    priorityDiv.appendChild(priorityLabel)
    priorityDiv.appendChild(prioritySelect)

    const confirmDiv=document.createElement("div")
    const confirmButton=document.createElement("input")
    confirmButton.type="submit"
    confirmButton.value="Confirm"
    confirmButton.addEventListener("click",()=>{
        event.preventDefault()
        confirmButtonFunction()        
    })
    confirmDiv.appendChild(confirmButton)
    
    
    form.appendChild(taskDiv)
    form.appendChild(dueDateDiv)
    form.appendChild(priorityDiv)
    form.appendChild(confirmButton)

    dialog.appendChild(form)

    dialog.showModal()
}

export {taskButtonFunciton}