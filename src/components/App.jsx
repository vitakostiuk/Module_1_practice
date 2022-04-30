// POKEMONS
// =====================================================
// import PokemonsList from './PokemonsList';
// import pokemons from '../pokemons.json';
// import Section from '../components/Section';

// const App = () => {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PokemonsList items={pokemons} />
//         <PokemonsList items={pokemons} />
//       </Section>

//       <Section title="Other">
//         <PokemonsList items={pokemons} />
//         <PokemonsList items={pokemons} />
//       </Section>
//     </div>
//   );
// };

// export default App;
//====================================================

// ColorPicker
//====================================================
// import colorPickerOptions from '../components/ColorPicker/colorPickerOptions';
// import ColorPicker from './ColorPicker/ColorPicker';

// function App() {
//   return (
//     <div>
//       <ColorPicker options={colorPickerOptions} />
//     </div>
//   );
// }

// export default App;
//========================================================

//ALERT
//========================================================
import Alert from './Alert/Alert';

function App() {
  return (
    <div>
      <Alert text="Something went wrang" type="success" />
      <Alert text="Something went wrang" type="warning" />
      <Alert text="Something went wrang" type="error" />
    </div>
  );
}

export default App;
