import React, { useEffect, useState } from 'react'
import ShowCharacters from '../../components/showCharacters/showCharacters'
import "./home.css"


const  Home = () => {
  
  const [characters, setCharacters]=useState([])

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((res) => res.json())
      .then((res) => setCharacters(res))
  },[])


  return (
  <>
    <ShowCharacters characters={characters} />
  </>
  )
}

export default Home
