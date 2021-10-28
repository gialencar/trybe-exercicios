import './App.css';
import Pokedex from './components/Pokedex';
import Data from './Data'

function App() {
  return <div className="pokedex"><Pokedex pokemons={Data}/></div>
}

export default App;
