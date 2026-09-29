import React from "react"
import taskContext from "./TaskContext"
import {nanoid} from "nanoid";

export default function InputBox(){

    const {setTask} = React.useContext(taskContext);

    function addTask(FormData){
        const task = FormData.get("input");
        const taskObj = {
            id:nanoid(),
            value:task,
            status:false
        };
        setTask(prev =>
            [...prev,taskObj]
        )
    }

    return(
        <form action={addTask} className="input-form">
            <fieldset className="input-btn">
                <input type="text" required placeholder="E.G, Do the Dishes" name="input"/>
                <button>Add</button>
            </fieldset>
        </form>
    )
}