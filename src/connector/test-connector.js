import BackendMock from "./backend-mock";

export default class TestConnector {

    constructor() {
        console.log("new test connector")
        this.backend = new BackendMock()
    }

    fetchAllTasks() {
        return Promise.resolve(this.backend.retrieveAllTasks());
    }

    deleteTask(id) {
        console.log(id)
        return Promise.resolve(this.backend.deleteTask(id));
    }

    changeDoneStatus(taskInfo) {
        taskInfo.done = !taskInfo.done
        return Promise.resolve(this.backend.changeDoneStatus(taskInfo))
    }

    addTask(userInput) {
        let taskData = {"task": userInput}
        return Promise.resolve(this.backend.addTask(taskData))
    }

    updateTask(taskInfo) {
        return Promise.resolve(this.backend.updateTask(taskInfo))
    }
}
