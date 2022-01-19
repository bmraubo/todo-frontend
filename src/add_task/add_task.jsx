import React, { useState } from "react"

export default function AddTask(props) {
    const [taskInput, setTaskInput] = useState("Enter New Task");

    async function handleSubmit(event) {
        event.preventDefault()
        await props.connector.addTask(taskInput)
        props.getData();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={taskInput} onChange={(event)=>setTaskInput(event.target.value)} data-testid="input"></input>
                <input type="submit" value="Add Task" />
            </form>
        </div>
    )
}