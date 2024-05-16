import React from 'react'
import '../car/Car.css'
import Accord from '../../assets/accord.png'
import H6 from '../../assets/Havel.png'
import Civic from '../../assets/Civicx.png'
import Reborn from '../../assets/Reborn2.png'
import Vezel from '../../assets/Vezel2.png'
import Grande from '../../assets/g.png'
import { Link } from 'react-router-dom';

// Create a mapping of model names to image paths
const carImages = {
  Accord: Accord,
  H6: H6,
  Civic: Civic,
  Reborn: Reborn,
  Vezel: Vezel,
  Grande: Grande
};

export default function Car(props) {
  // Get the image source from the mapping
  const imageSrc = carImages[props.model];

  return (
    <div id="carbox">
      <img src={imageSrc} alt={`${props.make} ${props.model}`} />
      <h4>{props.make} {props.model}</h4>
      <h6 className='redtext'>PKR {props.price}</h6>
      <div className='row'>
        <div className='column'>
          <h6 className='bold'>Model</h6>
          <h6>{props.year}</h6>
        </div>
        <div className='column'>
          <h6 className='bold'>Mileage</h6>
          <h6>{props.mileage}</h6>
        </div>
        <div className='column'>
          <h6 className='bold'>Fuel</h6>
          <h6>{props.fuel}</h6>
        </div>
      </div>
      <Link to={`/car/${props.id}`} className='car_details'>
        See Details
      </Link>
    </div>
  )
}
