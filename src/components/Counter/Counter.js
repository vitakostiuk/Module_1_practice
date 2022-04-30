import React from 'react';
import { Container, Value } from './Counter.styled';
import { Controls } from './Controls';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTipes = {
    // propTipes
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = evt => {
    // console.log('Increment button was clicked!', evt);
    // console.log(this.props);
    // console.log(this);

    // const target = evt.target;

    // setTimeout(() => {
    //   console.log('Increment after 1000ms', target);
    // }, 1000);

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = evt => {
    // console.log('Decrement button was clicked!', evt);
    // console.log(this.props);
    // console.log(this);
    // const target = evt.target;
    // setTimeout(() => {
    //   console.log('Decrement after 1000ms', target);
    // }, 1000);

    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <Container>
        <Value>{this.state.value}</Value>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </Container>
    );
  }
}
