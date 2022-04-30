import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;
`;

const Value = styled.span`
  margin-right: 15px;
  margin-left: 15px;
  font-size: 64px;
  font-family: monospace;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: #fff;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
  border: 1px solid white;
  &:hover {
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
  &:active {
    background-color: orange;
  }
`;

export { Container, Value, Button };
