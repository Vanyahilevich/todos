import styled from "styled-components";

const TodoListStyled = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow-y: auto;
`;

const TodoList: React.FC<{ children: React.ReactNode }> = (props) => {
  return <TodoListStyled>{props.children}</TodoListStyled>;
};

export default TodoList;
