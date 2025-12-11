import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='top-header'>
     <div className="header-content">
     <div className='header-text'> 
      <Link to="/"><p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
     </Link>
     <Link to="/"> <button className='shopnow-btn'>ShopNow</button></Link>
      </div>
      <select name="language">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
     </div>
   
    </header>
  )
}

export default Header
