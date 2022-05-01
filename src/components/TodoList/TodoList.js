import React from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraf, Item, List } from './TodoList.styled';

export const TodoList = ({ todos, onDeleteTodo }) => (
  <List>
    {todos.map(({ id, text }) => (
      <Item key={id}>
        <Paragraf>{text}</Paragraf>
        <Button type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </Button>
      </Item>
    ))}
  </List>
);

TodoList.propTipes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
