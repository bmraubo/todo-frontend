import { render, screen, act, waitFor, } from "@testing-library/react"
import BackendMock from "../connector/backend-mock"
import TaskList from "./tasklist"

describe("Testing tasklist...", () => {
    const backend = new BackendMock();

    it("test first render", () => {
        global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(backend.retrieveAllTasks())
        }))

        act(() => {
            render(<TaskList />)
        }) 

        expect(screen.getByText("loading..."))
    })

    it("on render, displays list of tasks", async () => {
        global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(backend.retrieveAllTasks())
        }))

        render(<TaskList />)

        await waitFor(() => {
            expect(screen.getByText("a final task"))
        })

        

        

    })
})