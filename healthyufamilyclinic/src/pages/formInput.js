import React from 'react'
import './formInput.css'

function formInput() {
  return (
    <div>
               <form action='https://formspree.io/f/xlezoljv' method='POST'>
          <input type= 'text' name='name' placeholder='Your Full Name' required />
          <input type= 'email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder = 'Reason for Visit' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    </div>
  )
}

export default formInput