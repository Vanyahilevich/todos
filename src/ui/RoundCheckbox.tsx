import styled from 'styled-components';

const RoundCheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  appearance: none;
  border: 2px solid #ccc;
  outline: none;
  cursor: pointer;

  &:checked {
    border-color: #4caf50;
    position: relative;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 7px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-color: #4caf50;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const RoundCheckbox = (props: any) => {
  return <RoundCheckboxStyled {...props} />;
};

export default RoundCheckbox;
