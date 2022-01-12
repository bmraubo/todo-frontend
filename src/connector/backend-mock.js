export default class BackendMock {

    static mockTest() {
        return {"works":true};
    }

    static retrieveAllTasks() {
        return [
            {"id": 1, "task": "a task", "done": false},
            {"id": 2, "task": "another task", "done": false},
            {"id": 3, "task": "a final task", "done": false}
        ]
    }
}

