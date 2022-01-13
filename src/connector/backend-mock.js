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
        console.log("delete Task!")
        let task = this.database.find(e => e.id === id)
        let index = this.database.indexOf(task)
        this.database.splice(index, 1)
    }
}

