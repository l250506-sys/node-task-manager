import taskContext from "./TaskContext";
import React from "react";
import useTaskApi from "./useTaskApi";
import getTasks from "./getTasks";

export default function TasksContainer({children}){

    const [task,setTask] = React.useState([]);
    const [loading,setLoading] = React.useState(true);

    React.useEffect(()=>{
        async function loadTasks(){
            const data = await getTasks();
            if(data) setTask(data);
            setLoading(false);
        }
        loadTasks();
    },[])


    useTaskApi(task);

    return(
        <div className="container">
            <h2>Tasks</h2>
            <taskContext.Provider value={{task,setTask,loading}}>
                {children}
            </taskContext.Provider>

        </div>
    )
}