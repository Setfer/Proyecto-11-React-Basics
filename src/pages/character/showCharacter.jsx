import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./showCharacter.css"


const ShowCharacter = () => {

  const [character, setCharacter]=useState(null)
  const {id} = useParams()
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res))
  },[id])

  if (!character) {
    return <p>Cargando personaje...</p>;
  }
  return (
    <div className='character'>
       <img className='marco-character' src='/assets/frame_transparent.png'/>
      <img className='img-character' src={character.imageUrl} alt={character.fullName}/>
      <div className='info'>
      <h2>{character.fullName}</h2>
      <h3>{character.title}</h3>
      <p>{character.family}</p>
      </div>
    </div>
  )
}

export default ShowCharacter