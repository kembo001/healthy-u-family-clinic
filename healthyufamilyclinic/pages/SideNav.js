import React from 'react'
import './SideNav.css'
import SidePhoto from'../img/contact-Us.jpg'; 
import SideForm from './SideForm';

function sideNav() {
  return (
    <div className='side'>
        <SideForm />
        <img className='sidePhoto' src={SidePhoto} alt="sidePhoto" />
        <div class="side-nav buttons"> <a href="/services" class="button button--tertiary" title="Medical Services">Medical Services</a> <a href="/forms" class="button button--tertiary" title="Forms">Forms</a> <a href="/meet-the-team" class="button button--tertiary" title="Meet the Team">Meet the Team</a> <a href="/about" class="button button--tertiary" title="About Us">About Us</a> </div>
    </div>
  )
}

export default sideNav

