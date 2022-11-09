import React from 'react'
import Banner from'../img/innerPages.jpg'; 
import './innerBanner.css'

function innerBanner() {
  return (
<div>
<div>
<img className='innerBanner' src={Banner} alt="innerBanner" />
  {" "}
  <div className="container position-relative">
    {" "}
    <div className="row">
      {" "}
      <div className="col-12">
        {" "}
        <div className="page-title page-title-left-box">
          {" "}
          <h1 className="page-title__text">Contact us</h1>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>
</div>


  )
}

export default innerBanner