import React from "react";
import TaskList from "./tasklist/tasklist";
import TestConnector from "./connector/test-connector";
import AddTask from "./add_task/add_task";

export default function App() {

    const testConnector = new TestConnector()
    
    return (
        <div>
            <div>
                <h3>REACT TODO LIST</h3>
            </div>
            <div>
                <AddTask />
            </div>
            <div>
                <TaskList testConnector={testConnector} />
            </div>
        </div>
    )
}