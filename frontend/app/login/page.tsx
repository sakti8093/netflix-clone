"use client"
import Image from "next/image";
import google from '../../public/assets/google.svg'
import { redirect, useRouter } from "next/navigation";
import React from "react";
import banner1 from '../../public/assets/banner1.jpeg'
import logo from '../../public/assets/logo.svg'
import { signIn, useSession } from "next-auth/react";

const Page = () => {
    const { data:session } = useSession();
    const router = useRouter()
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        router.push('/home');
    }

    if(session){
      redirect('/home');
    }

  return (
    <div className="w-full h-[100vh] overflow-hidden flex md:items-center md:justify-center">
      <Image
        src={banner1}
        className="absolute -z-10 opacity-40 w-full h-full hidden md:block"
        alt="login bg"
        fill
      />
      <div className="cursor-pointer absolute z-10 top-4 left-4 md:left-8 md:top-8 object-contain w-[74px] md:w-40 h-10 md:h-12" >
      <Image 
        src={logo}
        alt="logo"
        fill
      />
      </div>
      <form onSubmit={(e)=>handleSubmit(e)} className="w-full md:w-auto md:bg-black/75 mt-14 p-4 md:py-8 md:px-8 rounded" action="">
        <h1 className="text-3xl font-semibold" >Sign in</h1>
        <div className="mt-4" >
            <input type="email" placeholder="Email or Phone Number" className="w-full bg-[#333] p-3 outline-none rounded" />
            <input type="password" placeholder="Password" className="w-full bg-[#333] p-3 outline-none rounded mt-8" />
        </div>
        <button className="w-full mt-12 py-3 bg-[#e50914] rounded" >
            sign in
        </button>
        <div onClick={()=>signIn('google')} className="relative w-8 h-8 m-auto mt-5" >
            <Image fill alt="" src={google} />
        </div>
        <p onClick={()=>router.push('/registration')} className="text-sm mt-4" ><span className="text-[gray]" >New to Netflix?</span> Sign up Now</p>
      </form>
    </div>
  );
};

export default Page;
