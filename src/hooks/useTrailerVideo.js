import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/moiveSlice';

 const useTrailerVideo = (movie_id) => {
    
    const dispatch= useDispatch()
  useEffect(() => {
    getMovieInfo();
  }, []);
  const getMovieInfo = async () => {
    const GET_MOVIE_INFO_URL =
      "https://api.themoviedb.org/3/movie/" +
      movie_id +
      "/videos?language=en-US";
    const data = await fetch(GET_MOVIE_INFO_URL, API_OPTIONS);
    const json = await data.json();
    const filteredTrailers = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filteredTrailers.length
      ? filteredTrailers[0]
      : json.results[0];
      console.log(trailer,"movie_idmovie_idmovie_id")
      dispatch(addTrailerVideo(trailer))
  };
}
export default useTrailerVideo;
