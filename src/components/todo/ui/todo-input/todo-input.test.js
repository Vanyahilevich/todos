import { render, screen, fireEvent } from '@testing-library/react';
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

  test('calls addTodo with input value when Add button is clicked', () => {
    const mockAddTodo = jest.fn();
    render(<TodoInput placeholder="What needs to be done?" addTodo={mockAddTodo} />);
    
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    const buttonElement = screen.getByText(/Add/i);
    
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(buttonElement);
    
    expect(mockAddTodo).toHaveBeenCalledWith('New Task');
    expect(inputElement.value).toBe('');
  });

  test('calls addTodo with input value when Enter key is pressed', () => {
    const mockAddTodo = jest.fn();
    render(<TodoInput placeholder="What needs to be done?" addTodo={mockAddTodo} />);
    
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });
    
    expect(mockAddTodo).toHaveBeenCalledWith('New Task');
    expect(inputElement.value).toBe('');
  });

  test('does not call addTodo when input is empty', () => {
    const mockAddTodo = jest.fn();
    render(<TodoInput placeholder="What needs to be done?" addTodo={mockAddTodo} />);
    
    const buttonElement = screen.getByText(/Add/i);
    
    fireEvent.click(buttonElement);
    
    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
