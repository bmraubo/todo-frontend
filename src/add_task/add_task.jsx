import "../tasklist/tasklist.css"

import React, { useState } from "react"

export default function AddTask(props) {
    const [taskInput, setTaskInput] = useState("");

    async function handleSubmit(event) {
        event.preventDefault()
        await props.connector.addTask(taskInput)
        props.getData();
        setTaskInput("")
    }
    
    return (
        <div className="add-task">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Enter New Task" value={taskInput} onChange={(event)=>setTaskInput(event.target.value)} data-testid="input"></input>
                <input type="submit" value="Add Task" />
            </form>
        </div>
    )
}