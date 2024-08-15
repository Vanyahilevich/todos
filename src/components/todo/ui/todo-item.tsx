import styled from 'styled-components';
import { Todo } from '../types';
import RoundCheckbox from '../../../ui/RoundCheckbox';
import { memo } from 'react';

const TodoItemStyled = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  font-size: 16px;

  input {
    margin-right: 20px;
  }
  div {
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    color: ${(props) => (props.completed ? '#ccc' : 'black')};
  }
`;
type TodoItemProps = Todo & {
  toggleTodo: (id: number) => void;
};
const TodoItem: React.FC<TodoItemProps> = memo(
  ({ id, task, completed, toggleTodo }) => {
    console.log('TodoItem', id);
    return (
      <TodoItemStyled completed={completed}>
        <RoundCheckbox
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <div>{task}</div>
      </TodoItemStyled>
    );
  },
);

export default TodoItem;
