import React from 'react'
import Image from 'next/image'


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
  <div className= 'border border-accent w-full  sm:w-[350px] md:w-[300px] lg:w-[350px] xl:w-[400px] mx-auto'data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div>
        <Image className='w-full h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>
     
      <div className='p-4 space-y-4'>
        <div className='text-xl sm:text-2xl md:text-3xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((el)=> (
            <div className='tags bg-gray-200 text-sm rounded px-2 py-1' key={el}>
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
