import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header