import React, { useState } from 'react'
import '../styles/Card.css'
import Button from './Button'

function Card({ title, price, image }) {

  const [add, setAdd] = useState(false)

  return(
    <div className='card-container'>
      <img 
        src={require(`../images/${image}`)}
        alt={title}
      />
      <p className='title'>
        {title}
      </p>
      <p className='price'>
        {`${price}€`}
      </p>
      <Button added={add} handleClick={ () => setAdd(!add) }>{ add ? 'Added' : 'Add'}</Button>
    </div>
  )
}

export default Card