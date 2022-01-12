import BackendMock from "./backend-mock"
import Connector from "./connector"

// get all tasks

describe("Testing connecting to Backend", () => {

    it("Can retrieve all tasks", () => {
        global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(BackendMock.retrieveAllTasks())
        }))

        let expectedReturnValue = [
            {"id": 1, "task": "a task", "done": false},
            {"id": 2, "task": "another task", "done": false},
            {"id": 3, "task": "a final task", "done": false}
        ]

        expect(Connector.fetchAllTasks).toBe(expectedReturnValue);
    })

})