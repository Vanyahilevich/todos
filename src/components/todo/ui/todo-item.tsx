import styled from "styled-components";
import { Todo } from "../types";
import RoundCheckbox from "../../../ui/RoundCheckbox";
import { memo } from "react";

const TodoItemStyled = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  min-height: 40px;
  overflow: hidden;
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  font-size: 16px;

  &:last-child {
    border-bottom: none;
  }

  input {
    margin-right: 20px;
  }
  span {
    flex: 1;
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: ${(props) => (props.completed ? "#ccc" : "black")};
    white-space: nowrap;       
    overflow: hidden;          
    text-overflow: ellipsis;
  }
`;
type TodoItemProps = Todo & {
  toggleTodo: (id: number) => void;
};
const TodoItem: React.FC<TodoItemProps> = memo(({
  id,
  task,
  completed,
  toggleTodo,
}) => {
  console.log("TodoItem", id);
  return (
    <TodoItemStyled completed={completed}>
      <RoundCheckbox
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{task}</span>
    </TodoItemStyled>
  );
});

export default TodoItem;
