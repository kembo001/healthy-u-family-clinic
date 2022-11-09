import React from 'react'
import './SideForm.css'

function SideForm() {
  return (
    <div className='sideForm'>
        <h2>Contact Us</h2>
        <form action='https://formspree.io/f/xlezoljv' method='POST'>
          <input type= 'text' name='name' placeholder='Your Full Name' required />
          <input type= 'email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder = 'How Can We Help You' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    </div>
  )
}

export default SideForm