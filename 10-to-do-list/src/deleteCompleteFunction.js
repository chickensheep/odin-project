import { completeArray } from "./addArrayToTable"
import { completeFunction } from "./completeFunction"

const deleteCompleteFunction=(index)=>{
    completeArray.splice(index,1)
    completeFunction()
}

export {deleteCompleteFunction}