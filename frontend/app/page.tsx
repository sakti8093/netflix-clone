"use client";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Features from "./components/Features";
import en from "../public/assets/en.png";
import fe2 from "../public/assets/fe2.png";
import fe3 from "../public/assets/fe3.png";
import fe4 from "../public/assets/fe4.png";
import Division from "./components/Division";
import FAQ from "./components/FAQ";
import logo from '../public/assets/logo.svg'
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  const [currentContainer,setCurrentContainer] = useState<null | Number>()

  const handleClick = (current : Number) => {
    if(current === currentContainer){
      setCurrentContainer(null)
    }else{
      setCurrentContainer(current);
    }
  }

  console.log(currentContainer);

  return (
    <div className="px-5 md:px-8 lg:px-10 py-4 bg-[#00081D]">
      <div className=" flex justify-between items-center ">
        <div  className="relative cursor-pointer object-contain h-8 w-20 md:w-44 md:h-9" >
        <Image
          src={logo}
          alt=""
          fill
        />
        </div>
        <div className="flex gap-5 items-center">
          <select
            name=""
            id=""
            className="text-white px-5 py-1 bg-transparent border border-gray-500 rounded outline-none"
          >
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="bg-[#e50914] px-3 py-1 rounded font-bold"
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="w-full mt-8 md:mt-6 flex items-center justify-center custom-bg bg-cover h-[80vh] rounded-2xl px-4 py-4 md:p-20">
        <div className=" w-full">
          <h1 className="text-4xl font-bold md:font-extrabold md:max-w-xl max-w-full">
            Unlimited movies,TV shows and more
          </h1>
          <p className="mt-5 font-semibold">Watch anywhere.Cancel anytime</p>
          <p className="mt-5">
            Ready to watch ? Enter your email to create or restart your
            membership.
          </p>
          <div className="w-full mt-3 md:flex items-end gap-5 max-w-xl">
            <input
              className="w-full outline-none bg-[#161616B3] border border-gray-500 px-4 py-3 rounded"
              placeholder="Email"
              type="text"
            />
            <button className="bg-[#e50914] mt-4 font-bold border-none min-w-[200px] rounded py-3 w-[200px] flex items-center justify-center">
              <p className="text-xl">Get Started</p>
              <ChevronRightIcon className=" w-7 h-7" />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className=" md:px-10 lg:px-24 custom-bg-1">
        <Features
          mainText="Enjoy on your TV"
          text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          image={en}
        />
        <Division />
        <Features
          mainText="Watch everywhere"
          text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image={fe2}
          reverse={true}
        />
        <Division />
        <Features
          mainText="Create profiles for kids"
          text="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          image={fe4}
        />
        <Division />
        <Features
          mainText="
          Download your shows to watch offline"
          text="Save your favourites easily and always have something to watch."
          image={fe3}
          reverse={true}
        />
      </div>
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-3" >Frequently Asked Questions</h1>
          <div className="cursor-pointer mt-2" onClick={()=>handleClick(1)}>
            <FAQ
            mainText="What is Netflix ?"
            text1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
            text2="You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
            show={currentContainer === 1}
          />
          </div>
          <div className="cursor-pointer mt-2" onClick={()=>handleClick(2)}>
            <FAQ 
            mainText="How much does netflix costs ?"
            text1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
            show={currentContainer === 2}
          />
          </div>
          <div className=" cursor-pointer mt-2" onClick={()=>handleClick(3)}>
            <FAQ
            mainText="Where can i watch?"
            text1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            text2="You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            show={currentContainer === 3}
          />
          </div>
      </div>
    </div>
  );
};

export default Home;
