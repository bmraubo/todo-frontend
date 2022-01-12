import React, { useEffect } from "react";
import { useState } from "react"
import Connector from "../connector/connector";

export default function TaskList() {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState()

    function Task({taskInfo}) {
        return <button>{taskInfo.task}</button>
    }

    async function getData() {
        return await Connector.fetchAllTasks();
    }
    
    useEffect(() => {
        getData().then(response => {
            setTasks(response)
            setLoading(false)
            console.log("getData", tasks)
            console.log("getData", loading)
        })
        console.log("MID:", tasks)
        console.log("MID:", loading)
    },[])
    console.log("after UE",tasks)
    console.log("after UE",loading)
    return(

        !loading ? 
        <>  
        <div>
            <div>
                <Task taskInfo={tasks[2]} />
            </div>   
        </div>
        </> 
        :
         <h2>loading...</h2>
    );
        
     
    
}