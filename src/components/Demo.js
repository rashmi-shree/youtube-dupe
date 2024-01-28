import React, { useMemo, useState } from 'react'
import { performanceHeavyFunction } from '../utils/helper';

const Demo = () => {
    const [text, setText] = useState(0)
    const[isDark, setIsDark] = useState(false);
    const output = useMemo(() => performanceHeavyFunction(text), [text]);
    console.log("rendering..",output);
  return (
    <div
        className={
            "border border-black h-96 w-[80%] m-2 p-2" + 
            ( isDark && "bg-red text-white bg-black")
        }
    >
        <button
            className='bg-yellow-600 p-1 m-2 rounded-lg font-bold'
            onClick={()=>{setIsDark(!isDark)}}
        >
            Toggle
        </button>
        <input 
            className='border border-black bg-gray-200 w-[90%] m-2'
            type='number'
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
        <div>
            <h1>performance heavy output : {output}</h1>
        </div>
    </div>
  )
}

export default Demo