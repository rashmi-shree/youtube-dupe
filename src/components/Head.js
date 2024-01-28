import React,{useRef, useEffect,useState} from 'react'
import { HAMBURGER_IMG_URL, YOUTUBE_LOGO_URL, SEARCH_IMG_URL, USER_IMG_URL } from '../utils/constants'
import {useDispatch, useSelector} from 'react-redux';
import {toggleMenu,addSearchText,showSuggestionToggle} from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import {cacheResults} from '../utils/searchSlice';

const Head = () => {
  const searchText = useRef("");
  const searchQuery = useSelector((store)=>store.app.searchText)
  const showSuggestion = useSelector((store)=>store.app.showSuggestion)
  const searchCache = useSelector((store)=>store.search)
  const [suggestions,setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const handleMenuBar = () => {
    dispatch(toggleMenu())
  }
  useEffect(()=>{
    // make an api call after every key press
    // but if the difference between 2 api calls is <200ms
    // decline the api call
    const timer = setTimeout(()=> 
    {
      if(searchCache[searchQuery]){
       setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
    }, 200);

    return () => {
      clearTimeout(timer)
    }
  },[searchQuery])

  // key - i
  // render the component
  // useEffect()
  // start timer => make api call after 200ms

  // key - ip
  // even before 200ms if "p" is pressed , then destroy the component (useEffect return menthod)
  // re-render the component
  // useEffect()
  // start timer => make api call after 200ms

  const getSearchSuggestions = async() => {
    // console.log("api call",searchQuery);
    let data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    let json = await data.json()
    setSuggestions(json[1])
    
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }
  return (
    <div
      className='grid grid-flow-col shadow-lg p-2'
    >
      <div
        className='col-span-1 flex'
      >
        <img
          className='h-8 m-2 cursor-pointer'
          src={HAMBURGER_IMG_URL}
          alt="hamburger icon"
          onClick={handleMenuBar}
        />
        <img
          className='h-12' 
          src={YOUTUBE_LOGO_URL}
          alt="youtube logo"
        />
      </div>
      <div
        className='col-span-10  mt-2 pl-60'
      >
        <div
          className='flex'
        >
          <input
          ref={searchText} 
          className='w-1/2 border border-gray-500 h-8 rounded-l-full p-2'
          type="text"
          placeholder='search'
          onChange={()=>dispatch(addSearchText(searchText.current.value))}
          onFocus={()=> dispatch(showSuggestionToggle(true))}
          onBlur={()=> dispatch(showSuggestionToggle(false))}
        />
        <img 
          className='h-8 border border-gray-500 p-1 rounded-r-full bg-gray-200'
          src={SEARCH_IMG_URL}
          alt="search image"
        /></div>
        { showSuggestion && (<div 
          className='fixed absolute bg-white w-[27rem] px-2 py-1 rounded-lg shadow-lg border border-gray-100 '
        >
        <ul>
          {
            suggestions?.map((data, index)=>
              <li
                key={index}
              className='p-1 m-1 shadow-sm hover:bg-gray-100'
              >{data}</li>  
            )
          }
        </ul>
      </div>)}
      </div>
      
      <div
        className='col-span-1 mt-2'
      >
      <img 
          className='h-8'
          src={USER_IMG_URL}
          alt="user image"
        />
      </div>
    </div>
  )
}

export default Head