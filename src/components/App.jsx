import React, { Component } from 'react';
// import { Counter } from './Counter';
// import { Dropdown } from './Dropdown';
// import ColorPicker from './ColorPicker';
// import colorPickerOptions from './ColorPicker/colorPickerOptions';
import { TodoList } from './TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Выучить основы React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const todoCount = todos.length;
    //with filter
    // const todoCompleted = todos.filter(({ completed }) => completed).length;
    //with reduce
    const todoCompletedCount = todos.reduce(
      (acc, { completed }) => (completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во: {todoCount}</p>
          <p>Кол-во выполненных: {todoCompletedCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
