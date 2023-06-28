"use client";
import React, { useRef } from "react";
import { Movie } from "@/types/types";
import Image from "next/image";
import { base_url } from "@/utils/imageurl";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import netflix_originals from '../../public/assets/netflix_originals.png'

interface props {
  title: string;
  prop: Movie[];
  isOriginal?: boolean;
}

const MainSection = ({ title, prop,isOriginal }: props) => {

  const router = useRouter();

  const divRef = useRef<null | HTMLDivElement>(null);
  const handleLeftScroll = (target:string) => {
    if (divRef.current) {
      const { scrollLeft, clientWidth } = divRef.current;
      const scrollTo = target === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      divRef.current?.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  };

  const handleClick = (id:Number) =>{
    router.push(`/info/${id}`)
  }

  return (
    <div className="relative px-4 py-2 md:px-8 md:py-4 group">
      <p className="text-sm md:text-lg" >{title}</p>

      <ChevronLeftIcon
        onClick={() => handleLeftScroll("left")}
        className="hidden absolute md:group-hover:block w-16 h-16 left-6 top-[50%] z-10 hover:scale-125 transition duration-200 ease-out"
      />
      <div
        ref={divRef}
        className="relative mt-3 w-full flex overflow-y-hidden overflow-x-scroll space-x-10 scrollbar-hide "
      >
        {prop?.map((elem) => (
          <div
            key={elem.name}
            onClick={()=>handleClick(elem.id)}
            className="relative min-w-[200px] h-[300px] transition duration-200 ease-out md:h-[400px] md:min-w-[300px] md:hover:scale-110 flex-shrink-0"
          >
            <Image
              className=" object-center opacity-80 rounded-xl"
              fill
              alt=""
              src={`${base_url}${elem.poster_path || elem.backdrop_path}`}
            />
            { isOriginal && <div className="absolute top-2 right-2 w-10 h-12" >
            <Image
              className="object-contain w-full"
              fill
              alt=""
              src={netflix_originals}
            />
            </div>}
          </div>
        ))}
      </div>
      <ChevronRightIcon className="hidden absolute md:group-hover:block  w-16 h-16 right-6 top-[50%] z-10 hover:scale-125 transition duration-200 ease-out opacity-0 md:opacity-100" onClick={() => handleLeftScroll("right")} />
    </div>
  );
};

export default MainSection;
