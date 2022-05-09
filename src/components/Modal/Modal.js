import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    console.log('Modal componentWillUnmount');
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали  ESC, нужно закрыть модалку');
      this.props.onKeyDown();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      console.log('Кликнули по бекдропу');
      this.props.onKeyDown();
    }
  };

  render() {
    return createPortal(
      <div className={s.Backdrop} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
