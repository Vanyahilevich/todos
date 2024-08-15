import { FC, memo } from 'react';
import styled from 'styled-components';

const Filters = styled.div`
  @media (max-width: 410px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  button {
    cursor: pointer;
    padding: 5px 10px;
    color: #888;
    border: 1px solid #eee;

    &:first-child {
      padding-left: 0px;
    }
    &:last-child {
      padding-right: 0px;
    }
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
