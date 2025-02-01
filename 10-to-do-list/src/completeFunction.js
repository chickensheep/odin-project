import { deleteFunction } from "./deleteFunction"
import { completeArray } from "./addArrayToTable"
import { taskArray } from "./confirmButtonFunction"
import { deleteCompleteFunction } from "./deleteCompleteFunction"


const completeFunction=()=>{
    document.querySelector(".completed").innerHTML=""
    for (let i=0;i<completeArray.length;i++){
        const tr = document.createElement("tr")
        if (completeArray[i][0].priority=="Not urgent"){
            tr.classList.add("notUrgent")
        } else if(completeArray[i][0].priority=="Quite urgent"){
            tr.classList.add("quiteUrgent")
        } else if(completeArray[i][0].priority=="Very urgent"){
            tr.classList.add("veryUrgent")
        }
        const no=document.createElement("td")
        no.textContent=`${i+1}`
        tr.appendChild(no)

        const task=document.createElement("td")
        task.textContent=`${completeArray[i][0].task}`
        tr.appendChild(task)

        const dueDate=document.createElement("td")
        dueDate.textContent=`${completeArray[i][0].date}`
        tr.appendChild(dueDate)

        const priority=document.createElement("td")
        priority.textContent=`${completeArray[i][0].priority}`
        tr.appendChild(priority)

        const remove=document.createElement("td")
        remove.textContent="X"
        remove.addEventListener("click",()=>{
            deleteCompleteFunction(i)
        })
        tr.appendChild(remove)

        document.querySelector(".completed").appendChild(tr)

    }
}

export {completeFunction}