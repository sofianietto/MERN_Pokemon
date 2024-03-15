import axios from 'axios';
import './App.css'
import { useState } from 'react';
function App() {
  const [pokemon, setPokemon] = useState([])

  const handleLoadPokemonAxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      console.log(response)
      setPokemon(response.data.results)
    })
  }


  return (
      <div className="container-mt5">
        <h1>Pokemon API</h1>
        <div className="d-grid gap-2">
          <button onClick={handleLoadPokemonAxios} className="btn btn-warning" type="button">Fetch Pokemon</button>
        </div>
        <ol>
          {pokemon.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ol>
      </div>
  )
}

export default App