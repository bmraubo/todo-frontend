import React, { useEffect } from "react";
import { useState } from "react"
import { act } from "react-dom/test-utils";
//import Connector from "../connector/connector";
import TestConnector from "../connector/test-connector";

export default function TaskList() {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState()

    function Task({taskInfo}) {
        return <button data-testid="a task">Task: {taskInfo.task} Status: {DoneStatus(taskInfo.done)}</button>
    }

    function DoneStatus(doneStatus) {
        if (doneStatus) {
            return "Done!"
        } else {
            return "Not Done!"
        }
    }

    function EditButton() {
        return <button>Edit</button>
    }

    function DeleteButton() {
        return <button>Delete</button>
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
        <ul>
            {tasks.map(task => (
                <li key= {task.id}>
                    <Task taskInfo={task} />
                    <EditButton />
                    <DeleteButton />
                </li>   
            ))}
            
        </ul>
        </> 
    );
        
     
    
}