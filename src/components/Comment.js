import React from 'react'
import {USER_IMG_URL} from "../utils/constants"

const Comment = (props) => {
    const {name, text, replies} = props.data;
  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg'>
        <img 
            className='h-10'
            src={USER_IMG_URL} alt="user" 
        />
        <div className='px-2'>
            <h1 className='font-bold'>{name}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment