import React from 'react';
import { Button } from './Counter.styled';

export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <Button type="button" onClick={onIncrement}>
        Увеличить на 1
      </Button>
      <Button type="button" onClick={onDecrement}>
        Уменьшить на 1
      </Button>
    </div>
  );
};
