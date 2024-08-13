import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoFilter from './todo-filter';

describe('TodoFilter', () => {
  const deleteCompletedTodosMock = jest.fn();
  const showAllTodosMock = jest.fn();
  const showActiveTodosMock = jest.fn();
  const showCompletedTodosMock = jest.fn();

  const setup = (filter: "all" | "active" | "completed") => {
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

  it('should render all filter buttons', () => {
    setup('all');

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Clear completed')).toBeInTheDocument();
  });


  it('should call showAllTodos when "All" is clicked', () => {
    setup('active');
    fireEvent.click(screen.getByText('All'));
    expect(showAllTodosMock).toHaveBeenCalledTimes(1);
  });

  it('should call showActiveTodos when "Active" is clicked', () => {
    setup('all');
    fireEvent.click(screen.getByText('Active'));
    expect(showActiveTodosMock).toHaveBeenCalledTimes(1);
  });

  it('should call showCompletedTodos when "Completed" is clicked', () => {
    setup('all');
    fireEvent.click(screen.getByText('Completed'));
    expect(showCompletedTodosMock).toHaveBeenCalledTimes(1);
  });

  it('should call deleteCompletedTodos when "Clear completed" is clicked', () => {
    setup('completed');
    fireEvent.click(screen.getByText('Clear completed'));
    expect(deleteCompletedTodosMock).toHaveBeenCalledTimes(1);
  });
});
