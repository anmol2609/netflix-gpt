import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moiveSlice";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movie_id }) => {
  useTrailerVideo(movie_id);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  if(!trailer) return   
  return (
    <div>
      <iframe
        className=" w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + trailer.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
