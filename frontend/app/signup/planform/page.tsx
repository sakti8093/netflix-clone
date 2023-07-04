"use client";
import Plans from "@/app/components/Plans";
import RegNavbar from "@/app/components/RegNavbar";
import React, { useState } from "react";

const planPremium = [
  {
    name: "Monthly Price",
    detail: "649",
    border: true,
  },
  {
    name: "Resolution",
    detail: "4k (Ultra HD) + HDR",
    border: true,
  },
  {
    name: "Supported Devices",
    detail: "TV, computer, mobile phone, tablet",
    border: true,
  },
  {
    name: "Video Quality",
    detail: "Best",
    border: false,
  },
];

const Page = () => {
  const [selected, setSelected] = useState<Number>(0);

  const handleSelect = (key: Number) => {
    setSelected(key);
  };

  const arr = [0, 0, 0, 0];

  return (
    <div className="w-full bg-white text-black">
      <RegNavbar />
      <div className="max-w-7xl m-auto mt-10 p-3 md:p-0">
        <p>step 2 of 3</p>
        <p className="font-semibold text-2xl">
          Choose the plan that’s right for you
        </p>
        <div className="flex gap-7 overflow-y-scroll lg:overflow-hidden py-6 px-4 mt-5 scrollbar-hide">
          {arr.map((elem, index) => (
            <div key={index} onClick={() => handleSelect(index)}>
              <Plans
                selected={selected === index}
                planame="Premium"
                price={649}
                planDetail={planPremium}
              />
            </div>
          ))}
        </div>
        <p className=" text-[10px]  md:text-sm mt-4 text-gray-500">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our Terms of Use for more details.
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </p>
        <button className=" block w-[300px] m-auto py-3 mt-4 rounded bg-[#F6131D] text-white">
          Next
        </button>
        <div className="h-20 "></div>
      </div>
    </div>
  );
};

export default Page;
