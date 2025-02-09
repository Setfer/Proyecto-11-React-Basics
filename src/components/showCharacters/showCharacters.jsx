import React, { useState } from 'react'
import "./showCharacters.css"
import { useNavigate } from 'react-router-dom'



const ShowCharacters = (props) => {
  const [next, setNext] = useState(0)
  const navigate = useNavigate()

  return (
    <>
    <div className='characters'>
      {props.characters.slice(0 + next, 15 + next).map((character) => (
        <div key={character.id}>
          {console.log(character)}
          <img className='marco' src='public\assets\frame_transparent.png'/>
          <img
            className='characters-img'
            src={character.imageUrl}
            alt={character.fullName}
            onClick={() => navigate(`/character?name=${character.fullName}`)}
          />
          <h3>{character.fullName}</h3>
        </div>
      ))}
      </div>
      <div className='buttons'>
      <button
        onClick={() => setNext(next - 15)}
        style={next === 0 ? { display: ' none' } : {}}
      >
        Anterior
      </button>
      <button
        onClick={() => setNext(next + 15)}
        style={next >= props.characters.length - 15 ? { display: ' none' } : {}}
      >
        Siguiente
      </button>
      </div>
    </>
  )
}

export default ShowCharacters
