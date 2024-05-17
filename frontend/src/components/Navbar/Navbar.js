import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box'; // Import the Box component
import { Link } from 'react-router-dom';
import './Navbar.css'

const linkstyle={
  color:'black',
  linkstyle:'none',
  textDecoration:'none'
}

const Navbar = ({ stock, SUV, SEDAN, CROSS }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLinkHover = (category) => {
    setHoveredLink(category);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };


  return (
    <>
      <nav>
        <div className='left'>
          <div className="logo">
            <h2>logo</h2>
          </div>
          <div className="links">

            <Link to='/usedcars/' id='two' style={linkstyle}
              onMouseEnter={() => handleLinkHover('Shop')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              Shop
            </Link>

            <Link to='/usedcars/suv' id='three' style={linkstyle}
              onMouseEnter={() => handleLinkHover('SUV')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              SUV
            </Link>

            <Link to='/usedcars/sedan' id='four' style={linkstyle}
              onMouseEnter={() => handleLinkHover('Sedan')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              Sedan
            </Link>

            <Link to='/usedcars/crossover' id='five' style={linkstyle}
              onMouseEnter={() => handleLinkHover('CrossOver')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              CrossOver
            </Link>

          </div>
        </div>
        <div className='icons'>
          <Link to='/addpost' id='one'>Post an Ad</Link>
          <i class="fa-solid fa-1x fa-magnifying-glass"></i>
          <i class="fa-solid fa-1x fa-cart-shopping"></i>
          <i class="fa-regular fa-user"></i>
        </div>


      </nav>
    </>
  );
};

Navbar.propTypes = {
  stock: PropTypes.array.isRequired,
  SUV: PropTypes.array.isRequired,
  SEDAN: PropTypes.array.isRequired,
  CROSS: PropTypes.array.isRequired,
};

export default Navbar;
