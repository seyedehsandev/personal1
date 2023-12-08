import React from 'react'
import AboutBox from './AboutBox'
import ArrowBtn from '../ArrowBtn'


export default function About() {
  return (
    <section id="about" className="about h-fit pt-[4vh] text-center flex flex-col gap-2.5">
    <h2 className="text-base font-light text-gray-400">Get To Know More</h2>
    <h1 className="text-2xl font-semibold md:text-3xl lg:text-5xl lg:font-bold ">About Me</h1>
    <div className="aboutinfo flex items-center justify-center flex-wrap gap-y-8 lg:gap-[50px] mt-5 pb-6">
        <img src="./about-pic.png" alt="" className="about-pic rounded-[32px] lg:w-[400px] w-[275px]"/>
        <div className="info flex flex-col justify-around gap-5 px-4 ">
            <div className="boxes flex justify-around flex-wrap gap-4">
                <AboutBox line1={"Experience"} line2={"2+ years"} line3={"Frontend Development"} />
                <AboutBox line1={"Education"} line2={"B.Sc. Bachelors Degree"} line3={"M.Sc. Masters Degree"} />
            </div>
            <div className="desc flex text-justify break-words max-w-[600px] font-medium text-lg mt-2.5 lg:mt-8 leading-6">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis
                    nihil esse debitis maxime facere minus
                    sint delectus
                    velit in eos quo officiis explicabo deleniti dignissimos.
                    Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
                </p>
            </div>
        </div>
    </div>
    {/* <ArrowBtn address={"#experience"}/> */}

</section>
  )
}
