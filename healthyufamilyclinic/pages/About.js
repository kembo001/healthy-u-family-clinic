import React from 'react'
import InnerBanner from '../components/AboutInnerBanner';
import SideNav from './SideNav';

function About() {
  return (
    <div>
        <InnerBanner />
        <div className='container'>
          <div className='row'>
          <div className='content-area col-12 col-md-8'>
        <h2>Your Trusted Family Care</h2>
          <p>Here in HealthyU Family Care. We prioritize in giving our clients the best care they can get.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
          <h2>Contact Us Today</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
        </div>
        <div className='sidebar-area col-12 col-md-4'>
            <SideNav />
        </div>
          </div>
        </div>
    </div>
  )
}

export default About