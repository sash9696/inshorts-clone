import React from 'react';
import './Nav.css';
import HamburgerDrawer from './HamburgerDrawer'

function Nav({setCategory}) {
  return (
    <div className='nav'>
        <div className="menu">
            <HamburgerDrawer setCategory={setCategory}/>
        </div>
        <img 
            src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
            alt=''
            style={{cursor: 'pointer'}}
            height="80%"
            alt="logo"
        />
    </div>
  )
}

export default Nav