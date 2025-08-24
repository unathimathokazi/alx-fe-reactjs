import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Learn Testing"]);

  const addTodo = (todo) => {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} data-testid="todo-item">
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo("New Task")}>Add Task</button>
    </div>
  );
}
