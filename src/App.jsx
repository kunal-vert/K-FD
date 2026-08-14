
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  useGSAP(function () {
    gsap.from(".piper",{
      height: 0,
      stagger:{ 
        amount: -0.5
      }
    })
  })

  return (
    <div className=''>
      <div className='  h-screen w-full fixed z-20 top-0 flex '>
        <div className=' piper h-full w-1/5 bg-black '></div>
        <div className=' piper h-full w-1/5 bg-black '></div>
        <div className=' piper h-full w-1/5 bg-black '></div>
        <div className=' piper h-full w-1/5 bg-black '></div>
        <div className=' piper h-full w-1/5 bg-black '></div>
        <div className=' piper h-full w-1/5 bg-black '></div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App