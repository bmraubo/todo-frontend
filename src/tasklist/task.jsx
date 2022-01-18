import React, { useState } from "react"
import "./tasklist.css"

export default function Task(props) {
    const taskMessage = `Task: ${props.task.task} Status: ${DoneStatus(props.task.done)}`
    const [editMode, setEditMode] = useState(false)
    let taskInput = React.createRef();

    function Button(props) {
        return (
            <button data-testid={props.testid} onClick={props.onClick}>
                {props.message}
            </button>
        )
    }

    function InputBox(props) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={props.task.task} ref={taskInput}></input>
                    <button>Edit Task</button>
                </form>
            </div>
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        alert(taskInput.current.value)
    }

    async function changeDoneStatus() {
        await props.connector.changeDoneStatus(props.task)
        props.getData()
    }

    async function DeleteTask() {
        await props.connector.deleteTask(props.task.id);
        props.getData()
    }

    async function EditTask() {
        setEditMode(!editMode)
        // id, new task info, done status
        // input for new task info
        // edit will swap out old task info for new task info
        // send new task to connector.editTask
    }

    function DoneStatus(doneStatus) {
        if (doneStatus) {
            return "Completed!";
        } else {
            return "Not Done!";
        }
    }

    return (
        <div>
        {editMode &&
        <InputBox task={props.task} />
        }  
            <div className="row">
                <div className="column">
                    <Button testid={props.task.task} onClick={changeDoneStatus} message={taskMessage}/>
                </div>
                <div>
                    <Button testid={`Edit ${props.task.id}`} onClick={EditTask} message="Edit"/>
                    <Button testid={`Delete ${props.task.id}`} onClick={DeleteTask} message="Delete"/>
                </div>
            </div>
        </div>
    )
}