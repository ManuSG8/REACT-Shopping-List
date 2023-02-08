import React from 'react'

function Button({ children, added, handleClick }) {
  return(
    <button
      className={ added ? 'btn btn-warning' : 'btn btn-primary' }
      onClick={ handleClick }
    >
      {children}
    </button>
  )
}

export default Button