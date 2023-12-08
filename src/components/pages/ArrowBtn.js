import React from 'react'

export default function ArrowBtn({address }) {
  return (
    <a href={address} className="hidden lg:flex no-underline cursor-pointer absolute bottom-0 right-5"><img src="./arrow.png" alt="" className="w-8"/></a>
  )
}
