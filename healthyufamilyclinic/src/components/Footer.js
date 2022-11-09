import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
<footer className="footer footer--1">
  {" "}
  <div className="container upper">
    {" "}
    <div className="row">
      {" "}
      <div id="FooterOnePane" className="col-lg-3">
        {" "}
        <div id="footer-one-pane">
          {" "}
          <div className="footer-column">
            {" "}
            <h2 className="content__title">HealthyU</h2>{" "}
            <div className="phone-number">
              {" "}
              <a href="tel:9725052738" title="" data-phone-number="">
                <i className="fas fa-phone-alt" />
                (972) 505-2738 
              </a>{" "}
              EXT: 403
            </div>{" "}
            <div className="address">
              {" "}
              <a href="https://www.google.com/maps/place/1042+White+Porch+Ave,+Forney,+TX+75126/data=!4m2!3m1!1s0x864ead7ef9e9d0df:0xbe17e551d036f069?sa=X&ved=2ahUKEwi2w_SulJD7AhWeHjQIHXQVCPsQ8gF6BAgTEAE" target="_blank" title="Find us on Google Maps">
                {" "}
                <address>
                <i className="fas fa-map-marker-alt" />{" "}
                1042 White Porch Ave
                  <br /> Forney, TX 75126
                </address>{" "}
              </a>{" "}
            </div>{" "}
            <div className="social-icons">
              {" "}
              <a href="#" title="Facebook">
                <i className="fab fa-facebook-square" />
              </a>{" "}
              <a href="#" title="Twitter">
                <i className="fab fa-twitter-square" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div id="FooterTwoPane" className="col-lg-2 offset-lg-2">
        {" "}
        <div id="footer-two-pane">
          {" "}
          <div className="footer-column">
            {" "}
            <h3 className="title">
              <a href="/services" title="Services">
                Medical Services
              </a>
            </h3>{" "}
          </div>{" "}
          <div className="footer-column">
            {" "}
            <h3 className="title">
              <a href="/forms" title="Forms">
                Forms
              </a>
            </h3>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div id="FooterThreePane" className="col-lg-2">
        {" "}
        <div id="footer-three-pane">
          {" "}
          <div className="footer-column">
            {" "}
            <h3 className="title">
              <a href="/about" title="About Us">
                About Us
              </a>
            </h3>{" "}
            
          </div>{" "}
          <div className="footer-column">
            {" "}
            <h3 className="title">
              <a href="/meet-the-team" title="Meet The Team">
                Meet The Team
              </a>
            </h3>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div id="FooterFourPane" className="col-lg-2 offset-lg-1">
        {" "}
        <div id="footer-four-pane">
          {" "}
          <div className="footer-column">
            {" "}
            <a href="/contact" className="button button--primary" title="">
              Contact Us
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</footer>


    </div>
  )
}

export default Footer