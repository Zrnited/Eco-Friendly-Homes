import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ecoLogo from '../assets/eco-logo.png';
import hamburger from '../assets/hamburger.png';
import search from '../assets/search.png';

const Navbar = () => {

    const [topbar, setTopbar] = useState(false);

    const flipTopbar = ()=> {
        setTopbar(!topbar);
    } 

  return (
    <header className={!topbar ? 'fixed left-0 right-0 top-0 z-20 px-3 py-4 bg-white border-b h-[71px] border-b-[#6E8C03] sm:h-auto overflow-hidden' : 'fixed left-0 right-0 top-0 z-20 px-3 py-4 bg-white border-b h-[198px] transition-all ease-in-out delay-100 border-b-[#6E8C03] overflow-hidden sm:h-auto'}>
        <nav className='flex flex-row justify-between items-center lg:justify-around'>
            <div>
                <img 
                    src={ecoLogo}
                    alt='eco-logo'
                    className='w-[64px] md:w-[78px]'
                />
            </div>
            <div className='hidden sm:flex gap-5 items-center'>
                <ul className='flex gap-3 text-sm md:text-base lg:gap-5'>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/'}>
                        Home
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/about'}>
                        About Us
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/properties'}>
                        Properties
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/pricing'}>
                        Pricing
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/blog'}>
                        Blog
                    </NavLink>
                </ul>
                <button className='text-sm px-2 py-2 bg-[#6E8C03] text-white rounded-md hover:opacity-90 transition ease-in-out delay-100 md:text-base md:px-4'>
                    Schedule a consultation
                </button>
            </div>
            <div className='flex items-center gap-5 sm:hidden'>
                <button onClick={flipTopbar} className='flex justify-center items-center rounded-md h-[38px] w-[38px] border border-[#D4D4D8]'>
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
        {/* Topbar */}
        <aside className='flex mt-4 sm:hidden'>
            <ul className='ml-2 flex flex-col gap-1 text-sm'>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/'}>
                        Home
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/about'}>
                        About Us
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/properties'}>
                        Properties
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/pricing'}>
                        Pricing
                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-red-500' : 'text-black hover:text-red-500 transition ease-in-out delay-100'} to={'/blog'}>
                        Blog
                    </NavLink>
            </ul>
        </aside>
    </header>
  )
}

export default Navbar