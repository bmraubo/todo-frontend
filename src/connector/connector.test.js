import BackendMock from "./backend-mock";
import Connector from "./connector";

// get all tasks

describe("Testing connecting to Backend", () => {
    

    it("The Mock is working correctly", async () => {
        let backend = new BackendMock();
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(backend.mockTest()),
            })
        );

        let answer = await Connector.fetchAllTasks();

        expect(answer["works"]).toBe(true);
    });

    it("Can retrieve all tasks", async () => {
        let backend = new BackendMock();
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
        let backend = new BackendMock();
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

    it("changes status of Done", async () => {
        let backend = new BackendMock();
        let task = { id: 2, task: "another task", done: false }
        
        global.fetch = jest.fn(() =>
            Promise.resolve(backend.changeDoneStatus(task)),
        );

        await Connector.changeDoneStatus(task)
        
        let expectedList = [
            { id: 1, task: "a task", done: false },
            { id: 2, task: "another task", done: true },
            { id: 3, task: "a final task", done: false },
        ];

        expect(backend.retrieveAllTasks()).toStrictEqual(
            expectedList
        );
    })

    it("added a task", async () => {
        let backend = new BackendMock();

        let newTask = "Hello There"

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(backend.addTask({"task": newTask})),
            })
        );

        let result = await Connector.addTask(newTask)

        let expectedResult = { id: 4, task: "Hello There", done: false };

        expect(result).toStrictEqual(expectedResult)
    })
});
