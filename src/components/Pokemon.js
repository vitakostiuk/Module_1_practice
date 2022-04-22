import PropTypes from 'prop-types';
import emptyImg from '../img_not_found.jpg';

const Pokemon = ({ url = emptyImg, title, id, quantity }) => {
  return (
    <div>
      <img src={url ?? emptyImg} alt={title} width="200" />
      <h3>Название: {title}</h3>
      <p>Номер: {id}</p>
      <p>Количество: {quantity > 10 ? 'заканчивается' : 'есть в наличиии'}</p>
    </div>
  );
};

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Pokemon;
