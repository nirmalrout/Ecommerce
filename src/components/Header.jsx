import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import '../assets/css/Header.css'
import { useSelector } from 'react-redux'


const Header = () => {
  const cartItem = useSelector(state => state.cart)
  return (
    <header>
      <nav>
        <div className='left-side'>
          <div className="logo">
            <FiShoppingBag/>
          </div>
        </div>
        <div className="menu-container">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>
        <div className='right-side'>
            <NavLink to="/cart" className='cart'>
              <span>{cartItem.length}</span>
              <IoCartOutline/>
            </NavLink>
            <NavLink to="/" className='user'>
              <FaRegUserCircle/>
            </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header