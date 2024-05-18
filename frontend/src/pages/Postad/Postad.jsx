// App.js

import React from 'react';
import './App.css'; // Import your CSS file
import CarPostForm from './carpostform'; // Import your CarPostForm component

function Postad() {
  return (
    <div className="App">
      <div className="background-image"></div> {/* Background image container */}
      <h1>Post An Add Form</h1>
      <CarPostForm />
    </div>
  );
}

export default Postad;
