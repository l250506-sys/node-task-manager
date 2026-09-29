import React from "react";
import taskContext from "./TaskContext";
import SingleTask from "./SingleTask";

export default function TasksBox(){
    const {task,setTask,loading} = React.useContext(taskContext);

    function toggleTask(id){
        setTask(prev => 
            prev.map(task =>{
                return task.id === id ? 
                    {...task,
                        status:!task.status
                    }:task
            })
        )
    }

    function deleteTask(id){
        setTask(prev => prev.filter(task =>
            task.id !== id
        ))
    }



    const taskArr= task.map(single =>
        <SingleTask value={single.value} 
        key={single.id} 
        task={single} 
        deleteTask ={() => deleteTask(single.id)} 
        toggleTask = {() => toggleTask(single.id)}/>
    )

    if(loading){
        return(
            <p>Loading.....</p>
        )
    }

    return(
        <div className="task-box">
            {taskArr}
        </div>
    )
}