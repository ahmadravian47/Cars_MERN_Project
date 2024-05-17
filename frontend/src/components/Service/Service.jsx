import React from 'react'
import './Service.css'
import selling_icon from '../../assets/selling.png'
import buying_icon from '../../assets/buying.png'
import testing_icon from '../../assets/testing.png'

export default function Service() {
  return (
    <>
    <h1 className='poppins center'>Services we offer</h1>
    <div className='services'>
      <div className="card3">
        <div className="icon">
          <img src={selling_icon} alt="Auction Sheet Icon" />
        </div>
        <h2>Selling</h2>
        <p>It's important to do your research before you make a purchase ..</p>
        <a href="#" class="find-out-more">Find out more →</a>
      </div>
      <div className="card3">
        <div className="icon">
          <img src={buying_icon} alt="Auction Sheet Icon" />
        </div>
        <h2>Buying</h2>
        <p>It's important to do your research before you make a purchase ..</p>
        <a href="#" class="find-out-more">Find out more →</a>
      </div>
      <div className="card3">
        <div className="icon">
          <img src={testing_icon} alt="Auction Sheet Icon" />
        </div>
        <h2>Excise work</h2>
        <p>It's important to do your research before you make a purchase ..</p>
        <a href="#" class="find-out-more">Find out more →</a>
      </div>
    
    </div>
    </>
  )
}
