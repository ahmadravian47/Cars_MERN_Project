import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import UseCars from "./pages/UseCars/UseCars";

function App() {
  const all = ["Honda Vezel", "Toyota CHR", "Mercedes C180", "BMW 350i"];
  const suv = ["Honda Vezel", "Toyota CHR", "Toyota Revo", "Audi Q7"];
  const sedan = ["Honda Civic", "Ford Mustang", "Mercedes C180", "BMW 350i"];
  const cross = [
    "Hyundai Tucson",
    "Haval H6",
    "Mercedes ECG",
    "Chevrolet Cruise",
  ];

  return (
    // <>
    //   <Navbar stock={all} SUV={suv} SEDAN={sedan} CROSS={cross} />
    //   <Hero></Hero>
    //   <Sedan></Sedan>
    // </>

    <>
      <Navbar stock={all} SUV={suv} SEDAN={sedan} CROSS={cross} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usedcars" element={<UseCars type="" />} />
        <Route path="/usedcars/suv" element={<UseCars type="suv" />} />
        <Route path="/usedcars/sedan" element={<UseCars type="sedan" />} />
        <Route path="/usedcars/crossover" element={<UseCars type="crossover" />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
