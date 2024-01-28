import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
  return !isMenuOpen ? null : (
    <div 
      className='shadow-lg p-4 w-36'
    >
    <ul
      className='mt-4'
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        Shorts
      </li>
      <li>
        Videos
      </li>
      <li>
        Live
      </li>
    </ul>
    <h1
      className='font-bold mt-4'
    >Subscription</h1>
    <ul>
      <li>
        Music
      </li>
      <li>
        Sports
      </li>
      <li>
        Gaming
      </li>
      <li>
      Movies
      </li>
    </ul>
    <h1
      className='font-bold mt-4'
    >Watch Later</h1>
    <ul>
      <li>
        Home
      </li>
      <li>
        Shorts
      </li>
      <li>
        Videos
      </li>
      <li>
        Live
      </li>
    </ul>
    </div>
  )
}

export default Sidebar