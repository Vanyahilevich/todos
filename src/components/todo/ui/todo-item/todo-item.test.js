import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import TodoItem from './todo-item'; 

describe('TodoItem', () => {
  const todo = {
    id: 1,
    task: 'Тестовое задание',
    completed: false,
  };

  const toggleTodo = jest.fn();

  test('renders the task text', () => {
    render(<TodoItem {...todo} toggleTodo={toggleTodo} />);
    expect(screen.getByText('Тестовое задание')).toBeInTheDocument();
  });

  test('applies correct styles when todo is not completed', () => {
    render(<TodoItem {...todo} toggleTodo={toggleTodo} />);
    const taskElement = screen.getByText('Тестовое задание');
    expect(taskElement).toHaveStyle('text-decoration: none');
    expect(taskElement).toHaveStyle('color: black');
  });

  test('applies correct styles when todo is completed', () => {
    render(<TodoItem {...{ ...todo, completed: true }} toggleTodo={toggleTodo} />);
    const taskElement = screen.getByText('Тестовое задание');
    expect(taskElement).toHaveStyle('text-decoration: line-through');
    expect(taskElement).toHaveStyle('color: #ccc');
  });

  test('calls toggleTodo when checkbox is clicked', async () => {
    render(<TodoItem {...todo} toggleTodo={toggleTodo} />);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(toggleTodo).toHaveBeenCalledWith(todo.id);
  });
});
