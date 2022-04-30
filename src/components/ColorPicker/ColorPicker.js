import React, { Component } from 'react';
import styles from './ColorPicker.module.css';
console.log(styles);

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [styles.ColorPicker__option];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push(styles.ColorPicker__active);
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label, color } = options[activeOptionIdx];
    return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.ColorPicker__title}>ColorPicker</h2>
        <p>
          Выбран цвет: <span style={{ color: color }}>{label}</span>
        </p>
        <div>
          {options.map((option, index) => (
            <button
              key={option.id}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: option.color }}
              onClick={() => this.setActiveIndex(index)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
