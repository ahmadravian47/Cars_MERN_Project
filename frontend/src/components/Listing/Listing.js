import React, { useState, useEffect } from 'react';
import Car from '../car/Car'


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
    <div>
      <h1>Deals</h1>
      {cars.map((car) => (
        <Car
          make={car.make}
          model={car.model}
          year={car.year}
          mileage={car.mileage}
          price={car.price}
          // front_image={car.image[0]}
        />
      ))}
    </div>
  );
};

export default CarList;


