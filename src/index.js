import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.querySelector('#root'));

// const element = React.createElement('button', {
//   type: 'button',
//   children: ['hello world', 'world'],
// });
// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// const elemFromJSX = <button>hello world</button>;
// ReactDOM.render(elemFromJSX, document.querySelector('#root'));
// console.log(elemFromJSX);

// const fetchMovies = () => {
//   return fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res =>
//     res.json()
//   );
// };

// export default fetchMovies;
