import React from 'react'

export default function ExpSkill({title , level}) {
  return (
    <div className="skill flex items-start lg:items-start justify-center gap-2.5 lg:gap-4">
    <img src="./checkmark.png" alt="" className="w-8"/>
    <div className="skilltitle flex flex-col gap-1">
        <h2 className="text-black text-lg">{title}</h2>
        <h3 className="text-base text-gray-700">{level}</h3>
    </div>
</div>
  )
}
