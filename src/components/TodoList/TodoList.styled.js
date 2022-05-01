import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background-color: teal;
  color: #fff;
  border: none;
  padding: 5px 10px;
  &:hover {
    background-color: orange;
    transform: scale(1.1);
  }
`;

export const Paragraf = styled.p`
  color: #2a2a2a;
  font-size: 25px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  &:not(:last-child) {
    border-bottom: 1px solid teal;
  }
`;

export const List = styled.ul`
  border: 1px solid teal;
  list-style: none;
  padding: 0;
`;
