import React from 'react'

function Contact() {
  return (
    <div id="contact">
      <div className='contact-heading'><center>Contact Us</center></div>
      <center>
      <p className='content'>Contact us for more information on our contact page right now!</p>
      </center>
      <div className='contact-container'>
        <div className='info'>
          <div className='info-holder'>
              <img src="images/call.png" alt="phone" />
              <div className='inform'>
                <div className='heading'>
                   Phone
                </div>
                <div className='info-content'>
                   +237 677362857
                </div>
              </div>
          </div>
          
          <div className='info-holder'>
              <img src="images/location.png" alt="phone" />
              <div className='inform'>
                <div className='heading'>
                   Location
                </div>
                <div className='info-content'>
                Time Square,
                 New York City
                </div>
              </div>
          </div>

          <div className='info-holder'>
              <img src="images/mail.png" alt="phone" />
              <div className='inform'>
                <div className='heading'>
                  E-Mail
                </div>
                <div className='info-content'>
                  housebuilders@amail.com
                </div>
              </div>
          </div>

        </div>
      
       <div className='form'>
          <div className='heading'>
            Send Message
          </div>
          <div className='input'>
          <input type='text' placeholder='First Name'></input>
          </div>
          <div className='input'>
          <input type='text' placeholder='Last Name'></input>
          </div>
          <div className='input'>
          <input type='textarea' placeholder='Write your Message'></input>
          </div>

          <input type='submit' name='Submit' value='Submit' />
          
        </div>
       
       
       
       </div>

       <div className='icons'>
                <img src="images/whatsapp.png" />
                <img src="images/facebook.png" />
                <img src="images/telegram.png" />
                <img src="images/twitter.png" />
                
            </div>
       </div>
  

      
  )
}

export default Contact
