"use client"
import React from "react";
import PlanDetail from "./plans/PlanDetail";
import {AiOutlineCheck} from 'react-icons/ai'

interface Props {
    planame: string;
    price: number;
    planDetail: PlanDetail[];
    selected : boolean;
}

interface PlanDetail {
    name: string;
    detail : string;
    border? : boolean
}

const styles = {
    transform : 'scale(1.1,1.1)',
    border : '2px solid gray'
}

const defaultStyle= {
    transform : 'scale(1)',
}

const Plans = ({planame,price, planDetail ,selected }:Props) => {

  return (
    <div style={selected ? styles : defaultStyle} className="min-w-[250px] border p-2 rounded-xl transition-all duration-500 ease-in-out">
      <div className="w-full plans-bg-1 px-3 py-2 h-36 rounded-xl text-white">
        <p className="text-lg font-semibold">{planame}</p>
        <p>₹ {price}</p>
      </div >
        {planDetail.map((detail,index)=>(
             <div key={index} className="px-6" >
                <PlanDetail  name={detail.name} detail={detail.detail} border={detail.border} />
            </div>
        ))}
        { selected && <div className="flex items-center justify-center mt-2 mb-2 text-sm text-gray-500 gap-2">
                <p><AiOutlineCheck /></p>
                <p>selected</p>
             </div>  }
    </div>
  );
};

export default Plans;
