import React, { useEffect, useState } from "react";
import "./Postad.css";
import image0 from "./0.png";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, redirect } from "react-router-dom";
import axios from "axios";

const Advertisement = () => {
  const [form, setForm] = useState({
    owner: "",
    make: "",
    model: "",
    type: "",
    engine: "",
    year: "",
    mileage: "",
    price: "",
    condition: "",
    fueltype: "",
    transmission: "",
    color: "",
    location: "",
    description: "",
    images: [],
  });

  const user = useSelector((state) => state.activeUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      // navigate("/login");
      navigate("/login", { state: { from: location } });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setForm((prevForm) => ({
      ...prevForm,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (key === "images") {
        form[key].forEach((file) => {
          formData.append("images[]", file);
        });
      } else if (key === "owner") {
        formData.append(key, user._id);
      } else {
        formData.append(key, form[key]);
      }
    });

    console.log("Form submitted:", form);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/postad",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response.data.message);
    }
    // fetch("http://localhost:5000/api/user/postad", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     Authorization: `Bearer ${user.tokenn}`,
    //   },
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error(`Network response was not ok: ${res.statusText}`);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("Ad posted", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error posting ad:", error);
    //   });
  };

  return (
    <div className="subbody">
      <h1 className="blue">Sell your Car With 3 Easy & Simple Steps!</h1>
      <p className="center">It's free and takes less than a minute</p>
      <div className="steps">
        <div>
          <img src={image0} alt="Step 1"></img>
          Enter Your Car Information
        </div>
        <div>
          <img src={image1} alt="Step 2"></img>
          Upload Photos
        </div>
        <div>
          <img src={image2} alt="Step 3"></img>
          Enter Your Selling Price
        </div>
      </div>
      <div className="container">
        <form className="car-form" onSubmit={handleSubmit}>
          <h2>Car Information</h2>
          <p>(All fields marked with * are mandatory)</p>
          <label>
            Make *
            <input
              type="text"
              name="make"
              value={form.make}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Model *
            <input
              type="text"
              name="model"
              value={form.model}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Type *
            <input
              type="text"
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Engine *
            <input
              type="text"
              name="engine"
              value={form.engine}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Year *
            <input
              type="text"
              name="year"
              value={form.year}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mileage *
            <input
              type="text"
              name="mileage"
              value={form.mileage}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Price *
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Condition *
            <input
              type="text"
              name="condition"
              value={form.condition}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            FuelType *
            <input
              type="text"
              name="fueltype"
              value={form.fueltype}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Transmission *
            <input
              type="text"
              name="transmission"
              value={form.transmission}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Color *
            <input
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Location *
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description *
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </label>
          <div className="upload-section">
            <h2>Upload Photos</h2>
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png, image/gif"
              multiple
              onChange={handleFileChange}
            />
            <p>
              <img src={image3} alt="Upload guideline"></img>
              Adding at least 8 pictures improves the chances for a quick sale.
            </p>
            <p>
              <img src={image3} alt="Upload guideline"></img>
              Adding clear Front, Back and Interior pictures of your car
              increases the quality of your Ad and gets you noticed more.
            </p>
            <p>
              <img src={image3} alt="Upload guideline"></img>
              Photos should be in 'jpeg, jpg, png, gif' format only.
            </p>
          </div>
          <button className="submit_button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Advertisement;

// // App.js

// import React from 'react';
// // import './App.css'; // Import your CSS file
// import CarPostForm from '../../components/CarPostForm/carpostform'; // Import your CarPostForm component

// function Postad() {
//   return (
//     <div className="App">
//       <div className="background-image"></div> {/* Background image container */}
//       <h1>Post An Add Form</h1>
//       <CarPostForm />
//     </div>
//   );
// }

// export default Postad;
