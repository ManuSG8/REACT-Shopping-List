import React, { useState } from 'react'
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
  }
]

function App() {

  // const [add, setAdd] = useState(false)

  // const addToCart = () => {
  //   setAdd(!add)
  // }

  return (
    <div className="App">
      <Navbar filled={false}/>
      <div className='content'>
        {
          products.map(product => {
            return (
              <Card 
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