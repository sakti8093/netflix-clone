import { Genre } from "@/types/types";
import { base_url } from "@/utils/imageurl";
import Image from "next/image";
import React from "react";
interface props {
  title: string;
  runtime: number;
  languages: string;
  overview: string;
  vote: number;
  genres: Genre[];
  companies: Companies[];
}
interface Companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

const MovieHeader = ({
  title,
  runtime,
  languages,
  overview,
  vote,
  genres,
  companies,
}: props) => {
  return (
    <div className="">
      <div className="flex justify-between bold text-xl md:text-2xl lg:text-4xl mt-4">
        <h1>{title}</h1>
        <p>⭐️ {vote}</p>
      </div>
      <div className="md:flex text-gray-400 mt-3 gap-8 items-center">
        <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
          {genres.map((elem) => (
            <p
              className=" hover:text-red-600 px-4 rounded-xl bg-[#3C3C3C] text-xs"
              key={elem.id}
            >
              {elem.name}
            </p>
          ))}
        </div>
        <p className="text-lg md:text-xl mt-2 md:mt-0">{runtime} m</p>
      </div>
      <p className="mt-4 text-gray-300">{overview}</p>
    </div>
  );
};

export default MovieHeader;
