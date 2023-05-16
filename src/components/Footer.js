import React from 'react'
import './App.js';
import { ReactDOM } from 'react';

function Footer() {
  return (
    <div>
      <div className='footer'>

         <div className='menu-holder'>
           <ul>
           <li className='heading'>useful links</li>
           <li><a href="#">Home</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#works">Our Works</a></li>
                <li><a href="#critics">Critics</a></li>
                <li><a href="#contact">Contact Us</a></li>
           </ul>

           <ul>
           <li className='heading'>Partners</li>
           <li><a href="#">Golden Builders</a></li>
                <li><a href="#">Han's Workshop</a></li>
                <li><a href="#">Platinum Builders</a></li>
                <li><a href="#">Work & Co Constructions</a></li>
                <li><a href="#">Ark Industries</a></li>
           </ul>

           <ul>
           <li className='heading'>Company Info</li>
           <li><a href="#">Departments</a></li>
                <li><a href="#services">Our Staff</a></li>
                <li><a href="#works">Our Plattforms</a></li>
                <li><a href="#critics">Trading</a></li>
                <li><a href="#contact">Our Goals</a></li>
           </ul>

         </div>

         <div className='icons'>
                <img src="images/whatsapp-w.png" />
                <img src="images/facebook-w.png" />
                <img src="images/telegram-w.png" />
                <img src="images/twitter-w.png" />
                
            </div>
            Search web content here!!

            <div className='search-box'> 
             <img src="images/search-icon.png"></img>
             <input type="text"></input>
            </div>

            
              @Ngwasiri-Ryan  All rights reserved
            
      </div>


    </div>
  )
}

export default Footer
