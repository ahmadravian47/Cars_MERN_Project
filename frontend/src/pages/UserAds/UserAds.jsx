import React from "react";
import UseCars from "../UseCars/UseCars";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './UserAds.css'

const UserAds = () => {
  const navigate = useNavigate();
  function is_login() {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    const useremail = activeUser?.email;

    if (!useremail) {
      return 0;
    }
    else {
      return 1;
    }
  }
  const logout = async () => {
    try {
      const activeUser = JSON.parse(localStorage.getItem('activeUser'));
      const useremail = activeUser?.email;

      if (!useremail) {
        console.error("No active user found");
        return;
      }
      const response = await axios.post('http://localhost:5000/api/user/logout', { useremail });

      if (response.status === 200) {
        console.log(response.data.message);
        localStorage.removeItem('activeUser');
        window.location.reload();
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const out = () => {
    logout();
  }
  if (is_login()) {
    return <>
      <UseCars ownerAds />
      <button className="c" onClick={out}>Log out</button>
    </>
  }
  else {
    return <>
      <div className="div">
        <h3 className="center m">You are not Signed in ,sign in to see your ads</h3>
        <button className="c" onClick={() => { navigate('/login') }}>Sign In</button>
      </div>
    </>
  }

};

export default UserAds;
