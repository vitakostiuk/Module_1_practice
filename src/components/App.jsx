import PokemonsList from './PokemonsList';
import pokemons from '../pokemons.json';
import Section from '../components/Section';

const App = () => {
  return (
    <div>
      <Section title="Топ недели">
        <PokemonsList items={pokemons} />
        <PokemonsList items={pokemons} />
      </Section>

      <Section title="Other">
        <PokemonsList items={pokemons} />
      </Section>
    </div>
  );
};

export default App;
