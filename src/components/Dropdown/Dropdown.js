import React, { Component } from 'react';
import { Container, Menu } from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    return (
      <Container>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && <Menu>Выпадающее меню</Menu>}
      </Container>
    );
  }
}
