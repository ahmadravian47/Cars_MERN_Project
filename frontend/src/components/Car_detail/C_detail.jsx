import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./C_detail.css";

export default function C_detail() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/car/car/${id}`);
        const result = await response.json();
        setCar(result);
        console.log(car);
        setImages(result.images || []);
      } catch (err) {
        console.log("Error : ", err);
      }
    };
    fetchCar();
  }, [id]);

  return (
    <>
      <div className="parent">
        <div id="carouselExampleControls" className="carousel slide child1" data-ride="carousel" >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                <img className="d-block w-100" src={String(image).match('^uploads') ? 'http://localhost:5000/' + image :  image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {car.owner ? (
          <div className="child2">
            <h2>Seller Details</h2>
            <h6>Seller Name : {car.owner.name}</h6>
            <h6>Seller Location : {car.owner.location}</h6>
            <h6>Seller Phone Number : {car.owner.phone}</h6>
            <a>Book an Appointment</a>
          </div>
        ) : null}
      </div>
      <div className="second">
        <div className="detail_box">
          <h1>PKR {car.price}</h1>
          <h5>
            {car.make} {car.model}
          </h5>
        </div>
        <div className="detail_box ">
          <h3>Details</h3>
          <div className="detail_box2 ">
            <h6 className="bold">Make</h6>
            <h6>{car.make}</h6>
            <h6 className="bold">Model</h6>
            <h6>{car.model}</h6>
            <h6 className="bold">Type</h6>
            <h6>{car.type}</h6>
            <h6 className="bold">Year</h6>
            <h6>{car.year}</h6>
            <h6 className="bold">Mileage</h6>
            <h6>{car.mileage}</h6>
            <h6 className="bold">Condition</h6>
            <h6>{car.condition}</h6>
            <h6 className="bold">Fuel Type</h6>
            <h6>{car.fuelType}</h6>
            <h6 className="bold">Transmission</h6>
            <h6>{car.transmission}</h6>
            <h6 className="bold">Color</h6>
            <h6>{car.color}</h6>
          </div>
        </div>
        <div className="detail_box ">
          <h3>Description</h3>
          <h6>{car.description}</h6>
        </div>
      </div>
    </>
  );
}
