import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, GET_MOVIE_LIST_URL } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/moiveSlice';

const useNowPlayingMovies = () => {
    const dispatch= useDispatch();
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
    const getNowPlayingMovies = async()=>{
      const data  = await fetch(GET_MOVIE_LIST_URL,API_OPTIONS)
      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }
}

export default useNowPlayingMovies;