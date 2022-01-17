import React, { useEffect, useState } from "react";
import "./tasklist.css"

export default function TaskList(props) {
    function Task({ taskInfo }) {
        return (
            <button data-testid={`${taskInfo.task}`} onClick={() => {changeDoneStatus({taskInfo})}}>
                Task: {taskInfo.task} &emsp; Status: {DoneStatus(taskInfo.done)}
            </button>
        );
    }

    function DoneStatus(doneStatus) {
        if (doneStatus) {
            return "Completed!";
        } else {
            return "Not Done!";
        }
    }

    function EditButton() {
        return <button>Edit</button>;
    }

    function DeleteButton({taskId}) {
        return <button data-testid={`Delete ${taskId}`} onClick={() => {DeleteTask({taskId})}}>Delete</button>;
    }

    async function changeDoneStatus({taskInfo}) {
        await props.connector.changeDoneStatus(taskInfo)
        props.getData()
    }

    async function DeleteTask({taskId}) {
        await props.connector.deleteTask(taskId);
        props.getData()
    }

    return props.loading ? (
        <h2>loading...</h2>
    ) : (
        <>
            <ul>
                {props.tasks.map((task) => (
                    <li key={task.id}>
                        <div className="row">
                            <div className="column">
                                <Task taskInfo={task} />
                            </div>
                            <div className="columns">
                                <EditButton />
                                <DeleteButton taskId={task.id}/>
                            </div>
                        </div>
                        
                        
                    </li>
                ))}
            </ul>
        </>
    );
}
