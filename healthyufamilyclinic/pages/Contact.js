import React from 'react'
import InnerBanner from '../components/innerBannerContact';
import SideNav from './SideNav';

function Contact() {
  return (
    <div>
         <InnerBanner />
         <div className='container'>
          <div className='row'>
          <div className='content-area col-12 col-md-8'>
        <h2>Contact HealthU Family Clinic</h2>
          <p>Contact us below to see if you're a right fit for us. Otherwise, You can fill out a form <a href="/forms">here</a>. We're exited to hear from you!</p>
          <p><strong>Address</strong>: <a href="https://www.google.com/maps/place/1042+White+Porch+Ave,+Forney,+TX+75126/data=!4m2!3m1!1s0x864ead7ef9e9d0df:0xbe17e551d036f069?sa=X&ved=2ahUKEwi2w_SulJD7AhWeHjQIHXQVCPsQ8gF6BAgTEAE" target="_blank" title="Find us on Google Maps">1042 White Porch Ave Forney, Texas </a></p>
          <p><strong>Phone 1</strong>: <a data-phone-number="" href="tel:9725052738" title="Phone Number">(972) 505-2738</a> EXT: 403</p>
          <p><strong>Phone 2</strong>: <a data-phone-number="" href="tel:9725052746" title="Phone Number">(972) 505-2746</a> EXT: 401</p>
          <p><strong>Phone 3</strong>: <a data-phone-number="" href="tel:9727829657" title="Phone Number">(972) 782-9657</a> EXT: 402</p>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.113426735863!2d-96.4470904!3d32.736178699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ead7ef9e9d0df%3A0xbe17e551d036f069!2s1042%20White%20Porch%20Ave%2C%20Forney%2C%20TX%2075126!5e0!3m2!1sen!2sus!4v1667415119976!5m2!1sen!2sus"
  width="100%"
  height={400}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          
        </div>
        <div className='sidebar-area col-12 col-md-4'>
        <SideNav />
        </div>
          </div>
        </div>
    </div>
  )
}

export default Contact