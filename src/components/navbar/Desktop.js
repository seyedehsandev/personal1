import React from 'react'
import { Link } from 'react-router-dom';


export default function Desktop({address , content}) {
  return (
    <Link className='cursor-pointer py-4 no-underline hover:text-gray-400 hover:border-b border-t-gray-400 border-solid transition-all' to={address} >{content}</Link>
  )
}
