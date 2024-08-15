import { FC, memo } from 'react';
import styled from 'styled-components';

const Filters = styled.div`
  button {
    border: none;
    background: none;
    font-size: 14px;
    cursor: pointer;
    padding: 5px 10px;
    color: #888;
    border: 1px solid #eee;

    &:hover {
      text-decoration: underline;
    }

    &.selected {
      border: 1px solid #ddd;
      border-radius: 3px;
      color: #333;
    }
  }
`;

type TodoFilterProps = {
  filter: 'all' | 'active' | 'completed';
  deleteCompletedTodos: () => void;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
};

const TodoFilter: FC<TodoFilterProps> = memo(
  ({
    filter,
    deleteCompletedTodos,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
  }) => {
    return (
      <Filters>
        <button
          className={filter === 'all' ? 'selected' : ''}
          onClick={showAllTodos}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'selected' : ''}
          onClick={showActiveTodos}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'selected' : ''}
          onClick={showCompletedTodos}
        >
          Completed
        </button>
        <button onClick={deleteCompletedTodos}>Clear completed</button>
      </Filters>
    );
  },
);

export default TodoFilter;
