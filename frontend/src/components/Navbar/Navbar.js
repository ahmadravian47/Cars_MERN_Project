import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box"; // Import the Box component
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const linkstyle = {
  color: "black",
  linkstyle: "none",
  textDecoration: "none",
};

const Navbar = ({ stock, SUV, SEDAN, CROSS }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  const handleLinkHover = (category) => {
    setHoveredLink(category);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  const searchCar = async (e) => {
    e.preventDefault();
    navigate(`/usedcars?search=${e.target.search.value}`);
    e.target.search.value = "";
  };

  return (
    <>
      <nav>
        <div className="left">
          <div className="logo">
            <h2
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              CARS
            </h2>
          </div>
          <div className="links">
            <Link
              to="/usedcars/"
              id="two"
              style={linkstyle}
              onMouseEnter={() => handleLinkHover("Shop")}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              Shop
            </Link>

            <Link
              to="/usedcars/suv"
              id="three"
              style={linkstyle}
              onMouseEnter={() => handleLinkHover("SUV")}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              SUV
            </Link>

            <Link
              to="/usedcars/sedan"
              id="four"
              style={linkstyle}
              onMouseEnter={() => handleLinkHover("Sedan")}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              Sedan
            </Link>

            <Link
              to="/usedcars/crossover"
              id="five"
              style={linkstyle}
              onMouseEnter={() => handleLinkHover("CrossOver")}
              onMouseLeave={handleLinkLeave}
              className="shop-link"
            >
              CrossOver
            </Link>
          </div>
        </div>
        <div className="icons">
          <Link to="/postad" id="one">
            Post an Ad
          </Link>
          <form
            class="form-inline"
            onSubmit={searchCar}
            style={{ marginLeft: "20px" }}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          {/* <i class="fa-solid fa-1x fa-magnifying-glass"></i> */}
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
