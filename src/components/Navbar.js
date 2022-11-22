import React, { useState } from 'react'
import logo from '../assets/Logo.svg'

const Navbar = () => {

  let [open, setOpen]=useState(true);
  let [open1, setOpen1]=useState(false);

  return (
    <nav id="full" className="flex items-center justify-between flex-wrap bg-white border-b-[1.5px] border-black p-2 text-[16px]">
      <a href="/" className="mr-4 inline-flex items-center">
        <img src={logo}></img>
      </a>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-black text-white bg-[#4051A3] hover:text-black hover:bg-white" onClick={()=>setOpen(!open)}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${open ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow mt-4 lg:text-center font-[Montserrat] font-extrabold">
          <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Projects</span>
          </a>
          <a href="#responsive-header" id="dropdown" className="relative block lg:inline-block lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8" onClick={()=>setOpen1(!open1)}>
            <span>Events</span>
            <div class={`absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open1 ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-0">Events</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-1">Blogs</a>
              </div>
            </div>
          </a>
          <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Our Team</span>
          </a>
          <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Beginner's Guide</span>
          </a>
          <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>About Us</span>
          </a>
          <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Alumini</span>
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm py-4 px-12 leading-none border rounded-xl text-white bg-[#4051A3] border-black hover:bg-white hover:text-black mt-4 lg:mt-0 font-[Ubuntu] font-light">Sign In</a>
        </div>
        </div>
    </nav>
  ) 
  
}

export default Navbar