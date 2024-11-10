import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
         <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <h2 className='text-4xl md:text-5xl'>Technologiess I work with</h2>
            <p className='text-gray-500 pt-2 text-xl'>I have a solid foundation in web development, specializing in HTML,CSS and Javascript.My experience extends to usinf frameworks like React and Next.js to create dynamic and user-friendly applications . Im also proficient in Tailwind CSS for efficient styling and design,with a passion for learning , I stay updated on the latest technologies to enhance my skill and contribute effectively to projects</p>
            </div>   
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Typescript</h2>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">React.js</h2>
                      <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
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



