import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders default todos", () => {
  render(<TodoList />);
  const items = screen.getAllByTestId("todo-item");
  expect(items.length).toBeGreaterThan(0);
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/Add Task/i));
  const items = screen.getAllByTestId("todo-item");
  expect(items).toHaveLength(3); // initial 2 + 1 new
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  const items = screen.queryAllByTestId("todo-item");
  expect(items.length).toBe(1);
});
