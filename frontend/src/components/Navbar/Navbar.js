import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box'; // Import the Box component
import { Link } from 'react-router-dom';

const Navbar = ({ stock, SUV, SEDAN, CROSS }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLinkHover = (category) => {
    setHoveredLink(category);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  const getBoxComponent = () => {
    switch (hoveredLink) {
      case 'Shop':
        return <Box stock={stock} my_margin="200px" />;
      case 'SUV':
        return <Box stock={SUV} my_margin="270px" />;
      case 'Sedan':
        return <Box stock={SEDAN} my_margin="340px" />;
      case 'CrossOver':
        return <Box stock={CROSS} my_margin="410px" />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav>
        <div className='left'>
          <div className="logo">
            <h2>Ahmad</h2>
          </div>
          <div className="links">

            <Link to='/usecars/all' id='two'
              onMouseEnter={() => handleLinkHover('Shop')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              Shop
            </Link>

            <Link to='/usecars/suv' id='three'
              onMouseEnter={() => handleLinkHover('SUV')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              SUV
            </Link>

            <Link to='/usecars/sedan' id='four'
              onMouseEnter={() => handleLinkHover('Sedan')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              Sedan
            </Link>

            <Link to='/usecars/crossover' id='five'
              onMouseEnter={() => handleLinkHover('CrossOver')}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              CrossOver
            </Link>

          </div>
        </div>
        <div className='icons'>
          <a id='one'>Support</a>
          <i class="fa-solid fa-1x fa-magnifying-glass"></i>
          <i class="fa-solid fa-1x fa-cart-shopping"></i>
          <i class="fa-regular fa-user"></i>
        </div>


      </nav>
      {hoveredLink && (

        <div className="box-container">
          {getBoxComponent()}
        </div>
      )}
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
