import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './C_detail.css'

export default function C_detail() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`http://localhost:5000/car/${id}`);
        const result = await response.json();
        console.log(result)
        setCar(result);
      } catch (err) {
        console.log('Error : ', err);
      }
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
        </div>
        <div className='child2'>
          <h1>{car.model}</h1>
        </div>
      </div>
    </>
  );
}
