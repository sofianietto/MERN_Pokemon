
import { useState } from 'react'
import './App.css'
function App() {

  const [pokemon, setPokemon] = useState([])
  const handleLoadPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results))
  }
  return (
    <div className="container-mt5">
      <h1>Pokemon API</h1>
      <div className="d-grid gap-2">
        <button onClick={handleLoadPokemon} className="btn btn-warning" type="button">Fetch Pokemon</button>
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
