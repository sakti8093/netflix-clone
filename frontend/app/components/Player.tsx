"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";
interface props {
  url: string;
}
const Player = ({ url }: props) => {
  return (
    <ReactPlayer
      controls={true}
      pip={true}
      width="100%"
      height="100%"
      playing={true}
      url={`https://www.youtube.com/watch?v=${url}`}
    />
  );
};

export default Player;
