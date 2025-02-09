import React, { useEffect, useState } from 'react'

import './showCharacter.css'
import { useSearchParams } from 'react-router-dom'

const ShowCharacter = ({ characters }) => {
  const [SearchParams] = useSearchParams()
  const name = SearchParams.get('name')
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res))
  }, [])

  const characterImg = characters.find((p) => p.fullName === name)
  console.log(characterImg)

  if (!character) {
    return <p>Cargando personaje...</p>
  }
  return (
    <div className='character'>
      <img className='marco-character' src='/assets/frame_transparent.png' />
      <img
        className='img-character'
        src={characterImg.imageUrl}
        alt={character.fullName}
      />
      {console.log(character)}
      <div className='info'>
        <h2>{character[0].name}</h2>
        <div>
          {character[0].titles.length > 0 && (
            <ul className='titles'>
              <h3>Titles:</h3>
              {character[0].titles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          )}

          {character[0].aliases.length > 0 && (
            <ul className='alias'>
              <h3>Alias:</h3>
              {character[0].aliases.map((alia, index) => (
                <li key={index}>{alia}</li>
              ))}
            </ul>
          )}
        </div>
        <p>{characterImg.family}</p>
      </div>
    </div>
  )
}

export default ShowCharacter
