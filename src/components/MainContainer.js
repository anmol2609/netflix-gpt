import React from 'react'
import { useSelector } from 'react-redux'
import { randomIntFromInterval } from '../utils/constant'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const Movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(Movies === null) return // because in the first time before store executed nowPlayingMovies will benull so to avoid this we will use this condition
    const rndInt = randomIntFromInterval(1,Movies.length);
    const mainMovie = Movies[rndInt];
    const { id,original_title,overview} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer