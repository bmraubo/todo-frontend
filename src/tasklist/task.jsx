import React, { useState } from "react"
import InputBox from "./InputBox"
import "./tasklist.css"

export default function Task(props) {
    const taskMessage = `Task: ${props.task.task} Status: ${DoneStatus(props.task.done)}`
    const [editMode, setEditMode] = useState(false)

    function Button(props) {
        return (
            <button className={props.className} data-testid={props.testid} onClick={props.onClick}>
                {props.message}
            </button>
        )
    }

    function TaskButtonColourController() {
        if (props.task.done) {
            return "task-done"
        } else {
            return "task-not-done"
        }
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
                    <Button testid={props.task.task} onClick={changeDoneStatus} message={taskMessage} className={TaskButtonColourController()}/>
                </div>
                <div>
                    <Button testid={`Edit ${props.task.id}`} onClick={() => {setEditMode(!editMode)}} message="Edit" className="edit"/>
                    <Button testid={`Delete ${props.task.id}`} onClick={DeleteTask} message="Delete" className="delete"/>
                </div>
            </div>
        </div>
    )
}