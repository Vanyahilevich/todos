import styled from 'styled-components';
import { Todo } from '../types';
import { memo } from 'react';
import TodoFilter from './todo-filter/todo-filter';

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #888;
  margin-top: auto;

  @media (max-width: 410px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  span {
    margin-left: 5px;
  }
`;

type TodoFilterProps = {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  deleteCompletedTodos: () => void;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
};

const TodoFooter: React.FC<TodoFilterProps> = memo(
  ({
    todos,
    filter,
    deleteCompletedTodos,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
  }) => {
    const lengthTodos = todos.filter((todo) => !todo.completed).length;
    const to = lengthTodos > 1 ? 'items' : 'item';
    return (
      <Footer>
        <span>
          {lengthTodos} {to} left
        </span>
        <TodoFilter
          filter={filter}
          deleteCompletedTodos={deleteCompletedTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
        />
      </Footer>
    );
  },
);

export default TodoFooter;
