import React, { Component } from 'react';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ message: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Добавить</button>
      </form>
    );
  }
}
