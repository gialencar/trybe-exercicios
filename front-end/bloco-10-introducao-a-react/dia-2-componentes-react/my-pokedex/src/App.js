import './App.css';
import Pokedex from './components/Pokedex';
import Data from './Data';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <div className='pokedex'>
        <Pokedex pokemons={Data} />
      </div>
    </main>
  );
}

export default App;
