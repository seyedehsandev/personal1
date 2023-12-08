import React from 'react'

export default function ExpBox({children}) {
  return (
    <div className="experience-box lg:w-[450px] w-[340px] flex flex-col items-center gap-6 lg:gap-7 p-5 lg:p-6 rounded-[32px] border border-solid border-gray-300">
    <h2 className="boxtitle text-gray-400 text-2xl ">Frontend Development</h2>
    <div className="skills flex flex-wrap justify-center gap-6 lg:gap-12">
        {/* <!-- skill  --> */}
       {children}
    </div>

</div>
  )
}
