import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "../App"
import TestConnector from "../connector/test-connector"

describe("Testing adding a task", () => {

    it("An input box renders", async () => {
        const connector = new TestConnector();

        await waitFor(() => {
            render(<App connector={connector}/>)
        })

        await waitFor(() => {
            expect(screen.queryByTestId("input")).toBeTruthy();
        });
    })

    it("entering an input and clicking add task adds the task", async () => {
        const connector = new TestConnector();

        await waitFor(() => {
            render(<App connector={connector}/>)
        })

        fireEvent.change(screen.getByTestId("input"), {target: {value: "Hello"}})
        fireEvent.click(screen.getByText("Add Task"))

        await waitFor(() => {
            expect(screen.queryByTestId("Hello")).toBeTruthy();
        });
    })
})