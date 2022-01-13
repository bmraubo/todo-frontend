import BackendMock from "./backend-mock";
import Connector from "./connector";

// get all tasks

describe("Testing connecting to Backend", () => {
    const backend = new BackendMock();

    it("The Mock is working correctly", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(backend.mockTest()),
            })
        );

        let answer = await Connector.fetchAllTasks();

        expect(answer["works"]).toBe(true);
    });

    it("Can retrieve all tasks", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(backend.retrieveAllTasks()),
            })
        );

        let expectedReturnValue = [
            { id: 1, task: "a task", done: false },
            { id: 2, task: "another task", done: false },
            { id: 3, task: "a final task", done: false },
        ];

        expect(await Connector.fetchAllTasks()).toStrictEqual(
            expectedReturnValue
        );
    });

    it("Can remove a task given a specific ID", async () => {
        let id = 2

        global.fetch = jest.fn(() =>
            Promise.resolve(backend.deleteTask(id)),
        );
        
        await Connector.deleteTask(id)

        let expectedList = [
            { id: 1, task: "a task", done: false },
            { id: 3, task: "a final task", done: false },
        ];

        console.log(backend.retrieveAllTasks())

        expect(backend.retrieveAllTasks()).toStrictEqual(
            expectedList
        );
    })
});
