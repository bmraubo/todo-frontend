import { render, screen, act, waitFor, fireEvent } from "@testing-library/react";
import BackendMock from "../connector/backend-mock";
import App from "../App"

describe("Testing tasklist...", () => {
    const backend = new BackendMock();

    it("test first render", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(backend.retrieveAllTasks()),
            })
        );

        act(() => {
            render(<App />);
        });

        await waitFor(() => {
            expect(screen.getByText("loading..."));
        })
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
            expect(screen.queryByTestId("another task")).toBeNull();
        });
    })

    it("On clicking task, Done status is flipped", async () => {
        await waitFor(() => {
            render(<App />)
        })

        fireEvent.click(screen.getByTestId("a task"))

        await waitFor(() => {
            expect(screen.queryByTestId("a task").textContent).toContain("Completed")
        });
    })

    it("on clicking Edit, an input box is displayed", async () => {
        await waitFor(() => {
            render(<App />)
        })

        fireEvent.click(screen.getByTestId("Edit 1"))

        await waitFor(() => {
            expect(screen.queryByTestId("edit task input")).toBeTruthy();
        });
    })

    it("on editing task, the updated task is displayed on the list", async () => {
        await waitFor(() => {
            render(<App />)
        })

        fireEvent.click(screen.getByTestId("Edit 1"))
        fireEvent.change(screen.getByTestId("edit task input"), {target: {value: "Hello"}})

        await waitFor(() => {
            expect(screen.queryByTestId("Hello"));
        });
    })
});
