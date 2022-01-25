export default class BackendMock {
    
    constructor() {
        this.id = 4
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
        console.log("Fetch Task List!")
        return this.database;
    }

    deleteTask(id) {
        let newdb = this.database.slice()
        console.log(`Deleting Task ID${id}`)
        let task = newdb.find(e => e.id === id)
        let index = newdb.indexOf(task)
        newdb.splice(index, 1)
        this.database = newdb
    }

    changeDoneStatus(taskInfo) {
        let newdb = this.database.slice()
        console.log("Changing Done Status")
        let newTask = taskInfo
        console.log("New task " + newTask)
        let task = newdb.find(e => e.id === taskInfo.id)
        let index = newdb.indexOf(task)
        newdb.splice(index, 1, newTask)
        this.database = newdb
        console.log(this.database)
    }

    addTask(taskData) {
        console.log(`Adding Task: ${taskData.task}`)
        let task = {"id": this.id, "task": taskData.task, "done": false}
        let newdb = this.database.concat([task])
        console.log(newdb)
        this.database = newdb
        this.id = this.id + 1
        return task
    }

    updateTask(taskData) {
        let newdb = this.database.slice()
        console.log("Editing Task")
        let newTask = taskData
        let task = newdb.find(e => e.id === taskData.id)
        let index = newdb.indexOf(task)
        newdb.splice(index, 1, newTask)
        this.database = newdb
        return taskData
    }
}

