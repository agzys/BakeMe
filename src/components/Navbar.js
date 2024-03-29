import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(p => !p);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='logo'>
            BakeMe
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/getstarted'
                className='nav-links'
                onClick={closeMobileMenu}>
                Get Started
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recipes'
                className='nav-links'
                onClick={closeMobileMenu}>
                Recipes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          <Link to='/signup'>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
