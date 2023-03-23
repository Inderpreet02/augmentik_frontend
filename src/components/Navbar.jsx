import React from 'react'
import './Navbar.css'
import { AiOutlineDown } from "react-icons/ai";

import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="nav__container">
          <div className="nav__left">
            <img className='nav__logo' src={logo} alt="" />

            <ul className="nav__list">
              <li className="nav__item">Find Reservation</li>
              <li className="nav__item">Packages <AiOutlineDown className='nav__down'/></li>
              <li className="nav__item">About Lakshadweep <AiOutlineDown className='nav__down'/></li>
              <li className="nav__item">About Us</li>
              <li className="nav__item">Gol</li>
              <li className="nav__item">Support</li>
            </ul>
          </div>
          <div className="nav__right">

            <a href="" className="nav__login">Login</a>
            <a href="" className="nav__signup">Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar