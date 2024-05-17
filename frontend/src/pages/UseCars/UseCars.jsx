import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Car from '../../components/car/Car'
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom'

const UseCars = ({type}) => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        const fetchCars=async ()=>{
            try {
                const {data}= await axios.get(`http://localhost:5000/usedcars/${type}`);
                console.log(data);
                setCars(data);
            }
            catch (error) {
                console.log("Error", error);
            }
        }
        fetchCars();
    },[type])
    return (
        <>
        <h1 className='center'>Latest Deals</h1>
        <div id='make_flex'>
          {cars.map((car) => (
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
    )
}

export default UseCars
