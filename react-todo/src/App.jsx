import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>My Todo App</h1>
      <TodoList />
    </div>
  );
}
