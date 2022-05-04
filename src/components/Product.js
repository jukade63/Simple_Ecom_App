import React from 'react'

function Product({ product, addToCart }) {
  return (
    <div className='product'>
      <img src={product.image} alt='photo1' className='small' />
      <h3>{product.name}</h3>
      <h4 className='price text-right'>${product.price}</h4>
      <div>
        <button className='btn btn-add' onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
