import React from 'react'

export default function Header() {
  return (

<section className="header h-[83vh] relative flex flex-col justify-center items-center gap-x-12 lg:flex-row lg:justify-center lg:items-center">

    <img src="./profile.png" alt="" className="profile lg:w-[400px] w-[275px] rounded-full"/>
    <div className="myinfo flex flex-col items-center justify-center pt-3 lg:pt-12 gap-3 lg:gap-6 ">
        
        <h3 className="font-semibold text-gray-400">Hello,I'm</h3>
        <h1 className="lg:text-5xl text-3xl lg:font-bold font-semibold">Seyed Ehsan</h1>
        <h2 className="text-xl lg:text-2xl text-gray-400 font-semibold">Frontend Developer</h2>

        <div className="btn flex gap-2">
            <p className="cv font-semibold transition-all p-4 w-32  rounded-[32px] text-sm border border-black border-solid text-center bg-gray-white hover:bg-black text-black hover:text-white cursor-pointer" >Download CV</p>
            <p className="contact font-semibold transition-all p-4 w-32  rounded-[32px] text-sm border border-black border-solid text-center bg-gray-900 hover:bg-black text-white cursor-pointer" >Contact Info</p>
        </div>

        <div className="social flex gap-2.5">
            <a href=""><i className="fa-brands fa-github text-3xl"></i></a>
            <a href=""><i className="fa-brands fa-linkedin text-3xl"></i></a>
        </div>
    </div>

</section>
  )
}
