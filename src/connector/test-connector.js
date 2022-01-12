import BackendMock from "./backend-mock";

export default class TestConnector {

    static fetchAllTasks() {
        return BackendMock.retrieveAllTasks();
    }

    
}