import React from 'react'

export default function AboutBox({line1 , line2 , line3}) {
  return (
<div className="box flex flex-col justify-center items-center gap-1 p-9 lg:p-10 rounded-[32px] border border-solid border-gray-400">
    <img className="w-8" src="./experience.png" alt=""/>
    <h1 className="text-lg text-gray-500">{line1}</h1>
    <h2 className="text-base font-semibold">{line2}</h2>
    <h2 className="text-base font-semibold">{line3}</h2>
</div>
  )
}
