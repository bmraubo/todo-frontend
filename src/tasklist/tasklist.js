import React, { useEffect } from "react";
import { useState } from "react"
import { act } from "react-dom/test-utils";
import Connector from "../connector/connector";
import TestConnector from "../connector/test-connector";

export default function TaskList() {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState()

    function Task({taskInfo}) {
        return <button>{taskInfo.task}</button>
    }

    async function getData() {
        return await TestConnector.fetchAllTasks();
    }
    
    useEffect(() => {
        getData().then(response => {
            act(()=>{
                setTasks(response)
                setLoading(false)
            })
        })
    },[])

    return(

        loading ?
        <h2>loading...</h2> 
        :
        <>  
        <div>
            {tasks.map(task => (
                <div key= {task.id}>
                    <Task taskInfo={task} />
                </div>   
            ))}
            
        </div>
        </> 
    );
        
     
    
}