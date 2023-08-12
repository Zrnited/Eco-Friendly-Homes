import React from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../components/Layout'

const ErrorPage = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        Oops! This page does not exist yet!
        <Link className='underline text-[#6E8C03]' to={'/'}>
            Go back
        </Link>
    </div>
  )
}

export default ErrorPage