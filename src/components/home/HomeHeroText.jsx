import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className=' font-[text1] text-white pt-3.5 text-center'>
      <div className='text-[9vw] leading-[8-vw] flex items-center justify-center'>
        BUILT FOR THE
      </div>
      <div className='text-[10vw] leading-[8-vw] flex items-center justify-center'>
        FUTURE
        <div className=' h-[8vw] w-[17vw] rounded-full overflow-hidden  '>
          <Video  />
        </div>
        NO ONE
      </div>

      <div className='text-[10vw] leading-[8-vw]'>
        SEES
      </div>
    </div>
  )
}

export default HomeHeroText