import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex'

function App() {
  return (
    <div className='app'>
      <h1>Pokedex</h1>
      <Pokedex pokemons = { pokemons }/>
    </div>
  );
}

export default App;