import Header from "./components/Header"
import PokeCard  from "./components/PokeCard"
import SideNav from "./components/SideNav"
import { useState } from "react"

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(0) 

  return (
    <>
      <Header selectedPokemon={selectedPokemon}/>
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
