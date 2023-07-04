"use client"
import React from "react";
import RegNavbar from "../components/RegNavbar";
import Image from "next/image";
import tick from "../../public/assets/tick.png";
import checkmark from "../../public/assets/checkmark.svg";
import { useRouter } from "next/navigation";

const Page = () => {

    const router = useRouter();

  return (
    <div className="w-full h-screen bg-white text-black">
      <RegNavbar />
      <div className="p-4 md:p-0 w-full md:w-[400px] m-auto mt-10 ">
        <div className="w-[300px] m-auto">
          <div className="relative w-10 h-10 m-auto">
            <Image src={tick} alt="" />
          </div>
          <p className="mt-4 text-center">step 2 of 3</p>
          <p className="font-semibold text-3xl mt-2 text-center">
            Choose your plan.
          </p>
          <div className="mt-6">
            <div className="relative flex gap-4 items-center mt-3">
              <Image src={checkmark} alt="" />
              <p>No commitments, cancel anytime.</p>
            </div>
            <div className="relative flex gap-4 items-center mt-3">
              <Image src={checkmark} alt="" />
              <p>Everything on Netflix for one low price.</p>
            </div>
            <div className="relative flex gap-4 items-center mt-3">
              <Image src={checkmark} alt="" />
              <p>No ads and no extra fees. Ever.</p>
            </div>
          </div>
        </div>
        <button onClick={()=>router.push('/signup/planform')} className="w-full mt-6 py-5 rounded bg-[#F6131D] text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
