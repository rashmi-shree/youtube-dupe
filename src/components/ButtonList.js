import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking","Valentines","Cigrattes after sex", "The Weeknd", "Contemporary", "Soft song", "Gaming", "Python"];

  return (
    <div
      className='flex m-1'
    >
      {
        list.map((data, index)=>
          <Button 
            key = {index}
            name={data}
          />
        )
      }
    </div>
  )
}

export default ButtonList