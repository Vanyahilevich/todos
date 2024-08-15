import styled from 'styled-components';

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 64px;
  color: #444;
  font-weight: lighter;
  padding: 0 0 20px;

  @media (max-width: 500px) {
    font-size: 40px;
    padding: 0 0 10px;
  }
`;

const TodoHeader = ({ title }: { title: string }) => {
  return <HeaderStyled>{title}</HeaderStyled>;
};

export default TodoHeader;
