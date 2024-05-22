import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('')
    }



    return (
        <div className="logbox">
            <div className={`wrapper${action}`}>
                <div className="form-box login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Email" required/>
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                            <FaLock className="icon"/>
                        </div>

                        <div className="remember-forget">
                            <label><input type="checkbox"/>Remember me    </label>
                            <a href="#"> Forgot password?</a>
                        </div>

                        <button className="loginbtn" type="submit">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <Link href="#" to="/signup">Register</Link></p>
                        </div>
                    </form>
                </div>

             
            </div>
        </div>        
    );
};

export default LoginForm;

