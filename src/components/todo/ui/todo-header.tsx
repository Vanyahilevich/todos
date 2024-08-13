import styled from "styled-components";

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 64px;
  color: #444;
  font-weight: lighter;
  text-transform: lowercase;
`;

const TodoHeader = ({ title }: { title: string }) => {
  return <HeaderStyled>{title}</HeaderStyled>;
};

export default TodoHeader;
