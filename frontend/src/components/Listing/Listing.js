import React, { useState, useEffect } from 'react';
import Car from '../car/Car'
import '../Listing/Listing.css'


const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/usedcars');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(cars)
  return (
    <>
      <h1 className='center'>Latest Deals</h1>
      <div id='make_flex'>
        {cars.slice(0, 4).map((car) => (
          <Car
            key={car._id} // Adding a key prop to help React identify elements
            make={car.make}
            model={car.model}
            year={car.year}
            mileage={car.mileage}
            price={car.price}
            front_image={car.images}
            id={car._id}
            fuel={car.fuelType}
          />
        ))}

      </div>
    </>
  );
};

export default CarList;


