import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const linkstyle = {
  color: "black",
  textDecoration: "none",
};

const Navbar = ({ stock, SUV, SEDAN, CROSS }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkHover = (category) => {
    setHoveredLink(category);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const searchCar = async (e) => {
    e.preventDefault();
    navigate(`/usedcars?search=${e.target.search.value}`);
    e.target.search.value = "";
  };

  return (
    <>
      <nav>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/usedcars/" className='innerlink' style={linkstyle} onMouseEnter={() => handleLinkHover("Shop")} onMouseLeave={handleLinkLeave} >
            Shop
          </Link>
          <Link to="/usedcars/suv" className='innerlink' style={linkstyle} onMouseEnter={() => handleLinkHover("SUV")} onMouseLeave={handleLinkLeave} >
            SUV
          </Link>
          <Link to="/usedcars/sedan" className='innerlink' style={linkstyle} onMouseEnter={() => handleLinkHover("Sedan")} onMouseLeave={handleLinkLeave}>
            Sedan
          </Link>
          <Link to="/usedcars/crossover" className='innerlink' style={linkstyle}  onMouseEnter={() => handleLinkHover("CrossOver")} onMouseLeave={handleLinkLeave} >
            CrossOver
          </Link>
          <Link to="/postad" className='innerlink' >
            Post an Ad
          </Link>
        </div>
        <div className="left">
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} hamburger-lines`} onClick={toggleMenu}></i>
          <div className="logo">
            <h2 onClick={() => { navigate("/"); }} style={{ cursor: "pointer" }}>CARS</h2>
          </div>
          <Link to="/usedcars/" id="two" style={linkstyle} onMouseEnter={() => handleLinkHover("Shop")} onMouseLeave={handleLinkLeave} className="shop-link">
            Shop
          </Link>
          <Link to="/usedcars/suv" id="three" style={linkstyle} onMouseEnter={() => handleLinkHover("SUV")} onMouseLeave={handleLinkLeave} className="shop-link">
            SUV
          </Link>
          <Link to="/usedcars/sedan" id="four" style={linkstyle} onMouseEnter={() => handleLinkHover("Sedan")} onMouseLeave={handleLinkLeave} className="shop-link">
            Sedan
          </Link>
          <Link to="/usedcars/crossover" id="five" style={linkstyle} onMouseEnter={() => handleLinkHover("CrossOver")} onMouseLeave={handleLinkLeave} className="shop-link">
            CrossOver
          </Link>
        </div>
        <div className="icons">
          <Link to="/postad" id="one">
            Post an Ad
          </Link>
          <form className={`form-inline ${menuOpen ? "hide-on-mobile" : ""}`} onSubmit={searchCar} style={{ marginLeft: "20px" }}>
            <input className="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <Link to="/myads" style={{ backgroundColor: 'white', color: 'black' }}>
            <i className="fa-regular fa-user"></i>
          </Link>
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
