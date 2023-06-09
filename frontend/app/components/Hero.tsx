"use client";
import { Movie } from "@/types/types";
import { base_url } from "@/utils/imageurl";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface Props {
  prop: Movie[];
}

const Hero = ({ prop }: Props) => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  useEffect(() => {
    if (prop && prop?.length > 0) {
      setRandomMovie(prop[Math.floor(Math.random() * prop.length)]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();

  const handlePlay = (id:Number) =>{
      router.push(`/info/${id}`)
  }

  return (
    <div className="h-[100vh] md:h-[140vh] bg-gradient-to-b ">
      <div className="w-screen object-cover absolute left-0 top-0 right-0 h-full -z-10">
        <Image
          fill
          alt="img"
          className="object-cover"
          src={`${base_url}${
            randomMovie?.backdrop_path || randomMovie?.poster_path
          }`}
        />
      </div>
      <div className="absolute top-20 md:top-[30vh] pl-4 md:pl-10 opacity-80">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold">
          {randomMovie?.name ||
            randomMovie?.original_name ||
            randomMovie?.title}
        </h1>
        <p className="text-xs md:text-lg lg:text-xl max-w-xs md:max-w-2xl lg:max-w-5xl mt-4">
          {randomMovie?.overview}
        </p>

        { randomMovie && <div onClick={()=>handlePlay(randomMovie?.id)} className="flex space-x-2 items-center mt-4">
          <button className="flex gap-2 items-center text-black bg-white px-5 py-1.5 md:py-2.5 md:px-8 rounded font-semibold text-sm transition hover:opacity-70">
            <FaPlay className="w-4 h-4 md:w-7 md:h-7" /> Play
          </button>
          <button className=" bg-[gray]/70 flex gap-2 items-center px-5 py-1.5 md:py-2.5 md:px-8 rounded font-semibold text-sm hover:opacity-70">
            More info{" "}
            <InformationCircleIcon className="h-5 w-5 md:w-8 md:h-8" />
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Hero;
