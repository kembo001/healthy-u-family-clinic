import React from 'react'
import InnerBanner from '../components/innerBanner';
// import Banner from '../components/Banner';
import SideNav from './SideNav';

function Services() {
  return (
    <div>
        <InnerBanner />
        <div className='container'>
          <div className='row'>
          <div className='content-area col-12 col-md-8'>
        <h2>Our Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
          <h2>Home Health Visits</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
          <h2>Weightloss</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
          <h2>Men's Health</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
          <h3>Insurance</h3>
          <p>Our company accepts a wide range of Insurance including <b>Medicare</b> <b>Medicaid</b> <b>Blue Cross Blue Shield</b> <b>United Health Insurance</b> and more! We encourage all of our future clients to still <a href='/contact'>contact us</a> to see if we can work out any plan. </p>
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

export default Services