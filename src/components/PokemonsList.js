import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

// const PokemonsList = ({ items }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Pokemon
//             url={item.url}
//             title={item.title}
//             id={item.id}
//             quantity={item.quantity}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

const PokemonsList = props => {
  const items = props.items;
  console.log(props);
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Pokemon
            url={item.url}
            title={item.title}
            id={item.id}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
};

PokemonsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PokemonsList;
