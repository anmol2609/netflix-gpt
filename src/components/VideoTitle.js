import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute '>
        <h1 className=' text-6xl font-bold text-white'>{title}</h1>
        <p className=' py-6 w-1/4 text-lg text-white'>{overview}</p>
        <div>
            <button className=' bg-white text-black mx-4 px-4 py-4 pt-2 pb-2 text-xl rounded-lg hover:bg-opacity-50'>▶️ Play</button>
            <button className=' bg-gery text-white px-4 py-4 pt-2 pb-2 text-xl rounded-lg bg-opacity-50'>More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle