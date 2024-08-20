import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoInput from './todo-input';

describe('TodoInput Component', () => {


  test('renders input field and button correctly', () => {
    render(<TodoInput placeholder="What needs to be done?" addTodo={jest.fn()} />);
    
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    const buttonElement = screen.getByText(/Add/i);
    
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls addTodo with input value when Add button is clicked', async () => {
    const mockAddTodo = jest.fn();
    render(<TodoInput placeholder="What needs to be done?" addTodo={mockAddTodo} />);
    
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    const buttonElement = screen.getByText(/Add/i);
    
    userEvent.type(inputElement, 'New Task');
    await userEvent.click(buttonElement);
    
    expect(mockAddTodo).toHaveBeenCalledWith('New Task');
    expect(inputElement.value).toBe('');
  });

  test('calls addTodo with input value when Enter key is pressed', async () => {
    const mockAddTodo = jest.fn();
    render(<TodoInput placeholder="What needs to be done?" addTodo={mockAddTodo} />);
    
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    
    await userEvent.type(inputElement, 'New Task{enter}' );
    
    expect(mockAddTodo).toHaveBeenCalledWith('New Task');
    expect(inputElement.value).toBe('');
  });

  test('does not call addTodo when input is empty', () => {
    const mockAddTodo = jest.fn();
    render(<TodoInput placeholder="What needs to be done?" addTodo={mockAddTodo} />);
    
    const buttonElement = screen.getByText(/Add/i);
    
    userEvent.click(buttonElement);
    
    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
