import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className=' font-[text-1] text-white pt-11 text-center'>
      <div className='text-[9vw] leading-[8vw] flex items-center justify-center'>
        BUILT FOR THE
      </div>
      <div className='text-[9vw] leading-[8vw] flex flex-wrap  items-center justify-center'>
        FUTURE
        <div className=' h-[9.7vw] w-[19vw] rounded-full  overflow-hidden shrink-0  '>
          <Video />
        </div>
        NO ONE
      </div>

      <div className='text-[9vw] leading-[8vw]'>
        SEES
      </div>
    </div>
  )
}

export default HomeHeroText