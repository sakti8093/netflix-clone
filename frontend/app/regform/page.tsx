"use client";
import { useRouter } from "next/navigation";
import RegNavbar from "../components/RegNavbar";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const  [savedEmail,setSavedEmail] = useState("")

  useEffect(() => {
    const item = sessionStorage.getItem('email')
    if(item) {
        setSavedEmail(item);
    }
  }, [])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/signup')
  }

  const remSavedemail = () =>{
    sessionStorage.removeItem('email');
    setSavedEmail("");
  }

  return (
    <div className="w-full h-screen bg-white text-black">
      <RegNavbar />
      <div className="p-4 md:p-0 w-full md:w-[400px] m-auto mt-10">
        <p>step 1 of 3</p>
        <p className="text-3xl font-semibold">
          Create a password to start your membership
        </p>
        <p className="mt-2">Just a few more steps and youre done! We hate paperwork, too.</p>
        <form onSubmit={(e)=>handleSubmit(e)} className="mt-2" >
          { savedEmail ?<p className="font-semibold" >{savedEmail} <span onClick={()=>remSavedemail()} className="text-xs text-blue-400 cursor-pointer">edit</span> </p>: <input
            className="w-full p-3 border border-red-500 outline-black mt-4"
            placeholder="Enter Email"
            required
          />}
          <input
            className="w-full p-3 border border-red-500 outline-black mt-4"
            required
            placeholder="Add a password"
            type="password"
            minLength={3}
            maxLength={10}
          />
          <button
            className="w-full mt-6 py-5 rounded bg-[#F6131D] text-white"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
