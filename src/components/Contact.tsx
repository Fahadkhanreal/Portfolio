import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";




const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"'>Get in touch</h2>
            <p className='text-gray-600 text-[20px] pt-2' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                Drop me a line, give me a call, or send me a message by submitting the form
            </p>
            <div className='flex gap-3 items-center ' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <MdEmail size={30}/> fhadikhan00@gmail.com
            </div>
            <div className='flex gap-3 items-center 'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <FaPhone size={30}/> 
            +923482240731
            </div>
        </div>
        <div className='space-y-8'> 
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent'  id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <label htmlFor="email">Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent'  id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <label htmlFor="msg">Message</label>
                <textarea  className=' bg-transparent border border-accent'  id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-accent p-2 px-6' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
