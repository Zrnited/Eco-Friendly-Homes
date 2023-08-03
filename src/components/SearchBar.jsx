import React from 'react';
import location from '../assets/location.png';
import dollarCircle from '../assets/dollar-circle.png';
import house from '../assets/house.png';
import { IoMdClose } from 'react-icons/io'

const SearchBar = ({ searchToggle, setSearchToggle }) => {
  return (
    <div className={searchToggle ? 'fixed flex flex-col top-0 right-0 left-0 bg-white shadow-sm transition-all ease-in-out delay-100 p-3 z-30 sm:hidden' : 'fixed -top-full right-0 left-0 bg-pink-500 transition-all ease-in-out delay-100'}>
        <div className='flex flex-row justify-between'>
            <h1 className='font-semibold tracking-wide mb-1'>
                Search by filter
            </h1>
            <button onClick={()=>setSearchToggle(!searchToggle)}>
                <IoMdClose color='red' size={20} />
            </button>
        </div>
        <hr className='mb-3' />
        <form className='flex flex-col gap-2'>
            <div className='flex flex-row items-center h-[40px]'>
                <label className='w-[40px] border border-slate-300 h-full rounded-l-lg flex justify-center items-center'>
                    <div className='h-[30px] flex justify-center items-center w-[30px] bg-[#FEEBE7] rounded-full'>
                        <img 
                            src={location}
                            alt='location-icon'
                            className='w-[17px]'
                        />
                    </div>
                </label>
                <div className='flex-1 h-full w-full'>
                    <input 
                        placeholder='Location'
                        type='text'
                        className='border rounded-r-lg h-full px-3 w-full focus:outline-none focus:shadow'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center h-[40px]'>
                <label className='w-[40px] border border-slate-300 h-full rounded-l-lg flex justify-center items-center'>
                    <div className='h-[30px] flex justify-center items-center w-[30px] bg-[#FEEBE7] rounded-full'>
                        <img 
                            src={house}
                            alt='location-icon'
                            className='w-[17px]'
                        />
                    </div>
                </label>
                <div className='flex-1 h-full w-full'>
                    <input 
                        placeholder='Property Type'
                        type='text'
                        className='border rounded-r-lg h-full px-3 w-full focus:outline-none focus:shadow'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center h-[40px]'>
                <label className='w-[40px] border border-slate-300 h-full rounded-l-lg flex justify-center items-center'>
                    <div className='h-[30px] flex justify-center items-center w-[30px] bg-[#FEEBE7] rounded-full'>
                        <img 
                            src={dollarCircle}
                            alt='location-icon'
                            className='w-[17px]'
                        />
                    </div>
                </label>
                <div className='flex-1 h-full w-full'>
                    <input 
                        placeholder='Budget'
                        type='text'
                        className='border rounded-r-lg h-full px-3 w-full focus:outline-none focus:shadow'
                    />
                </div>
            </div>
            <button className='px-2 py-2 text-center bg-[#6E8C03] text-white rounded-md hover:opacity-90 transition ease-in-out delay-100'>
                Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar