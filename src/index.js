// import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement('button', {
//   type: 'button',
//   children: ['hello world', 'world'],
// });
// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// const elemFromJSX = <button>hello world</button>;
// ReactDOM.render(elemFromJSX, document.querySelector('#root'));
// console.log(elemFromJSX);

const fetchMovies = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res =>
    res.json()
  );
};

const getMovies = () => {
  fetchMovies().then(pokemons => {
    console.log(pokemons);

    ReactDOM.render(
      <Pokemon
        url={pokemons.sprites.front_default}
        name={pokemons.name}
        id={pokemons.id}
      />,
      document.querySelector('#root')
    );
  });
};

getMovies();

const Pokemon = props => {
  console.log(props);
  return (
    <div>
      <img src={props.url} alt={props.name} width="100" />
      <h2>Имя: {props.name}</h2>
      <p>ID: {props.id}</p>
    </div>
  );
};
