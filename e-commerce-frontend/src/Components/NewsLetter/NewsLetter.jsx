import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button className='button'>
          <span className='button-content'>Subscribe</span>
          </button>
      </div>
    </div>
  )
}

export default NewsLetter
