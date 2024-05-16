import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './C_detail.css'

export default function C_detail() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');

  let user={//fetch fromZ
    "_id": "user_id_2",
    "username": "user456",
    "email": "user456@example.com",
    "password": "hashed_password_2",
    "name": "Jane Smith",
    "phone": "987-654-3210",
    "location": "City B, Country B",
    "joinedAt": {
      "$date": "2024-05-02T00:00:00.000Z"
    },
    "__v": 0
  }

  useEffect(() => {
    const fetchCar = async () => {
        const response = await fetch(`http://localhost:5000/car/${id}`)
        .then((res)=>{
          return res.json();
        })
        .then((result)=>{
          setCar(result)
          console.log(result)
        })
        .catch ((err)=> {
        console.log('Error : ', err);
      })
    };
    fetchCar();
  }, [id]);

  useEffect(() => {
    if (car.model) {
      console.log('Image links succeed');
      console.log(`../../assets/${car.model}/0.png`)
      setImage1(require(`../../assets/${car.model}/0.png`));
      setImage2(require(`../../assets/${car.model}/1.png`));
      setImage3(require(`../../assets/${car.model}/2.png`));
    }
  }, [car]);

  return (
    <>
      <div className='parent'>
        <div id="carouselExampleControls" className="carousel slide child1" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          <div className='detail_box'>
          <h1>PKR {car.price}</h1>
          <h5>{car.make} {car.model}</h5>
          </div>
          <div className='detail_box detail_box2 '>
          

            <h6>Make</h6>
            <h6>Model</h6>
            <h6>Type</h6>
            <h6>Year</h6>
            <h6>Mileage</h6>
            <h6>{car.make}</h6>
            <h6>{car.model}</h6>
            <h6>{car.cartype}</h6>
            <h6>{car.year}</h6>
            <h6>{car.mileage}</h6>
            <h3>Price</h3>
            <h6>Condition</h6>
            <h6>Fuel Type</h6>
            <h6>Transmission</h6>
            <h6>Color</h6>
            <h6>{car.price}</h6>
            <h6>{car.consition}</h6>
            <h6>{car.fuelType}</h6>
            <h6>{car.transmission}</h6>
            <h6>{car.color}</h6>
          </div>
        </div>
        <div className='child2'>
          <h2>Seller Details</h2>
         <h6>Seller Name : {user.username}</h6>
         <h6>Seller Location : {user.location}</h6>
         <h6>Seller Phone Number : {user.phone}</h6>
         <a>Book an Appointment</a>
        </div>
      </div>
    </>
  );
}
