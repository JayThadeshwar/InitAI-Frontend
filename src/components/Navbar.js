import React, { useState } from 'react'
import logo from '../assets/Logo.svg'

const Navbar = () => {

  let Links=[
    {name:"Projects",link:"/"},
    {name:"Events",link:"/"},
    {name:"Our Team",link:"/"},
    {name:"Beginner's Guide",link:"/"},
    {name:"About Us",link:"/"},
    {name:"Alumini",link:"/"}
  ];

  let [open, setOpen]=useState(false);


  return (
    
    <nav class="flex items-center justify-between flex-wrap bg-white mx-auto border-black border-b-[1.5px] shadow overflow-hidden">
      <div class="flex items-center cursor-pointer flex-shrink-0 px-6 md:px-10">
        <img src={logo} alt=""></img>
        <div onClick={()=>setOpen(!open)} class="text-3xl cursor-pointer lg:hidden right-8 absolute">
          {/* <ion-icon name="menu" onclick={Menu(this)}></ion-icon> */}
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </div>
      
      {/* <div id="list" class="w-full block flex-grow lg:flex lg:ml-20 relative lg:w-auto"> */}
        <ul className={`lg:ml-8 lg:flex md:flex md:items-center md:pb-0 pb-8 flex-grow font-bold z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 lg:opacity-100 top-[-400px] transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px] hidden'} lg:inline-block hidden`}>
          {
            Links.map((Link)=>(
              <li key={Link.name} class="md:ml-8 text-sm md:my-0 my-7">

                <a href={Link.link} class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 duration-500 lg:mr-10">{Link.name}</a>

              </li>
            ))
          }
          <li>
            <a href="#" class="inline-block lg:ml-24 ml-32 text-sm px-12 py-4 leading-none bg-[#4051A3] border rounded-xl text-white border-black lg:mt-0 duration-500 hover:text-teal-500">Sign In</a>
          </li>
        </ul>
      <hr/>
    </nav> 
  ) 
  
}

export default Navbar
