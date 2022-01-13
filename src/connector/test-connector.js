import BackendMock from "./backend-mock";

export default class TestConnector {

    constructor() {
        this.backend = new BackendMock()
    }

    fetchAllTasks() {
        return Promise.resolve(this.backend.retrieveAllTasks());
    }

    deleteTask(id) {
        console.log(id)
        return Promise.resolve(this.backend.deleteTask(id));
    }
}
