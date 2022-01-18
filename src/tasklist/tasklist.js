import React, { useEffect, useState } from "react";
import Task from "./task";
import "./tasklist.css"

export default function TaskList(props) {
    
    return props.loading ? (
        <h2>loading...</h2>
    ) : (
        <>
            <ul>
                {props.tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} getData={props.getData} connector={props.connector}/>
                    </li>
                ))}
            </ul>
        </>
    );
}
