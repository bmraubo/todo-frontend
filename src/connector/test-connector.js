import BackendMock from "./backend-mock";

export default class TestConnector {

    static fetchAllTasks() {
        let backend = new BackendMock();
        return backend.retrieveAllTasks();
    }


}