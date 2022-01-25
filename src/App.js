import React, { useEffect } from "react";
import { useState, act } from "react";
import TaskList from "./tasklist/tasklist";
import AddTask from "./add_task/add_task";



export default function App({connector}) {
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState();

    async function getData() {
        return connector.fetchAllTasks().then((response) => {
            setTasks(response)
        });
    }

    useEffect(() => {
        getData().then(() => {
            setLoading(false);
        });
    }, []);
    
    return (
        <div>
            <div>
                <h3>REACT TODO LIST</h3>
            </div>
            <div>
                <AddTask connector ={connector} getData={getData}/>
            </div>
            <div>
                <TaskList connector={connector} getData={getData} tasks={tasks} loading={loading}/>
            </div>
        </div>
    )
}