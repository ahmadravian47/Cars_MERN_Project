import React, { useState } from "react";
import "./Signup.css";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [action, setAction] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    location: "",
  });
  const navigate = useNavigate();

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/signup",
        form
      );
      console.log(data);
      navigate("/login");
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <div className="logbox">
      <div className={`wrapper${action}`}>
        <div className="form-box login">
          <form action="" onSubmit={submitHandler}>
            <h1>Signup</h1>
            <div className="input-box">
              <input
                type="text"
                onChange={handleChange}
                name="email"
                placeholder="Email"
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Password"
                required
              />
              <FaLock className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                onChange={handleChange}
                name="name"
                placeholder="Name"
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="text"
                onChange={handleChange}
                name="phone"
                placeholder="Phone"
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="text"
                onChange={handleChange}
                name="location"
                placeholder="Location"
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="remember-forget">
              <label>
                <input type="checkbox" />
                Remember me{" "}
              </label>
              <a href="#"> Forgot password?</a>
            </div>

            <button className="loginbtn" type="submit">
              Login
            </button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <Link href="#" to="/login">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
