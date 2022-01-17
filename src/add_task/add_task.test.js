import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "../App"

describe("Testing adding a task", () => {
    it("An input box renders", async () => {
        await waitFor(() => {
            render(<App />)
        })

        await waitFor(() => {
            expect(screen.queryByTestId("input")).toBeTruthy();
        });
    })

    it("entering an input and clicking add task adds the task", async () => {
        await waitFor(() => {
            render(<App />)
        })

        fireEvent.change(screen.getByTestId("input"), {target: {value: "Hello"}})
        fireEvent.click(screen.getByText("ADD TASK"))

        await waitFor(() => {
            expect(screen.queryByTestId("Hello")).toBeTruthy();
        });
    })
})