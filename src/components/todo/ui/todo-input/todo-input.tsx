import React, { FC, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InputStyled = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #eee;
  outline: none;
  margin-right: 10px;
`;

const ButtonStyled = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #444444;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #333333;
  }
`;

type TodoInputProps = {
  placeholder: string;
  addTodo: (task: string) => void;
};

const TodoInput: FC<TodoInputProps> = ({ placeholder, addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <Container>
      <InputStyled
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ButtonStyled onClick={handleAddClick}>Add</ButtonStyled>
    </Container>
  );
};

export default TodoInput;
