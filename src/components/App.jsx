import React, { Component } from 'react';
// import { Counter } from './Counter';
// import { Dropdown } from './Dropdown';
// import ColorPicker from './ColorPicker';
// import colorPickerOptions from './ColorPicker/colorPickerOptions';
import { TodoList } from './TodoList';
// import { Form } from './Form';

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

  toogleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Нашли тот туду, который нужно!');
          console.log(todo);

          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  render() {
    const { todos } = this.state;
    const todoCount = todos.length;
    // ////with filter
    // // const todoCompleted = todos.filter(({ completed }) => completed).length;
    // ////with reduce
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
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToogleCompleted={this.toogleCompleted}
        />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </>
    );
  }
}

export default App;
