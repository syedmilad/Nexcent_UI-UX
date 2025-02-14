import React, { useState } from 'react'
import { images, data} from '../constants'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='app__navbar'> 
        <div className='app__navbar-logo'>
          <img src={images.Logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Home</a></li>
          <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Services</a></li>
          <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Features</a></li>
          <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Product</a></li>
          <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Testomonial</a></li>
          <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">FAQ</a></li>
        </ul>
        <div className='app__navbar-btns'>
          <button className='custom__button' style={{backgroundColor: "white", color:"#4CAF4F"}} >Login</button>
          <button className='custom__button'>Sign up</button>
        </div>
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#000' fontSize={30} onClick={()=> setToggleMenu(true)} />
           { toggleMenu &&  <div className='app__navbar-smallscreen_overlay flex__center'>
                <MdOutlineRestaurantMenu className='overlay__close' color='#000' fontSize={30} onClick={()=> setToggleMenu(false)} />
                <ul className='app__navbar-smallscreen_links'>
                  <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Home</a></li>
                  <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Services</a></li>
                  <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Features</a></li>
                  <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Product</a></li>
                  <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">Testomonial</a></li>
                  <li className='p__opensans'><a  style={{color: '#18191F'}} href="#">FAQ</a></li>
                </ul>
            </div>}
        </div>
    </div>
  )
}

export default Navbar