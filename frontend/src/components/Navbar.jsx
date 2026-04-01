import React, { useState } from "react";
import logo from "../assets/logo.png";

import { useLocation } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-6 py-3 text-black text-sm bg-white">

        
       {/* Logo */}
        <a href="/" className="flex items-center ">
  
       <img 
        className="h-14 w-14 object-contain"
        src={logo} 
        alt="CivicSync Logo" 
    />

    <p className="text-3xl font-semibold text-black">
        Civic<span className="text-blue-700">Sync</span>
    </p>

    </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className={`relative overflow-hidden h-6 group text-black text-base transition-all underline-offset-4 decoration-2 ${isActive("/") ? "underline font-bold" : "font-normal"}`}>
            <span className="block group-hover:-translate-y-full transition duration-300 ">
              Home 
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition duration-300">
              Home 
            </span>
          </a>

          <a href="/report-issue" className={`relative overflow-hidden h-6 group text-black text-base transition-all underline-offset-4 decoration-2 ${isActive("/report-issue") ? "underline font-bold" : "font-normal"}`}>
            <span className="block group-hover:-translate-y-full transition duration-300">
              Report Issue
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition duration-300">
              Report Issue
            </span>
          </a>

          <a href="/track-issue" className={`relative overflow-hidden h-6 group text-black text-base transition-all underline-offset-4 decoration-2 ${isActive("/track-issue") ? "underline font-bold" : "font-normal"}`}>
            <span className="block group-hover:-translate-y-full transition duration-300">
              Track Issue
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition duration-300">
              Track Issue
            </span>
          </a>

          <a href="/dashboard" className={`relative overflow-hidden h-6 group text-black text-base transition-all underline-offset-4 decoration-2 ${isActive("/dashboard") ? "underline font-bold" : "font-normal"}`}>
            <span className="block group-hover:-translate-y-full transition duration-300">
              Dashboard
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition duration-300">
              Dashboard
            </span>
          </a>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full transition">
            Contact
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute mt-2 mx-4 w-[calc(100%-2rem)] bg-black border border-slate-700 rounded-2xl flex flex-col items-center gap-4 py-6 text-white">

          <a href="/" className={`hover:text-indigo-400 ${isActive("/") ? "font-bold" : "font-normal"}`}>
            Home
          </a>

          <a href="/report-issue" className={`hover:text-indigo-400 ${isActive("/report-issue") ? "font-bold" : "font-normal"}`}>
            Report Issue
          </a>

          <a href="/track-issue" className={`hover:text-indigo-400 ${isActive("/track-issue") ? "font-bold" : "font-normal"}`}>
            Track Issue
          </a>

          <a href="/dashboard" className={`hover:text-indigo-400 ${isActive("/dashboard") ? "font-bold" : "font-normal"}`}>
            Dashboard
          </a>

          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full transition">
            Contact
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition">
            Get Started
          </button>

        </div>
      )}
    </div>
  );
};

export default Navbar;