import React from "react";
import "../car/Car.css";
import { Link } from "react-router-dom";

// Create a mapping of model names to image paths
const carImages = {
  accord: `${process.env.PUBLIC_URL}/assets/Accord/0.png`,
  h6: `${process.env.PUBLIC_URL}/assets/H6/0.png`,
  civic: `${process.env.PUBLIC_URL}/assets/Civic/0.png`,
  reborn: `${process.env.PUBLIC_URL}/assets/Reborn/0.png`,
  vezel: `${process.env.PUBLIC_URL}/assets/Vezel/0.png`,
  grande: `${process.env.PUBLIC_URL}/assets/Grande/0.png`,
};

export default function Car(props) {
  // Get the image source from the mapping
  // const imageSrc = carImages[props.model];
  const imageSrc = String(props.imageSrc);
  console.log(imageSrc.match("^upload"));

  return (
    <div id="carbox">
      {/* <div className='cari' style={{ backgroundImage: `url(${imageSrc})` }}> */}
      <div className="cari">
        {/* the condition in src is to check if the imageSrc starts with upload which means that they are stored in uploads of backend folder ,else they are hardcoded from above */}
        <img
          src={
            imageSrc.match("^uploads")
              ? "http://localhost:5000/" + props.imageSrc
              : carImages[props.model]
          }
        />
      </div>
      <div className="card">
        <h4>
          {props.make} {props.model}
        </h4>
        <h6 className="redtext">PKR {props.price}</h6>
        <div className="row">
          <div className="column">
            <h6 className="bold">Model</h6>
            <h6>{props.year}</h6>
          </div>
          <div className="column">
            <h6 className="bold">Mileage</h6>
            <h6>{props.mileage}</h6>
          </div>
          <div className="column">
            <h6 className="bold">Fuel</h6>
            <h6>{props.fuel}</h6>
          </div>
        </div>

        <Link to={`/car/${props.id}`} className="car_details">
          See Details
        </Link>
      </div>
    </div>
  );
}
