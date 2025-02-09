import './App.css'
import Header from './components/header/header'
import { Route, Routes } from 'react-router-dom'
import ShowCharacter from './pages/character/showCharacter'
import Footer from './components/footer/footer'
import ShowCharacters from './components/showCharacters/showCharacters'
import { useEffect, useState } from 'react'



function App() {

  const [characters, setCharacters]=useState(null)
  
    useEffect(() => {
      fetch('https://thronesapi.com/api/v2/Characters')
        .then((res) => res.json())
        .then((res) => setCharacters(res))
    },[])
    
    if (!characters) {
      return <p>Cargando personaje...</p>;
    }


  return (
   
      <>
        <Header/>
        <main>
        <Routes> 
          <Route path='/' element={<ShowCharacters characters={characters} />}/>
          <Route path='/character' element={<ShowCharacter characters={characters} />}/>
        </Routes>
        </main>
        <Footer/>
      </>
   
  )
}

export default App
