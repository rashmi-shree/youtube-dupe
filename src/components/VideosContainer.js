import React, { useEffect } from 'react';
import VideoCard from "./VideoCard";
import {YOUTUBE_VIDEOS_API} from "../utils/constants";
import {useDispatch, useSelector} from 'react-redux';
import {setVideoData} from "../utils/videoSlice";
import {Link} from 'react-router-dom';

const VideosContainer = () => {
  const dispatch = useDispatch()
  const videos = useSelector(state=> state.video.videoData)
  const getVideos = async () => {
    let data = await fetch(YOUTUBE_VIDEOS_API);
    let json = await data.json()
    dispatch(setVideoData(json.items))
  }
  useEffect(()=>{
    getVideos()
  },[])
  return (
    <div
      className='flex flex-wrap'
    >
      {
        videos?.map(video => 
          <Link 
            key={video.id}
            to={"/watch?v=" + video.id}
          >
          <VideoCard  
              
              info={video}
            />
            </Link> 
          )
      }
      
    </div>
  )
}

export default VideosContainer