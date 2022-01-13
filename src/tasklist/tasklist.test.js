import { render, screen, act, waitFor, fireEvent } from "@testing-library/react";
import BackendMock from "../connector/backend-mock";
import App from "../App"

describe("Testing tasklist...", () => {
    const backend = new BackendMock();

    it("test first render", () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(backend.retrieveAllTasks()),
            })
        );

        act(() => {
            render(<App />);
        });

        expect(screen.getByText("loading..."));
    });

    it("on render, displays list of tasks", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(backend.retrieveAllTasks()),
            })
        );

        render(<App />);

        await waitFor(() => {
            expect(screen.getAllByTestId("a task"));
        });
    });

    it("On Delete button press, relevant task is deleted", async () => {

        await waitFor(() => {
            render(<App />)
        })
        
        fireEvent.click(screen.getByTestId("Delete 2"))

        await waitFor(() => {
            !expect(screen.queryByTestId("another task")).toBeNull();
        });
    })
});
