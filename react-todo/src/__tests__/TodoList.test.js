
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
});
