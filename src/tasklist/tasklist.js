import React, { useEffect } from "react";
import { useState } from "react";
import { act } from "react-dom/test-utils";
//import Connector from "../connector/connector";
import TestConnector from "../connector/test-connector";
import "./tasklist.css"

export default function TaskList() {
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState();

    function Task({ taskInfo }) {
        return (
            <button data-testid={`${taskInfo.task}`}>
                Task: {taskInfo.task} &emsp; Status: {DoneStatus(taskInfo.done)}
            </button>
        );
    }

    function DoneStatus(doneStatus) {
        if (doneStatus) {
            return "Done!";
        } else {
            return "Not Done!";
        }
    }

    function EditButton() {
        return <button>Edit</button>;
    }

    function DeleteButton({taskId}) {
        return <button data-testid={`Delete ${taskId}`}>Delete</button>;
    }

    async function getData() {
        return await TestConnector.fetchAllTasks();
    }

    useEffect(() => {
        getData().then((response) => {
            act(() => {
                setTasks(response);
                setLoading(false);
            });
        });
    }, []);

    return loading ? (
        <h2>loading...</h2>
    ) : (
        <>
            <ul>
                {tasks.map((task) => (
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
