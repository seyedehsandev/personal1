import React from 'react'

export default function Regp({img="./project-1.png" , title , git , live}) {
  return (
    <div class="project-box lg:w-[450px] w-[340px] flex flex-col items-center gap-6 lg:gap-7 p-5 lg:p-6 rounded-[32px] border border-solid border-gray-300">
    <img src={img} alt="" class="rounded-[32px]"/>
    <h2 class="boxtitle text-black text-xl font-semibold">{title}</h2>
    <div class="btn flex gap-2">
        <p class="cv font-semibold transition-all p-3 w-36  rounded-[32px] text-sm border border-gray-400 border-solid text-center bg-gray-white hover:bg-black text-black hover:text-white cursor-pointer" ><a href={git}>Github</a></p>
        <p class="cv font-semibold transition-all p-3 w-36  rounded-[32px] text-sm border border-gray-400 border-solid text-center bg-gray-white hover:bg-black text-black hover:text-white cursor-pointer" ><a href={live}>Live Demo</a></p>

    </div>
</div>
  )
}

