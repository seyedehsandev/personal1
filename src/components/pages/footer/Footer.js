import React from 'react'
import FooterItem from './FooterItem'

export default function Footer() {
  return (

<section className="footer h-fit flex flex-col gap-y-5 ">
  
    {/* <div className="menu-items flex flex-col md:flex-row justify-center items-center gap-x-3  lg:gap-x-10 text-xl lg:text-2xl text-black">
      <FooterItem address={"/about"} content={"About"} />
      <FooterItem address={"/experience"} content={"Experience"} />
      <FooterItem address={"/projects"} content={"Projects"} />
      <FooterItem address={"/contact"} content={"Contact"} />
    </div> */}
        <p className="text-center text-gray-500 font-light lg:text-base text-sm">Copyright © 2023 Ehsan Hosseini. All Rights Reserved.</p>
</section>
   
  )
}
