import React from 'react'
import { Link } from 'react-router-dom';


export default function Hamburger({address , content}) {
  return (
    <Link className='cursor-pointer px-4 no-underline hover:text-gray-400 hover:border-b border-t-gray-400 border-solid transition-all' to={address} >{content}</Link>
  )
}
