import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchBar from './SearchBar'

const Layout = ({ children }) => {

  const [searchToggle, setSearchToggle] = useState(false);
  // console.log(searchToggle)

  return (
    <div className='flex flex-col h-screen relative'>
        <Navbar searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
        <SearchBar searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
        <div className='grow'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout