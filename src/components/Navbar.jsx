import React from 'react'
import '../styles/Navbar.css'
import Cart from './Cart'

function Navbar({ filled }) {
  return(
    <nav>
      <ul>
        <li>Inicio</li>
        <li className={ filled ? 'filled-cart' : 'empty-cart' }>
          <Cart />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar