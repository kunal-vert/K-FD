import React, { useRef } from 'react'
import ImagesArray from '../../Assets/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageref = useRef(null)


 


  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='w-[15vw] h-[20vw] rounded-4xl overflow-hidden absolute top-56 left-[30vw] '>
          <img ref={imageref} className='h-full object-cover w-full ' src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='font-[font2] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center leading-[17vw]'>sparrow <br /> lite</h1>
          </div>
          <div className='pl-[50%] '>
            <p className='text-6xl'>
              &nbsp;&nbsp; &nbsp;&nbsp;  We think in threats, patterns and consequences — not just features. A system built for defense and security has to earn trust before it earns adoption. If we ignore that, we can ship something that looks good in a demo, but not something that survives contact with the real world. We bring that discipline to every build.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'></div>
    </div>
  )
}

export default Agence