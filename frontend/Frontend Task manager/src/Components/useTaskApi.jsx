import React from "react";


export default function useTaskApi(task){
    const [loading,setLoading] = React.useState(true);
    const [err,setErr] = React.useState(null);
    const taskExists = React.useRef(false);

    React.useEffect(()=>{

        if(!task ||task.length === 0 && !taskExists.current){
            return
        }

        taskExists.current = true;

        async function sendData(){
            try{
                const res = await fetch("http://localhost:8000/tasks",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(task)
                });
                
                if(!res.ok ){
                    throw new Error("Failed to send data");
                }
                const data = await res.json();

                setLoading(false);
            }
            catch(err){
                console.log(err.message);
                setErr(err.message);
            }
        }
        sendData();
    },[task])
}