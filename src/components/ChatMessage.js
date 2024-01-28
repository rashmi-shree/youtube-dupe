import React from 'react';
import {USER_IMG_URL} from "../utils/constants";

const ChatMessage = (props) => {
    const {name, message} = props;
  return (
    <div className='flex shadow-sm rounded-lg border border-gray-100 m-1'>
        <img 
            className='h-6'
            src={USER_IMG_URL}
            alt="user image"
        />
        <span className='font-bold mr-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage