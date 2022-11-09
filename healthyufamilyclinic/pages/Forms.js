import React from 'react'
import InnerBanner from '../components/FormsInnerBanner';
import SideNav from './SideNav';
import Form from './formInput'


function Forms() {
  return (
    <div>
        <InnerBanner />
        <div className='container'>
          <div className='row'>
          <div className='content-area col-12 col-md-8'>
        <h2>Fill Out a Form</h2>
          <p>Fill out a form below and we'll get back to you as soon as we can!</p>
          <Form />
        </div>
        <div className='sidebar-area col-12 col-md-4'>
        </div>
          </div>
        </div>
    </div>
  )
}

export default Forms