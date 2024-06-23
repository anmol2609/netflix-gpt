import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
      {/* -mainContainer
        -video background 
        -video title
      -secondryContainer
        -moive list * N
        -cards * N */}
    </div>
  )
}

export default Browse