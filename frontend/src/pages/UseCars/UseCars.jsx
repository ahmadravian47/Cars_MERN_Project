import React, { useEffect, useState } from "react";
import axios from "axios";
import Car from "../../components/car/Car";
import { useLocation } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

const UseCars = ({ type, ownerAds }) => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const user = useSelector((state) => state.activeUser);
  search ? console.log(search) : console.log("no search");

  const fetchCars = async () => {
    console.log("fetch");

    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/car/usedcars/${type}`
      );
      console.log(data);
      setError(null);
      setCars(data);
    } catch (error) {
      console.log("Error", error);
      setError(error.response.data);
    }
  };

  const searchCar = async () => {
    console.log("search");
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/car/usedcars/${search}`
      );
      console.log(data);
      setError(null);
      setCars(data);
    } catch (error) {
      console.log("Error", error);
      setError(error.response.data);
    }
  };

  const fetchUserAds = async () => {
    console.log("ownerAds");

    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/user/myads/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(data);
      setError(null);
      setCars(data);
    } catch (error) {
      console.log("Error", error);
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    if (search) {
      searchCar();
    } else if (ownerAds) {
      fetchUserAds();
    } else fetchCars();
    // search ? searchCar() : fetchCars();
  }, [type, search]);

  return (
    <>
      <div id="make_flex">
        {!error ? (
          cars.map((car) => (
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
          ))
        ) : (
          <div>{error}</div>
        )}
      </div>
    </>
  );
};

export default UseCars;
