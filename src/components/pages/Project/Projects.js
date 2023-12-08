import React from 'react'
import Regp from './Regp'
import Boldp from './BoldP'
import ArrowBtn from '../ArrowBtn'

export default function Projects() {
  return (
    <section id="project" class="projects h-fit  flex flex-col items-center justify-center gap-4 " >
    <h2 class="text-base font-light text-gray-400">Browse My Recent</h2>
    <h1 class="text-5xl font-bold">Projects</h1>
    <div class="project-boxs mt-4 flex items-start justify-center flex-wrap gap-x-12 gap-y-9">
      
        <Regp title={"Weather Project"} img="./project-1.png" live={"https://weather-woad-sigma.vercel.app/"} git={"https://github.com/seyedehsandev/weather"}/>
        <Regp title={"Ecommerce Project"} img="./project-2.png" live={"https://ecommerce-2-fawn.vercel.app/"} git={"https://github.com/seyedehsandev/ecommerce-2"}/>
        <Regp title={"Personal portfolio"} img="./project-3.png" live={"https://personal-webpage-eta.vercel.app/"} git={"https://github.com/seyedehsandev/personal-webpage"}/>


        {/* <!-- -------  --> */}
        <Boldp title={"ToDo App Project"} img="./project-3.png" live={""} git={"https://github.com/seyedehsandev/todolist1"}/>
        <Boldp title={"Personal portfolio(React)"} img="./project-2.png" live={"https://personal1-alpha.vercel.app"} git={"https://github.com/seyedehsandev/personal1"}/>

    </div>
    {/* <ArrowBtn address={"#contact"}/> */}
</section>
    )
}
