import React, { useState } from 'react'
import Desktop from './Desktop'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom';


export default function Navbar() {

  let [isHamburgurOpen , setIsHamburgurOpen] = useState(false)
  
  function menuFunc (){
    if(isHamburgurOpen){setIsHamburgurOpen(!isHamburgurOpen)}else{setIsHamburgurOpen(!isHamburgurOpen)}   
        
    console.log(isHamburgurOpen)
  }
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
            <span id="menu" className={`${isHamburgurOpen ? "hidden" :"flex"} material-symbols-outlined w-8 cursor-pointer`} onClick={menuFunc}>menu</span>
            <span id="close" className={`${isHamburgurOpen ? "flex" :"hidden"} material-symbols-outlined w-8 cursor-pointer`} onClick={menuFunc}>close</span>
                <div className={`hamburgur-menu z-50 absolute ${isHamburgurOpen ? "flex" :"hidden"} top-5 right-4 flex-col justify-center items-center bg-white border border-solid border-gray-400`}>
                    <Hamburger address={"/about"} content={"About"}/>
                    <Hamburger address={"/experience"} content={"Experience"}/>
                    <Hamburger address={"/projects"} content={"Projects"}/>
                    <Hamburger address={"/contact"} content={"Contact"}/>
                </div>
        </div>
    </nav>
  )
}
