import React from 'react';
import './App.js';
import { ReactDOM } from 'react'
function Works() {
  return (
    <div>
      <section id="works" className="works">
    {/*heading*/}
        <div className='heading'>
          <p>Our Works</p>
        </div>
    {/*content*/}
       <div className='content'>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Fugiat praesentium voluptates, debitis alias saepe ea cor
  poris ipsum quos eligendi sit eaque quidem suscipit cupiditate ame
 t placeat, ab dignissimos excepturi perferendis!
        </p>
       </div>
       <div className='project'>
        {/*******Card*********/}
        <div className='card'>
           <img src='images/img5.jpg' className='picture' />
             <div className='content'>
              Apartment Design
             </div>
             <div className='links'>
             <img src='images/heart.png' />
             <img src='images/bookmark.png' />
             <img src='images/ellipsus.png' />
             </div>
        </div>
        
        <div className='card'>
           <img src='images/office planning.jpg' className='picture' />
             <div className='content'>
             Office Planning
             </div>
             <div className='links'>
             <img src='images/heart.png' />
             <img src='images/bookmark.png' />
             <img src='images/ellipsus.png' />
             </div>
        </div>
        <div className='card'>
           <img src='images/housing.jpg' className='picture' />
             <div className='content'>
             House Planning
             </div>
             <div className='links'>
             <img src='images/heart.png' />
             <img src='images/bookmark.png' />
             <img src='images/ellipsus.png' />
             </div>
        </div>
        <div className='card'>
           <img src='images/apartments.jpg' className='picture' />
             <div className='content'>
             Rehabilitation
             </div>
             <div className='links'>
             <img src='images/heart.png' />
             <img src='images/bookmark.png' />
             <img src='images/ellipsus.png' />
             </div>
        </div>
        <div className='card'>
           <img src='images/realestate.jpg' className='picture' />
             <div className='content'>
            Real Estate
             </div>
             <div className='links'>
             <img src='images/heart.png' />
             <img src='images/bookmark.png' />
             <img src='images/ellipsus.png' />
             </div>
        </div>
       
        {/*******End of Card*********/}
       
        </div>
        <div className='button-holder'>
             <button>View More <span></span></button>
        </div>
     

      </section>
      
    </div>
  )
}

export default Works;