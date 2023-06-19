'use client'
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {

  const router = useRouter();


  return (
    <div className="px-5 md:px-8 py-4 bg-[#00081D]">
      <div className="flex justify-between items-center ">
        <img
          src="https://rb.gy/ulxxee"
          className="cursor-pointer object-contain w-[74px] md:w-[150px]"
          alt="logo"
        />
        <div className="flex gap-5 items-center" >
          <select
            name=""
            id=""
            className="text-white px-5 py-1 bg-transparent border border-gray-500 rounded outline-none"
          >
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
          <button onClick={()=>{router.push('/login')}} className="bg-[#e50914] px-3 py-1 rounded font-bold">Sign in</button>
        </div>
      </div>
      <div className="w-full mt-8 md:mt-6 flex items-center justify-center custom-bg bg-cover h-[80vh] rounded-2xl px-4 py-4 md:p-20" >
        <div className=" w-full" >
          <h1 className="text-4xl font-bold md:font-extrabold md:max-w-xl max-w-full" >Unlimited movies,TV shows and more</h1>
          <p className="mt-5 font-semibold" >Watch anywhere.Cancel anytime</p>
          <p className="mt-5" >Ready to watch ? Enter your email to create or restart your membership.</p>
          <div className="w-full mt-3 md:flex items-end gap-5 max-w-xl" >
            <input className="w-full outline-none bg-[#161616B3] border border-gray-500 px-4 py-3 rounded" placeholder="Email" type="text" />
            <button className="bg-[#e50914] mt-4 font-bold border-none min-w-[200px] rounded py-3 w-[200px] flex items-center justify-center" ><p className="text-xl">Get Started</p><ChevronRightIcon className=" w-7 h-7" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
