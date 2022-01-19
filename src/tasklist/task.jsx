import React, { useEffect, useState } from "react"
import InputBox from "./InputBox"
import "./tasklist.css"

export default function Task(props) {
    const taskMessage = `Task: ${props.task.task} Status: ${DoneStatus(props.task.done)}`
    const [editMode, setEditMode] = useState(false)
    
    let taskInputOld = React.createRef();

    function Button(props) {
        return (
            <button data-testid={props.testid} onClick={props.onClick}>
                {props.message}
            </button>
        )
    }

    

    useEffect(()=>{},[])

    

    async function handleSubmitOld(event) {
        event.preventDefault()
        //const newTask = {"id": props.task.id, "task": taskInput.current.value, "done": props.task.done}
        //await props.connector.updateTask(newTask)
        setEditMode(false)
        props.getData()
    }

    async function changeDoneStatus() {
        await props.connector.changeDoneStatus(props.task)
        props.getData()
    }

    async function DeleteTask() {
        await props.connector.deleteTask(props.task.id);
        props.getData()
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
                <InputBox task={props.task} getData={props.getData} setEditMode={setEditMode} connector={props.connector}/>
            }  
            <div className="row">
                <div className="column">
                    <Button testid={props.task.task} onClick={changeDoneStatus} message={taskMessage}/>
                </div>
                <div>
                    <Button testid={`Edit ${props.task.id}`} onClick={() => {setEditMode(!editMode)}} message="Edit"/>
                    <Button testid={`Delete ${props.task.id}`} onClick={DeleteTask} message="Delete"/>
                </div>
            </div>
        </div>
    )
}