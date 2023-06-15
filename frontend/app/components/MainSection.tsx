"use client";
import React from "react";
import { Movie } from "@/types/types";
import Image from "next/image";
import { base_url } from "@/utils/imageurl";

interface props {
  title: string;
  prop: Movie[];
}

const MainSection = ({ title, prop }: props) => {
  console.log(prop);

  return (
    <div className="p-4">
      <p>{title}</p>
      <div className="w-full flex overflow-x-scroll space-x-4">
        {prop?.map((elem)=>(
             <div key={elem.id} className="relative w-[200px] h-[200px] flex-shrink-0">
                <Image  className="object-cover" fill alt="" src={`${base_url}${elem.backdrop_path || elem.poster_path}`} />
             </div>
        ))}
    </div>
    </div>
  );
};

export default MainSection;
