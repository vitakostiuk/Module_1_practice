import React, { Component } from 'react';
import shortid from 'shortid';
// import { Counter } from './Counter';
// import { Dropdown } from './Dropdown';
// import ColorPicker from './ColorPicker';
// import colorPickerOptions from './ColorPicker/colorPickerOptions';
import { TodoList } from './TodoList';
import { TodoEditor } from './TodoEditor';
import { Filter } from './TodoList/Filter';
// import { Form } from './Form';

class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  addToDo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    //----БЕЗ деструктуризации-----
    // this.setState(prevState => ({
    //   todos: [todo, ...prevState.todos],
    // }));
    //----После деструктуризации-----
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
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

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    // -----with filter------
    // return todos.filter(({ completed }) => completed).length;
    // -----with reduce------
    return todos.reduce((acc, { completed }) => (completed ? acc + 1 : acc), 0);
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    if (this.state.todos !== prevState.todos) {
      console.log('Обновилось поле, записываю todos в хранилище');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter } = this.state;
    const todoCount = todos.length;
    return (
      <>
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Общее кол-во: {todoCount}</p>
          <p>Кол-во выполненных: {this.getCompletedTodoCount()}</p>
        </div>
        <TodoEditor onSubmit={this.addToDo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={this.getFilteredTodos()}
          onDeleteTodo={this.deleteTodo}
          onToogleCompleted={this.toogleCompleted}
        />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </>
    );
  }
}

export default App;
