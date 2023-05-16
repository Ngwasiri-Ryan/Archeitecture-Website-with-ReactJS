import React from "react";
import './App.js'
import {ReactDOM} from "react-dom";
import {useState} from 'react';
const Home = () => {
    const [open,setOpen] =useState(false);
    return(
        <div>         
               <section className="home" onClick={()=>{setOpen(!open)}}>
               <div className='menu'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
           </div>
              <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                   <ul>
                   <li className="dropdowItem">
                <img src='images/home.png'></img>
                <a href="#home">Home</a>
                 </li>
                 <li className="dropdowItem">
                <img src='images/contact.png'></img>
                <a href="#services">Contact</a>
                 </li>
                 <li className="dropdowItem">
                <img src='images/contact.png'></img>
                <a href="#works">Contact</a>
                 </li>
                 <li className="dropdowItem">
                <img src='images/contact.png'></img>
                <a href="#contact">Contact</a>
                 </li>
                   </ul>
              </div>

            <div className="content">
                <h1>Design your house</h1>
                <p>Get to us to design your dream home with your family, your happiness from
                    <br />
                     the dreamhome we build is our priority. We provide maximum satisfaction <br />
                     to all our customers and ensure 
                     their wellbeing.
                    </p> 
                    <div>
                        <button type="button"><span></span>WATCH MORE</button>

                        <button type="button"><span></span>SUBSCRIBE</button>
                    </div>
            </div>      
        </section>
    </div>
    );
};

export default Home;