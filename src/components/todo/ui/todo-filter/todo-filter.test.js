import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoFilter from './todo-filter';

describe('TodoFilter', () => {
  const deleteCompletedTodosMock = jest.fn();
  const showAllTodosMock = jest.fn();
  const showActiveTodosMock = jest.fn();
  const showCompletedTodosMock = jest.fn();

  const setup = (filter) => {
    render(
      <TodoFilter
        filter={filter}
        deleteCompletedTodos={deleteCompletedTodosMock}
        showAllTodos={showAllTodosMock}
        showActiveTodos={showActiveTodosMock}
        showCompletedTodos={showCompletedTodosMock}
      />
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render all filter buttons', () => {
    setup('all');

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Clear completed')).toBeInTheDocument();
  });

  
  test('should call showAllTodos when "All" is clicked', () => {
    setup('active');
    userEvent.click(screen.getByText('All'));
    expect(showAllTodosMock).toHaveBeenCalledTimes(1);
  });

  test('should call showActiveTodos when "Active" is clicked', () => {
    setup('all');
    userEvent.click(screen.getByText('Active'));
    expect(showActiveTodosMock).toHaveBeenCalledTimes(1);
  });

  test('should call showCompletedTodos when "Completed" is clicked', () => {
    setup('all');
    userEvent.click(screen.getByText('Completed'));
    expect(showCompletedTodosMock).toHaveBeenCalledTimes(1);
  });

  test('should call deleteCompletedTodos when "Clear completed" is clicked', () => {
    setup('completed');
    userEvent.click(screen.getByText('Clear completed'));
    expect(deleteCompletedTodosMock).toHaveBeenCalledTimes(1);
  });
});
