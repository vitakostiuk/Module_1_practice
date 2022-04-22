// import fetchMovies from '../index';
import pokemons from '../pokemons.json';
import Pokemon from './Pokemon';

export const App = () => {
  return (
    <div>
      <Pokemon 
        url = { pokemons[0].url }
        title = { pokemons[0].title }
        id={pokemons[0].id}
      />
    </div>)
};

// const getMovies = () => {
//   fetchMovies().then(pokemon => {
//     console.log(pokemon);
//   })
// }
  
// getMovies();
