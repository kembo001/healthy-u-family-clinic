import React from 'react'
import InnerBanner from '../components/TeaminnerBanner';
import SideNav from './SideNav';
import TeamOne from'../img/carolRono.jpg'; 
import TeamTwo from'../img/vibianMelly.jpg'; 
import './Team.css'

function Team() {
  return (
    <div>
        <InnerBanner />
        <div className='container'>
          <div className='row'>
          <div className='content-area col-12 col-md-8'>
          <div className='teamGrid'>
          <img className='teamphoto' src={TeamOne} alt="sidePhoto" />
          <div className='teamWrap'>
              <h3>Carol Rono: FNP-C</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
          </div>
          </div>
          <div className='teamGrid'>
          <img className='teamphoto' src={TeamTwo} alt="sidePhoto" />
          <div className='teamWrap'>
          <h3>Vibian Melly: FNP-C</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur facere perferendis maiores laboriosam id maxime nulla ex ut veritatis, nihil amet numquam voluptates consequatur corrupti assumenda esse. Harum, earum.</p>
          </div>
          </div>
        </div>
        <div className='sidebar-area col-12 col-md-4'>
            <SideNav/>
        </div>
          </div>
        </div>
    </div>
  )
}

export default Team