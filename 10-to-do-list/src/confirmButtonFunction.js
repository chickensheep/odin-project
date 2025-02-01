import { TaskFactory } from "./taskFactory"
import { addArrayToTable } from "./addArrayToTable"

const taskArray=[]

const confirmButtonFunction =()=>{
    if (document.querySelector("#taskInput").value==""||document.querySelector("#dueDateInput").value==""){
        return
    } 

    const newTask= new TaskFactory(document.querySelector("#taskInput").value,document.querySelector("#dueDateInput").value,document.querySelector("#prioritySelect").value)
    taskArray.push(newTask)
    addArrayToTable()
    document.querySelector("form").reset()
    document.querySelector("dialog").close()
    
    

}

export {confirmButtonFunction}
export {taskArray}