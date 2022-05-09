import React, { Component } from 'react';
import shortid from 'shortid';
// import { Counter } from './Counter';
// import { Dropdown } from './Dropdown';
// import ColorPicker from './ColorPicker';
// import colorPickerOptions from './ColorPicker/colorPickerOptions';
// import { TodoList } from './TodoList';
// import { TodoEditor } from './TodoEditor';
// import { Filter } from './TodoList/Filter';
// import { Form } from './Form';
import { Modal } from './Modal';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevState) {
    // console.log(prevState);
    // console.log(this.state);
    if (this.state.todos !== prevState.todos) {
      // console.log('Обновилось поле, записываю todos в хранилище');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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
    // console.log(todoId);

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const todoCount = todos.length;
    return (
      <>
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <div>
          <p>Общее кол-во: {todoCount}</p>
          <p>Кол-во выполненных: {this.getCompletedTodoCount()}</p>
        </div>
        <TodoEditor onSubmit={this.addToDo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={this.getFilteredTodos()}
          onDeleteTodo={this.deleteTodo}
          onToogleCompleted={this.toogleCompleted}
        /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onKeyDown={this.toggleModal}>
            <h1>Контент модалки</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eligendi aliquid nostrum expedita aut unde voluptatum. Quam
              impedit natus numquam! Sunt illum accusantium ad eius dolores
              facere quod corporis quis? Quisquam dolores modi tenetur, neque
              suscipit quibusdam doloribus numquam commodi iusto porro fugit
              nihil eum quos velit doloremque quaerat enim natus, quidem est ea
              laboriosam nemo. Iure placeat sit fugit? Laudantium fugiat
              voluptates exercitationem nesciunt laborum totam harum asperiores
              rerum ipsa assumenda vitae ipsum ipsam, sit reprehenderit
              molestias vel! Eligendi, ab! Sed cum veniam ea libero quos atque
              iusto veritatis.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
