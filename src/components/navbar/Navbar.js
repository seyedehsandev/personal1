import React from 'react'
import Desktop from './Desktop'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="desktop-nav flex justify-around items-center h-[17vh]">
      
          <Link className='logo text-3xl lg:font-bold cursor-pointer' to="/" >EHSAN</Link>
          {/* <div className="logo text-3xl lg:font-bold">EHSAN</div> */}

        <div className="menu-items hidden lg:flex gap-x-10 text-2xl text-black">
                <Desktop address={"/about"} content={"About"}/>
                <Desktop address={"/experience"} content={"Experience"}/>
                <Desktop address={"/projects"} content={"Projects"}/>
                <Desktop address={"/contact"} content={"Contact"}/>
        </div>
        <div className="hamburgur-nav flex lg:hidden relative">
            <span id="menu" className="flex material-symbols-outlined w-8 cursor-pointer">menu</span>
            <span id="close" className="hidden material-symbols-outlined w-8 cursor-pointer">close</span>
                <div className="hamburgur-menu z-50 absolute hidden top-5 right-4 flex-col justify-center items-center bg-white border border-solid border-gray-400">
                    <Hamburger address={"/about"} content={"About"}/>
                    <Hamburger address={"/experience"} content={"Experience"}/>
                    <Hamburger address={"/projects"} content={"Projects"}/>
                    <Hamburger address={"/contact"} content={"Contact"}/>
                </div>
        </div>
    </nav>
  )
}
