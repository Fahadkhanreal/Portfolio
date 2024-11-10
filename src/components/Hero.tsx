import React from 'react'
import Navbar from './Navbar'

const Hero = () => {

  
  return (
    <div id='hero' className='min-h-screen bg-no-repeat   bg-[url(/image/profile-2.jpg)]  bg-cover ' style={{backgroundSize: "15%",backgroundPosition: "left 220px top 220px"}}>
     <Navbar/>
     <div className='container grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='flex justify-center items-center text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[8rem] font-bold leading-tight'>
        <div>
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
