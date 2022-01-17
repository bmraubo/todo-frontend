import React from "react";

export default function AddTask(props) {
    let taskInput = React.createRef();

    async function handleSubmit(event) {
        event.preventDefault()
        let result = await props.connector.addTask(taskInput.current.value)
        console.log(result)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Enter New Task" ref={taskInput}></input>
                <button>ADD TASK</button>
            </form>
        </div>
    )
}