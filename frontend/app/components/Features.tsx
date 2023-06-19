import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface prop {
    mainText : string,
    text : string,
    image : StaticImageData
    reverse? : boolean
}

const Features = ({mainText,text,image,reverse}:prop) => {
  return (
    <div style={{ flexDirection : reverse? 'row-reverse' : "row" }} className='block md:flex h-auto items-center justify-between py-12' >
        <div>
            <h1 className=' text-3xl font-bold' >{mainText}</h1>
            <p className='text-[1rem] mt-6 font-[400]' >{text}</p>
        </div>
        <div className='relative w-full h-[20rem]  md:h-[24rem] md:w-[34rem]' >
          <Image fill src={image} alt='' />
        </div>
    </div>
  )
}

export default Features