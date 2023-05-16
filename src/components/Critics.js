import React from 'react'
import { ReactDOM } from 'react'
function Critics() {
  return (
    <div id="critics">
        <div className='critic-holder'>
            <h3>Our Critics</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Reiciendis sed pariatur quasi 
    ut similique iste ratione ex hic repudiandae beatae
     dolores dicta ipsum consequatur quo, assumenda rerum 
     minus. Commodi, facere!
     Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Reiciendis sed pariatur quasi 
    ut similique iste ratione ex hic repudiandae beatae
     dolores dicta ipsum consequatur quo, assumenda rerum 
     minus. Commodi, facere!</p>
        <div className='critics'>

            <div className='card'>
                <img src="images/model.jpg" className='pic'/>
                <p>Reiciendis sed pariatur quasi 
    ut similique iste ratione ex hic repudiandae beatae
     dolores dicta ipsum consequatur quo, assumenda rerum </p>
     <div className='links'>
                <img src="images/whatsapp.png" />
                <img src="images/facebook.png" />
                <img src="images/telegram.png" />
                <img src="images/twitter.png" />
                </div>
            </div>
           
            <div className='card'>
                <img src="images/design.jpg" className='pic'/>
                <p>Reiciendis sed pariatur quasi 
    ut similique iste ratione ex hic repudiandae beatae
     dolores dicta ipsum consequatur quo, assumenda rerum </p>
     <div className='links'>
                <img src="images/whatsapp.png" />
                <img src="images/facebook.png" />
                <img src="images/telegram.png" />
                <img src="images/twitter.png" />
                </div>
            </div>

            <div className='card'>
                <img src="images/luxury.jpg" className='pic'/>
                <p>Reiciendis sed pariatur quasi 
    ut similique iste ratione ex hic repudiandae beatae
     dolores dicta ipsum consequatur quo, assumenda rerum </p>
     <div className='links'>
                <img src="images/whatsapp.png" />
                <img src="images/facebook.png" />
                <img src="images/telegram.png" />
                <img src="images/twitter.png" />
                </div>
            </div>
            
        </div>
        <center>
        <button>More Critics<span></span></button>
        </center>
        
     </div>
    </div>
  )
}

export default Critics
