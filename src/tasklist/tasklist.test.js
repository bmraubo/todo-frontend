import { render, screen, act, waitFor, } from "@testing-library/react"
import BackendMock from "../connector/backend-mock"
import TaskList from "./tasklist"

describe("Testing tasklist...", () => {

    it("test first render", () => {
        global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(BackendMock.retrieveAllTasks())
        }))

        act(() => {
            render(<TaskList />)
        }) 

        expect(screen.getByText("loading..."))
    })

    it("on render, displays list of tasks", async () => {
        global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(BackendMock.retrieveAllTasks())
        }))

        render(<TaskList />)

        await waitFor(() => {
            expect(fetch).toHaveBeenCalled()
            expect(screen.getByText("a final task"))
        })

        

        

    })
})