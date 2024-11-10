import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "../app/styles/contact.css"




const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-cols-2 '>
        <div className='contact'>
            <h2 className='contact-heading' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Get in touch</h2>
            <p className='contact-text' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                Drop me a line, give me a call, or send me a message by submitting the form
            </p>
            <div className='contact-flex ' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <MdEmail size={30}/> fhadikhan00@gmail.com
            </div>
            <div className='cpntact-flexr 'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <FaPhone size={30}/> 
            +923482240731
            </div>
        </div>
        <div className='contact-space'> 
            <div className='form'>
                <label htmlFor="name">Name</label>
                <input type="text" className='input-field'  id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <label htmlFor="email">Email</label>
                <input type="text" className='input-field'  id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <label htmlFor="msg">Message</label>
                <textarea  className=' textarea-field'  id='msg' rows={8}>
                </textarea>
            </div>
            <button className='button' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
