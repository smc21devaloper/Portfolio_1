import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return <header className="flex justify-between px-5 bg-primary sticky top-0 z-50" >
        <a className="font-bold text-primary text-2xl" href="/">Tamilarasi S</a>
        <nav className="hidden md:block">
        <ul className="flex text-white font-bold h-full">
            <li className="hover:bg-[#E3F0AF] hover:text-deepgreen px-4 rounded-t-lg transition-all py-2"><a href="#hero">Home</a></li>
            <li className="hover:bg-[#E3F0AF] hover:text-deepgreen px-4 rounded-t-lg transition-all py-2"><a href="#about">About</a></li>
            <li className="hover:bg-[#E3F0AF] hover:text-deepgreen px-4 rounded-t-lg transition-all py-2"><a href="#projects">Projects</a></li>
            <li className="hover:bg-[#E3F0AF] hover:text-deepgreen px-4 rounded-t-lg transition-all py-2"><a href="#resume">Resume</a></li>
            <li className="hover:bg-[#E3F0AF] hover:text-deepgreen px-4 rounded-t-lg transition-all py-2"><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
        <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-deepgreen mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-8'/></button>
    </header>
}