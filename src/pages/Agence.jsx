import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ImagesArray = [
  '/pic/pic-0.webp',
  '/pic/pic-1.png',
  '/pic/pic-2.png',
  '/pic/pic-3.png',
  '/pic/pic-4.png',
  '/pic/pic-5.png',
  '/pic/pic-6.png',
  '/pic/pic-7.png',
  '/pic/pic-8.webp'
];

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageref = useRef(null)

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 28%",
        end: "top -50%",
        pin: true,
        onUpdate: (e) => {
          let ImageIndex;
          if (e.progress < 1) {
            ImageIndex = Math.floor(e.progress * ImagesArray.length)
          }
          else {
            ImageIndex = ImagesArray.length - 1
          }
          imageref.current.src = ImagesArray[ImageIndex]
        }
      }
    })


  })




  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='w-[19vw] h-[27vw] rounded-2xl overflow-hidden absolute top-56 left-[30vw] '>
          <img ref={imageref} className='h-full object-cover w-full ' src={ImagesArray[0]} alt="" />
        </div>
        <div className='font-[font2] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center leading-[17vw]'>sparrow <br /> lite</h1>
          </div>
          <div className='pl-[50%] '>
            <p className='text-2xl text-white'>
              &nbsp;&nbsp; &nbsp;&nbsp;  We think in threats, patterns and consequences — not just features. A system built for defense and security has to earn trust before it earns adoption. If we ignore that, we can ship something that looks good in a demo, but not something that survives contact with the real world. We bring that discipline to every build.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'></div>
    </div>
  )
}

export default Agence