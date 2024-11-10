import React from 'react'
import "../app/styles/skill.css"

const Skills = () => {
  return (
    <div id='skills' className='skills-container '>
        <div className='skills-grid'>
         <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='skills-left'>
            <h2 className='skills-heading'>Technologiess I work with</h2>
            <p className='skills-text'>I have a solid foundation in web development, specializing in HTML,CSS and Javascript.My experience extends to usinf frameworks like React and Next.js to create dynamic and user-friendly applications . Im also proficient in Tailwind CSS for efficient styling and design,with a passion for learning , I stay updated on the latest technologies to enhance my skill and contribute effectively to projects</p>
            </div>   
            <div className='skills-right'>
                <div className='skills-icons-grid'>
                    <div className='skills-space'>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Typescript</h2>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">React.js</h2>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Next.js</h2>
                    </div>
                    <div className='skills-space'>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Tailwind</h2>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">CSS</h2>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Node.js</h2>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills



