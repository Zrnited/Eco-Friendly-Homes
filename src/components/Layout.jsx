import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen relative'>
        <Navbar />
        <div className='grow'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout