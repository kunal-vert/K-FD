import React from 'react'
import { Link, Links } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[text-1] flex justify-center items-center gap-6  text-white'>
      <Link className='text-[7vw] border-4 border-white rounded-full uppercase leading-[6vw] px-9 pt-1.5 '>
        deploy
      </Link>
      <Link className='text-[7vw] border-4 border-white rounded-full px-9 leading-[6vw] uppercase pt-1.5 '>
        Agence
      </Link>
    </div>
  )
}

export default HomeBottomText
