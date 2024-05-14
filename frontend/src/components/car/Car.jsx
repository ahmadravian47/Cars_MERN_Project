import React from 'react'
import '../car/Car.css'
import car_image from '../../assets/car.jpg'
import { Link } from 'react-router-dom';


export default function Car(props) {
  return (
    <div id="carbox">
      <img src={car_image}></img>
      <h2>{props.make} {props.model}</h2>
      <h6>PKR {props.price}</h6>
      <div className='row'>
        <div className='column'>
          <h5 className='bold'>Model</h5>
          <h5>{props.year}</h5>
        </div>
        <div className='column'>
          <h5 className='bold'>Milleage</h5>
          <h5>{props.mileage}</h5>
        </div>
      </div>
      <Link to={`/car/${props.id}`} className='car_details' 
            >
              See Details
            </Link>

    </div>
  )
}
