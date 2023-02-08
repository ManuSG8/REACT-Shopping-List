import React, { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar';

const products = [
  {
    id: 1,
    title: 'Camiseta Nirvana',
    price: 30,
    src: 'camiseta-nirvana.jpg'
  },
  {
    id: 2,
    title: 'Camiseta One Piece',
    price: 40,
    src: 'camiseta-one-piece.jpg'
  },
  {
    id: 3,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 4,
    title: 'Sobrecamisa',
    price: 35,
    src: 'sobrecamisa.jpg'
  },
  {
    id: 5,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 6,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 7,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 8,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 9,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 10,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 11,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 12,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  },
  {
    id: 13,
    title: 'Cazadora Bomber',
    price: 70,
    src: 'cazadora-bomber.jpg'
  }
]

function App() {

  // const [add, setAdd] = useState(false)

  // const addToCart = () => {
  //   setAdd(!add)
  // }

  const addedButtons = document.querySelectorAll('button.btn.btn-warning')

  console.log(addedButtons)

  const [cartFilled, setCartFilled] = useState(false)

  useEffect(function() {
    if(addedButtons.length > 0) {
      setCartFilled(true)
      console.log('Hola')
    }
  }, [])

  return (
    <div className="App">
      <Navbar filled={cartFilled}/>
      <div className='content'>
        {
          products.map(product => {
            return (
              <Card 
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.src}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;