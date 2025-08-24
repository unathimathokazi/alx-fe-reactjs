import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const todoText = screen.getByTestId('todo-text-1');
    expect(todoText).not.toHaveClass('line-through');
    
    fireEvent.click(todoText);
    expect(todoText).toHaveClass('line-through');
    
    fireEvent.click(todoText);
    expect(todoText).not.toHaveClass('line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const deleteButton = screen.getByTestId('delete-todo-1');
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});