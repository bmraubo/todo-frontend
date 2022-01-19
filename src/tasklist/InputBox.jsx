import React, { useState } from "react"

export default function InputBox(props) {
    const [taskInput, setTaskInput] = useState("");

    async function handleSubmit(event) {
        event.preventDefault()
        const newTask = {"id": props.task.id, "task": taskInput, "done": props.task.done}
        await props.connector.updateTask(newTask)
        props.setEditMode(false)
        props.getData()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder={props.task.task} 
                    value={taskInput} 
                    onChange={(event) => setTaskInput(event.target.value)} 
                    data-testid="edit task input"
                ></input>
                <input type="submit" value="Edit Task" />
            </form>
        </div>
    )

}