import { useState } from 'react'
import './App.css'
import Basket from './components/Basket'
import Header from './components/Header'
import Main from './components/Main'
import products from './data'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const idx = cartItems.findIndex((item) => item.id === product.id)
    const newCart = [...cartItems]
    if (idx !== -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 }
    } else {
      newCart.push({ ...product, qty: 1 })
    }
    setCartItems(newCart)
  }

  const removeItem = (product) => {
    const exist = cartItems.find((item) => item.id === product.id)
    const newCart = [...cartItems]
    if (exist.qty === 1) {
      setCartItems(newCart.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        newCart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      )
    }
  }

  return (
    <div className='App'>
      <Header cartTotal={cartItems.length} />
      <div className='row'>
        <Main products={products} addToCart={addToCart} />
        <Basket
          cartItems={cartItems}
          addToCart={addToCart}
          removeItem={removeItem}
        />
      </div>
    </div>
  )
}

export default App
