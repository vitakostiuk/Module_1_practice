import React from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraf, Item, List } from './TodoList.styled';

export const TodoList = ({ todos, onDeleteTodo, onToogleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToogleCompleted(id)}
        ></input>
        <Paragraf completed={completed}>{text}</Paragraf>
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
