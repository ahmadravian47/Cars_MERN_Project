import React from 'react';
import PropTypes from 'prop-types';
import './Box.css'


const Box = ({ stock, my_margin }) => {
  return (
    <div className="box" style={{ marginLeft: my_margin }}>
      <ul>
        {stock.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


Box.propTypes = {
  stock: PropTypes.array.isRequired,
};

export default Box;
