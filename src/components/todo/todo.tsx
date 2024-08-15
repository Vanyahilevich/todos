import { useCallback, useReducer, useState } from 'react';
import styled from 'styled-components';
import TodoList from './ui/todo-list';
import TodoItem from './ui/todo-item';
import TodoHeader from './ui/todo-header';
import TodoInput from './ui/todo-input/todo-input';
import {
  TODO_STATE_ACTIONS,
  todoStateReducer,
} from './model/todo-state-reducer';
import { Filter } from './types';
import TodoFooter from './ui/todo-footer';

const Container = styled.div`
  background: #eee;
  width: 500px;
  max-height: 70vh;
  height: 70vh;
  display: flex;
  flex-direction: column;
  alighn-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 500px) {
    max-height: 100vh;
    height: 100vh;
    width: 100vw;
    padding: 10px;
  }
`;

export function Todo() {
  const [todos, dispatch] = useReducer(todoStateReducer, [
    {
      id: 1,
      task: 'Тестовое задание',
      completed: false,
    },
    {
      id: 2,
      task: 'Прекрасный код',
      completed: true,
    },
    {
      id: 3,
      task: 'Покрытыми тестами',
      completed: false,
    },
  ]);
  const [filter, setFilter] = useState<Filter>('all');
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  const addTodo = useCallback((task: string) => {
    dispatch({ type: TODO_STATE_ACTIONS.ADD_TODO, payload: task });
  }, []);
  const toggleTodo = useCallback((id: number) => {
    dispatch({ type: TODO_STATE_ACTIONS.TOGGLE_TODO, payload: id });
  }, []);
  const deleteCompletedTodos = useCallback(() => {
    dispatch({ type: TODO_STATE_ACTIONS.DELETE_COMPLETED_TODOS });
  }, []);
  const showAllTodos = useCallback(() => {
    setFilter('all');
  }, []);
  const showActiveTodos = useCallback(() => {
    setFilter('active');
  }, []);
  const showCompletedTodos = useCallback(() => {
    setFilter('completed');
  }, []);

  return (
    <Container>
      <TodoHeader title="todos" />
      <TodoInput placeholder="What needs to be done?" addTodo={addTodo} />
      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleTodo={toggleTodo}
          />
        ))}
      </TodoList>
      <TodoFooter
        todos={filteredTodos}
        deleteCompletedTodos={deleteCompletedTodos}
        filter={filter}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
      />
    </Container>
  );
}
