import React, { useEffect } from "react";
import { useState, act } from "react";
import TaskList from "./tasklist/tasklist";
import TestConnector from "./connector/test-connector";
import AddTask from "./add_task/add_task";

const connector = new TestConnector()

export default function App() {
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState();

    async function getData() {
        return connector.fetchAllTasks().then((response) => {
            setTasks([])
            setTasks(response)
        });
    }

    useEffect(() => {
        getData().then((response) => {
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
                <TaskList connector={connector} getData={getData} tasks={tasks} setTasks={setTasks} loading={loading}/>
            </div>
        </div>
    )
}