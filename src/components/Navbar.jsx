import React from 'react';
import { NavLink } from 'react-router-dom';
import ecoLogo from '../assets/eco-logo.png';
import hamburger from '../assets/hamburger.png';
import search from '../assets/search.png';

const Navbar = () => {
  return (
    <header className='p-3 bg-slate-200'>
        <nav className='flex flex-row justify-between items-center'>
            <div>
                <img 
                    src={ecoLogo}
                    alt='eco-logo'
                    className='w-[64px] md:w-[78px]'
                />
            </div>
            <div className='hidden md:flex'>
                <ul className='flex gap-4'>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                    <NavLink to={'/about'}>
                        About Us
                    </NavLink>
                    <NavLink to={'/properties'}>
                        Properties
                    </NavLink>
                    <NavLink to={'/pricing'}>
                        Pricing
                    </NavLink>
                    <NavLink to={'/blog'}>
                        Blog
                    </NavLink>
                </ul>
                <button>
                    Schedule a consultation
                </button>
            </div>
            <div className='flex items-center gap-5 md:hidden'>
                <button className='flex justify-center items-center rounded-md h-[38px] w-[38px] border border-[#D4D4D8]'>
                    <img 
                        src={hamburger}
                        alt='hamburger-icon'
                    />
                </button>
                <button className='flex justify-center items-center rounded-md h-[38px] w-[38px] border border-[#D4D4D8]'>
                    <img 
                        src={search}
                        alt='search-icon'
                    />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar