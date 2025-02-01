import { taskArray } from "./confirmButtonFunction"
import { addArrayToTable } from "./addArrayToTable"

const deleteFunction=(index)=>{
    taskArray.splice(index,1)
    addArrayToTable()
}

export {deleteFunction}