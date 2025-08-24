import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText(/new task/i)).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);

  // initially not completed
  expect(todo).not.toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteBtn = screen.getAllByText(/delete/i)[0];

  fireEvent.click(deleteBtn);

  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
