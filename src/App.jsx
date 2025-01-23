import './App.css'
import Header from './components/header/header'
import { Route, Routes } from 'react-router-dom'
import ShowCharacter from './pages/character/showCharacter'
import Home from './pages/home/home'
import Footer from './components/footer/footer'



function App() {

  return (
   
      <>
        <Header/>
        <main>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/character/:id' element={<ShowCharacter/>}/>
        </Routes>
        </main>
        <Footer/>
      </>
   
  )
}

export default App
