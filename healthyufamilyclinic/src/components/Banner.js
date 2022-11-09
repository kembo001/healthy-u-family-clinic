import React from 'react'
import './Banner.css'
import bannerImg from'../img/shutterstock465.jpg'; 
import bannerImg2 from'../img/shutterstock.jpg';

function Navbar() {
  return (
    <div>
    
    <div
  className="banner banner--1 lazyload"
  style={{ backgroundImage:  `url(${bannerImg})`}}
>
  {" "}
  <div className="container position-relative" style={{ height: "100%" }}>
    {" "}
    <div className="banner-area banner-area--1">
      {" "}
      <h1 className="banner-area__title">Restoring your Health <span>Day by Day</span></h1>{" "}
      <p className="banner-area__text">
        Welcome to to HealthyU Family Clinic where we specilize in weight loss management
      </p>{" "}
      <div className="banner-area__buttons">
        {" "}
        <a href="/contact" className="button button--primary">
          Book an appointment
        </a>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>



    </div>
  )
}

export default Navbar