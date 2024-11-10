import React from 'react'
import Image from 'next/image'
import "../app/styles/card.css"


interface propsType {
  title:string;
  desc:string;
  img:string;
  tags:string[];
  url:string
}

const Card:React.FC<propsType> = ({title, desc, img, tags,url}) => {
  return (
<>
<a href={url} target='_blank' rel='noopener noreferrer' className='block'>
  <div className={`card-image ${window.innerWidth >= 640 ? 'card-image-sm' : ''}`}data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div>
        <Image className={`card-image ${window.innerWidth >= 640 ? 'card-image-sm' : ''}`}
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>
     
      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el)=> (
            <div className='card-tags' key={el}>
               {el}
            </div>))}
        </div>

      </div>
      
    </div>
    </a>

    </>
  )
}

export default Card
