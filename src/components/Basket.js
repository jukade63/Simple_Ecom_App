function Basket({ cartItems, addToCart, removeItem }) {
  let itemsPrices = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
  let shipping = itemsPrices > 3000 ? 0 : 50
  let total = itemsPrices + shipping
  return (
    <aside className='col-1 block'>
      <h2>Cart Item</h2>
      <div className='mb'>
        {cartItems.length === 0 && <div className='mb'>Empty Cart</div>}
      </div>
      {cartItems.map((item) => (
        <div className='row mb'>
          <div className='col-2'>{item.name}</div>
          <div>
            <button
              className='remove btn btn-red'
              onClick={() => removeItem(item)}
            >
              -
            </button>
          </div>
          <div>
            <button className='add btn' onClick={() => addToCart(item)}>
              +
            </button>
          </div>
          <div className='col-2 text-right'>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}

      <hr />

      <div className='row'>
        <div className='col-2'>Item(s) Price</div>
        <div className='col-1 text-right'>{itemsPrices}</div>
      </div>
      <div className='row'>
        <div className='col-2'>Shipping</div>
        <div className='col-1 text-right'>{shipping}</div>
      </div>

      <div className='row text-bold'>
        <div className='col-2'>Total</div>
        <div className='col-1 text-right'>{total}</div>
      </div>
    </aside>
  )
}

export default Basket
