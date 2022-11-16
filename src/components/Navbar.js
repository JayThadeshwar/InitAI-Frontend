import React, { useState, useEffect } from 'react'
import logo from '../assets/Logo.svg'
// import MenuIcon from '@mui/icons-material/Menu';
// import { Icon } from '@mui/material';

const Navbar = () => {

  const { innerWidth: width } = window;

  let toggle = width > 1024;
  console.log(toggle);

  // let Links=[
  //   {name:"Projects",link:"/"},
  //   {name:"Events",link:"/"},
  //   {name:"Our Team",link:"/"},
  //   {name:"Beginner's Guide",link:"/"},
  //   {name:"About Us",link:"/"},
  //   {name:"Alumini",link:"/"}
  // ];

  let [open, setOpen]=useState(true);

 const setToggle=()=>{
  if(toggle){
    setOpen(true);
  }
  else{
    setOpen(false);
  }
 }
 setToggle();

  return (

    <nav class="bg-white border-b-[1.5px] border-black font-[Montserrat] font-bold flex items-center flex-wrap">
      <a href="/" class="p-2 mr-4 inline-flex items-center">
        <img src={logo}></img>
      </a>
      <button onClick={()=>setOpen(!open)} class="text-black inline-flex p-3 hover:bg-cyan-200 rounded lg:hidden ml-auto nav-toggler" data-target="#navigation">
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <div style = { open ? { display: 'block' } : { display: 'none' } } class="display top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
          <a href="/" class="lg:inline-flex lg:w-auto px-3 text-black hover:rounded-full hover:bg-gray-200">
            <span>Projects</span>
          </a>
          <a href="/" class="lg:inline-flex lg:w-auto px-3 text-black hover:rounded-full hover:bg-gray-200">
            <span>Events</span>
          </a>
          <a href="/" class="lg:inline-flex lg:w-auto px-3 text-black hover:rounded-full hover:bg-gray-200">
            <span>Our Team</span>
          </a>
          <a href="/" class="lg:inline-flex lg:w-auto px-3 text-black hover:rounded-full hover:bg-gray-200">
            <span>Beginner's Guide</span>
          </a>
          <a href="/" class="lg:inline-flex lg:w-auto px-3 text-black hover:rounded-full hover:bg-gray-200">
            <span>About Us</span>
          </a>
          <a href="/" class="lg:inline-flex lg:w-auto px-3 text-black hover:rounded-full hover:bg-gray-200">
            <span>Alumini</span>
          </a>
          <a href="/" class="inline-block lg:ml-24 ml-32 text-sm px-12 py-4 leading-none bg-[#4051A3] border rounded-xl text-white border-black lg:mt-0 duration-500 hover:text-teal-500">Sign In</a>
        </div>
      </div>
    </nav>
    
    // <nav class="flex items-center justify-between flex-wrap bg-white mx-auto border-black border-b-[1.5px] shadow overflow-hidden">
    //   <div class="flex items-center cursor-pointer flex-shrink-0 px-6 md:px-10">
    //     <img src={logo} alt=""></img>
    //     <div onClick={()=>setOpen(!open)} class="text-3xl cursor-pointer lg:hidden right-8 absolute">
    //       <ion-icon name={open ? "close" : "menu"}></ion-icon>
    //     </div>
    //   </div>
      
    //     <ul style = { open ? { display: 'block' } : { display: 'none' } } className={`lg:ml-8 lg:flex md:flex md:items-center md:pb-0 pb-8 flex-grow font-bold z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 lg:opacity-100 top-[-400px] transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px] hidden'} lg:inline-block hidden`}>
    //       {
    //         Links.map((Link)=>(
    //           <li key={Link.name} class="md:ml-8 text-sm md:my-0 my-7">

    //             <a href={Link.link} class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 duration-500 lg:mr-10">{Link.name}</a>

    //           </li>
    //         ))
    //       }
    //       <li>
    //         <a href="/" class="inline-block lg:ml-24 ml-32 text-sm px-12 py-4 leading-none bg-[#4051A3] border rounded-xl text-white border-black lg:mt-0 duration-500 hover:text-teal-500">Sign In</a>
    //       </li>
    //     </ul>
    //   <hr/>
    // </nav> 
  ) 
  
}

export default Navbar
