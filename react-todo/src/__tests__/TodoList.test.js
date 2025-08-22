import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders Todo List heading", () => {
  render(<TodoList />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
});

test("allows user to add a todo", () => {
  render(<TodoList />);
  
  // type a task
  const input = screen.getByPlaceholderText(/enter a task/i);
  fireEvent.change(input, { target: { value: "Learn React" } });
  
  // click add button
  const button = screen.getByText(/add/i);
  fireEvent.click(button);

  // check if it appears in the list
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("does not add empty todo", () => {
  render(<TodoList />);
  
  const button = screen.getByText(/add/i);
  fireEvent.click(button);

  // list should remain empty
  expect(screen.queryByRole("listitem")).toBeNull();
});
