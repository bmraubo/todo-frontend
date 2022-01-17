import React from "react";

export default function AddTask(props) {
    let taskInput = React.createRef();

    async function handleSubmit(event) {
        event.preventDefault()
        await props.connector.addTask(taskInput.current.value)
        props.getData();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Enter New Task" ref={taskInput} data-testid="input"></input>
                <button>ADD TASK</button>
            </form>
        </div>
    )
}