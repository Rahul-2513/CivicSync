import React from 'react'
import home from '../assets/home.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' flex h-screen'>
        <div className="w-1/2 p-8">

  <h3 className="text-sm font-medium bg-cyan-500/10 text-cyan-800 px-4 py-2 rounded-full border border-blue-500/20 inline-block">
    Smart Civic Governance Platform
  </h3>      

  <h1 className="text-5xl font-bold mt-2 leading-tight">
    Smart Civic Issue 
    <span className="text-cyan-800"> Reporting </span> 
    with AI-Driven Resolution Tracking
  </h1>

  <p className="text-gray-400 mt-5 text-lg leading-relaxed">
    Empowering citizens and authorities through intelligent complaint 
    management, real-time tracking, and transparent resolution workflows.
  </p>
           
  <div className="flex gap-4 mt-8">

    <Link to="/report-issue">
      <button className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 cursor-pointer rounded-lg font-semibold transition shadow-lg shadow-cyan-500/20">
        Report an Issue
      </button>
    </Link>

    <Link to="/dashboard">
      <button className="border cursor-pointer border-slate-600 hover:border-cyan-500 hover:text-cyan-700 px-6 py-3 rounded-lg font-semibold transition">
        View Dashboard
      </button>
    </Link>

  </div>

</div>
        <div className=' w-1/2 p-5'>
        <img className=' mt-13' src={home} alt="Home" />
        </div>

    </div>
  )
}

export default Hero