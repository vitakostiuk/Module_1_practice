import styles from './ColorPicker.module.css';
console.log(styles);

function ColorPicker({ options }) {
  return (
    <div className={styles.ColorPicker}>
      <h2 className={styles.ColorPicker__title}>ColorPicker</h2>
      <div>
        {options.map(option => (
          <span
            key={option.id}
            className={styles.ColorPicker__option}
            style={{ backgroundColor: option.color }}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
