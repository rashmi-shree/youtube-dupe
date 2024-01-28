import React from 'react'

const VideoCard = (props) => {
  const {snippet, statistics} = props.info;
  const {channelTitle, title, thumbnails} = snippet;
  
  return (
    <div 
      className='p-4 shadow-lg'
    >
      <img 
        className='rounded-lg h-40 w-full'
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <ul 
        className='w-60'
      >
        <li
          className='font-bold'
        >{title}</li>
        <li className='py-2'>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard