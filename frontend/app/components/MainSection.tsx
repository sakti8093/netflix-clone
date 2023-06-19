"use client";
import React, { useRef } from "react";
import { Movie } from "@/types/types";
import Image from "next/image";
import { base_url } from "@/utils/imageurl";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

interface props {
  title: string;
  prop: Movie[];
}

const MainSection = ({ title, prop }: props) => {
  const divRef = useRef<null | HTMLDivElement>(null);
  const handleLeftScroll = (target:string) => {
    if (divRef.current) {
      const { scrollLeft, clientWidth } = divRef.current;
      const scrollTo = target === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      divRef.current?.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  };

  return (
    <div className="relative px-4 py-2 md:px-8 md:py-4 group">
      <p className="text-sm md:text-lg" >{title}</p>

      <ChevronLeftIcon
        onClick={() => handleLeftScroll("left")}
        className="hidden absolute group-hover:block w-12 h-12 left-6 top-32 z-10 hover:scale-125 transition duration-200 ease-out"
      />
      <div
        ref={divRef}
        className="relative mt-3 w-full flex overflow-x-scroll space-x-6 scrollbar-hide"
      >
        {prop?.map((elem) => (
          <div
            key={elem.id}
            className="relative min-w-[200px] h-28 transition duration-200 ease-out md:h-48 md:min-w-[400px] md:hover:scale-110 flex-shrink-0"
          >
            <Image
              className=" object-center opacity-60"
              fill
              alt=""
              src={`${base_url}${elem.backdrop_path || elem.poster_path}`}
            />
            <p className="z-10 absolute bottom-4 max-w-lg left-2 font-semibold" >{elem.title}</p>
          </div>
        ))}
      </div>
      <ChevronRightIcon className="hidden absolute group-hover:block  w-12 h-12 right-6 top-32 z-10 hover:scale-125 transition duration-200 ease-out opacity-0 md:opacity-100" onClick={() => handleLeftScroll("right")} />
    </div>
  );
};

export default MainSection;
