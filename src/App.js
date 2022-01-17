import React from "react";
import TaskList from "./tasklist/tasklist";
import TestConnector from "./connector/test-connector";
import AddTask from "./add_task";

export default function App() {

    const testConnector = new TestConnector()
    
    return (
        <div>
            <div>
                REACT TODO LIST
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