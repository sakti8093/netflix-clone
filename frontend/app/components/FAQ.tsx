import { PlusIcon } from '@heroicons/react/solid'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

interface prop {
    mainText:string,
    text1 :string,
    text2?:string,
    show:boolean
}

const FAQ = ({mainText,text1,text2,show}:prop) => {
    console.log(show);
  return (
    <div >
    <div className='w-full flex justify-between bg-[#132144] p-6 text-xl md:text-2xl' >
        <h1>{mainText}</h1>
        {show ?<AiOutlineClose className='w-7 h-7' /> : <PlusIcon className='w-7 h-7' />}
    </div>
    {show && <div className='p-6 bg-[#132144] animate-slideTop text-xl md:text-2xl' >
        <p>{text1}</p>
        <p className='mt-4' >{text2}</p>
    </div>}
    </div>
  )
}

export default FAQ