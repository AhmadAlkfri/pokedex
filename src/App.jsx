import Header from "./components/Header"
import PokeCard  from "./components/PokeCard"
import SideNav from "./components/SideNav"
import { useState } from "react"

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(0) 
  const [showSideNav, setShowSideNav] = useState(false)

  function toggleSideNav(){
    setShowSideNav(!showSideNav)
  }

  function handleCloseMenu(){
    setShowSideNav(false)
  }

  return (
    <>
      <Header toggleSideNav={toggleSideNav}/>
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} handleCloseMenu={handleCloseMenu} showSideNav={showSideNav}/>
      <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
