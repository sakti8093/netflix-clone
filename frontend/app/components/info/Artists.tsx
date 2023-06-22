import { Casts } from "@/types/types";
import { base_url } from "@/utils/imageurl";
import Image from "next/image";
import React from "react";
interface props {
  casts: Casts[];
}
const Artists = ({ casts }: props) => {
  return (
    <div>
        <p className="text-xl md:text-2xl mt-4" >Casts : </p>
      <div className="mt-4 relative w-full flex gap-8 overflow-x-scroll scrollbar-hide">
        {casts.map((elem) => (
          <div key={elem.id} className="relative min-w-[70px] min-h-[70px] md:min-w-[100px] md:min-h-[100px]">
            <Image
              fill
              alt=""
              src={`${base_url}${elem.profile_path}`}
              className="rounded-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
