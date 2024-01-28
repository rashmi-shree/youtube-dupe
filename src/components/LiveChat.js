import React,{useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch, useSelector} from 'react-redux';
import {addMessage} from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch()
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store)=> store.chat.messages)
  useEffect(()=>{
    const i = setInterval(()=>{
      // console.log("api poll");
      dispatch(addMessage({
        name:"Rashmi",
        message:"ahjsdfk asvgdbhjn"
      }))
    },2000);
    return ()=> clearInterval(i)
  },[])
  return (
    <>
    <div className='w-full border border-gray-800 ml-2 p-2 h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {
        chatMessages.map((c,i)=>
          <ChatMessage key={i} name={c.name} message={c.message} />  
          )
      }
    </div>
    <form 
    className='w-full ml-2 p-2 border border-black'
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
          addMessage({
          name:"Gaurav",
          message:liveMessage
        })
      )
      setLiveMessage("")
    }}
    >
      <input 
        className='pl-2 w-[80%] border border-gray-500 mr-2 rounded-lg' 
        type='text' 
        onChange={(e)=> setLiveMessage(e.target.value)}
      />
      <button className='bg-gray-400 p-1 rounded-lg hover:bg-opacity-50'>Send</button>
    </form>
    </>
  )
}

export default LiveChat