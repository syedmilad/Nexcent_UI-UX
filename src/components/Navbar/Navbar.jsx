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
        <div className='app__navbar-links'>
              {data.navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={{}} // Replace `item.path` with the actual path property in your data
                  className='p__opensans app__navbar-link no-underline'
                  style={{ color: "#18191F" }}
              >
                {item.label}
              </Link>
              ))}
        </div>
        <div className='app__navbar-btns'>
          <button className='custom__button' style={{backgroundColor: "white", color:"#4CAF4F"}} >Login</button>
          <button className='custom__button'>Sign up</button>
        </div>
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#000' fontSize={30} onClick={()=> setToggleMenu(true)} />
            {toggleMenu && <div className='app__navbar-smallscreen_overlay flex__center'>
              <MdOutlineRestaurantMenu color='#000' fontSize={30} onClick={()=> setToggleMenu(false)} />
              <div className='app__navbar-smallscreen_links'>
                {data.navLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={{}} // Replace `item.path` with the actual path property in your data
                    className='p__opensans app__navbar-link no-underline'
                    style={{ color: "#18191F" }}
                >
                  {item.label}
                </Link>
                ))}
              </div>
            </div>}
        </div>
    </div>
  )
}

export default Navbar