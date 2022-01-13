export default class BackendMock {
    
    constructor() {
        this.database = [
            {"id": 1, "task": "a task", "done": false},
            {"id": 2, "task": "another task", "done": false},
            {"id": 3, "task": "a final task", "done": false}
        ]
    }


    mockTest() {
        return {"works":true};
    }

    retrieveAllTasks() {
        console.log("Fetch Task!")
        return this.database;
    }

    deleteTask(id) {
        let newdb = this.database.slice()
        console.log("delete Task!")
        let task = newdb.find(e => e.id === id)
        let index = newdb.indexOf(task)
        newdb.splice(index, 1)
        this.database = newdb
    }

    changeDoneStatus(taskInfo) {
        let newdb = this.database.slice()
        console.log("change done status!")
        let newTask = taskInfo
        if (newTask.done == true) {
            newTask.done = false
        } else if (newTask.done == false) {
            newTask.done = true
        }
        let task = newdb.find(e => e.id === taskInfo.id)
        let index = newdb.indexOf(task)
        newdb.splice(index, 1, newTask)
        this.database = newdb
    }
}

