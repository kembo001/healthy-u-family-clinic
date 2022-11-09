import React from 'react'
import './ContentFet.css'
import bannerImg from'../img/teamPic.jpg'; 
import gridImg from'../img/gridPic.jpg'; 
import feature6 from'../img/feature5img.jpg'; 
import GridPhotoOne from'../img/gridphotoOne.jpg'; 
import GridPhotoTwo from'../img/gridphotoTwo.jpg'; 
import GridPhotoThree from'../img/gridphotoThree.jpg'; 

function contentFet() {
  return (
    <div>
<div  className='container'>
<div className="feature feature--7 py-5">
  {" "}
  <div className="row">
    {" "}
    <div className="feature__image col-md-6">
      <img
        className="lazyload"
        src={gridImg}
        alt=""
      />
    </div>{" "}
    <div className="feature__content col-md-6">
      {" "}
      <div className="content__container">
        {" "}
        <p className='content__header'>Welcome to</p>
        <h2 className="content__title">HealthyU <span>Family Clinic</span></h2>{" "}
        <p className="content__text">
          We Love to welcome you to our family clinic. Here in HealthyU, prioritize on putting you and your health first. With our specilized staff, we believe that we can provide you the best and accessible care out there!
        </p>{" "}
        <div className="content__buttons">
          {" "}
          <a href="/services" className="button button--secondary" title="">
            Our Services
          </a>{" "}
          <a href="/contact" className="button button--primary" title="">
            Contact Us
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>
</div>

{/* New */}

<div className='content__feature3'>
<h2 className="content__title">Our Services</h2>
<h3 className='content__subTitle'>How we can help you</h3>
</div>
<div className="grid grid-1x3--1">
  {" "}
  <div className="row">
    {" "}
    <div className="grid__item col-sm-12 col-md-4 px-0">
      {" "}
      <img
        className="item__image lazyload"
        src={GridPhotoOne}
        alt=""
      />{" "}
      <div className="item__content">
        {" "}
        <h4 className="content__title">HOME HEALTH VISITS</h4>{" "}
        <div className="content__hover">
          {" "}
          <p className="hover__text">
            We provide a wide reange of home heatlh care services that can be given in your home anytime. Such as checking vitals, assessing pain, monitoring food intake and more!{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="grid__item col-sm-12 col-md-4 px-0">
      {" "}
      <img
        className="item__image lazyload"
        src={GridPhotoTwo}
        alt=""
      />{" "}
      <div className="item__content">
        <h4 className="content__title">WEIGHT LOSS</h4>{" "}
        <div className="content__hover">
          {" "}
          <p className="hover__text">
            We can provide you a path to help with weight loss by giving you the correct nutriton for you; watching your weight and helping you get to the place you want to be every step of the way.
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="grid__item col-sm-12 col-md-4 px-0">
      {" "}
      <img
        className="item__image lazyload"
        src={GridPhotoThree}
        alt=""
      />{" "}
      <div className="item__content">
        {" "}
        <h4 className="content__title">MEN'S HEALTH</h4>{" "}
        <div className="content__hover">
          {" "}
          <p className="hover__text">
           Here in HealthyU Family Clinic, we prioritize in providing the best care for men to be able to live comfortably as long as they can. 
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>

{/* New */}


<div className='content__feature3'>
<h2 className="content__title">We are Committed</h2>
<h3 className='content__subTitle'>Mission Statement</h3>
</div>

<div className="feature feature--6 my-5">
  {" "}
  <div className="container">
    {" "}
    <div className="row">
      {" "}
      <div className="col-md-6 mt-5 mt-md-0 p-md-0 absolute absolute--right">
        {" "}
        <img
          className="feature__image lazyload"
          src={feature6}
          alt=""
        />{" "}
      </div>{" "}
      <div className="col-md-6">
        {" "}
        <div className="feature__content">
          {" "}
          <p className='content__header'>Here in</p>
        <h2 className="content__title">HealthyU <span>Family Clinic</span></h2>{" "}
          <p className="content__text">
            We make sure to work the best of our ability's to assure that we give you the best care we can. You are part of a family when you are here and we pride ourselves on you receiving high-standard medical care. 
          </p>{" "}
          <div className="content__buttons">
            {" "}
            <a href="/about" className="button button--primary" title="">
              About Us
            </a>{" "}
            <a href="/forms" className="button button--secondary" title="">
              Fill out a Form
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>


    </div>
  )
}

export default contentFet