import styled from 'styled-components';

const TodoListStyled = styled.ul`
  flex: 1;
  margin: 10px 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;


  #nothingToDo {
    text-align: center;
    padding: 10px;
  }s
`;

const TodoList = ({ children }: { children: React.ReactNode[] }) => {
  if (children.length === 0) {
    return (
      <TodoListStyled>
        <div id="nothingToDo">Nothing to do</div>
      </TodoListStyled>
    );
  }
  return <TodoListStyled>{children}</TodoListStyled>;
};

export default TodoList;
