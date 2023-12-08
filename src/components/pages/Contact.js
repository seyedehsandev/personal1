import React from 'react'
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <section id="contact" className="projects h-fit  flex flex-col items-center justify-center gap-6 " >
    <h2 className="text-base font-light text-gray-400">Get in Touch</h2>
    <h1 className="text-5xl font-bold">Contact Me</h1>
    <div className="contact-boxs flex items-start justify-center">
        {/* <!-- res  --> */}
        <div className="project-box lg:w-[450px] w-[340px] flex flex-col items-center justify-center p-5 lg:p-5 rounded-[32px] border border-solid border-gray-400 ">
            <div className="btn flex flex-wrap gap-10 justify-center items-center">
                <div className="flex justify-center items-center  gap-x-1.5">
                    <img src="./email.png" alt="" className="w-8"/>
                    <p className="text-base lg:text-lg font-medium hover:text-gray-500  cursor-pointer transition-all box-border">Dev.EhsanHosseini@Gmail.com</p>
                </div>
                <div className="flex justify-center items-center gap-x-1.5">
                <i className="fa-brands fa-github text-3xl"></i>
                
                    <p className="text-base lg:text-lg font-medium hover:text-gray-500  cursor-pointer transition-all box-content"><Link to="https://github.com/seyedehsandev">Github</Link></p>
                </div>
            </div>
        </div>
        {/* <!-- -------  --> */}
     
    </div>
</section>
  )
}

export default Contact