"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Back = () => {
    const router = useRouter();
  return (
    <div onClick={()=>router.back()} className="text-3xl p-2 sticky top-0 z-40" > < FaArrowLeft /> </div>
  )
}

export default Back