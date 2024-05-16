import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function C_detail() {
  const { id } = useParams();
  let [car,setcar]=useState([]);

  useEffect(()=>{
    let d=fetch(`http://localhost:5000/car/${id}`)
    .then((data)=>{
       return data.json();
    })
    .then((res)=>{
      setcar(res);
    })
    .catch((err)=>{
      console.log('Error : ',err);
    })

    
  },[car])

  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="..." alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}
