import React from 'react'
import '../car/Car.css'


export default function Car(props) {
  return (
    <div id="carbox">
      {/* <img src={props.front_image}></img> */}
      <h1>{props.make}</h1>
      <h1>{props.model}</h1>
      <h1>{props.year}</h1>
      <h1>{props.mileage}</h1>
      <h1>{props.price}</h1>
    </div>
  )
}
