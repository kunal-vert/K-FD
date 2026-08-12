import React from 'react'
import { Link, Links } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[text-1] flex justify-center items-center gap-6  text-white'>
     <div className=' border-4 border-white rounded-full uppercase leading-[2vw] px-9 pt-8 hover:border-green-300 hover:text-green-400'>
       <Link className='text-[7vw] mt-1 ' to ="/Projects">
        deploy
      </Link>
     </div>
     <div className=' border-4 border-white rounded-full px-9 leading-[2vw] uppercase pt-8 hover:border-green-300 hover:text-green-400'>
 <Link className=' text-[7vw] mt-1' to="/Agence">
        Agence
      </Link>
     </div>
     
    </div>
  )
}

export default HomeBottomText
