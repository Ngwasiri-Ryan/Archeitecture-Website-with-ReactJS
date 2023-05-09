import React from 'react'
import './App.js'
import { ReactDOM } from 'react'
function Header() {
  return (
    <div>
      <div className="header">
                <div className="logo"><i>GWT</i></div>
               <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#">Critics</a></li>
                <li><a href="#">Contact</a></li>
               </ul>
            </div>
         
    </div>
  )
}

export default Header
