import BackendMock from "./backend-mock";

export default class TestConnector {
    static fetchAllTasks() {
        let backend = new BackendMock();
        return Promise.resolve(backend.retrieveAllTasks());
    }

    static deleteTask() {
        let backend = new BackendMock();
        return Promise.resolve(backend.deleteTask());
    }
}
