import React from 'react'

function Header({ cartTotal }) {
  return (
    <div>
      <header className='row block center'>
        <div>
          <a href='#'>
            <img
              className='logo'
              src='https://cdn.icon-icons.com/icons2/2389/PNG/512/gg_logo_icon_145257.png'
              alt=''
            />
            <span className='shop_name text-bold'>OLDSTUFFS</span>
          </a>
        </div>
        <div>
          <a href='#'>
            <h3>
              Cart <button className='btn btn-blue'>{cartTotal}</button>
            </h3>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header
