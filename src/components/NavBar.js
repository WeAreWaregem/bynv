import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                BYNV
              <div className='menu-icon'>
              </div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li classNeme='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li classNeme='nav-item'>
                <Link to='/Vinyl-Insites' className='nav-links' onClick={closeMobileMenu}>
                  Vinyl Insites
                </Link>
              </li>
              <li classNeme='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>             
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default NavBar