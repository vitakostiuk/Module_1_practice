import PropTypes from 'prop-types';
import s from './Alert.module.css';

function Alert({ text, type = 'success' }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
};

export default Alert;
