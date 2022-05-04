import React from 'react'
import Product from './Product'

function Main({ products, addToCart }) {
  return (
    <div className='col-2 block'>
      <h2>Products</h2>
      <div className='row'>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default Main
