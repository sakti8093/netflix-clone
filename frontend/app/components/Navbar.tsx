"use client"
import { SearchIcon,BellIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState<boolean>(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 0 ){
          setIsScrolled(true);
        }else {
          setIsScrolled(false);
        }
    })
  },[])


  return (
    <header className={`${isScrolled && "bg-[#141414]"} w-full flex items-center justify-between fixed top-0 p-4 lg:px-10 lg:py-6 transition-all z-20`}  >
        <div>
            <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            />
        </div>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
        <div className='flex items-center space-x-3' >
            <SearchIcon className="hidden h-6 w-6 sm:inline" />
            <p className='hidden lg:inline' >Kids</p>
            <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
        </div>
    </header>
  )
}

export default Navbar