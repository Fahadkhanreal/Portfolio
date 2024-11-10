import React from 'react'
import Heading from './Heading';
import Card from './Card';




const Projects = () => {

    const data = [
        {
            id: 0,
            title:"Countdown Timer",
            desc:"A Next.js and typescript website to track time with an interactive countdown feature.",
            img:"/image/proj-1.png",
            tags:["React","Node","CSS","Typescript"],
            url:"https://github.com/Fahadkhanreal/Count-Down-Timer"
            
        },
        {
            id: 1,
            title:"Password Generator",
            desc:"A basic HTML CSS and JavaScript Password Generator.",
            img:"/image/proj-2.png",
            tags:["Html","Node","CSS","JavaScript",],
            url:"https://github.com/Fahadkhanreal/Password-Genertaor"
        },
        {
            id: 2,
            title:"Resume Builder",
            desc:"A TypeScript based interactive resume build along with HTML and CSS .",
            img:"/image/proj-3.png",
            tags:["Html","Node","CSS","Typescript",],
            url:"https://github.com/Fahadkhanreal/Milestone-5/tree/main/milestone-5"
        },
        {
            id: 3,
            title:"Simple Calculator",
            desc:"A basic HTML CSS and JavaScript  Calculator for performing simple arithmetic operators.",
            img:"/image/proj-4.png",
            tags:["Html","Node","CSS","JavaScript",],
            url:"https://github.com/Fahadkhanreal/Responsive-Calculator"
        },
        {
            id: 4,
            title:"Qr Code Generator",
            desc:"A basic HTML CSS and JavaScript  Qr code geneartor .",
            img:"/image/proj-5.png",
            tags:["Html","Node","CSS","JavaScript",],
            url:"https://github.com/Fahadkhanreal/Qr-Code-Generator"
        },
    ];


  return (
    <div id='projects' className='container pt-32'>
      <Heading title="My Projects"/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card   
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags} 
          url={el.url}        
        />))}
      </div>
    </div>
  )
}

export default Projects
