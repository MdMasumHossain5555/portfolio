"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
   const isActive = (path) => pathname === path;


  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      const isDarkTheme = theme === 'dark';
      setIsDark(isDarkTheme);
      if (isDarkTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);
  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle('dark', nextIsDark);
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
  }

  const navItem = (
    <>
      <Link href="/"><li className={`${isActive('/') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600 `}>Home</li></Link>
      <Link href="/projects"><li className={`${isActive('/projects') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>Projects</li></Link>
      <Link href="/skills"><li className={`${isActive('/skills') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>Skills</li></Link>
      <Link href="/contact"><li className={`${isActive('/contact') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>Contact</li></Link>
      <Link href="/about"><li className={`${isActive('/about') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow_primary/40hover:border_primaryhover:text_primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>About</li></Link>
    </>
  );
  return (
    <div className='fixed top-0 left-0 w-[99%] py-2 bg-background/80 backdrop-blur-sm z-50'>
      <nav className=' justify-between items-center flex'>
        <h1 className='text-2xl font-bold ml-1 cursor-pointer transition-all duration-300 gradient-text' >Masum Hossain</h1>
        <ul className='hidden md:flex items-center'>
          {navItem}
          <button onClick={toggleTheme} className='text-2xl cursor-pointer text-primary p-2 rounded-md hover:bg-gray-100 transition-all duration-300 flex items-end justify-end' >{isDark ? <Sun className='text-amber-200 text-shadow-amber-100' /> : <Moon />}</button>
          <a href="/contact"><button className='btn-primary ml-3'>Hire Me</button></a>
        </ul>
      </nav>

      {/* mobaile nav */}
      <nav className=" absolute top-0 right-0 md:hidden">
        <button onClick={toggleTheme} className='absolute top-0 right-10 text-2xl cursor-pointer text-primary p-2 rounded-md hover:bg-gray-100 transition-all duration-300 flex items-end justify-end' >{isDark ? <Sun className='text-amber-200 text-shadow-amber-100' /> : <Moon />}</button>
        <div className="dropdown ">
          <div onClick={() => setIsOpen(!isOpen)} className='absolute top-0 right-2 text-2xl cursor-pointer text-primary p-2 rounded-md  transition-all duration-300 flex items-end justify-end' >{isOpen ? <X /> : <Menu />}</div>
          <ul className={`backdrop-blur-xl bg-background/60 rounded-md shadow-foreground/20 shadow-lg rounded-box z-1 mt-10 w-52 p-4 space-y-2
    absolute right-0 transition-transform duration-500 ease-out 
    ${isOpen ? 'translate-x-0 opacity-100 ' : 'translate-x-full opacity-0 pointer-events-none'} 
    md:hidden block`}>{navItem} <a href="/contact"><button className='btn-outline'>Hire Me</button></a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;