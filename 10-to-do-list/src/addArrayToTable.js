import { taskArray } from "./confirmButtonFunction";
import { deleteFunction } from "./deleteFunction";
import { completeFunction } from "./completeFunction";

const completeArray=[]

const addArrayToTable=()=>{
    document.querySelector("tbody").innerHTML=""
    for (let i=0;i<taskArray.length;i++){
        const tr = document.createElement("tr")
        if (taskArray[i].priority=="Not urgent"){
            tr.classList.add("notUrgent")
        } else if(taskArray[i].priority=="Quite urgent"){
            tr.classList.add("quiteUrgent")
        } else {
            tr.classList.add("veryUrgent")
        }
        const no=document.createElement("td")
        no.textContent=`${i+1}`
        tr.appendChild(no)

        const task=document.createElement("td")
        task.textContent=`${taskArray[i].task}`
        tr.appendChild(task)

        const dueDate=document.createElement("td")
        dueDate.textContent=`${taskArray[i].date}`
        tr.appendChild(dueDate)

        const priority=document.createElement("td")
        priority.textContent=`${taskArray[i].priority}`
        tr.appendChild(priority)

        const left=document.createElement("td")
        const date1 = new Date()
        const date2= new Date(`${taskArray[i].date}`)
        const daysLeft = Math.ceil((date2-date1)/(1000*3600*24))
        if (daysLeft==0){
            left.textContent="Due today"
        } else if (daysLeft<0){
            left.textContent="Task overdue!!!"
        } else {
            left.textContent=`${daysLeft}`
        }

        tr.appendChild(left)

        const complete=document.createElement("td")
        const completeInput=document.createElement("input")
        completeInput.type="checkbox"
        completeInput.addEventListener("change",()=>{
            let temp=taskArray.slice()
            temp.splice(0,i)
            temp.splice(1)
            completeArray.push(temp)
            deleteFunction(i);
            completeFunction()
        })
        complete.appendChild(completeInput)
        tr.appendChild(complete)

        const remove=document.createElement("td")
        remove.textContent="X"
        remove.addEventListener("click",()=>{
            deleteFunction(i)
        })
        tr.appendChild(remove)

        document.querySelector(".toDo").appendChild(tr)
    }

}

export {addArrayToTable}
export {completeArray}