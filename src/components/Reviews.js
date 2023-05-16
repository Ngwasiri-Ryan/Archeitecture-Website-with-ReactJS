import React from 'react'
import { ReactDOM } from 'react'
import './App.js'

function Reviews() {
  return (
    <div>
      <div className='review'>
        <div className='heading'>
          <p>Our Reviews</p>
        </div>
      <div className='review-holder'>

      <div className='card'>
        <div className='num-holder'>
          15 <div className='plus'>+</div>
        </div>
        <p>
        Houses Fixed
        </p>
       
      </div>

      <div className='card'>
        <div className='num-holder'>
          107 <div className='plus'>+</div>
        </div>
        <p>
        Real Estate Deals
        </p>
       
      </div>

      <div className='card'>
        <div className='num-holder'>
          34 <div className='plus'>+</div>
        </div>
        <p>
        Foreign investors
        </p>
       
      </div>

      <div className='card'>
        <div className='num-holder'>
          34 <div className='plus'>+</div>
        </div>
        <p>
        Foreign investors
        </p>
       
      </div>
    </div>
    </div>
  </div>
  )
}

export default Reviews
