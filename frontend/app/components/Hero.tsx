"use client";
import { Movie } from "@/types";
import { base_url } from "@/utils/imageurl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  prop: Movie[];
}

const Hero = ({ prop }: Props) => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setRandomMovie(prop[Math.floor(Math.random() * prop.length)]);
  }, []);

  return (
    <div >
      <div className="w-screen object-cover absolute left-0 top-0 right-0 h-[100vh] -z-10">
        <Image
          fill
          alt="img"
          className="object-cover"
          src={`${base_url}${
            randomMovie?.backdrop_path || randomMovie?.poster_path
          }`}
        />
      </div >
      <div className="absolute top-20 md:top-[40vh] pl-4 md:pl-10" >
        <h1 className="text-2xl md:4xl lg:text-5xl font-bold">
          {randomMovie?.name ||
            randomMovie?.original_name ||
            randomMovie?.title}
        </h1>
        <p className="text-xs md:text-lg lg:text-xl max-w-xs md:max-w-md lg:max-w-lg mt-4">
          {randomMovie?.overview}
        </p>
      </div>
    </div>
  );
};

export default Hero;
