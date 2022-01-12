import { render, screen } from "@testing-library/react"
import BackendMock from "../connector/backend-mock"
import TaskList from "./tasklist"

describe("Testing tasklist...", () => {

    it("on render, displays list of tasks", () => {
        global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(BackendMock.mockTest())
        }))

        render(<TaskList />)

        expect(screen.getByText("a final task")).toBeVisible()
    })
})