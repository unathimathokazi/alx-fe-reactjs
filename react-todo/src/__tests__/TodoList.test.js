import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders input and add button", () => {
  render(<TodoList />);
  expect(screen.getByPlaceholderText(/add a todo/i)).toBeInTheDocument();
  expect(screen.getByText(/add/i)).toBeInTheDocument();
});

test("adds a todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});

test("deletes a todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  const deleteBtn = screen.getByText(/delete/i);
  fireEvent.click(deleteBtn);

  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});
