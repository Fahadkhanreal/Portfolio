import React from 'react'
import Navbar from './Navbar'
import "../app/styles/hero.css"

const Hero = () => {

  
  return (
    <div id='hero' className='hero-container'>
     <Navbar/>
     <div className='hero-content'>
      <div className='hidden lg:block'></div>
      
      <div className='hero-text'>
        <div className='hero-main'>
          <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">I m</p>
          <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Fahad</p>
          <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Khan</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hero
